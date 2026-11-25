/**
 * Content for the /zine/ editorial edition.
 * Facts that change (visa rules, fares, rent) are written as ranges with a
 * "check before you plan" note; bracketed values are pre-launch placeholders.
 *
 * Card listings keep multiple titles for the home grid; every article CTA
 * opens the single feature guide at GUIDE_HREF.
 */

export type TopicId = 'working-holiday' | 'english-vet' | 'university' | 'sydney-life';

export const topics: { id: TopicId; label: string }[] = [
  { id: 'working-holiday', label: 'Working Holiday' },
  { id: 'english-vet', label: 'English & VET' },
  { id: 'university', label: 'University' },
  { id: 'sydney-life', label: 'Sydney Life' },
];

export const topicLabel = (id: TopicId) => topics.find((t) => t.id === id)?.label ?? id;

/** One article route for every “Read more” / topic / checklist link. */
export const GUIDE_HREF = '/zine/guides/';

/** Home “The latest” cards — display only; links go to GUIDE_HREF. */
export type GuideCard = {
  slug: string;
  title: string;
  dek: string;
  topic: TopicId;
  date: string;
};

/** Skeleton metadata for the single feature article page. */
export type Guide = GuideCard & {
  page: number;
};

export const guides: GuideCard[] = [
  {
    slug: 'picking-a-language-school',
    title: 'How to compare language schools',
    dek: 'Class size, nationality mix, and timetable. What to check before you pay fees.',
    topic: 'english-vet',
    date: '03.11.26',
  },
  {
    slug: 'tafe-college-or-uni',
    title: 'TAFE, private college, or university',
    dek: 'How the labels differ in timetable, fees, and outcomes.',
    topic: 'english-vet',
    date: '29.10.26',
  },
  {
    slug: 'university-pathways',
    title: 'University pathway options',
    dek: 'Foundation and diploma routes into a degree, and what each requires.',
    topic: 'university',
    date: '24.10.26',
  },
  {
    slug: 'staying-longer',
    title: 'Study and longer stay',
    dek: 'What study can and cannot do for longer stay. Rules change; confirm with official sources.',
    topic: 'university',
    date: '11.10.26',
  },
  {
    slug: 'working-holiday-or-student-visa',
    title: 'Working Holiday or student visa',
    dek: 'Purpose, work limits, and study rules side by side.',
    topic: 'working-holiday',
    date: '12.11.26',
  },
  {
    slug: 'a-normal-week-costs',
    title: 'Weekly costs in Sydney',
    dek: 'Rent, transport, and food ranges for one person in a share house.',
    topic: 'sydney-life',
    date: '08.11.26',
  },
  {
    slug: 'your-first-week',
    title: 'Your first week',
    dek: 'SIM, bank, tax file number, and room viewings in a practical order.',
    topic: 'sydney-life',
    date: '18.10.26',
  },
  {
    slug: 'part-time-work-without-a-car',
    title: 'Part-time work without a car',
    dek: 'Common entry jobs and why travel time matters for keeping a roster.',
    topic: 'working-holiday',
    date: '04.10.26',
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);

export const latestSlugs = ['picking-a-language-school', 'tafe-college-or-uni', 'university-pathways', 'staying-longer'];

/** The only article page. Layout skeleton; hero image is an empty box. */
export const featureGuide: Guide = {
  ...guides[0],
  page: 20,
};

export const fieldNotes = [
  { place: 'Hyde Park', walk: '4 min', note: 'Shade and a place to wait between classes.' },
  { place: 'World Square', walk: '6 min', note: 'Groceries, late food, a bank.' },
  { place: 'Central Station', walk: '12 min', note: 'Trains and coaches.' },
  { place: 'Surry Hills', walk: '18 min', note: 'Cafés and share houses.' },
  { place: 'UTS / TAFE', walk: '15 min', note: 'Confirm the building before day one.' },
  { place: 'Glebe Point Rd', walk: '25 min', note: 'Quieter rooms, further from Town Hall.' },
];

export const planOptions = [
  {
    id: 'wh',
    title: 'Working Holiday',
    line: 'Work and travel for up to a year.',
    badges: ['Work', 'Travel'],
  },
  {
    id: 'lang',
    title: 'Language & Experience',
    line: 'English study before or alongside work.',
    badges: ['English', 'Student visa'],
  },
  {
    id: 'vet',
    title: 'Specialised Degree / VET',
    line: 'A recognised course with a set weekly timetable.',
    badges: ['Student visa', 'Qualification'],
  },
  {
    id: 'long',
    title: 'Longer Stay',
    line: 'Options after the first year. No outcome is guaranteed.',
    badges: ['Planning only'],
  },
];

export const toolkits = [
  {
    title: 'First-week checklist',
    text: 'SIM, bank, tax number, and room viewings in order.',
    items: ['SIM card', 'Bank account', 'Tax file number', 'Room viewings'],
    href: GUIDE_HREF,
    cta: 'Open checklist',
  },
  {
    title: 'Weekly budget',
    text: 'Rent, transport, food, and extras with stated assumptions.',
    items: ['Rent and bond', 'Transport', 'Groceries', 'Eating out'],
    href: GUIDE_HREF,
    cta: 'See numbers',
  },
  {
    title: 'Questions for a school',
    text: 'What to ask before you pay.',
    items: ['Class size', 'Nationality mix', 'Level changes', 'Refund rules'],
    href: `${GUIDE_HREF}#ask`,
    cta: 'See questions',
  },
];

export const principles = [
  {
    icon: 'tea' as const,
    title: 'Free first chat',
    text: 'Thirty minutes, no fee. You are not asked to enrol or decide anything.',
  },
  {
    icon: 'calendar' as const,
    title: 'Schools we have visited',
    text: 'We recommend only places we have been to, and we note what we observed.',
  },
  {
    icon: 'notebook' as const,
    title: 'Clear options',
    text: 'We set out the main routes and trade-offs. The decision stays with you.',
  },
  {
    icon: 'map' as const,
    title: 'No immigration promises',
    text: 'We do not guarantee visas or residency. For migration advice, use a registered agent.',
  },
];

export const team = [
  {
    name: '[Counsellor name]',
    role: 'QEAC-qualified counsellor · Japanese, Korean, English',
    place: 'Town Hall · Since [Year]',
  },
  {
    name: '[Name]',
    role: 'Japanese desk',
    place: 'Surry Hills · Since [Year]',
  },
  {
    name: '[Name]',
    role: 'Arrival support',
    place: 'Glebe · Since [Year]',
  },
];

export const faq = [
  {
    q: 'How the consultation works',
    a: 'Thirty minutes on video or in person near Town Hall. You can bring a question or arrive without one. You receive a short written summary afterwards.',
  },
  {
    q: 'Partner schools and institutions',
    a: 'We work with language schools, colleges, and universities we have visited. We suggest those that match what you told us. If a better fit is outside our partners, we say so.',
  },
  {
    q: 'Arrival support in Sydney',
    a: 'Help with room viewings, first-week admin, finding school, and practical questions after you arrive. You can contact us after landing.',
  },
  {
    q: 'Does any of this cost money?',
    a: 'The first chat is free. If later work has a fee, we state it before it starts. You can stop at any point.',
  },
];

export const ticker = [
  'Town Hall, Sydney',
  'Free 30-minute chats',
  'Japanese · Korean · English',
];
