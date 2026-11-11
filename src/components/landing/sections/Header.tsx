import type { Locale, Messages } from '../../../i18n';
import { cx, PrimaryLink } from '../ui';

type Props = {
  collapsed: boolean;
  activeNav: string;
  t: Messages;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function Header({ collapsed, activeNav, t, locale, onLocaleChange }: Props) {
  return (
    <header
      className={cx(
        'sticky z-[100] transition-[background-color,top] duration-300',
        collapsed ? 'top-3 bg-transparent pointer-events-none' : 'top-0 bg-cream',
      )}
    >
      <div
        className={cx(
          'hdr-row hdr-inner pointer-events-auto mx-auto flex max-w-content items-center gap-4 px-5 py-2 landing:gap-6 landing:px-[35px]',
          collapsed ? 'float' : 'atop',
        )}
      >
        <a href="#top" aria-label={t.a11y.home} className="flex shrink-0 items-center text-ink no-underline">
          <span className="hdr-logo font-display text-[20px] font-medium leading-none tracking-[0.06em] landing:text-[22px]">
            UHAK GPS
          </span>
        </a>

        <nav
          className="hdr-nav flex min-w-0 flex-1 flex-nowrap items-center justify-center gap-x-4 overflow-x-auto landing:gap-x-7"
          aria-label={t.a11y.mainNav}
        >
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex shrink-0 items-center justify-center py-2 text-ink no-underline"
            >
              <span
                className={cx(
                  'nl relative inline-flex whitespace-nowrap text-[12px] font-medium leading-none landing:text-[13px]',
                  activeNav === item.id && 'on',
                )}
              >
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="hdr-actions ml-auto flex shrink-0 items-center justify-end gap-2">
          <a
            href="https://www.instagram.com/gagopa_sydney"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.a11y.instagram}
            className="hidden size-9 items-center justify-center text-ink no-underline landing:inline-flex"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href={t.langSwitch.href}
            className={cx(
              'inline-flex items-center px-1 py-2 text-xs font-normal text-muted no-underline',
              t.langSwitch.label === '日本語' ? 'font-jp' : undefined,
            )}
            onClick={(e) => {
              e.preventDefault();
              onLocaleChange(locale === 'en' ? 'ja' : 'en');
            }}
          >
            {t.langSwitch.label}
          </a>
          <PrimaryLink href="#book" className="ml-1 px-3.5 text-xs leading-none landing:ml-4">
            {t.header.bookChat}
          </PrimaryLink>
        </div>
      </div>
    </header>
  );
}
