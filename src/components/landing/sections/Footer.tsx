import type { Messages } from '../../../i18n';
import { Container } from '../ui';

type Props = {
  t: Messages;
};

export function Footer({ t }: Props) {
  return (
    <footer className="bg-ink-deep text-surface">
      <Container className="flex flex-col gap-9 pb-[110px] pt-16">
        <div className="flex flex-wrap items-start justify-between gap-7 landing:gap-x-12">
          <div className="flex max-w-[320px] flex-col gap-2.5">
            <span className="ftr-logo font-display text-[22px] font-medium tracking-[0.06em]">UHAK GPS</span>
            <span className="text-[13px] leading-[1.6] text-surface/70">{t.footer.blurb}</span>
          </div>
          <nav aria-label={t.a11y.footerNav} className="flex flex-wrap gap-x-7 gap-y-3 text-[13px] font-medium">
            {t.footer.links.map((l) => (
              <a key={`${l.href}-${l.label}`} href={l.href} className="text-surface no-underline hover:text-surface">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-surface/14 pt-5 text-xs text-surface/60">
          <span>{t.footer.location}</span>
          <span>{t.footer.copyright}</span>
        </div>
      </Container>
    </footer>
  );
}
