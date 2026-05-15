'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, ShieldCheck, Coffee } from 'lucide-react';

const features = [
    {
        icon: Heart,
        title: 'Bespoke Patient Care',
        description: 'Supporting you every step of the way. Our "Personalized Path" protocol combines clinical excellence with a supportive environment tailored to your individual needs.',
    },
    {
        icon: Coffee,
        title: 'Marylebone Sanctuary',
        description: 'Enjoy a moment of calm in our private clinic lounge in the heart of London. We believe your fertility care should feel discrete, supportive, and exceptionally private.',
    },
    {
        icon: Sparkles,
        title: 'Clinical Excellence',
        description: 'World-class expertise meets a gentle, personalized touch. Our clinicians are leaders in reproductive medicine, dedicated to your unique path to parenthood.',
    },
];

export default function WhyChooseUs() {
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
                        Fertility Care, Redefined for London.
                    </h2>
                    <p className="text-xl font-sans text-aria-dark max-w-2xl mx-auto leading-relaxed font-light">
                        We’ve reimagined the fertility experience, combining world-class expertise with a boutique approach in our Marylebone clinic.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileTap={{ scale: 0.98 }}
                            className="group active-reveal premium-glass aria-glass-glow shine-effect p-12 rounded-[3rem] cursor-pointer border-aria-teal/5 hover:border-aria-gold/20 transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-aria-teal/5 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">
                                <feature.icon className="w-8 h-8 text-aria-gold" />
                            </div>
                            <h3 className="text-2xl font-serif font-medium text-aria-teal mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-aria-dark/70 font-sans font-light leading-relaxed text-base">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
