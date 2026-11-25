/**
 * Booking form schema shared by the landing (`/book/`, `/ja/book/`) and the zine (`/zine/book/`).
 *
 * Both pages post the same Netlify form (`BOOK_FORM_NAME`) with the same field names and
 * English values, so every request lands in one inbox in a consistent shape. Only the
 * visible labels are localised (see `book` in `src/i18n/`).
 */

export const BOOK_FORM_NAME = 'book-chat';

/** `id` is used for `?plan=` prefill and i18n label lookup; `value` is what Netlify stores. */
export const BOOK_TOPICS = [
  { id: 'wh', value: 'Working Holiday' },
  { id: 'lang', value: 'Language & Experience' },
  { id: 'vet', value: 'Specialised Degree / VET' },
  { id: 'long', value: 'Longer Stay' },
  { id: 'cost', value: 'Cost of living' },
  { id: 'unsure', value: 'Not sure yet' },
] as const;

export type BookTopicId = (typeof BOOK_TOPICS)[number]['id'];

/** Landing option cards (in `OPTION_IDS` order) → topic ids, for "Your Plan" prefill. */
export const OPTION_TOPIC_IDS: BookTopicId[] = ['wh', 'lang', 'vet', 'long'];

export const BOOK_LANGUAGES = [
  { value: 'ja', label: '日本語', lang: 'ja' },
  { value: 'ko', label: '한국어', lang: 'ko' },
  { value: 'en', label: 'English', lang: 'en' },
] as const;

export const BOOK_TIMINGS = [
  { id: 'exploring', value: 'Still exploring' },
  { id: 'within6', value: 'In the next 6 months' },
  { id: 'within12', value: 'In 6–12 months' },
  { id: 'here', value: 'Already in Sydney' },
] as const;

export type BookTimingId = (typeof BOOK_TIMINGS)[number]['id'];
