export interface Treatment {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  recovery: string;
  benefits: string[];
  howItWorks: string[];
  icon: string;
}

export const treatments: Treatment[] = [
  {
    id: '1',
    name: 'IVF',
    slug: 'ivf',
    category: 'Treatment',
    shortDescription: 'In Vitro Fertilisation — the most established fertility treatment, helping you conceive when other methods have been unsuccessful.',
    fullDescription: 'In Vitro Fertilisation (IVF) is used to treat a wide range of fertility problems including unexplained infertility. During IVF, the ovaries are stimulated to develop several eggs. These are removed from the ovaries and fertilised with sperm in our state-of-the-art laboratory. The fertilised egg then develops into an embryo, which is replaced back into the womb. IVF was first developed over 40 years ago and still remains at the forefront of fertility treatment, now benefiting from decades of clinical advancement.',
    duration: '4 – 6 weeks per cycle',
    recovery: 'Ongoing specialist support',
    benefits: [
      'Suitable for a wide range of fertility challenges, including unexplained infertility',
      'Proven treatment with over 40 years of clinical excellence',
      'Personalised stimulation protocol designed for your physiology',
      'Access to embryo cryopreservation for future transfers',
      'Option to combine with genetic testing (PGT-A/M) for enhanced confidence',
      'Ideal for single women and same-sex couples using donor sperm',
      'Closely monitored with regular ultrasound scans throughout',
      'Performed under sedation for your comfort during egg collection',
    ],
    howItWorks: [
      'Initial consultation at our Marylebone clinic to review your history and run baseline diagnostics.',
      'Personalised ovarian stimulation using hormonal injections over approximately 10–14 days.',
      'Monitoring scans to track follicle development and adjust medication.',
      'Trigger injection to mature eggs, followed by egg collection under sedation (15–20 minutes).',
      'Laboratory fertilisation of eggs with prepared sperm. ICSI may be used if sperm quality requires it.',
      'Embryo development monitored by our embryologists over 3–5 days.',
      'Single embryo transfer into the uterus — a painless, scan-guided procedure.',
      'Progesterone support commences, and a pregnancy test is arranged 10–12 days later.',
    ],
    icon: '🔬',
  },
  {
    id: '2',
    name: 'Egg Freezing',
    slug: 'egg-freezing',
    category: 'Preservation',
    shortDescription: 'Preserve your fertility and secure your healthiest eggs now, so you can build your family on your own timeline.',
    fullDescription: 'Egg freezing (oocyte cryopreservation) is an empowering way to safeguard your reproductive future. At Aria Fertility, we appreciate that not everyone is at the right stage in life to start a family right now. The most significant decline in female fertility and egg quality occurs after 35 — freezing your eggs before then is advisable to maximise future chances. Our egg freezing programme allows you to preserve your youngest, healthiest eggs and store them safely in our dedicated London facility until you are ready.',
    duration: '2 weeks of stimulation + collection day',
    recovery: 'Return home within ~1 hour of collection',
    benefits: [
      'Preserve your fertility before age-related decline begins',
      'Empowers you to plan a family on your own terms and timeline',
      'Remember: it is the age of your frozen eggs, not the age at use, that matters',
      'Minimally invasive collection procedure performed under IV sedation',
      'State-of-the-art vitrification (flash-freezing) maximises survival rates',
      'Convenient location near Bond Street with extended clinic hours',
      'Multi-cycle packages available, personalised to your ovarian reserve',
      'Dedicated nurse-led support throughout the entire journey',
    ],
    howItWorks: [
      'Initial consultation to discuss your fertility health, ovarian reserve (AMH), and goals.',
      'Personalised stimulation protocol begins on day 2 of your cycle with daily hormonal injections.',
      'Three monitoring ultrasound scans over approximately two weeks to track follicle growth.',
      'Trigger injection administered when follicles reach the optimal size.',
      'Egg collection: a minor surgical procedure lasting 20–30 minutes under IV sedation.',
      'Our embryologists assess each egg for maturity and freeze eligible eggs via vitrification.',
      'Eggs stored securely in our licensed facility until you are ready to use them.',
      'When you choose to proceed, eggs are thawed, fertilised, and used in an IVF cycle.',
    ],
    icon: '❄️',
  },
  {
    id: '3',
    name: 'IUI',
    slug: 'iui',
    category: 'Treatment',
    shortDescription: 'Intrauterine Insemination — a gentle and effective first-line fertility treatment for unexplained infertility.',
    fullDescription: 'Intrauterine insemination (IUI) is one of the most straightforward fertility treatments and is often the first step in treating unexplained infertility, before considering more involved options such as IVF. The process involves selecting the highest-quality motile sperm in our laboratory and placing them directly into the uterus at the optimal time for fertilisation. IUI can be performed naturally or with the support of fertility medications to increase the number of eggs produced and improve chances of success.',
    duration: 'One cycle aligned to your natural cycle',
    recovery: 'Same-day procedure, no recovery time needed',
    benefits: [
      'Minimally invasive and one of the least disruptive fertility treatments',
      'A natural first step before more advanced treatments such as IVF',
      'Suitable for unexplained infertility, mild male factor, and donor sperm cycles',
      'Can be combined with ovulation induction for increased success',
      'No anaesthetic required — performed in the clinic in minutes',
      'Much lower cost than IVF, making it an accessible starting point',
      'Supportive for single women and lesbian couples using donor sperm',
      'Closely monitored with ultrasound to time insemination precisely',
    ],
    howItWorks: [
      'Initial consultation to assess suitability — IUI works best with healthy fallopian tubes and adequate ovarian reserve.',
      'Decision made on whether to proceed with a natural or stimulated cycle.',
      'If stimulated: fertility medications taken to encourage egg development.',
      'Ultrasound monitoring to track follicle growth and identify the optimal insemination window.',
      'An hCG trigger injection may be given to time ovulation precisely.',
      'On insemination day, a sperm sample is prepared in the laboratory to isolate the most motile sperm.',
      'A fine catheter is used to place the sperm directly into the uterine cavity — takes just a few minutes.',
      'Pregnancy test arranged approximately two weeks later.',
    ],
    icon: '💉',
  },
  {
    id: '4',
    name: 'ICSI',
    slug: 'icsi',
    category: 'Treatment',
    shortDescription: 'Intracytoplasmic Sperm Injection — a precision technique that dramatically improves fertilisation for male factor infertility.',
    fullDescription: 'Intracytoplasmic Sperm Injection (ICSI) is a specialised fertility technique used as part of an IVF cycle, primarily recommended where male infertility is a factor. Rather than allowing sperm and egg to fertilise naturally in a dish, ICSI involves a single, carefully selected sperm being injected directly into a mature egg using a microscopic needle. This technique fertilises 50–80% of eggs and has been transformative for couples where conventional IVF fertilisation was previously not possible.',
    duration: 'Performed on egg collection day (same-day)',
    recovery: 'Same day as egg collection — results within 24 hours',
    benefits: [
      'Dramatically improves fertilisation rates where sperm quality is poor',
      'The only option for men with severely low sperm counts or motility issues',
      'Enables conception where conventional IVF has previously failed to fertilise',
      'Allows the use of surgically retrieved sperm (e.g. post-vasectomy)',
      'Can be used to fertilise frozen or previously cryopreserved eggs',
      'Performed by our expert embryologists in state-of-the-art laboratory conditions',
      'Success rates following ICSI are equivalent to conventional IVF once fertilisation occurs',
      'Available as part of any IVF cycle at Aria Fertility',
    ],
    howItWorks: [
      'ICSI is performed as part of a standard IVF cycle — egg stimulation and collection proceed as normal.',
      'On collection day, a sperm sample is obtained via ejaculation or, if needed, surgical retrieval.',
      'Embryologists select the single healthiest, most motile sperm using high-powered microscopy.',
      'A single sperm is drawn into a microscopic glass needle.',
      'The needle is used to inject the sperm directly into the cytoplasm of a mature egg.',
      'Fertilisation is checked 16–18 hours later — typically 50–80% of injected eggs fertilise successfully.',
      'Fertilised eggs are cultured for 3–5 days and the best-quality embryo selected for transfer.',
      'Remaining viable embryos can be frozen for future use.',
    ],
    icon: '🧬',
  },
  {
    id: '5',
    name: 'Embryo Genetic Testing',
    slug: 'embryo-genetic-testing',
    category: 'Advanced',
    shortDescription: 'Pre-implantation Genetic Testing (PGT) — giving you the confidence of knowing your embryos are chromosomally healthy before transfer.',
    fullDescription: 'Pre-implantation Genetic Testing (PGT) is performed on embryos created through IVF before they are transferred to the womb. It can detect a range of genetic and chromosomal issues that may cause failed implantation, miscarriage, or heritable conditions. At Aria Fertility, we offer PGT-A (testing for chromosomal number abnormalities), PGT-M (testing for specific single-gene disorders such as Cystic Fibrosis or BRCA mutations), and PGT-SR (testing for structural chromosomal rearrangements). Our consultants will advise whether PGT is appropriate for your individual situation.',
    duration: 'Biopsy performed on day 5 embryos; results in approximately 2 weeks',
    recovery: 'No additional recovery — biopsy is performed in the laboratory',
    benefits: [
      'Identifies chromosomally normal (euploid) embryos before transfer',
      'Can significantly improve IVF success rates and reduce miscarriage risk',
      'Detects over 600 single-gene disorders (PGT-M) before implantation',
      'Provides peace of mind, particularly for those with a family history of genetic conditions',
      'HFEA licensed — we test for all conditions listed in the HFEA-approved register',
      'Helps select the best embryo from a cohort, reducing unnecessary failed cycles',
      'Applicable in cases of recurrent implantation failure or recurrent miscarriage',
      'Available for all IVF patients at Aria Fertility',
    ],
    howItWorks: [
      'PGT is performed as part of your IVF cycle — eggs are collected and fertilised as normal.',
      'Embryos are cultured to blastocyst stage (day 5).',
      'A small number of cells are biopsied from the trophectoderm (outer layer) of each blastocyst.',
      'Embryos are frozen while biopsy samples are sent to a specialist genetics laboratory.',
      'Results are typically returned within 2 weeks, detailing which embryos are chromosomally normal.',
      'Your Aria consultant reviews results and recommends the embryo(s) most likely to succeed.',
      'A frozen embryo transfer (FET) is then planned when your body is ready.',
      'Ongoing monitoring and pregnancy support provided by our dedicated clinical team.',
    ],
    icon: '🧪',
  },
  {
    id: '6',
    name: 'Frozen Embryo Transfer',
    slug: 'frozen-embryo-transfer',
    category: 'Treatment',
    shortDescription: 'Use your cryopreserved embryos from a previous IVF cycle to achieve pregnancy without repeating a full stimulation cycle.',
    fullDescription: 'Frozen Embryo Transfer (FET) is often an integral and exciting stage in the IVF process. Spare high-quality embryos from a previous IVF cycle can be cryopreserved in our licensed facility and used in a future cycle. This gives you an opportunity to conceive without undergoing a full IVF stimulation cycle, and clinical evidence now suggests that FET in a non-stimulated cycle can actually improve the chances of successful implantation. Embryos can be stored safely for up to ten years under current HFEA guidelines.',
    duration: '4 – 6 weeks from cycle start to transfer',
    recovery: 'Same-day procedure; pregnancy test at 10–12 days',
    benefits: [
      'Avoid the cost and time of a full stimulation cycle when you have frozen embryos',
      'Clinical evidence shows FET in a natural cycle may improve implantation success',
      'Over 97% of frozen embryos survive the freeze-thaw process at Aria',
      'Embryos can be safely stored for up to ten years under HFEA guidelines',
      'Allows your body to fully recover between fresh and frozen cycles',
      'A simpler, less intensive experience compared to a full IVF cycle',
      'Can be combined with genetic testing results if PGT was previously performed',
      'Maximises the value of every egg collection and IVF cycle',
    ],
    howItWorks: [
      'A consultation to review your frozen embryos and plan your FET cycle.',
      'Your Aria team will decide on the best preparation protocol for your womb lining.',
      'You may be given oestrogen to thicken the endometrium in preparation for transfer.',
      'Regular ultrasound scans to monitor endometrial thickness and development.',
      'When your womb lining is ready, progesterone support begins.',
      'The chosen embryo is carefully thawed in the laboratory and assessed for viability.',
      'Transfer is performed using a fine catheter under ultrasound guidance — a painless procedure similar to a cervical smear.',
      'Pregnancy test arranged 10–12 days later, with continued progesterone support if positive.',
    ],
    icon: '🌿',
  },
];

export const getTreatmentBySlug = (slug: string): Treatment | undefined => {
  return treatments.find((t) => t.slug === slug);
};

export const getTreatmentsByCategory = (category: string): Treatment[] => {
  return treatments.filter((t) => t.category === category);
};
