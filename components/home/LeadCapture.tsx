'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface LeadCaptureProps {
  onBookingClick: () => void;
}

export default function LeadCapture({ onBookingClick }: LeadCaptureProps) {
  return (
    <section className="py-24 bg-aria-teal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-8">
            Start Your Fertility Conversation
          </h2>
          <p className="text-xl font-sans text-aria-beige/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Supporting you every step of the way. We are here to help you navigate your journey with world-class expertise and personalized care in our private Marylebone clinic.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 font-sans">
            <div className="flex items-center space-x-3 text-white/90">
              <Heart className="w-5 h-5 text-aria-gold fill-aria-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Expert Consultation</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <Heart className="w-5 h-5 text-aria-gold fill-aria-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Personalized Pathways</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <Heart className="w-5 h-5 text-aria-gold fill-aria-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Private Clinic Sanctuary</span>
            </div>
          </div>

          <Button
            onClick={onBookingClick}
            size="lg"
            className="bg-white hover:bg-aria-gold text-aria-teal hover:text-white text-xs font-sans font-bold uppercase tracking-[0.2em] px-12 py-8 rounded-full shadow-2xl transition-all duration-500"
          >
            Book Your Private Consultation
          </Button>

          <p className="text-[11px] font-sans font-light text-white/40 mt-10 italic max-w-lg mx-auto leading-relaxed">
            A fertility consultation covers your history, tests, treatment options, costs, and next steps.
          </p>

          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-white/20 mt-12">
            Confidential • World-Class Expertise • Compassionate Care
          </p>
        </motion.div>
      </div>
    </section>
  );
}
