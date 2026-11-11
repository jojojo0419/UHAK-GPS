import { en } from './en';
import { ja } from './ja';
import type { Locale, Messages } from './types';

export type { Locale, Messages };

/** Add `ko` here when Korean is ready. */
export const locales: Locale[] = ['en', 'ja'];

export const defaultLocale: Locale = 'en';

const catalog: Record<Locale, Messages> = { en, ja };

export function getMessages(locale: Locale): Messages {
  return catalog[locale] ?? catalog[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
