'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, MapPin, Star } from 'lucide-react';
import Magnetic from '@/components/ui/Magnetic';

interface HeroSectionProps {
  onBookingClick: () => void;
}

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
};

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  const scrollToTreatments = () => {
    const element = document.querySelector('#treatments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleWords = "Aria Fertility Clinic".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-aria-beige">
      {/* Header Contrast Strip */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-white/40 backdrop-blur-md z-0" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #72A9B5 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-aria-teal/5 backdrop-blur-md border border-aria-teal/10 px-6 py-2 rounded-full mb-8 shadow-sm"
          >
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-aria-gold fill-aria-gold" />
              ))}
            </span>
            <span className="text-aria-teal text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
              Bespoke Fertility Excellence in Marylebone
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-medium text-aria-teal mb-8 leading-[0.9] tracking-tight text-balance flex flex-wrap justify-center gap-x-[0.1em]"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                }}
                className={word === "Aria" ? "italic font-light" : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl font-sans text-aria-dark mb-12 max-w-2xl mx-auto leading-relaxed text-balance font-light"
          >
            Supporting you every step of the way with world-class expertise and compassionate care in our private Marylebone clinic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Magnetic>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={onBookingClick}
                    size="lg"
                    className="bg-aria-teal hover:bg-aria-gold text-white text-xs tracking-[0.2em] uppercase px-12 py-8 rounded-full shadow-xl hover:shadow-aria-teal/20 transition-all font-bold"
                  >
                    Start Your Journey
                  </Button>
                </motion.div>
              </Magnetic>
              <Magnetic>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={scrollToTreatments}
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-aria-teal/20 text-aria-teal hover:bg-aria-teal hover:text-white text-xs tracking-[0.2em] uppercase px-12 py-8 rounded-full transition-all font-bold"
                  >
                    Explore Treatments
                  </Button>
                </motion.div>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-col items-center"
          >
            <div className="flex items-center space-x-3 text-aria-gold/80">
              <MapPin className="w-4 h-4" />
              <p className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase">Marylebone, London • Welbeck Way</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToTreatments}
        initial={{ opacity: 0, x: '-50%' }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
        className="absolute bottom-10 left-1/2 text-aria-teal/30 hover:text-aria-teal transition-colors"
        style={{ x: '-50%' }}
      >
        <ChevronDown className="w-10 h-10" />
      </motion.button>
    </section>
  );
}
