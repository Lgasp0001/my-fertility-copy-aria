'use client';

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileStickyCTAProps {
  onBookingClick: () => void;
}

export default function MobileStickyCTA({ onBookingClick }: MobileStickyCTAProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-aria-teal/5 shadow-[0_-20px_40px_rgba(114,169,181,0.1)]">
      <div className="flex flex-col p-6 pb-8">
        <p className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-aria-teal/40 text-center mb-4">
          Bespoke Consultations available this week
        </p>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="tel:+442032636025"
            className="flex items-center justify-center space-x-2 bg-white border border-aria-teal/10 text-aria-teal h-14 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest shadow-md active:scale-95 transition-all w-full"
          >
            <Phone className="w-4 h-4 text-aria-gold" />
            <span>Call</span>
          </a>
          <Button
            onClick={onBookingClick}
            className="bg-aria-teal hover:bg-aria-gold text-white h-14 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest shadow-xl shadow-aria-teal/10 active:scale-95 transition-all w-full border-none"
          >
            Book Online
          </Button>
        </div>
      </div>
    </div>
  );
}
