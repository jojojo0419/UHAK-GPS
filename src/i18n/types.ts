/** Supported locales. Add `'ko'` when Korean ships. */
export type Locale = 'en' | 'ja';

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  langSwitch: {
    label: string;
    href: string;
  };
  a11y: {
    home: string;
    mainNav: string;
    footerNav: string;
    steps: string;
    yourPlan: string;
    beliefs: string;
    idCard: string;
    openMaps: string;
    freeChat: string;
    close: string;
    instagram: string;
  };
  nav: Array<{ href: string; id: string; label: string }>;
  header: {
    bookChat: string;
  };
  hero: {
    chatAsk: string;
    chatReply: string;
    srChat: string;
    headlineLine1: string;
    headlineLine2: string;
    checks: string[];
    bookCta: string;
    lineCta: string;
    polaroidAlt: string;
    polaroidCaption: string;
  };
  feel: {
    title: string;
    lead: string;
    notes: Array<{
      text: string;
      highlightPrefix?: string;
      highlightMarked?: string;
    }>;
  };
  options: {
    title: string;
    lead: string;
    planTitle: string;
    planEmpty: string;
    roadmapCta: string;
    cards: Array<{ title: string; line: string; badges: string[] }>;
  };
  why: {
    title: string;
    items: Array<{ was: string; now: string }>;
  };
  how: {
    title: string;
    previous: string;
    nextPrefix: string;
    startCta: string;
    steps: Array<{
      title: string;
      flourish: string;
      body: string;
      detail: string;
      note: string;
    }>;
  };
  schools: {
    title: string;
    lead: string;
    seeAll: string;
    cols: Array<{
      label: string;
      items: Array<{ name: string; meta: string }>;
    }>;
  };
  airmail: string[];
  about: {
    title: string;
    body: string;
    quotes: string[];
    localId: string;
    nameLabel: string;
    sinceLabel: string;
    meetLabel: string;
    askLabel: string;
    askTopics: string[];
    tipFlip: string;
    tipMap: string;
    counsellor: {
      name: string;
      since: string;
      meetUs: string;
    };
  };
  principles: {
    title: string;
    lead: string;
    items: Array<{ title: string; line: string }>;
  };
  footer: {
    blurb: string;
    links: Array<{ href: string; label: string }>;
    location: string;
    copyright: string;
  };
  sticky: {
    wondering: string;
    asked: string;
    jaLine: string;
    bookChat: string;
    chips: string[];
  };
};
