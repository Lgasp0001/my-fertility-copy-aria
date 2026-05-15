'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import ComparisonSlider from '@/components/ui/ComparisonSlider';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function PatientTransformations() {
    const scrollToQuiz = () => {
        const element = document.querySelector('#quiz');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="transformations" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="bg-aria-gold/10 text-aria-gold border-none font-sans font-bold uppercase tracking-widest text-[9px] px-4 py-1.5 mb-6">
                            The Aria Philosophy
                        </Badge>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-serif font-medium text-aria-teal mb-6 tracking-tight">
                        Experience Clinical <span className="italic text-aria-gold">Excellence.</span>
                    </h2>
                    <p className="text-xl font-sans text-aria-dark max-w-2xl leading-relaxed font-light">
                        Trade the impersonal clinical setting for world-class reproductive artistry in our private Marylebone sanctuary.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-aria-beige/20 p-4 rounded-[3rem]"
                    >
                        <ComparisonSlider
                            beforeImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
                            afterImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                        />
                    </motion.div>

                    <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-aria-teal rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
                         {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none">
                            <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '30px 30px'
                            }} />
                        </div>
                        
                        <div className="mb-10 md:mb-0 relative z-10">
                            <h3 className="text-2xl font-serif font-medium mb-4 flex items-center gap-3">
                                <Sparkles className="w-6 h-6 text-aria-gold" />
                                Bespoke Care
                            </h3>
                            <p className="text-aria-beige/70 font-sans font-light text-lg max-w-md leading-relaxed italic">
                                &ldquo;Moving to the Aria clinic was a revelation. I felt seen, heard, and supported with world-class expertise throughout my journey.&rdquo;
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-6 relative z-10">
                            <Button
                                onClick={scrollToQuiz}
                                size="lg"
                                className="bg-white hover:bg-aria-gold text-aria-teal hover:text-white px-10 py-8 rounded-full text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 group shadow-xl"
                            >
                                Start Assessment
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-white/30 text-center leading-relaxed">
                                Marylebone • Private Care • Clinical Excellence
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
