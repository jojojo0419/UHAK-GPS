import type { Messages } from './types';

export const en: Messages = {
  meta: {
    title: 'UHAK GPS — Study abroad & Working Holiday in Australia',
    description:
      'Sydney-based guidance for study abroad and Working Holiday — honest pathways, schools that fit, and local support.',
  },
  langSwitch: {
    label: '日本語',
    href: '/ja/',
  },
  a11y: {
    home: 'UHAK GPS home',
    mainNav: 'Main',
    footerNav: 'Footer',
    steps: 'Steps',
    yourPlan: 'Your plan',
    beliefs: 'What we believe',
    idCard: 'Counsellor ID card. Tap to flip. Map opens Google Maps.',
    openMaps: 'Open UHAK GPS location on Google Maps',
    freeChat: 'Free chat',
    close: 'Close',
    instagram: 'Instagram',
  },
  nav: [
    { href: '#options', id: 'options', label: 'Services' },
    { href: '#how', id: 'how', label: 'Courses' },
    { href: '#about', id: 'about', label: 'About us' },
    { href: '#book', id: 'book', label: 'Quick quotation' },
  ],
  header: {
    bookChat: 'Book a free chat',
  },
  hero: {
    chatAsk: 'Do you want to go to Australia?',
    chatReply: 'I’d love to… but how?',
    srChat: 'Do you want to go to Australia? I’d love to, but how? ',
    headlineLine1: 'We support together',
    headlineLine2: 'your study in Australia.',
    checks: ['Student Visa study from just 00/week', 'School Enrolment & Visa Support'],
    bookCta: 'Book a free 30-minute chat',
    lineCta: 'Message us on LINE 24 hours',
    polaroidAlt: 'Smiling over a lunch of kimbap near Town Hall',
    polaroidCaption: 'Lunch break near Town Hall.',
  },
  feel: {
    title: 'We hear what you feel.',
    lead: 'We support 000 students with services that help your study journey in Australia.',
    notes: [
      { text: 'Expert guidance from a QEAC-qualified counsellor' },
      { text: 'PR pathway' },
      { text: 'School courses selection and enrollment' },
      {
        text: 'Personal support in Japanese, Korean, and English',
        highlightPrefix: 'Personal support in',
        highlightMarked: 'Japanese, Korean, and English',
      },
      { text: 'Property viewing service' },
    ],
  },
  options: {
    title: 'Find your next chapter abroad.',
    lead: 'Choose what you’re looking for. We’ll help you bridge the gap.',
    planTitle: 'Your Plan',
    planEmpty: 'Click cards on the left that catch your eye.',
    roadmapCta: 'Get Custom Roadmap →',
    cards: [
      {
        title: 'Working Holiday',
        line: 'Live, work, and explore at your own pace.',
        badges: ['Work & Travel', 'Flexibility'],
      },
      {
        title: 'Language & Experience',
        line: 'Build confidence first, then take on real job challenges.',
        badges: ['Language First', 'Soft Landing'],
      },
      {
        title: 'Specialised Degree / VET',
        line: 'Gain recognized qualifications and career-ready skills.',
        badges: ['Student Visa', 'Career Upgrade'],
      },
      {
        title: 'Long-term Settlement',
        line: 'Strategic pathways for a longer stay and future residency.',
        badges: ['PR Pathway', 'Strategic Planning'],
      },
    ],
  },
  why: {
    title: 'Why us?',
    items: [
      { was: 'After you decide', now: 'From your first question' },
      { was: 'From an office back home', now: 'From Sydney, where we live' },
      { was: 'Until your visa', now: 'Long after you land' },
    ],
  },
  how: {
    title: 'How it usually goes',
    previous: 'Previous',
    nextPrefix: 'Next: ',
    startCta: 'Start with step 01: a free chat',
    steps: [
      {
        title: 'Talk',
        flourish: 'まず、話す',
        body: 'Just say: “I think I want to go overseas.”',
        detail:
          'A free 30-minute chat. No school, visa or decision needed. You can even leave your job out of it.',
        note: '',
      },
      {
        title: 'Discover',
        flourish: '本当の気持ちを知る',
        body: 'Together, we work out what you’re really looking for.',
        detail:
          'A new environment, English, a career shift, confidence, or something you haven’t put into words yet.',
        note: '',
      },
      {
        title: 'Plan',
        flourish: 'かたちにする',
        body: 'We turn it into something concrete.',
        detail:
          'The right option and visa, a school that fits, timing, budget, and which city suits the life you want.',
        note: '',
      },
      {
        title: 'Do',
        flourish: '準備する',
        body: 'Applications and getting ready to leave.',
        detail: 'School enrolment, visa application and departure preparation, one step at a time.',
        note: '',
      },
      {
        title: 'Move',
        flourish: '現地で暮らす',
        body: 'Help once you’ve landed, from someone living here.',
        detail: 'Accommodation, work, school life, transport, and the questions that only come up locally.',
        note: '',
      },
      {
        title: 'Next',
        flourish: 'その先を考える',
        body: 'Thinking about what comes after, together.',
        detail:
          'Your career, and whether a longer stay in Australia makes sense. Honest about what’s possible; no guarantees we can’t keep.',
        note: '',
      },
    ],
  },
  schools: {
    title: 'Schools we know well',
    lead: 'Visited, walked, honestly noted.',
    seeAll: 'See all schools',
    cols: [
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
    ],
  },
  airmail: ['Guidance', 'Clear on visas and residency', 'Schools that fit you'],
  about: {
    title: 'About us.',
    body: "School and visa are the easy part. We also think about where you'll live, how you'll get around, and what a normal week actually costs.",
    quotes: [
      '“Have you actually tried walking from this area to the school?”',
      '“You could probably manage without a car around here.”',
      '“Here\'s what living in this place would probably feel like.”',
    ],
    localId: 'LOCAL ID',
    nameLabel: 'Name',
    sinceLabel: 'In Australia since',
    meetLabel: 'Meet us',
    askLabel: 'Ask me about',
    askTopics: ['Quiet vs fun suburbs', 'Share houses and bond', 'Finding part-time work'],
    tipFlip: 'Tap the card to flip',
    tipMap: 'Tap the map for Google Maps',
    counsellor: {
      name: '[Counsellor name]',
      since: '[Year]',
      meetUs: '250 Pitt St, Sydney NSW 2000',
    },
  },
  principles: {
    title: 'Studying abroad really begins\nwhen you land.',
    lead: 'Rooms, jobs, getting around.\nWe stay the local person you can ask, even over coffee.',
    items: [
      { title: "We don't sell schools.", line: 'Only the ones that fit you.' },
      { title: "No promises we can't keep.", line: 'Honest about visas and residency.' },
      { title: 'Your choice stays yours.', line: 'We lay out options. You decide.' },
    ],
  },
  footer: {
    blurb: 'An Australia-specialist study-abroad agency for people who are still figuring it out.',
    links: [
      { href: '#options', label: 'Services' },
      { href: '#how', label: 'Courses' },
      { href: '#about', label: 'About us' },
      { href: '#book', label: 'Quick quotation' },
      { href: '#book', label: 'Free chat' },
    ],
    location: 'Sydney, Australia · Free 30-minute consultations',
    copyright: '© 2026 UHAK GPS',
  },
  sticky: {
    wondering: 'Been wondering…',
    asked: 'Good question. Bring it to your chat.',
    jaLine: 'まずは30分、話してみませんか。',
    bookChat: 'Book a free chat',
    chips: [
      'Am I too old at 27?',
      'Working Holiday or student visa?',
      'How much would I need?',
      'How do I tell my parents?',
    ],
  },
};
