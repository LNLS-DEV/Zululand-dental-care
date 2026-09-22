// Single source of truth for real practice content.
// Edit values here — every page reads from this file.
// Nothing in this file was invented: services come from the practice's
// existing site listing, reviews are reproduced verbatim as supplied.

export const business = {
  name: 'Zululand Dental Care',
  dentist: 'Dr Nonhlanhla Duma',
  phoneDisplay: '067 343 7876',
  phoneRaw: '0673437876',
  whatsappNumber: '27673437876', // international format, no leading 0, no +
  email: 'zululandental@gmail.com',
  addressLines: ['Shop 40, Mtuba Mall', 'Mtubatuba, 3935', 'KwaZulu-Natal, South Africa'],
  addressSingleLine: 'Shop 40, Mtuba Mall, Mtubatuba, 3935, KwaZulu-Natal, South Africa',
  mapsQuery: 'Mtuba Mall, Mtubatuba, 3935, South Africa',
}

export const whatsappLink = (message) =>
  `https://wa.me/${business.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const telLink = `tel:+${business.whatsappNumber}`
export const mailLink = `mailto:${business.email}`

export const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

export const services = [
  {
    slug: 'general-dentistry',
    name: 'General Dentistry',
    short: 'Routine oral healthcare to keep your teeth and gums in good condition.',
    description:
      'Comprehensive dental care covering everyday oral health — from routine exams to treating common issues before they become bigger problems. Dr Duma takes the time to explain what she finds and what your options are.',
    whoFor: 'Everyone — the foundation of a healthy smile.',
    image: '/photos/service-general-dentistry.jpg',
  },
  {
    slug: 'dental-check-ups',
    name: 'Dental Check-ups',
    short: 'Regular examinations to catch problems early and keep your smile on track.',
    description:
      'A thorough look at your teeth, gums and overall oral health, so small issues get addressed before they become bigger ones. Dr Duma talks you through what she finds and what, if anything, needs attention.',
    whoFor: 'Everyone — a simple habit that protects your smile long-term.',
    image: '/photos/gallery-gentle-care.jpg',
  },
  {
    slug: 'teeth-cleaning',
    name: 'Teeth Cleaning',
    short: 'Professional cleaning that clears away what a toothbrush can\u2019t reach.',
    description:
      'Removing plaque and tartar build-up with a thorough, professional clean, leaving your teeth feeling genuinely fresh. A calm, unhurried appointment from start to finish.',
    whoFor: 'Anyone due for a clean, or after a check-up flags build-up.',
    image: '/photos/service-general-dentistry.jpg',
  },
  {
    slug: 'fillings',
    name: 'Fillings',
    short: 'Gentle, careful treatment of cavities to restore your teeth.',
    description:
      'If a check-up turns up a cavity, Dr Duma treats it promptly and gently, restoring the tooth\u2019s strength and function with a careful, patient approach — especially for patients who feel anxious about dental work.',
    whoFor: 'Anyone with a cavity that needs treating.',
    image: '/photos/gallery-careful-treatment.jpg',
  },
  {
    slug: 'tooth-extractions',
    name: 'Tooth Extractions',
    short: 'Careful removal of a tooth that can\u2019t be saved, done as gently as possible.',
    description:
      'When a tooth is too damaged or decayed to restore, Dr Duma removes it with as much care and as little discomfort as possible, and talks you through recovery and next steps.',
    whoFor: 'Patients advised an extraction is the right option.',
    image: '/photos/gallery-careful-treatment.jpg',
  },
  {
    slug: 'root-canal-treatment',
    name: 'Root Canal Treatment',
    short: 'Treating infection inside a tooth to relieve pain and save it where possible.',
    description:
      'For a tooth with infected or inflamed pulp, root canal treatment aims to relieve pain and save the natural tooth rather than remove it. Dr Duma explains the process and what to expect at each step.',
    whoFor: 'Patients with a painful or infected tooth.',
    image: '/photos/service-general-dentistry.jpg',
  },
  {
    slug: 'childrens-dentistry',
    name: "Children's Dentistry",
    short: 'Patient, friendly dental care for your little ones.',
    description:
      'A gentle introduction to the dentist for children, focused on comfort and building confidence early. Dr Duma\u2019s manner puts nervous young patients at ease.',
    whoFor: 'Young patients, from their first visit onward.',
    image: '/photos/gallery-gentle-care.jpg',
  },
  {
    slug: 'emergency-care',
    name: 'Emergency Care',
    short: 'Prompt attention when dental pain or an accident can\u2019t wait.',
    description:
      'Toothache, a knock, or a sudden problem — get in touch and the practice will do its best to see you promptly. For urgent issues, calling or messaging ahead helps the team prepare for your visit.',
    whoFor: 'Anyone with sudden dental pain or an accident.',
    image: '/photos/gallery-careful-treatment.jpg',
  },
]

// Reviews reproduced exactly as supplied — wording, spelling and punctuation
// are left untouched, including the original details of each review.
export const reviews = [
  {
    text: "Have been Dr Duma's patient for more then 10 years, the way she treats her costumers and her staff would recommend to anyone looking for a great dentist at mtubatuba.",
  },
  {
    text: "She is the best Dentist I ever met she is so humbly loving and passionate I do recommend her to everyone I won't lie at first I doubt her because she is young \u{1F602}\u{1F602}\u{1F602}\u{1F602}\u{1F602} but her service it extra ordinary keep up the good work \u{1F64F}\u{1F64F} \u2026",
  },
  {
    text: 'Best dentist I have ever had the pleasure to meet. The procedure was quick, painless and the dentist was gentle and understanding towards my fear of blood and needles. Will definitely recommend Dr Duma to anyone who has a fear of dentists.',
  },
  {
    text: 'I will most definetly recommend Dr Duma to anyone looking for a dentist. She is professional and very thorough with a gentle manner about her. She helped resolve all the issues I had.',
  },
  {
    text: 'I never review but she was a Wonderful dentist, she removed 1 of my teeth that I had previously had a root canal done on (not by her). She was professional and it was painless. Thanks to her, I can enjoy the rest of my vacation in St Lucia.',
  },
]

// Knowledge base for the on-site assistant. Keep every answer to
// information that is actually published on this site — never invent
// prices, hours, diagnoses or guarantees.
export const assistantTopics = [
  {
    id: 'services',
    keywords: ['service', 'services', 'offer', 'treatment', 'treatments', 'do you do', 'what can'],
    answer:
      "The practice offers general dentistry, check-ups, teeth cleaning, fillings, extractions, root canal treatment, children's dentistry, and emergency care. You can see details on the Services page.",
  },
  {
    id: 'appointment',
    keywords: ['appointment', 'book', 'booking', 'schedule', 'visit', 'available', 'slot'],
    answer:
      'You can request an appointment through the form on the Contact page, or message the practice directly on WhatsApp and the team will confirm a time with you.',
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'address', 'find you', 'directions', 'mtuba mall', 'mtubatuba'],
    answer:
      'The practice is at Shop 40, Mtuba Mall, Mtubatuba, 3935, KwaZulu-Natal.',
  },
  {
    id: 'contact',
    keywords: ['contact', 'phone', 'number', 'call', 'whatsapp', 'email'],
    answer:
      'You can call or WhatsApp the practice on 067 343 7876, or email zululandental@gmail.com.',
  },
  {
    id: 'consultation',
    keywords: ['what happens', 'first visit', 'consultation', 'expect', 'nervous', 'scared', 'afraid'],
    answer:
      "A consultation starts with Dr Duma discussing any concerns with you and examining your teeth and gums before recommending next steps. If you're nervous about visiting the dentist, it's worth mentioning that when you get in touch \u2014 many patients feel that way, and it can be discussed with the practice directly.",
  },
  {
    id: 'children',
    keywords: ["child", "children", 'kid', 'kids', 'son', 'daughter', 'baby teeth'],
    answer:
      "Yes \u2014 children's dentistry is one of the practice's services, with a gentle approach for younger patients. Get in touch to arrange a visit.",
  },
  {
    id: 'emergency',
    keywords: ['emergency', 'pain', 'hurts', 'broke', 'broken', 'knocked', 'urgent', 'swollen'],
    answer:
      "For a dental emergency, contact the practice directly by phone or WhatsApp on 067 343 7876 so the team can advise you as soon as possible.",
  },
  {
    id: 'price',
    keywords: ['price', 'cost', 'fee', 'how much', 'medical aid', 'insurance'],
    answer:
      "Pricing and medical aid details aren't listed on this site \u2014 please contact the practice directly and the team can talk you through it.",
  },
  {
    id: 'hours',
    keywords: ['hours', 'open', 'opening', 'close', 'closing', 'weekend'],
    answer:
      "Opening hours aren't listed here yet \u2014 please call or WhatsApp the practice on 067 343 7876 to check availability.",
  },
]

export const assistantFallback =
  "I'm not able to answer that from what's published on this site \u2014 please contact the practice directly on WhatsApp or by phone at 067 343 7876, and the team will help."

export const assistantDisclaimer =
  "This assistant can help with general questions about the practice \u2014 services, appointments, location and what to expect. It isn't a dentist, can't diagnose problems or recommend treatment, and won't guess at prices or hours. For anything medical, please contact the practice directly."
