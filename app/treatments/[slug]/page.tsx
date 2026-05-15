'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Clock, Banknote, Star, Quote, ShieldCheck } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import MobileStickyCTA from '@/components/layout/MobileStickyCTA';
import BookingModal from '@/components/modals/BookingModal';
import { getTreatmentBySlug, treatments } from '@/lib/data/treatments';
import { getTestimonialsByTreatment } from '@/lib/data/testimonials';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TreatmentPage() {
  const params = useParams();
  const router = useRouter();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const treatment = getTreatmentBySlug(params.slug as string);
  const testimonials = treatment
    ? getTestimonialsByTreatment(treatment.name)
    : [];

  // Other treatments to show as related (exclude current)
  const relatedTreatments = treatments.filter(t => t.slug !== params.slug).slice(0, 3);

  if (!treatment) {
    return (
      <>
        <Header onBookingClick={() => setIsBookingModalOpen(true)} />
        <div className="min-h-screen flex items-center justify-center bg-aria-beige/20">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-medium text-aria-teal mb-6">
              Treatment Not Found
            </h1>
            <Button
              onClick={() => router.push('/')}
              className="bg-aria-teal hover:bg-aria-gold text-white rounded-full px-10 py-6 font-sans font-bold text-xs uppercase tracking-widest transition-all"
            >
              Return Home
            </Button>
          </div>
        </div>
        <Footer />
        <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      </>
    );
  }

  return (
    <>
      <Header onBookingClick={() => setIsBookingModalOpen(true)} />

      <main className="min-h-screen pt-20">

        {/* Hero Section */}
        <section className="bg-aria-teal relative overflow-hidden py-24 md:py-32">
          {/* Background glow */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-aria-gold/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <button
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 text-white/50 hover:text-white mb-12 transition-colors font-sans font-bold text-[10px] uppercase tracking-[0.2em]"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back to Home</span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-aria-gold/20 text-white font-sans font-bold text-[9px] uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
                {treatment.category}
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-medium text-white mb-8 tracking-tight leading-tight">
                {treatment.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-sans font-light mb-12 max-w-2xl leading-relaxed">
                {treatment.shortDescription}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-12">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-5">
                  <div className="text-white/40 font-sans font-bold text-[9px] uppercase tracking-[0.2em] mb-2">Duration</div>
                  <div className="text-sm font-sans font-medium text-white leading-tight">{treatment.duration}</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-5">
                  <div className="text-white/40 font-sans font-bold text-[9px] uppercase tracking-[0.2em] mb-2">Recovery</div>
                  <div className="text-sm font-sans font-medium text-white leading-tight">{treatment.recovery}</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-5">
                  <div className="text-white/40 font-sans font-bold text-[9px] uppercase tracking-[0.2em] mb-2">Pricing</div>
                  <div className="text-sm font-sans font-medium text-white leading-tight">Discussed in consultation</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button
                  onClick={() => setIsBookingModalOpen(true)}
                  size="lg"
                  className="bg-white text-aria-teal hover:bg-aria-gold hover:text-white rounded-full px-10 py-8 text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl border-none"
                >
                  Book a Consultation
                </Button>
                <p className="text-white/30 font-sans font-light text-xs self-center italic">
                  Our team will respond within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-aria-teal mb-8 tracking-tight">
                About {treatment.name}
              </h2>
              <p className="text-lg font-sans font-light text-aria-dark/80 leading-relaxed mb-16">
                {treatment.fullDescription}
              </p>

              {/* Benefits Grid */}
              <h3 className="text-2xl font-serif font-medium text-aria-teal mb-8 tracking-tight">
                Key Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                {treatment.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="flex items-start space-x-4 bg-aria-beige/20 rounded-2xl p-6"
                  >
                    <div className="w-6 h-6 rounded-full bg-aria-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-aria-gold" />
                    </div>
                    <span className="text-aria-dark/70 font-sans font-light text-sm leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-aria-beige/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-aria-teal mb-4 tracking-tight">
                Your Care Pathway
              </h2>
              <p className="text-lg font-sans font-light text-aria-dark/50 mb-16">
                Step-by-step from first contact to your outcome.
              </p>
              <div className="space-y-6">
                {treatment.howItWorks.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex items-start space-x-6 bg-white rounded-[2rem] p-8 shadow-lg shadow-aria-teal/5"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-aria-teal rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">
                      {index + 1}
                    </div>
                    <p className="text-aria-dark/80 font-sans font-light leading-relaxed pt-1.5 text-sm md:text-base">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-aria-teal mb-16 tracking-tight">
                Patient Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-aria-beige/20 rounded-[2.5rem] p-10"
                  >
                    <Quote className="w-8 h-8 text-aria-gold/20 mb-6" />
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-aria-gold fill-aria-gold" />
                      ))}
                    </div>
                    <p className="text-aria-dark/70 font-sans font-light leading-relaxed text-sm mb-6 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <p className="font-serif font-medium text-aria-teal text-base">
                      {testimonial.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Treatments */}
        <section className="py-24 bg-aria-beige/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-medium text-aria-teal mb-12 tracking-tight">
                Explore Other Pathways
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTreatments.map((t, i) => (
                  <Link href={`/treatments/${t.slug}`} key={t.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="bg-white rounded-[2rem] p-8 shadow-lg shadow-aria-teal/5 hover:shadow-aria-gold/10 hover:border-aria-gold/10 border border-transparent transition-all duration-500 cursor-pointer group"
                    >
                      <div className="text-3xl mb-4">{t.icon}</div>
                      <h3 className="font-serif font-medium text-aria-teal text-xl mb-2 group-hover:text-aria-gold transition-colors">{t.name}</h3>
                      <p className="text-aria-dark/50 font-sans font-light text-sm leading-relaxed mb-4">{t.shortDescription.substring(0, 80)}...</p>
                      <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-aria-gold">
                        Learn More →
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-aria-teal relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-aria-gold/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6 tracking-tight">
                Ready to Begin?
              </h2>
              <p className="text-xl text-white/60 font-sans font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Book your private consultation at our Marylebone clinic and take the first step towards your future family.
              </p>
              <Button
                onClick={() => setIsBookingModalOpen(true)}
                size="lg"
                className="bg-white text-aria-teal hover:bg-aria-gold hover:text-white rounded-full px-12 py-8 text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl border-none"
              >
                Book Your Consultation
              </Button>
              <p className="text-white/30 font-sans font-light text-xs mt-8 italic">
                A fertility consultation covers your history, tests, treatment options, costs, and next steps. Our team will respond within 24 hours.
              </p>
              <p className="text-white/20 font-sans font-bold text-[9px] uppercase tracking-[0.3em] mt-6 flex items-center justify-center gap-2">
                <ShieldCheck className="w-3 h-3" />
                HFEA Licensed • Marylebone, London • Discrete, Private Care
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
      <BackToTop />
      <MobileStickyCTA onBookingClick={() => setIsBookingModalOpen(true)} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultTreatment={treatment.slug}
      />
    </>
  );
}
