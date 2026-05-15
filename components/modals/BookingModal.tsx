'use client';

import { useState } from 'react';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { treatments } from '@/lib/data/treatments';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultTreatment,
}: BookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: defaultTreatment || '',
  });

  if (!isOpen) return null;

  const isEmailValid = formData.email.includes('@');
  const isFormValid = formData.name.trim() !== '' && isEmailValid && formData.phone.trim() !== '' && formData.treatment !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '', treatment: defaultTreatment || '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-aria-teal/40 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-white rounded-[3.5rem] shadow-[0_32px_64px_-12px_rgba(114,169,181,0.3)] animate-in fade-in zoom-in-95 duration-500 border border-white/20 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-8 right-8 p-3 hover:bg-aria-teal/5 rounded-full transition-all duration-300 group z-10"
        >
          <X className="w-5 h-5 text-aria-dark/20 group-hover:text-aria-teal" />
        </button>

        {!isSubmitted ? (
          <div className="p-10 md:p-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-aria-teal mb-4 tracking-tight">
                Bespoke Consultation
              </h2>
              <p className="text-aria-dark/60 font-sans font-light text-base max-w-sm mx-auto leading-relaxed">
                Start your journey with world-class expertise in the heart of London.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <Label htmlFor="name" className="text-[10px] font-sans font-bold uppercase tracking-widest text-aria-dark/50 ml-4 mb-2 block">Full Name</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Name"
                  className="rounded-full px-8 py-6 border-aria-teal/10 focus:ring-4 focus:ring-aria-teal/5 transition-all font-sans font-light"
                />
              </div>

              <div>
                <Label htmlFor="email" className={`text-[10px] font-sans font-bold uppercase tracking-widest ml-4 mb-2 block ${!isEmailValid && formData.email !== '' ? 'text-red-400' : 'text-aria-dark/50'}`}>
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="email@example.com"
                  className={`rounded-full px-8 py-6 transition-all font-sans font-light border-aria-teal/10 ${!isEmailValid && formData.email !== ''
                    ? 'border-red-300 focus:ring-red-50'
                    : 'focus:ring-4 focus:ring-aria-teal/5'
                    }`}
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-[10px] font-sans font-bold uppercase tracking-widest text-aria-dark/50 ml-4 mb-2 block">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+44"
                  className="rounded-full px-8 py-6 border-aria-teal/10 focus:ring-4 focus:ring-aria-teal/5 transition-all font-sans font-light"
                />
              </div>

              <div>
                <Label htmlFor="treatment" className="text-[10px] font-sans font-bold uppercase tracking-widest text-aria-dark/50 ml-4 mb-2 block">Pathway of Interest</Label>
                <Select
                  value={formData.treatment}
                  onValueChange={(value) =>
                    setFormData({ ...formData, treatment: value })
                  }
                >
                  <SelectTrigger className="rounded-full px-8 py-6 border-aria-teal/10 focus:ring-4 focus:ring-aria-teal/5 transition-all font-sans font-light">
                    <SelectValue placeholder="Select a pathway" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-aria-teal/5 shadow-2xl">
                    {treatments.map((treatment) => (
                      <SelectItem key={treatment.id} value={treatment.slug} className="font-sans font-light py-3 px-6">
                        {treatment.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <p className="text-[11px] font-sans text-aria-dark/40 text-center italic leading-relaxed">
                Your consultation covers clinical history, diagnostics, and next steps. We will contact you within 24 hours to confirm your private booking.
              </p>

              <Button
                type="submit"
                className={`w-full py-8 rounded-full text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-500 ${isFormValid
                  ? 'bg-aria-teal hover:bg-aria-gold text-white shadow-xl shadow-aria-teal/20 scale-[1.02]'
                  : 'bg-aria-teal/20 cursor-not-allowed text-white/50'
                  }`}
              >
                Request Consultation
              </Button>

              <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-aria-dark/20 text-center flex items-center justify-center gap-2">
                <ShieldCheck className="w-3 h-3" />
                Discrete London Clinic Sanctuary
              </p>
            </form>
          </div>
        ) : (
          <div className="p-16 md:p-24 text-center">
            <div className="w-20 h-20 bg-aria-teal/5 rounded-full flex items-center justify-center mx-auto mb-10">
              <CheckCircle className="w-10 h-10 text-aria-gold" />
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-medium text-aria-teal mb-6">
              Your Journey Begins
            </h2>

            <p className="text-lg font-sans font-light text-aria-dark/70 mb-12 max-w-sm mx-auto leading-relaxed">
              Thank you, {formData.name}. Our Care Coordinator will contact you within 24 hours to finalize your private consultation in Marylebone.
            </p>

            <div className="bg-aria-beige/20 border border-aria-teal/5 rounded-[2rem] p-8 mb-10">
              <p className="text-sm text-aria-teal font-sans font-medium leading-relaxed italic">
                &ldquo;Check your inbox for our Bespoke Fertility Guide, which details our Marylebone clinical approach and financing options.&rdquo;
              </p>
            </div>

            <Button
              onClick={handleClose}
              className="bg-aria-teal hover:bg-aria-gold text-white px-12 py-7 rounded-full font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-xl"
            >
              Return to Site
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
