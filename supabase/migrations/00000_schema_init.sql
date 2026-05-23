-- Aria Fertility Clinic - Supabase Initial Schema Migration
-- Run this in your Supabase SQL Editor

-- 1. Create Enums
CREATE TYPE user_role AS ENUM ('user', 'client', 'cancelled_patient', 'admin');
CREATE TYPE user_status AS ENUM ('active', 'rejected', 'banned');
CREATE TYPE session_status AS ENUM ('active', 'cancelled');
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled', 'attended', 'no_show');

-- 2. Profiles Table
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    role user_role DEFAULT 'user'::user_role,
    status user_status DEFAULT 'active'::user_status,
    rejection_reason TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 3. Session Types Table
CREATE TABLE session_types (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    duration_minutes INTEGER NOT NULL,
    category TEXT NOT NULL,
    location TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 4. Sessions Table
CREATE TABLE sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_type_id UUID REFERENCES session_types(id) ON DELETE RESTRICT NOT NULL,
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL,
    max_slots INTEGER NOT NULL,
    location TEXT NOT NULL,
    status session_status DEFAULT 'active'::session_status NOT NULL,
    cancel_reason TEXT,
    cancelled_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 5. Bookings Table
CREATE TABLE bookings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id UUID REFERENCES sessions(id) ON DELETE RESTRICT NOT NULL,
    client_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
    status booking_status DEFAULT 'pending'::booking_status NOT NULL,
    cancel_reason TEXT,
    cancelled_by UUID REFERENCES profiles(id),
    client_notes TEXT,
    admin_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 6. Availability Rules & Exceptions
CREATE TABLE availability_rules (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    clinician_name TEXT NOT NULL,
    day_of_week INTEGER NOT NULL CHECK (day_of_week BETWEEN 0 AND 6),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    effective_from DATE NOT NULL,
    effective_to DATE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE availability_exceptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    date DATE NOT NULL,
    start_time TIME,
    end_time TIME,
    reason TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 7. Audit History Tables
CREATE TABLE login_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
    ip_address TEXT,
    user_agent TEXT,
    login_timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE session_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id UUID NOT NULL,
    action TEXT NOT NULL,
    changed_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    previous_state JSONB,
    new_state JSONB,
    timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE booking_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    booking_id UUID NOT NULL,
    action TEXT NOT NULL,
    changed_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    previous_status booking_status,
    new_status booking_status NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 8. Enable Row-Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE availability_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE availability_exceptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE login_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE booking_history ENABLE ROW LEVEL SECURITY;

-- 9. Basic RLS Policies (Admins have full access, clients have restricted access)

-- Profiles: Admins can do all, users can select/update their own active profile
CREATE POLICY "Admins full access to profiles" ON profiles FOR ALL USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');
CREATE POLICY "Users can read own profile" ON profiles FOR SELECT USING (id = auth.uid() AND status = 'active');
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (id = auth.uid() AND status = 'active');

-- Bookings: Admins can do all, clients can select/insert their own
CREATE POLICY "Admins full access to bookings" ON bookings FOR ALL USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');
CREATE POLICY "Clients can view own bookings" ON bookings FOR SELECT USING (client_id = auth.uid() AND (SELECT status FROM profiles WHERE id = auth.uid()) = 'active');
CREATE POLICY "Clients can create bookings" ON bookings FOR INSERT WITH CHECK (client_id = auth.uid() AND (SELECT status FROM profiles WHERE id = auth.uid()) = 'active');

-- Session Types & Sessions: Publicly readable, admin writable
CREATE POLICY "Public can view session types" ON session_types FOR SELECT USING (true);
CREATE POLICY "Admins can manage session types" ON session_types FOR ALL USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Public can view sessions" ON sessions FOR SELECT USING (true);
CREATE POLICY "Admins can manage sessions" ON sessions FOR ALL USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

-- 10. Database Triggers

-- Trigger 1: Handle User to Client Promotion
CREATE OR REPLACE FUNCTION handle_booking_role_changes()
RETURNS TRIGGER AS $$
BEGIN
    -- [1] PROMOTION FLOW (On insert of a booking)
    IF TG_OP = 'INSERT' THEN
        IF (SELECT role FROM profiles WHERE id = NEW.client_id) = 'user'::user_role THEN
            UPDATE profiles
            SET role = 'client'::user_role
            WHERE id = NEW.client_id;
        END IF;
    END IF;

    -- [2] DEMOTION FLOW (On update to cancelled)
    IF TG_OP = 'UPDATE' AND NEW.status = 'cancelled'::booking_status AND OLD.status <> 'cancelled'::booking_status THEN
        IF NOT EXISTS (
            SELECT 1 FROM bookings 
            WHERE client_id = NEW.client_id 
              AND id <> NEW.id 
              AND status IN ('pending'::booking_status, 'confirmed'::booking_status)
        ) THEN
            UPDATE profiles
            SET role = 'cancelled_patient'::user_role
            WHERE id = NEW.client_id AND role = 'client'::user_role;
        END IF;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER tr_booking_role_sync
AFTER INSERT OR UPDATE ON bookings
FOR EACH ROW
EXECUTE FUNCTION handle_booking_role_changes();

-- Trigger 2: Booking Audit Logging
CREATE OR REPLACE FUNCTION audit_booking_changes()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO booking_history (booking_id, action, changed_by, previous_status, new_status)
    VALUES (
        NEW.id,
        CASE WHEN TG_OP = 'INSERT' THEN 'REQUEST' ELSE 'STATUS_CHANGE' END,
        NEW.cancelled_by,
        CASE WHEN TG_OP = 'UPDATE' THEN OLD.status ELSE NULL END,
        NEW.status
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER tr_booking_audit
AFTER INSERT OR UPDATE ON bookings
FOR EACH ROW
EXECUTE FUNCTION audit_booking_changes();
