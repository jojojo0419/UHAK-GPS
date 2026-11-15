/**
 * Content for the /zine/ editorial edition.
 * Facts that change (visa rules, fares, rent) are written as ranges with a
 * "check before you plan" note; bracketed values are pre-launch placeholders.
 */

export type TopicId = 'working-holiday' | 'english-vet' | 'university' | 'sydney-life';

export const topics: { id: TopicId; label: string }[] = [
  { id: 'working-holiday', label: 'Working Holiday' },
  { id: 'english-vet', label: 'English & VET' },
  { id: 'university', label: 'University' },
  { id: 'sydney-life', label: 'Sydney Life' },
];

export const topicLabel = (id: TopicId) => topics.find((t) => t.id === id)?.label ?? id;

export type CoverVariant =
  | { kind: 'photo'; src: string; alt: string; tone?: 'duo' | 'duo-mint' | 'duo-sky'; position?: string }
  | { kind: 'ticket' | 'receipt' | 'stamp' | 'map' | 'type' | 'shapes' };

export type Block =
  | { t: 'p'; text: string; drop?: boolean }
  | { t: 'h'; text: string; id: string }
  | { t: 'quote'; text: string; cite?: string }
  | { t: 'list'; items: string[] }
  | { t: 'callout'; title: string; text: string }
  | { t: 'table'; caption: string; rows: [string, string][] };

export type Guide = {
  slug: string;
  title: string;
  dek: string;
  topic: TopicId;
  date: string;
  page: number;
  cover: CoverVariant;
  body: Block[];
};

export const guides: Guide[] = [
  {
    slug: 'working-holiday-or-student-visa',
    title: 'Working Holiday or student visa: how to choose',
    dek: 'Two very different years. A side-by-side for people who want to work, study, or a bit of both.',
    topic: 'working-holiday',
    date: '12.11.26',
    page: 8,
    cover: { kind: 'stamp' },
    body: [
      {
        t: 'p',
        drop: true,
        text: 'The Working Holiday visa is built for travel and work, with study as a side dish. The student visa is built for study, with work as a side dish. Almost every decision follows from which of those you want on the main plate.',
      },
      {
        t: 'table',
        caption: 'The rough shape of each (check Home Affairs for current rules)',
        rows: [
          ['Main purpose', 'WHV: holiday and work · Student: full-time study'],
          ['Age', 'WHV: usually 18–30 for Japan and Korea · Student: no upper limit'],
          ['Study', 'WHV: short courses only · Student: enrolled course required'],
          ['Work', 'WHV: full-time, with limits per employer · Student: capped hours during term'],
          ['Good for', 'WHV: a year of living here · Student: a qualification or a longer plan'],
        ],
      },
      { t: 'h', id: 'questions', text: 'Three questions that usually decide it' },
      {
        t: 'list',
        items: [
          'Do you want a certificate at the end, or a year of experience?',
          'Is your English ready for work right away, or do you want classes first?',
          'Are you hoping to stay longer than a year?',
        ],
      },
      {
        t: 'p',
        text: 'Some people start on a Working Holiday, take a short English course in the first months, and decide about study once they’re here. That is a perfectly good plan, and often a cheaper one.',
      },
      {
        t: 'callout',
        title: 'Rules change',
        text: 'Visa conditions are updated often. Treat this page as a map, and confirm the details on the Department of Home Affairs website before you apply.',
      },
    ],
  },
  {
    slug: 'a-normal-week-costs',
    title: 'What a normal week in Sydney actually costs',
    dek: 'Rent, transport, groceries and the coffee you’ll pretend not to buy. Itemised, with ranges.',
    topic: 'sydney-life',
    date: '08.11.26',
    page: 14,
    cover: { kind: 'receipt' },
    body: [
      {
        t: 'p',
        drop: true,
        text: 'Budgets lie when they use one number. Rent in Surry Hills and rent in Parramatta are different cities. So here are ranges, from a share-house life in the inner suburbs, with the assumptions written down.',
      },
      {
        t: 'table',
        caption: 'One person, share house, inner Sydney (rough, per week)',
        rows: [
          ['Room in a share house', '$280–$420'],
          ['Public transport', 'up to the weekly fare cap (around $50)'],
          ['Groceries, cooking most meals', '$80–$130'],
          ['Phone plan', '$8–$15'],
          ['Eating out and coffee', '$40–$100'],
          ['Total, give or take', '$450–$700'],
        ],
      },
      { t: 'h', id: 'what-moves-it', text: 'What moves the number' },
      {
        t: 'list',
        items: [
          'Bond: usually four weeks’ rent up front, returned when you leave.',
          'Furnished vs unfurnished rooms: a bed frame is cheap, a whole room is not.',
          'Distance: thirty minutes further out can save $80 a week, and cost you an hour a day.',
        ],
      },
      {
        t: 'quote',
        text: 'Have you actually tried walking from this area to the school?',
        cite: 'The question we ask most',
      },
      {
        t: 'p',
        text: 'Before you sign anything, we will happily walk a suburb with you on a video call, or in person if you’re already here.',
      },
    ],
  },
  {
    slug: 'picking-a-language-school',
    title: 'Picking a language school without the brochure',
    dek: 'Class size, nationality mix and the timetable matter more than the photos of the rooftop.',
    topic: 'english-vet',
    date: '03.11.26',
    page: 20,
    cover: { kind: 'ticket' },
    body: [
      {
        t: 'p',
        drop: true,
        text: 'Every language school has a rooftop photo. Very few tell you how many students share your nationality, or whether the afternoon class is real teaching or a movie. Those are the things that decide whether your English actually improves.',
      },
      { t: 'h', id: 'ask', text: 'Questions to ask before you pay' },
      {
        t: 'list',
        items: [
          'How many students are in a class, on average, this month?',
          'What is the nationality mix in the level I would join?',
          'How often do I move up a level, and who decides?',
          'Can I try a class before I commit to more weeks?',
          'What happens to my fees if I change schools?',
        ],
      },
      {
        t: 'p',
        text: 'We have visited the schools we suggest, and we will tell you what we noticed: the quiet ones, the social ones, and the ones we wouldn’t pick for you.',
      },
      {
        t: 'callout',
        title: 'Our rule',
        text: 'We only suggest schools that fit what you told us. If the best fit is one we don’t work with, we will say so.',
      },
    ],
  },
  {
    slug: 'tafe-college-or-uni',
    title: 'TAFE, private college, or uni? Reading the fine print',
    dek: 'Three kinds of “course”, three very different weeks. What the labels mean in practice.',
    topic: 'english-vet',
    date: '29.10.26',
    page: 26,
    cover: { kind: 'shapes' },
    body: [
      {
        t: 'p',
        drop: true,
        text: 'Vocational courses (VET) teach you to do a job: hospitality, business, IT support, early childhood. They are offered by public TAFE institutes and by private colleges. Universities teach degrees. The difference shows up in your timetable, your fees, and what employers think the certificate means.',
      },
      {
        t: 'table',
        caption: 'How they usually compare',
        rows: [
          ['Public TAFE', 'Larger campuses, steady quality, fewer start dates'],
          ['Private college', 'Flexible timetables, more variety, quality varies a lot'],
          ['University', 'Degrees, higher fees, entry requirements for English'],
        ],
      },
      { t: 'h', id: 'timetable', text: 'Look at the timetable, not the title' },
      {
        t: 'p',
        text: 'Two colleges can sell the same certificate with very different weeks. One teaches three days in person; the other is two evenings and online work. Neither is wrong, but only one of them fits a part-time job on weekdays.',
      },
      {
        t: 'quote',
        text: 'Ask to see a real week’s timetable. If they can’t show you one, that tells you something.',
      },
    ],
  },
  {
    slug: 'university-pathways',
    title: 'University pathways for people who aren’t sure yet',
    dek: 'Foundation, diploma, then degree: the slower road in is often the smarter one.',
    topic: 'university',
    date: '24.10.26',
    page: 32,
    cover: { kind: 'shapes' },
    body: [
      {
        t: 'p',
        drop: true,
        text: 'If your English score or grades don’t meet direct entry, a pathway course can take you into the second year of a degree. It costs time, but it also gives you a year to find out whether the subject is really yours.',
      },
      { t: 'h', id: 'shape', text: 'The usual shape' },
      {
        t: 'list',
        items: [
          'English for academic purposes, if your score needs it.',
          'A foundation year or diploma linked to a specific university.',
          'Entry into the degree, sometimes with credit for what you’ve done.',
        ],
      },
      {
        t: 'p',
        text: 'The catch is that each pathway is tied to one university. Pick the university first, then check that its pathway leads to the degree you actually want.',
      },
      {
        t: 'callout',
        title: 'Not sure about uni at all?',
        text: 'That is a fine place to start a chat. Lots of people find a vocational course or a Working Holiday answers the question for them.',
      },
    ],
  },
  {
    slug: 'your-first-week',
    title: 'Your first week: rooms, transport, phone, bank',
    dek: 'A calm order of operations for the first seven days, so nothing urgent catches you out.',
    topic: 'sydney-life',
    date: '18.10.26',
    page: 38,
    cover: { kind: 'ticket' },
    body: [
      {
        t: 'p',
        drop: true,
        text: 'The first week is mostly small admin that feels big because everything is new. Do it in this order and most of it is done by Wednesday.',
      },
      {
        t: 'list',
        items: [
          'Day 1: a SIM card at the airport or a supermarket, so you can receive codes.',
          'Day 1: tap on with a contactless bank card; buy a transport card later if you want one.',
          'Day 2: open a local bank account; bring your passport and address.',
          'Day 2–3: apply for a tax file number online if you plan to work.',
          'Day 3–7: view rooms in person before you pay any bond.',
        ],
      },
      { t: 'h', id: 'rooms', text: 'About rooms' },
      {
        t: 'p',
        text: 'Never pay a bond for a room you haven’t seen, in person or on a live video call. Ask who else lives there, what the bills include, and how much notice you need to give.',
      },
      {
        t: 'quote',
        text: 'You could probably manage without a car around here.',
        cite: 'Said about most of the inner city',
      },
    ],
  },
  {
    slug: 'staying-longer',
    title: 'Can studying here lead to staying longer? An honest answer',
    dek: 'Sometimes. Never guaranteed. Here is how to think about it without being sold a dream.',
    topic: 'university',
    date: '11.10.26',
    page: 44,
    cover: { kind: 'map' },
    body: [
      {
        t: 'p',
        drop: true,
        text: 'Some people study in Australia and later qualify to stay longer. Many don’t, and the rules change often. Anyone who promises you residency is selling you something they can’t control.',
      },
      { t: 'h', id: 'what-we-do', text: 'What we can honestly do' },
      {
        t: 'list',
        items: [
          'Explain how longer-stay options generally work, in plain words.',
          'Help you choose a course you would value even if you go home after it.',
          'Point you to registered migration agents when you need formal advice.',
        ],
      },
      {
        t: 'quote',
        text: 'Choose a course you’d be glad you did even if you leave. Everything else is a bonus.',
      },
      {
        t: 'callout',
        title: 'Formal advice',
        text: 'Immigration advice in Australia must come from a registered migration agent or lawyer. We will tell you when your question has reached that point.',
      },
    ],
  },
  {
    slug: 'part-time-work-without-a-car',
    title: 'Finding part-time work without a car',
    dek: 'Cafés, kitchens, retail and the walking-distance rule that makes a job last.',
    topic: 'working-holiday',
    date: '04.10.26',
    page: 50,
    cover: {
      kind: 'photo',
      src: '/images/hero-polaroid-1.webp',
      alt: 'Smiling student in a checked shirt outdoors among trees',
      tone: 'duo-mint',
      position: '55% 35%',
    },
    body: [
      {
        t: 'p',
        drop: true,
        text: 'The job you can walk to is the job you keep. Early shifts and late closes are hard when the last bus is the only way home, so start your search in a circle around where you live.',
      },
      { t: 'h', id: 'where', text: 'Where people usually start' },
      {
        t: 'list',
        items: [
          'Cafés and bakeries: early starts, weekend work, barista skills help.',
          'Kitchens: hand, prep and dish roles hire often, English needs are lower.',
          'Retail: rostered shifts, good for practising everyday English.',
        ],
      },
      {
        t: 'p',
        text: 'Know your rights before your first shift: there is a minimum wage, payslips are required, and cash-only jobs with no records leave you unprotected. The Fair Work Ombudsman explains it in many languages.',
      },
      {
        t: 'callout',
        title: 'Bring a short résumé',
        text: 'One page, a local phone number, and the hours you can work. Hand it in mid-afternoon, when it’s quiet.',
      },
    ],
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);

export const featuredSlugs = ['working-holiday-or-student-visa', 'a-normal-week-costs', 'your-first-week'];
export const latestSlugs = ['picking-a-language-school', 'tafe-college-or-uni', 'university-pathways', 'staying-longer'];

export const fieldNotes = [
  { place: 'Hyde Park', walk: '4 min', note: 'Shade and a place to wait between classes.' },
  { place: 'World Square', walk: '6 min', note: 'Groceries, late food, a bank.' },
  { place: 'Central Station', walk: '12 min', note: 'Trains and coaches.' },
  { place: 'Surry Hills', walk: '18 min', note: 'Cafés and share houses.' },
  { place: 'UTS / TAFE', walk: '15 min', note: 'Check the building before day one.' },
  { place: 'Glebe Point Rd', walk: '25 min', note: 'Quieter rooms, a bit further out.' },
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
    title: 'Language school',
    line: 'Improve English before or alongside work.',
    badges: ['English', 'Student visa'],
  },
  {
    id: 'vet',
    title: 'VET / college',
    line: 'A recognised course with a clearer weekly timetable.',
    badges: ['Student visa', 'Qualification'],
  },
  {
    id: 'long',
    title: 'Longer stay',
    line: 'Options after the first year — with no promises.',
    badges: ['Planning only'],
  },
];

export const toolkits = [
  {
    fill: 'bg-card-sand',
    title: 'First-week checklist',
    text: 'SIM, bank, tax number, rooms — in a sensible order.',
    items: ['SIM card', 'Bank account', 'Tax file number', 'Room viewings'],
    href: '/zine/guides/your-first-week/',
    cta: 'Open checklist',
  },
  {
    fill: 'bg-mint',
    title: 'Weekly budget',
    text: 'Rent, transport, food and extras, with the assumptions written down.',
    items: ['Rent and bond', 'Transport', 'Groceries', 'Eating out'],
    href: '/zine/guides/a-normal-week-costs/',
    cta: 'See numbers',
  },
  {
    fill: 'bg-card-sky',
    title: 'Questions for a school',
    text: 'What to ask before you pay.',
    items: ['Class size', 'Nationality mix', 'Level changes', 'Refund rules'],
    href: '/zine/guides/picking-a-language-school/#ask',
    cta: 'See questions',
  },
];

export const principles = [
  {
    art: 'hand' as const,
    title: 'No pressure',
    text: 'The first chat is free. You can leave with no plan.',
  },
  {
    art: 'magnifier' as const,
    title: 'We visit schools',
    text: 'We only suggest places we’ve been to, and we say what we saw.',
  },
  {
    art: 'compass' as const,
    title: 'You decide',
    text: 'We lay out options and trade-offs. The choice stays with you.',
  },
  {
    art: 'bubble' as const,
    title: 'No false promises',
    text: 'We don’t guarantee visas or residency. For migration advice, see a registered agent.',
  },
];

export const team = [
  {
    name: '[Counsellor name]',
    role: 'Counsellor · Japanese, Korean, English',
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
    q: 'How our 1:1 consultation works',
    a: 'Thirty minutes on video or in person near Town Hall. Bring a question, or nothing yet. You leave with a short summary of what we discussed.',
  },
  {
    q: 'Partner schools & institutions',
    a: 'We work with language schools, colleges and universities we have visited. We only suggest the ones that fit what you told us, and we will tell you if the best fit is somewhere we don’t work with.',
  },
  {
    q: 'Arrival support in Sydney',
    a: 'Room viewings, the first-week admin, finding your way to school, and the questions that only come up once you’re here. You can message us long after you land.',
  },
  {
    q: 'Does any of this cost money?',
    a: 'The first chat is free. If anything after that has a cost, we tell you clearly before it does, and you can stop at any point.',
  },
];

export const ticker = [
  'Town Hall, Sydney',
  'Free 30-minute chats',
  'Japanese · Korean · English',
];

export const OFFICE = '250 Pitt St, Sydney NSW 2000';
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=250+Pitt+St%2C+Sydney+NSW+2000';
