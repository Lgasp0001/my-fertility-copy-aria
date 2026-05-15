'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowLeft, Heart, Sparkles, Activity, ShieldCheck } from 'lucide-react';

const steps = [
    {
        id: 'concern',
        title: "How can we support you?",
        questions: [
            { id: 'ivf', label: 'Starting IVF', icon: <Heart className="w-6 h-6" /> },
            { id: 'preservation', label: 'Egg Freezing', icon: <Sparkles className="w-6 h-6" /> },
            { id: 'diagnostics', label: 'Fertility Check', icon: <Activity className="w-6 h-6" /> },
            { id: 'consult', label: 'Consultation', icon: <ShieldCheck className="w-6 h-6" /> },
        ]
    },
    {
        id: 'goal',
        title: "What is your primary goal?",
        questions: [
            { id: 'family', label: 'Start a Family', icon: <Heart className="w-6 h-6" /> },
            { id: 'future', label: 'Preserve Options', icon: <Sparkles className="w-6 h-6" /> },
            { id: 'health', label: 'Health Insight', icon: <Activity className="w-6 h-6" /> },
            { id: 'support', label: 'Expert Support', icon: <ShieldCheck className="w-6 h-6" /> },
        ]
    },
    {
        id: 'timeline',
        title: "When would you like to begin?",
        questions: [
            { id: 'asap', label: 'Immediately', icon: <div className="text-[10px] font-sans font-bold uppercase tracking-widest">ASAP</div> },
            { id: 'soon', label: 'Next 6 Months', icon: <div className="text-[10px] font-sans font-bold uppercase tracking-widest">SOON</div> },
            { id: 'research', label: 'Just Enquiring', icon: <div className="text-[10px] font-sans font-bold uppercase tracking-widest">INFO</div> },
            { id: 'flexible', label: 'Flexible', icon: <div className="text-[10px] font-sans font-bold uppercase tracking-widest">LATER</div> },
        ]
    }
];

export default function AssessmentQuiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isFinished, setIsFinished] = useState(false);

    const [email, setEmail] = useState('');
    const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
    const isEmailValid = email.includes('@');

    const handleAnswer = (questionId: string) => {
        setAnswers({ ...answers, [steps[currentStep].id]: questionId });
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsFinished(true);
        }
    };

    const progress = ((currentStep + 1) / steps.length) * 100;

    return (
        <section id="quiz" className="py-24 bg-aria-teal relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aria-gold/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {!isFinished ? (
                    <>
                        <Badge className="bg-aria-gold/20 text-white border-none font-sans font-bold uppercase tracking-widest text-[9px] px-4 py-1.5 mb-8">
                            Fertility Assessment
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-12 tracking-tight">
                            Start Your <span className="italic text-aria-gold">Journey.</span>
                        </h2>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl">
                            {/* Progress Bar */}
                            <div className="w-full h-1 bg-white/10 rounded-full mb-16 overflow-hidden">
                                <motion.div
                                    className="h-full bg-aria-gold"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <p className="text-white/40 font-sans font-bold text-[9px] uppercase tracking-[0.3em] mb-4">Step {currentStep + 1} of {steps.length}</p>
                                    <h3 className="text-3xl font-serif font-medium text-white mb-12">{steps[currentStep].title}</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {steps[currentStep].questions.map((q) => (
                                            <button
                                                key={q.id}
                                                onClick={() => handleAnswer(q.id)}
                                                className="group flex flex-col items-center justify-center p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-aria-gold/40 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
                                            >
                                                <div className="w-14 h-14 rounded-full bg-aria-teal flex items-center justify-center mb-6 text-aria-gold group-hover:scale-110 transition-all duration-500 shadow-lg">
                                                    {q.icon}
                                                </div>
                                                <span className="text-white font-sans font-medium text-sm tracking-wide">{q.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {currentStep > 0 && (
                                <button
                                    onClick={() => setCurrentStep(currentStep - 1)}
                                    className="mt-16 flex items-center space-x-2 text-white/30 hover:text-white transition-colors text-[10px] font-sans font-bold uppercase tracking-widest mx-auto"
                                >
                                    <ArrowLeft className="w-3 h-3" />
                                    <span>Back</span>
                                </button>
                            )}
                        </div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-[3.5rem] p-12 md:p-24 shadow-2xl text-center"
                    >
                        {!isEmailSubmitted ? (
                            <>
                                <div className="w-20 h-20 bg-aria-teal/5 rounded-full flex items-center justify-center mb-10 mx-auto">
                                    <Check className="w-8 h-8 text-aria-gold font-bold" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif font-medium text-aria-teal mb-6">Assessment Complete</h3>
                                <p className="text-lg font-sans font-light text-aria-dark mb-12 leading-relaxed max-w-lg mx-auto">
                                    Based on your responses, we recommend a <span className="font-bold text-aria-teal">Initial Consultation</span> at our Marylebone clinic. Enter your email to receive your bespoke roadmap.
                                </p>

                                <div className="max-w-md mx-auto flex flex-col gap-6">
                                    <div className="text-left">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your email address"
                                            className={`w-full px-8 py-5 rounded-full border focus:outline-none transition-all text-base font-sans font-light ${!isEmailValid && email !== ''
                                                ? 'border-red-300 ring-red-50'
                                                : 'border-aria-teal/10 focus:ring-4 focus:ring-aria-teal/5'
                                                }`}
                                        />
                                        {!isEmailValid && email !== '' && (
                                            <p className="text-red-400 text-[10px] mt-2 ml-4 font-sans font-bold uppercase tracking-widest">Valid email required</p>
                                        )}
                                    </div>
                                    <p className="text-[11px] font-sans text-aria-dark/50 text-center leading-relaxed">
                                        Your privacy is our priority. We will contact you within 24 hours to discuss your next steps.
                                    </p>

                                    <Button
                                        size="lg"
                                        onClick={() => isEmailValid && setIsEmailSubmitted(true)}
                                        className={`py-8 rounded-full transition-all duration-500 font-sans font-bold uppercase tracking-[0.2em] text-xs ${isEmailValid
                                            ? 'bg-aria-teal hover:bg-aria-gold text-white shadow-xl shadow-aria-teal/20 scale-[1.02]'
                                            : 'bg-aria-teal/20 cursor-not-allowed text-white/50'
                                            }`}
                                    >
                                        Receive My Roadmap
                                    </Button>
                                </div>
                                <p className="mt-12 text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-aria-dark/30 flex items-center justify-center gap-2">
                                    <ShieldCheck className="w-3 h-3" />
                                    Secure & Private London Clinic
                                </p>
                            </>
                        ) : (
                            <div className="py-12">
                                <div className="w-20 h-20 bg-aria-teal/5 rounded-full flex items-center justify-center mb-10 mx-auto">
                                    <Check className="w-8 h-8 text-aria-gold font-bold" />
                                </div>
                                <h3 className="text-3xl font-serif font-medium text-aria-teal mb-6">Roadmap Sent</h3>
                                <p className="text-lg font-sans font-light text-aria-dark mb-12 max-w-md mx-auto">
                                    Thank you. Your personalized fertility roadmap has been sent to <span className="font-bold text-aria-teal">{email}</span>.
                                </p>
                                <Button
                                    onClick={() => {
                                        setIsFinished(false);
                                        setIsEmailSubmitted(false);
                                        setCurrentStep(0);
                                        setEmail('');
                                    }}
                                    variant="outline"
                                    className="border-aria-teal/10 text-aria-teal hover:bg-aria-teal hover:text-white rounded-full px-10 py-6 font-sans font-bold text-[10px] uppercase tracking-widest transition-all"
                                >
                                    Take Assessment Again
                                </Button>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
