export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I start my journey at Aria?',
    answer: 'The first step is a bespoke fertility consultation in our private Marylebone clinic. We’ll discuss your goals, medical history, and conduct initial diagnostics in a supportive environment. You can book your first visit directly through our website.',
    category: 'process'
  },
  {
    id: '2',
    question: 'What is the cost of IVF or egg freezing?',
    answer: 'Transparency is fundamental to our care. We provide clear pricing for all treatment packages, which we discuss during your consultation. We also offer flexible financing options with monthly payments starting from as low as £45/mo for preservation plans.',
    category: 'cost'
  },
  {
    id: '3',
    question: 'How long does a typical IVF cycle take?',
    answer: 'A standard IVF cycle typically takes about 4 to 6 weeks from the start of medication to the embryo transfer. Our specialists provide a personalized timeline during your consultation so you know exactly what to expect.',
    category: 'time'
  },
  {
    id: '4',
    question: 'What is the Aria clinical experience?',
    answer: 'We have designed our Marylebone clinic to be a sanctuary of clinical excellence. We combine world-class reproductive technology with a private, nurturing environment that prioritizes your wellbeing and discrete care.',
    category: 'experience'
  },
  {
    id: '5',
    question: 'Do you offer genetic testing for embryos?',
    answer: 'Yes, we provide advanced PGT-A and PGT-M genetic screening. This technology allows us to select the healthiest embryos, which can significantly increase success rates and reduce clinical risks.',
    category: 'tech'
  },
  {
    id: '6',
    question: 'What are your success rates?',
    answer: 'Our success rates are consistently among the highest in the UK. We report our outcomes transparently to the HFEA to ensure you have the most accurate information for your journey.',
    category: 'success'
  },
  {
    id: '7',
    question: 'Do you offer holistic support?',
    answer: 'Absolutely. We believe in supporting the whole person. Our wellness program integrates specialist support and stress-reduction techniques designed to support your fertility treatments.',
    category: 'holistic'
  },
  {
    id: '8',
    question: 'Is my privacy protected?',
    answer: 'Your privacy is our highest priority. From our discrete Marylebone location to our secure systems, every aspect of your care is handled with the utmost confidentiality and professionalism.',
    category: 'privacy'
  }
];

export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter(faq => faq.category === category);
};
