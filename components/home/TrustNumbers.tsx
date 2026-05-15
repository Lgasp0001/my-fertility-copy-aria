'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function TrustNumbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: 850, suffix: '+', label: 'Lives Transformed' },
    { number: 4.9, suffix: '/5', label: 'Patient Rating', decimal: true },
    { number: 20, suffix: '+', label: 'Years Experience' },
    { number: 45, suffix: '/mo', label: 'Finance from', prefix: '£' },
  ];

  return (
    <section className="py-20 bg-aria-teal text-white relative overflow-hidden" ref={ref}>
       {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-serif font-bold text-aria-gold mb-4 tracking-tight">
                {stat.prefix}
                <AnimatedNumber
                  value={stat.number}
                  decimal={stat.decimal}
                  isInView={isInView}
                />
                {stat.suffix}
              </div>
              <p className="text-aria-beige/60 font-sans font-bold uppercase tracking-[0.2em] text-[10px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  decimal,
  isInView,
}: {
  value: number;
  decimal?: boolean;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return <>{decimal ? count.toFixed(1) : Math.floor(count)}</>;
}
