'use client';

import { motion } from 'framer-motion';
import { Check, CreditCard } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PricingSectionProps {
  onBookingClick: () => void;
}

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
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-aria-teal mb-6 tracking-tight">
            Investing in Your Future
          </h2>
          <p className="text-xl font-sans text-aria-dark max-w-3xl mx-auto leading-relaxed font-light">
            World-class fertility care should be transparent. We offer flexible
            bespoke pathways to make your dream of building a family a reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Preservation Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.98 }}
            className="active-reveal"
          >
            <Card className="h-full border-aria-teal/5 shadow-2xl shadow-aria-teal/5 rounded-[3rem] overflow-hidden bg-white hover:border-aria-gold/20 transition-all duration-500 cursor-pointer">
              <CardHeader className="p-10 pb-6">
                <div className="w-12 h-12 bg-aria-teal/5 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-aria-gold" />
                </div>
                <CardTitle className="text-3xl font-serif font-medium text-aria-teal">
                  Bespoke Preservation
                </CardTitle>
                <CardDescription className="text-sm font-sans font-light mt-2 uppercase tracking-widest text-aria-dark/50">
                  Empower your future self
                </CardDescription>
              </CardHeader>
              <CardContent className="px-10">
                <div className="mb-8">
                  <span className="text-6xl font-serif font-bold text-aria-teal">£45</span>
                  <span className="text-aria-dark/40 font-sans font-light text-lg">/month</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-aria-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-aria-dark/70 font-sans font-light text-sm">
                      Personalized egg freezing roadmap
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-aria-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-aria-dark/70 font-sans font-light text-sm">
                      Comprehensive clinical screening
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-aria-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-aria-dark/70 font-sans font-light text-sm">
                      1 year of cryopreservation included
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-aria-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-aria-dark/70 font-sans font-light text-sm">
                      Marylebone clinic recovery suite
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="p-10 flex flex-col gap-6">
                <p className="text-[10px] font-sans font-light italic text-aria-dark/40 text-center leading-relaxed">
                  A fertility consultation covers your history, tests, treatment options, costs, and next steps.
                </p>
                <Button
                  onClick={onBookingClick}
                  size="lg"
                  className="w-full bg-aria-teal hover:bg-aria-gold text-white rounded-full py-8 text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl"
                >
                  Start Your Journey
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* IVF Finance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.98 }}
            className="active-reveal"
          >
            <Card className="h-full border-aria-gold/10 shadow-2xl shadow-aria-gold/5 rounded-[3rem] overflow-hidden bg-aria-beige/10 hover:border-aria-gold/30 transition-all duration-500 cursor-pointer">
              <CardHeader className="p-10 pb-6">
                <div className="w-12 h-12 bg-aria-gold/10 rounded-full flex items-center justify-center mb-6">
                  <CreditCard className="w-6 h-6 text-aria-gold" />
                </div>
                <CardTitle className="text-3xl font-serif font-medium text-aria-teal">
                  Pathway Finance
                </CardTitle>
                <CardDescription className="text-sm font-sans font-light mt-2 uppercase tracking-widest text-aria-dark/50">
                  Clear paths to parenthood
                </CardDescription>
              </CardHeader>
              <CardContent className="px-10">
                <div className="mb-8">
                  <span className="text-6xl font-serif font-bold text-aria-teal">£199</span>
                  <span className="text-aria-dark/40 font-sans font-light text-lg">/month</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-aria-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-aria-dark/70 font-sans font-light text-sm">
                      Flexible interest options for up to 12 months
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-aria-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-aria-dark/70 font-sans font-light text-sm">
                      Bespoke packages tailored to you
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-aria-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-aria-dark/70 font-sans font-light text-sm">
                      Quick and discrete approval process
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-aria-gold mr-3 flex-shrink-0 mt-1" />
                    <span className="text-aria-dark/70 font-sans font-light text-sm">
                      Dedicated London finance coordinator
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="p-10 flex flex-col gap-6 pt-12">
                <Button
                  onClick={onBookingClick}
                  size="lg"
                  className="w-full bg-aria-gold hover:bg-aria-teal text-white rounded-full py-8 text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl"
                >
                  Explore Options
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-aria-dark/30">
            Confidential Consultation • Marylebone Clinic Excellence • Discrete Support
          </p>
        </motion.div>
      </div>
    </section>
  );
}
