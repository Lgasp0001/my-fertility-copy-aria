'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowLeft,
  CheckCircle,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import MobileStickyCTA from '@/components/layout/MobileStickyCTA';
import BookingModal from '@/components/modals/BookingModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ContactPage() {
  const router = useRouter();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const contactFAQs = [
    {
      question: 'What are your clinic hours?',
      answer:
        'Our Marylebone clinic is open Monday to Friday from 8:00 AM to 7:00 PM. We also offer Saturday appointments from 9:00 AM to 4:00 PM for your convenience. We are closed on Sundays.',
    },
    {
      question: 'Do you offer personalized pathways?',
      answer:
        'Yes, every patient receives a bespoke fertility roadmap. We provide several flexible options for our pathways, including preservation and IVF packages tailored to your specific needs.',
    },
    {
      question: 'How quickly can I get an initial consultation?',
      answer:
        'We typically have availability for private consultations at our London clinic within 24 to 48 hours. Please contact us or use our online booking tool to check specific times.',
    },
    {
      question: 'Is my information kept confidential?',
      answer:
        'Absolutely. Discrete care and privacy are at the heart of our bespoke approach. All your data and conversations are strictly confidential and protected by the highest medical standards in the UK.',
    },
  ];

  return (
    <>
      <Header onBookingClick={() => setIsBookingModalOpen(true)} />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-aria-teal py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <button
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 text-white/60 hover:text-white mb-10 transition-colors font-sans font-bold uppercase tracking-widest text-[10px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-medium text-white mb-8 tracking-tight">
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl font-sans font-light text-aria-beige/80 leading-relaxed max-w-2xl">
                Have questions about your journey? Our specialist team in Marylebone is here to provide expert support and guidance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-24 bg-aria-beige/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-medium text-aria-teal mb-10 tracking-tight">
                  Visit Our Clinic
                </h2>

                <div className="space-y-10 mb-12">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                      <MapPin className="w-5 h-5 text-aria-gold" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-[10px] uppercase tracking-widest text-aria-gold mb-2">London Address</h3>
                      <p className="text-aria-dark/80 font-sans font-light leading-relaxed">
                        Welbeck Way, Marylebone
                        <br />
                        London, W1G 9YF
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                      <Phone className="w-5 h-5 text-aria-gold" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-[10px] uppercase tracking-widest text-aria-gold mb-2">Enquiries</h3>
                      <a
                        href="tel:+442032636025"
                        className="text-aria-teal hover:text-aria-gold font-sans font-medium transition-colors"
                      >
                        +44 (0) 203 263 6025
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                      <Mail className="w-5 h-5 text-aria-gold" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-[10px] uppercase tracking-widest text-aria-gold mb-2">Direct Email</h3>
                      <a
                        href="mailto:admin@ariafertility.co.uk"
                        className="text-aria-teal hover:text-aria-gold font-sans font-medium transition-colors"
                      >
                        admin@ariafertility.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                      <Clock className="w-5 h-5 text-aria-gold" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-[10px] uppercase tracking-widest text-aria-gold mb-2">
                        Clinic Hours
                      </h3>
                      <div className="text-aria-dark/80 font-sans font-light leading-relaxed">
                        <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Notice */}
                <Card className="bg-aria-teal/5 border-aria-teal/10 rounded-[2rem] overflow-hidden">
                  <CardContent className="p-10">
                    <h3 className="font-serif font-medium text-aria-teal text-xl mb-4">
                      Priority Enquiries
                    </h3>
                    <p className="text-aria-dark/70 font-sans font-light mb-8 leading-relaxed">
                      We prioritize initial consultations for new patients. Contact us today to secure your private assessment.
                    </p>
                    <a
                      href="tel:+442032636025"
                      className="inline-flex items-center space-x-3 font-sans font-bold text-[10px] uppercase tracking-widest text-aria-teal hover:text-aria-gold transition-colors"
                    >
                      <Phone className="w-4 h-4 text-aria-gold" />
                      <span>+44 (0) 203 263 6025</span>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {!isSubmitted ? (
                  <Card className="rounded-[3rem] border-aria-teal/5 shadow-2xl shadow-aria-teal/5 overflow-hidden bg-white">
                    <CardContent className="p-12 md:p-16">
                      <h2 className="text-3xl font-serif font-medium text-aria-teal mb-10">
                        Send an Enquiry
                      </h2>

                      {(() => {
                        const isEmailValid = formData.email.includes('@');
                        const isFormValid = formData.name.trim() !== '' && isEmailValid && formData.phone.trim() !== '' && formData.message.trim() !== '';

                        return (
                          <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                              <Label htmlFor="name" className="text-[10px] font-sans font-bold uppercase tracking-widest text-aria-dark/50 ml-4 mb-2 block">Full Name</Label>
                              <Input
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({ ...formData, name: e.target.value })
                                }
                                placeholder="Name"
                                className="rounded-full px-8 py-6 border-aria-teal/10 focus:ring-4 focus:ring-aria-teal/5 transition-all font-sans font-light"
                              />
                            </div>

                            <div>
                              <Label htmlFor="email" className={`text-[10px] font-sans font-bold uppercase tracking-widest ml-4 mb-2 block ${!isEmailValid && formData.email !== '' ? 'text-red-400' : 'text-aria-dark/50'}`}>
                                Email Address
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    email: e.target.value,
                                  })
                                }
                                placeholder="email@example.com"
                                className={`rounded-full px-8 py-6 transition-all font-sans font-light border-aria-teal/10 ${!isEmailValid && formData.email !== ''
                                  ? 'border-red-300 focus:ring-red-50'
                                  : 'focus:ring-4 focus:ring-aria-teal/5'
                                  }`}
                              />
                            </div>

                            <div>
                              <Label htmlFor="phone" className="text-[10px] font-sans font-bold uppercase tracking-widest text-aria-dark/50 ml-4 mb-2 block">Phone Number</Label>
                              <Input
                                id="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                  })
                                }
                                placeholder="+44"
                                className="rounded-full px-8 py-6 border-aria-teal/10 focus:ring-4 focus:ring-aria-teal/5 transition-all font-sans font-light"
                              />
                            </div>

                            <div>
                              <Label htmlFor="message" className="text-[10px] font-sans font-bold uppercase tracking-widest text-aria-dark/50 ml-4 mb-2 block">Enquiry</Label>
                              <Textarea
                                id="message"
                                required
                                value={formData.message}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    message: e.target.value,
                                  })
                                }
                                placeholder="How can we support you?"
                                rows={4}
                                className="rounded-[2rem] px-8 py-6 border-aria-teal/10 focus:ring-4 focus:ring-aria-teal/5 transition-all font-sans font-light"
                              />
                            </div>

                            <p className="text-[11px] font-sans text-aria-dark/40 text-center italic leading-relaxed">
                              Your privacy is our priority. We will contact you within 24 hours to discuss your next steps.
                            </p>

                            <Button
                              type="submit"
                              className={`w-full py-8 rounded-full text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-500 ${isFormValid
                                ? 'bg-aria-teal hover:bg-aria-gold text-white shadow-xl shadow-aria-teal/20 scale-[1.02]'
                                : 'bg-aria-teal/20 cursor-not-allowed text-white/50'
                                }`}
                            >
                              Send Enquiry
                            </Button>
                          </form>
                        );
                      })()}
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="rounded-[3.5rem] border-aria-teal/5 shadow-2xl shadow-aria-teal/5 overflow-hidden bg-white">
                    <CardContent className="p-16 md:p-24 text-center">
                      <div className="w-20 h-20 bg-aria-teal/5 rounded-full flex items-center justify-center mx-auto mb-10">
                        <CheckCircle className="w-10 h-10 text-aria-gold" />
                      </div>

                      <h2 className="text-3xl md:text-4xl font-serif font-medium text-aria-teal mb-6">
                        Enquiry Sent
                      </h2>

                      <p className="text-lg font-sans font-light text-aria-dark/70 mb-12 max-w-md mx-auto leading-relaxed">
                        Thank you, {formData.name}. Our specialist team will review your enquiry and contact you within 24 hours.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                          onClick={() => setIsSubmitted(false)}
                          variant="outline"
                          className="rounded-full px-10 py-6 border-aria-teal/10 text-aria-teal hover:bg-aria-teal hover:text-white font-sans font-bold text-[10px] uppercase tracking-widest transition-all"
                        >
                          Send Another Enquiry
                        </Button>
                        <Button 
                          onClick={() => router.push('/')}
                          className="rounded-full px-10 py-6 bg-aria-gold hover:bg-aria-teal text-white font-sans font-bold text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-aria-gold/20"
                        >
                          Return Home
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-aria-teal mb-6">
                Support & FAQs
              </h2>
              <p className="text-lg font-sans font-light text-aria-dark/60 max-w-2xl mx-auto">
                Common questions about visiting our Marylebone clinic.
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-6">
              {contactFAQs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-aria-beige/20 rounded-[2rem] border-none px-8 py-2 overflow-hidden"
                >
                  <AccordionTrigger className="text-left hover:text-aria-gold transition-colors py-6 no-underline">
                    <span className="font-serif font-medium text-xl text-aria-teal">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-aria-dark/70 font-sans font-light leading-relaxed text-base pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-aria-teal relative overflow-hidden">
           {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-8">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl font-sans font-light text-aria-beige/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Book your bespoke consultation and discover how world-class expertise meets compassionate care in the heart of London.
              </p>
              <Button
                onClick={() => setIsBookingModalOpen(true)}
                size="lg"
                className="bg-aria-gold hover:bg-white text-white hover:text-aria-teal rounded-full px-12 py-8 font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl"
              >
                Book Bespoke Consultation
              </Button>
              <p className="mt-10 text-white/30 text-[10px] font-sans font-bold uppercase tracking-[0.3em]">
                Marylebone • Discrete Care • Clinical Excellence
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
      />
    </>
  );
}
