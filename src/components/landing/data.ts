/** Non-copy landing structure. User-facing strings live in `src/i18n/`. */

export const NOTE_META = [
  {
    bg: 'bg-note-yellow',
    tilt: '-rotate-[1.5deg]',
    offset: '',
    tape: 'rotate-[-3deg]',
    span: 'col-span-2',
    type: 'text-[15px] font-normal leading-snug',
  },
  {
    bg: 'bg-note-blue',
    tilt: 'rotate-[1.2deg]',
    offset: 'translate-y-[18px]',
    tape: 'rotate-[2deg]',
    span: 'col-span-2',
    type: 'text-[18px] font-medium leading-tight',
  },
  {
    bg: 'bg-note-mint',
    tilt: '-rotate-[1deg]',
    offset: '',
    tape: 'rotate-[-2deg]',
    span: 'col-span-2',
    type: 'text-[15px] font-normal leading-snug',
  },
  {
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
    bg: 'bg-[#FFE4EC]',
    tilt: '-rotate-[1.8deg]',
    offset: '',
    tape: 'rotate-[-2.5deg]',
    span: 'col-start-4 col-span-2',
    type: 'text-[18px] font-normal leading-snug',
  },
] as const;

export const OPTION_IDS = [1, 2, 3, 4] as const;

export const STEP_ICONS = [
  '/images/step-1.webp',
  '/images/step-2.webp',
  '/images/step-3.webp',
  '/images/step-4.webp',
  '/images/step-5.webp',
  '/images/step-6.webp',
] as const;

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=250+Pitt+St%2C+Sydney+NSW+2000';

export const OFFICE = '250 Pitt St, Sydney NSW 2000';
