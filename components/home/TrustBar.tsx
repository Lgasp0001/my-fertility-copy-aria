'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Star, Users } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: Shield,
      text: 'HFEA Licensed',
    },
    {
      icon: Award,
      text: 'BCS Accredited',
    },
    {
      icon: Star,
      text: '4.9/5 Patient Rating',
    },
    {
      icon: Users,
      text: '20+ Years Experience',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-aria-teal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 mb-6 bg-aria-gold/5 rounded-full flex items-center justify-center group-hover:bg-aria-gold/10 transition-all duration-500 shadow-sm">
                <item.icon className="w-8 h-8 text-aria-gold group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-aria-teal">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
