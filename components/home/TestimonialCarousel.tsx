'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayTestimonials = testimonials.slice(0, 8);
  const currentTestimonial = displayTestimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? displayTestimonials.length - 1 : prev - 1
    );
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x > 100) {
      prevTestimonial();
    } else if (info.offset.x < -100) {
      nextTestimonial();
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-aria-teal mb-6 tracking-tight">
            Success Stories
          </h2>
          <p className="text-xl font-sans text-aria-dark max-w-3xl mx-auto leading-relaxed font-light">
            Bespoke journeys shared by families who entrusted us with their care in Marylebone.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Card className="relative overflow-hidden shadow-2xl border-none bg-aria-beige/20 backdrop-blur-sm rounded-[3rem]">
            <CardContent className="p-12 md:p-20">
              <Quote className="absolute top-12 left-12 w-24 h-24 text-aria-gold/5" />

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="relative z-10 cursor-grab active:cursor-grabbing"
              >
                <div className="flex justify-center mb-10 gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-aria-gold fill-aria-gold"
                    />
                  ))}
                </div>

                <blockquote className="text-2xl md:text-4xl font-serif font-medium text-aria-teal text-center mb-12 leading-relaxed italic">
                  &ldquo;{currentTestimonial.text}&rdquo;
                </blockquote>

                <div className="text-center">
                  <p className="font-serif font-bold text-aria-teal text-2xl mb-2">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-aria-gold font-sans font-bold tracking-[0.2em] uppercase text-[10px]">
                    {currentTestimonial.treatment}
                  </p>
                </div>
              </motion.div>
            </CardContent>

            {/* Navigation Arrows */}
            <div className="hidden md:block absolute top-1/2 left-8 transform -translate-y-1/2">
              <Button
                onClick={prevTestimonial}
                variant="ghost"
                size="icon"
                className="bg-white/50 backdrop-blur-md hover:bg-white text-aria-teal shadow-xl rounded-full w-12 h-12"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </div>
            <div className="hidden md:block absolute top-1/2 right-8 transform -translate-y-1/2">
              <Button
                onClick={nextTestimonial}
                variant="ghost"
                size="icon"
                className="bg-white/50 backdrop-blur-md hover:bg-white text-aria-teal shadow-xl rounded-full w-12 h-12"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-4">
            {displayTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
                  ? 'bg-aria-gold w-12'
                  : 'bg-aria-teal/10 hover:bg-aria-teal/20 w-4'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
