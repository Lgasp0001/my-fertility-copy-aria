export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  text: string;
  image?: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    treatment: 'IVF Treatment',
    rating: 5,
    text: 'After years of trying, we finally found hope at Aria Fertility. The team provided the emotional and clinical support we needed. Our IVF journey was handled with such care in Marylebone, and we are now expecting our first child. We cannot thank them enough!',
  },
  {
    id: '2',
    name: 'James Richardson',
    treatment: 'Fertility Consultations',
    rating: 5,
    text: 'The diagnostic clarity we received at Aria was life-changing. We had so many questions, and the specialists in London took the time to explain everything clearly. We finally feel like we have a roadmap for our future.',
  },
  {
    id: '3',
    name: 'Emily Chen',
    treatment: 'Egg Freezing',
    rating: 5,
    text: 'Choosing to freeze my eggs was a big decision, but the discrete environment at Aria made me feel completely at ease. The process was explained well, and the care I received during the retrieval in Marylebone was exceptional.',
  },
  {
    id: '4',
    name: 'Michael Torres',
    treatment: 'Genetic Screening',
    rating: 5,
    text: 'The advanced genetic screening options at Aria gave us incredible peace of mind. The team was thorough and compassionate throughout the entire process. High-tech meets high-touch care in the heart of London.',
  },
  {
    id: '5',
    name: 'Rachel Anderson',
    treatment: 'IVF Treatment',
    rating: 5,
    text: 'We moved our care to Aria after a cold experience elsewhere. The difference was night and day. The private setting and personalized approach made all the difference in our successful IVF cycle.',
  },
  {
    id: '6',
    name: 'David Park',
    treatment: 'Male Fertility Support',
    rating: 5,
    text: 'I was hesitant about seeking fertility support, but the team at Aria was professional and discreet. They provided clear answers and actionable steps. Highly recommend for any couple starting their journey.',
  },
  {
    id: '7',
    name: 'Lisa Thompson',
    treatment: 'Holistic Support',
    rating: 5,
    text: 'I love that Aria offers more than just clinical care. Their focus on wellbeing and support during my fertility journey was exactly what I needed. Truly a bespoke experience.',
  },
  {
    id: '8',
    name: 'Robert Hughes',
    treatment: 'Donor Programs',
    rating: 5,
    text: 'The guidance we received while exploring donor options was incredibly sensitive and helpful. They helped us navigate a complex process with grace and expertise.',
  }
];

export const getTestimonialsByTreatment = (treatment: string): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.treatment === treatment);
};
