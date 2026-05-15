'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import Image from 'next/image';

const cases = [
    {
        name: "Sarah's IVF Journey",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
        location: "Marylebone, London",
        treatment: "IVF Treatment",
        duration: "6 Months",
        outcome: "Healthy Pregnancy",
        quote: "Starting our family was an emotional journey. The team at Aria provided the compassion and care we needed every step of the way.",
        rating: 5
    },
    {
        name: "David's Consultation",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        location: "Mayfair, London",
        treatment: "Fertility Check",
        duration: "1 Visit",
        outcome: "Clear Roadmap",
        quote: "I wanted to understand my options for the future. The diagnostic clarity I received gave me incredible peace of mind.",
        rating: 5
    },
    {
        name: "Emily's Preservation",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
        location: "St John's Wood, London",
        treatment: "Egg Freezing",
        duration: "14 Days",
        outcome: "12 Oocytes Frozen",
        quote: "Preserving my future options was the best decision I've made. The discrete environment made the entire process stress-free.",
        rating: 5
    }
];

export default function SocialProof() {
    return (
        <section className="py-24 bg-white overflow-hidden border-t border-aria-teal/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <Badge className="bg-aria-gold/10 text-aria-gold mb-6 hover:bg-aria-gold/20 transition-colors border-none font-sans font-bold uppercase tracking-widest text-[9px] px-4 py-1.5">
                            Patient Stories
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-serif font-medium text-aria-teal mb-8 tracking-tight text-balance">
                            Authentic Journeys. <br />
                            <span className="italic text-aria-gold">Built on Trust & Care.</span>
                        </h2>
                        <p className="text-xl font-sans text-aria-dark leading-relaxed font-light">
                            From Marylebone to St John&apos;s Wood, we&apos;ve helped hundreds of families start their journeys with world-class expertise and discrete care.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-end"
                    >
                        <div className="flex -space-x-3 mb-6">
                            {[
                                { type: 'image', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', name: 'Sarah' },
                                { type: 'image', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100', name: 'David' },
                                { type: 'image', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100', name: 'Emily' },
                                { type: 'letter', char: 'A', color: 'bg-aria-teal' },
                            ].map((avatar, i) => (
                                <div
                                    key={i}
                                    className={`w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md relative flex items-center justify-center ${avatar.type === 'letter' ? avatar.color : 'bg-aria-beige'}`}
                                >
                                    {avatar.type === 'image' && avatar.src ? (
                                        <Image
                                            src={avatar.src}
                                            alt={avatar.name || 'Patient'}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <span className="text-white font-serif font-bold text-lg">{'char' in avatar ? avatar.char : ''}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="text-aria-teal font-sans font-bold flex items-center gap-3 text-xs tracking-widest uppercase">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-aria-gold fill-aria-gold" />)}
                            </div>
                            4.9/5 from our patient community
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory flex-nowrap flex md:grid px-4 -mx-4">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer snap-center min-w-[85vw] md:min-w-0"
                        >
                            <Card className="border-aria-teal/5 shadow-2xl shadow-aria-teal/5 rounded-[3rem] overflow-hidden bg-white transition-all duration-500">
                                <div className="relative aspect-[4/3] bg-aria-beige overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-aria-teal/40 to-transparent" />
                                    <span className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md text-aria-teal text-[9px] px-4 py-1.5 rounded-full uppercase tracking-[0.2em] font-bold font-sans">
                                        London Journey
                                    </span>
                                </div>
                                <CardContent className="p-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-2xl font-serif font-medium text-aria-teal mb-2">{item.name}</h3>
                                            <Badge variant="outline" className="text-[9px] uppercase tracking-[0.2em] border-aria-gold/30 text-aria-gold font-sans font-bold bg-transparent">
                                                {item.treatment}
                                            </Badge>
                                        </div>
                                    </div>
                                    <p className="text-aria-dark/70 font-sans font-light italic mb-8 leading-relaxed text-sm">
                                        &ldquo;{item.quote}&rdquo;
                                    </p>
                                    <div className="grid grid-cols-2 gap-6 border-t border-aria-teal/5 pt-8">
                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.3em] text-aria-dark/40 mb-2 font-sans font-bold">Timeline</p>
                                            <p className="text-aria-teal font-serif font-bold text-lg">{item.duration}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.3em] text-aria-dark/40 mb-2 font-sans font-bold">Outcome</p>
                                            <p className="text-aria-teal font-serif font-bold text-lg">{item.outcome}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
