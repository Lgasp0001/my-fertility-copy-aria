'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Activity,
  Sparkles,
  Sun,
  Shield,
  Award,
  Link as LinkIcon,
  Heart
} from 'lucide-react';
import { treatments } from '@/lib/data/treatments';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const iconMap: { [key: string]: React.ElementType } = {
  Activity,
  Sparkles,
  Sun,
  Shield,
  Award,
  Link: LinkIcon,
  Heart,
};

export default function TreatmentGrid() {
  return (
    <section id="treatments" className="py-24 bg-aria-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-aria-teal mb-6 tracking-tight">
            Our Treatments
          </h2>
          <p className="text-xl font-sans text-aria-dark max-w-2xl mx-auto leading-relaxed font-light">
            From initial consultations to world-class clinical expertise, we offer
            personalized fertility solutions in the heart of London.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {treatments.map((treatment, index) => {
            const Icon = iconMap[treatment.icon] || Heart;
            return (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className="active-reveal"
              >
                <Card className="h-full bg-white border-aria-teal/5 hover:border-aria-gold/20 hover:shadow-xl transition-all duration-500 group cursor-pointer rounded-[2rem] overflow-hidden">
                  <CardHeader className="p-8">
                    <div className="w-14 h-14 bg-aria-teal/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7 text-aria-gold" />
                    </div>
                    <CardTitle className="text-2xl font-serif font-medium text-aria-teal mb-2">
                      {treatment.name}
                    </CardTitle>
                    <CardDescription className="text-aria-dark/70 font-sans font-light text-sm leading-relaxed">
                      {treatment.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="p-8 pt-4">
                    <Link href={`/treatments/${treatment.slug}`} className="w-full">
                      <Button
                        variant="outline"
                        className="w-full rounded-full border-aria-teal/10 text-aria-teal hover:bg-aria-teal hover:text-white transition-all font-sans font-bold text-[10px] uppercase tracking-[0.2em] py-6"
                      >
                        Explore Treatment
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-aria-dark/60 font-sans font-light text-sm mb-6">
            Begin your journey with a private consultation.
          </p>
          <Link href="#quiz">
            <Button
              className="bg-aria-gold hover:bg-aria-teal text-white rounded-full px-10 py-6 text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg transition-all"
            >
              Take Our Assessment
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
