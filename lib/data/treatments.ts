export interface Treatment {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  priceRange: string;
  priceStarting: string;
  duration: string;
  recovery: string;
  howItWorks: string[];
}

export const treatments: Treatment[] = [
  {
    id: '1',
    name: 'Fertility Consultations',
    slug: 'fertility-consultations',
    icon: 'Activity',
    shortDescription: 'Bespoke guidance to understand your reproductive health and start your journey.',
    fullDescription: 'Our fertility consultations provide a comprehensive overview of your reproductive health in our private Marylebone clinic. From initial assessments and hormone testing to personalized treatment plans, we offer a supportive environment to discuss your goals and options. Whether you are just starting or looking for advanced solutions, our expert team is here to guide you every step of the way.',
    benefits: [
      'Personalized reproductive health assessment',
      'One-on-one time with world-leading specialists',
      'Comprehensive hormone & diagnostic testing',
      'Clear roadmap for your family-building journey',
      'Private and discrete Marylebone clinic',
      'Supportive and empathetic clinical team'
    ],
    priceRange: '£200 - £450',
    priceStarting: '£200',
    duration: '45-60 minutes',
    recovery: 'None - return to normal activities immediately',
    howItWorks: [
      'Initial health history review',
      'Diagnostic testing and ultrasound (if needed)',
      'Discussion of family-building goals',
      'Review of results and potential pathways',
      'Personalized treatment plan development'
    ]
  },
  {
    id: '2',
    name: 'In Vitro Fertilization (IVF)',
    slug: 'ivf',
    icon: 'Heart',
    shortDescription: 'World-class reproductive technology to help you conceive and build your family.',
    fullDescription: 'IVF is a highly effective fertility treatment that involves combining eggs and sperm in our state-of-the-art Marylebone laboratory. Our IVF program combines medical precision with compassionate care to optimize your chances of success. From ovarian stimulation to embryo transfer, we provide expert monitoring and support throughout the entire process.',
    benefits: [
      'High success rates with personalized protocols',
      'Advanced laboratory technology & techniques',
      'Personalized stimulation protocols',
      'Option for genetic screening (PGT)',
      'Expert embryology and clinical teams',
      'Compassionate support programs'
    ],
    priceRange: '£4,500 - £8,000',
    priceStarting: '£4,500',
    duration: '4-6 weeks per cycle',
    recovery: '1-2 days after egg retrieval',
    howItWorks: [
      'Ovarian stimulation and monitoring',
      'Ultrasound-guided egg retrieval',
      'Fertilization in our specialized lab',
      'Embryo development and monitoring',
      'Embryo transfer to the uterus',
      'Pregnancy testing and follow-up'
    ]
  },
  {
    id: '3',
    name: 'Egg Freezing',
    slug: 'egg-freezing',
    icon: 'Sparkles',
    shortDescription: 'Preserve your future options with advanced cryopreservation technology in London.',
    fullDescription: 'Egg freezing allows you to preserve your fertility for the future. Whether for personal, medical, or professional reasons, freezing your eggs at their current quality can provide peace of mind and flexibility. Our bespoke program focuses on your comfort and provides the highest standards of care in egg harvesting and storage in the heart of Marylebone.',
    benefits: [
      'Preserve younger, healthier eggs',
      'Greater flexibility in family planning',
      'Advanced vitrification (flash-freezing) technology',
      'Peace of mind for future fertility',
      'Short, manageable treatment cycle',
      'Long-term secure storage options'
    ],
    priceRange: '£3,500 - £5,500',
    priceStarting: '£3,500',
    duration: '10-14 days for stimulation',
    recovery: '1-2 days after retrieval',
    howItWorks: [
      'Initial consultation and fertility check',
      'Hormonal stimulation of the ovaries',
      'Monitoring with blood tests and ultrasounds',
      'Egg retrieval procedure under light sedation',
      'Immediate vitrification and secure storage'
    ]
  },
  {
    id: '4',
    name: 'Diagnostic Testing',
    slug: 'diagnostic-testing',
    icon: 'Sun',
    shortDescription: 'Comprehensive insights into your fertility health with precise diagnostics.',
    fullDescription: 'Understanding your fertility health is the first step. Our diagnostic services include semen analysis, ovarian reserve testing (AMH), and tubal patency assessments. We use the latest diagnostic technology to provide accurate results, giving you the clarity you need to make informed decisions.',
    benefits: [
      'Clarity on potential fertility challenges',
      'Testing for both partners available',
      'Faster path to effective treatment',
      'Accurate, laboratory-verified results',
      'Minimally invasive diagnostic procedures',
      'Detailed review meeting with a specialist'
    ],
    priceRange: '£150 - £800',
    priceStarting: '£150',
    duration: 'Varies by test (30-60 minutes)',
    recovery: 'Minimal - most tests require no downtime',
    howItWorks: [
      'Scheduling of appropriate diagnostic tests',
      'Sample collection or imaging procedure',
      'Expert laboratory analysis',
      'Results review and interpretation',
      'Updated treatment recommendations'
    ]
  },
  {
    id: '5',
    name: 'Sperm Health & Donation',
    slug: 'sperm-health-donation',
    icon: 'Shield',
    shortDescription: 'Specialized services for male fertility and donor sperm integration.',
    fullDescription: 'We offer comprehensive male fertility services, including advanced semen analysis and coordination with reputable sperm banks. Whether you are optimizing your own sperm health or utilizing donor sperm, our team provides the expertise and discretion you deserve.',
    benefits: [
      'In-depth analysis of male fertility factors',
      'Expert coordination with top donor banks',
      'Discreet and professional environment',
      'Advanced sperm selection techniques',
      'Guidance for LGBTQ+ families & single parents',
      'Integrated care for both partners'
    ],
    priceRange: '£150 - £1,500',
    priceStarting: '£150',
    duration: '30-45 minutes for analysis',
    recovery: 'None',
    howItWorks: [
      'Consultation and service selection',
      'Semen analysis or donor bank selection',
      'Pre-treatment optimization (if needed)',
      'Sperm preparation for IUI or IVF',
      'Secure handling and tracking'
    ]
  },
  {
    id: '6',
    name: 'IUI (Intrauterine Insemination)',
    slug: 'iui',
    icon: 'Link',
    shortDescription: 'A gentle, effective first step for many on their fertility journey.',
    fullDescription: 'IUI is a less invasive fertility treatment that involves placing prepared sperm directly into the uterus during ovulation. Often referred to as artificial insemination, it is a recommended first step for many. Our team provides precise cycle monitoring to optimize success.',
    benefits: [
      'Less invasive than IVF',
      'More affordable fertility option',
      'Natural cycle or medicated options',
      'Relatively quick procedure',
      'Minimal downtime or side effects',
      'Excellent first-step treatment'
    ],
    priceRange: '£800 - £1,500',
    priceStarting: '£800',
    duration: '15-20 minutes for procedure',
    recovery: 'None - immediate return to activity',
    howItWorks: [
      'Cycle monitoring with ultrasounds',
      'Identification of peak fertility/ovulation',
      'Sperm preparation and "washing"',
      'Simple intrauterine insemination procedure',
      'Follow-up and support'
    ]
  }
];

export const getTreatmentBySlug = (slug: string): Treatment | undefined => {
  return treatments.find(treatment => treatment.slug === slug);
};
