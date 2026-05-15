'use client';

import { motion } from 'framer-motion';
import { Check, FileText, PhoneCall, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingSectionProps {
  onBookingClick: () => void;
}

const steps = [
  {
    icon: PhoneCall,
    title: 'Initial Consultation',
    description:
      'Your journey begins with a face-to-face, telephone, or video call consultation with one of our fertility experts. We review your history and any previous investigations.',
  },
  {
    icon: ClipboardList,
    title: 'Your Costed Treatment Plan',
    description:
      'Once a treatment pathway is agreed, we provide a fully itemised, transparent costed treatment plan — no hidden fees, no surprises. Medication costs vary by individual and are always included in the estimate.',
  },
  {
    icon: FileText,
    title: 'Full Price Guide Available',
    description:
      'Our detailed price guide is available to download or review during consultation. We are always happy to walk you through every line item so you feel completely informed.',
  },
];

const commitments = [
  'No hidden or unnecessary costs',
  'Fully itemised costed treatment plan before you begin',
  'Prices confirmed in writing ahead of treatment',
  'Finance options available — ask your consultant',
  'Virtual consultations available for convenience',
  'HFEA-compliant transparent pricing standards',
];

export default function PricingSection({ onBookingClick }: PricingSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-aria-teal/5 text-aria-teal font-sans font-bold text-[9px] uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
            Honest & Transparent
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-aria-teal mb-6 tracking-tight">
            A Guide to Our Pricing
          </h2>
          <p className="text-xl font-sans text-aria-dark/60 max-w-2xl mx-auto leading-relaxed font-light">
            We know that fertility treatment is a significant emotional and financial investment. Every patient receives a personalised, fully costed treatment plan with no hidden fees.
          </p>
        </motion.div>

        {/* 3-step process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-aria-beige/20 rounded-[2.5rem] p-10"
            >
              <div className="w-12 h-12 bg-aria-teal/10 rounded-full flex items-center justify-center mb-6">
                <step.icon className="w-5 h-5 text-aria-teal" />
              </div>
              <div className="text-[9px] font-sans font-bold uppercase tracking-[0.25em] text-aria-gold mb-3">
                Step {index + 1}
              </div>
              <h3 className="text-xl font-serif font-medium text-aria-teal mb-4">
                {step.title}
              </h3>
              <p className="text-aria-dark/60 font-sans font-light text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Commitments + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-aria-teal rounded-[3rem] p-12 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-serif font-medium text-white mb-8 tracking-tight">
              Our Pricing Commitments
            </h3>
            <ul className="space-y-4">
              {commitments.map((item) => (
                <li key={item} className="flex items-start space-x-4">
                  <div className="w-5 h-5 rounded-full bg-aria-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-aria-gold" />
                  </div>
                  <span className="text-white/70 font-sans font-light text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-6">
            <p className="text-white/50 font-sans font-light text-sm leading-relaxed">
              Pricing is discussed openly during your consultation and confirmed in a written costed treatment plan before any treatment begins. Call us on{' '}
              <a href="tel:02032636025" className="text-aria-gold hover:underline">
                0203 263 6025
              </a>{' '}
              or book online to start the conversation.
            </p>
            <Button
              onClick={onBookingClick}
              size="lg"
              className="bg-white text-aria-teal hover:bg-aria-gold hover:text-white rounded-full px-10 py-8 text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl border-none"
            >
              Book a Consultation
            </Button>
            <p className="text-white/25 font-sans font-light text-[10px] italic">
              Our team will respond within 24 hours.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-aria-dark/30">
            HFEA Licensed Clinic · Marylebone, London · Transparent, Honest Pricing
          </p>
        </motion.div>
      </div>
    </section>
  );
}
