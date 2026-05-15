'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Heart } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push('/' + href);
      }
    }
  };

  return (
    <footer className="bg-aria-teal pt-24 pb-32 md:pb-24 relative overflow-hidden text-white">
      {/* Urgency Banner */}
      <div className="bg-aria-gold text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans font-bold uppercase tracking-widest text-[10px]">
            Bespoke Care - Priority Consultations Available for New Patients
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex flex-col items-center md:items-start group mb-8">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center transform group-hover:scale-105 transition-all shadow-lg ring-4 ring-aria-gold/10 mb-4">
                <Heart className="w-8 h-8 text-aria-gold" />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-serif font-bold leading-none uppercase tracking-widest">Aria</span>
                <span className="text-[10px] font-sans font-medium text-aria-gold uppercase tracking-[0.4em] mt-2">Fertility Clinic</span>
              </div>
            </Link>
            <p className="text-aria-beige/80 font-sans font-light text-sm leading-relaxed mb-6 max-w-xs">
              World-class expertise meets compassionate care in the heart of London. Supporting you every step of the way.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 hover:bg-aria-gold hover:border-aria-gold rounded-full flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 hover:bg-aria-gold hover:border-aria-gold rounded-full flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-aria-gold mb-8">Navigation</h3>
            <ul className="space-y-4 text-center md:text-left">
              <li>
                <button
                  onClick={() => handleNavClick('#treatments')}
                  className="text-aria-beige/70 hover:text-white font-sans text-sm tracking-wide transition-colors"
                >
                  Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#testimonials')}
                  className="text-aria-beige/70 hover:text-white font-sans text-sm tracking-wide transition-colors"
                >
                  Patient Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#faqs')}
                  className="text-aria-beige/70 hover:text-white font-sans text-sm tracking-wide transition-colors"
                >
                  Support & FAQs
                </button>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-aria-beige/70 hover:text-white font-sans text-sm tracking-wide transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-aria-gold mb-8">Location</h3>
            <ul className="space-y-6">
              <li className="flex flex-col items-center md:items-start space-y-2">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-aria-gold" />
                  <span className="font-sans font-semibold text-[10px] uppercase tracking-widest text-aria-gold">Address</span>
                </div>
                <span className="text-aria-beige/70 font-sans text-sm leading-relaxed text-center md:text-left">
                  Welbeck Way, Marylebone
                  <br />
                  London, W1G 9YF
                </span>
              </li>
              <li className="flex flex-col items-center md:items-start space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-aria-gold" />
                  <span className="font-sans font-semibold text-[10px] uppercase tracking-widest text-aria-gold">Enquiries</span>
                </div>
                <a
                  href="tel:+442032636025"
                  className="text-aria-beige/70 hover:text-white font-sans text-sm transition-colors"
                >
                  +44 (0) 203 263 6025
                </a>
              </li>
              <li className="flex flex-col items-center md:items-start space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-aria-gold" />
                  <span className="font-sans font-semibold text-[10px] uppercase tracking-widest text-aria-gold">Email</span>
                </div>
                <a
                  href="mailto:admin@ariafertility.co.uk"
                  className="text-aria-beige/70 hover:text-white font-sans text-sm transition-colors"
                >
                  admin@ariafertility.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[10px] font-sans font-light tracking-widest text-aria-beige/40">
              © {new Date().getFullYear()} ARIA FERTILITY CLINIC. ALL RIGHTS RESERVED.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-[10px] font-sans font-bold tracking-[0.2em] text-aria-gold/60 uppercase">
              <span>HFEA Licensed</span>
              <span className="hidden md:inline text-white/10">|</span>
              <span>ISO 9001 Certified</span>
              <span className="hidden md:inline text-white/10">|</span>
              <span>Marylebone Health District</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
