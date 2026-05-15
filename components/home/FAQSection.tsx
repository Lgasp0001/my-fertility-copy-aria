'use client';

import { motion } from 'framer-motion';
import { faqs } from '@/lib/data/faqs';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

interface FAQSectionProps {
  onBookingClick: () => void;
}

export default function FAQSection({ onBookingClick }: FAQSectionProps) {
  return (
    <section id="faqs" className="py-24 bg-aria-beige/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-aria-teal mb-6 tracking-tight">
            Support & FAQs
          </h2>
          <p className="text-xl font-sans text-aria-dark max-w-2xl mx-auto leading-relaxed font-light">
            We are here to support you. Find answers to common questions about starting your journey in Marylebone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-[2rem] shadow-xl shadow-aria-teal/5 border-none px-10 py-2 overflow-hidden"
              >
                <AccordionTrigger className="text-left hover:text-aria-gold no-underline py-6">
                  <span className="font-serif font-medium text-xl text-aria-teal">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-aria-dark/70 font-sans font-light leading-relaxed text-base pb-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-aria-dark/50 font-sans font-light text-sm mb-10">
            Still have questions? Our specialist team is here to help.
          </p>
          <div className="flex flex-col items-center gap-8">
            <p className="text-[11px] font-sans font-light italic text-aria-dark/40 max-w-md mx-auto leading-relaxed">
              A fertility consultation covers your history, tests, treatment options, costs, and next steps.
            </p>
            <Button
              onClick={onBookingClick}
              size="lg"
              className="bg-aria-teal hover:bg-aria-gold text-white px-12 py-8 rounded-full text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl"
            >
              Start Your Journey
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
