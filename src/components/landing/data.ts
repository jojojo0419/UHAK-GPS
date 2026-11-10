export const NAV = [
  { href: '#options', id: 'options', label: 'Services' },
  { href: '#how', id: 'how', label: 'Courses' },
  { href: '#about', id: 'about', label: 'About us' },
  { href: '#book', id: 'book', label: 'Quick quotation' },
] as const;

export const HERO_CHECKS = [
  'Student Visa study from just 00/week',
  'School Enrolment & Visa Support',
] as const;

export const NOTES = [
  {
    text: 'Expert guidance from a QEAC-qualified counsellor',
    bg: 'bg-note-yellow',
    tilt: '-rotate-[1.5deg]',
    offset: '',
    tape: 'rotate-[-3deg]',
    span: 'col-span-2',
    type: 'text-[15px] font-normal leading-snug',
  },
  {
    text: 'PR pathway',
    bg: 'bg-note-blue',
    tilt: 'rotate-[1.2deg]',
    offset: 'translate-y-[18px]',
    tape: 'rotate-[2deg]',
    span: 'col-span-2',
    type: 'text-[18px] font-medium leading-tight',
  },
  {
    text: 'School courses selection and enrollment',
    bg: 'bg-note-mint',
    tilt: '-rotate-[1deg]',
    offset: '',
    tape: 'rotate-[-2deg]',
    span: 'col-span-2',
    type: 'text-[15px] font-normal leading-snug',
  },
  {
    text: 'Personal support in Japanese, Korean, and English',
    highlight: true,
    cool: true,
    bg: 'bg-surface',
    tilt: 'rotate-[0.8deg]',
    offset: 'translate-y-2',
    tape: 'rotate-[3deg]',
    span: 'col-start-2 col-span-2',
    type: 'text-[16px] font-medium leading-[1.3]',
  },
  {
    text: 'Property viewing service',
    bg: 'bg-[#FFE4EC]',
    tilt: '-rotate-[1.8deg]',
    offset: '',
    tape: 'rotate-[-2.5deg]',
    span: 'col-start-4 col-span-2',
    type: 'text-[18px] font-normal leading-snug',
  },
] as const;

export const OPTION_CARDS = [
  { id: 1, title: 'Working Holiday', line: 'Live, work, and explore at your own pace.', badges: ['Work & Travel', 'Flexibility'] },
  { id: 2, title: 'Language & Experience', line: 'Build confidence first, then take on real job challenges.', badges: ['Language First', 'Soft Landing'] },
  { id: 3, title: 'Specialised Degree / VET', line: 'Gain recognized qualifications and career-ready skills.', badges: ['Student Visa', 'Career Upgrade'] },
  { id: 4, title: 'Long-term Settlement', line: 'Strategic pathways for a longer stay and future residency.', badges: ['PR Pathway', 'Strategic Planning'] },
] as const;

export const WHY = [
  { was: 'After you decide', now: 'From your first question' },
  { was: 'From an office back home', now: 'From Sydney, where we live' },
  { was: 'Until your visa', now: 'Long after you land' },
] as const;

export const STEPS = [
  {
    title: 'Talk',
    ja: 'まず、話す',
    body: 'Start with one sentence: “I think I want to go overseas.” That’s enough.',
    detail: 'A free 30-minute chat. No school, visa or decision needed. You can even leave your job out of it.',
    note: '',
    icon: '/images/step-1.webp',
  },
  {
    title: 'Discover',
    ja: '本当の気持ちを知る',
    body: 'Together, we work out what you’re really looking for.',
    detail: 'A new environment, English, a career shift, confidence, or something you haven’t put into words yet.',
    note: '',
    icon: '/images/step-2.webp',
  },
  {
    title: 'Plan',
    ja: 'かたちにする',
    body: 'We turn it into something concrete.',
    detail: 'The right option and visa, a school that fits, timing, budget, and which city suits the life you want.',
    note: '',
    icon: '/images/step-3.webp',
  },
  {
    title: 'Do',
    ja: '準備する',
    body: 'Applications and getting ready to leave.',
    detail: 'School enrolment, visa application and departure preparation, one step at a time.',
    note: '',
    icon: '/images/step-4.webp',
  },
  {
    title: 'Move',
    ja: '現地で暮らす',
    body: 'Help once you’ve landed, from someone who lives here.',
    detail: 'Accommodation, work, school life, transport, and the questions that only come up locally.',
    note: 'Some in-person support may carry an extra fee. We’ll always tell you upfront.',
    icon: '/images/step-5.webp',
  },
  {
    title: 'Next',
    ja: 'その先を考える',
    body: 'Thinking about what comes after, together.',
    detail: 'Your career, and whether a longer stay in Australia makes sense. Honest about what’s possible; no guarantees we can’t keep.',
    note: '',
    icon: '/images/step-6.webp',
  },
] as const;

export const SCHOOL_COLS = [
  {
    label: 'English schools',
    items: [
      { name: 'Harbourside English', meta: 'Sydney · Social' },
      { name: 'Laneway Language School', meta: 'Melbourne · Small classes' },
    ],
  },
  {
    label: 'Vocational colleges',
    items: [
      { name: 'Coastline Hospitality', meta: 'Sydney · Hospitality' },
      { name: 'Southbank Business', meta: 'Melbourne · Evenings' },
    ],
  },
  {
    label: 'Universities',
    items: [
      { name: 'University of Northshore', meta: 'Sydney · Pathway' },
      { name: 'Bayside University', meta: 'Brisbane · Supportive' },
    ],
  },
] as const;

export const ABOUT_QUOTES = [
  '“Have you actually tried walking from this area to the school?”',
  '“You could probably manage without a car around here.”',
  '“Here\'s what living in this place would probably feel like.”',
] as const;

export const PRINCIPLES = [
  { title: "We don't sell schools.", line: 'Only the ones that fit you.' },
  { title: "No promises we can't keep.", line: 'Honest about visas and residency.' },
  { title: 'Your choice stays yours.', line: 'We lay out options. You decide.' },
] as const;

export const ASK_CHIPS = [
  'Am I too old at 27?',
  'Working Holiday or student visa?',
  'How much would I need?',
  'How do I tell my parents?',
] as const;

export const AIRMAIL = [
  'Guidance',
  'Clear on visas and residency',
  'Schools that fit you',
] as const;

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=250+Pitt+St%2C+Sydney+NSW+2000';

export const OFFICE = '250 Pitt St, Sydney NSW 2000';

export const COUNSELLOR = {
  name: '[Counsellor name]',
  since: '[Year]',
  meetUs: '250 Pitt St, Sydney NSW 2000',
} as const;
