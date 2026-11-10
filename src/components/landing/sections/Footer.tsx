import { Container } from '../ui';

const LINKS = [
  { href: '#options', label: 'Services' },
  { href: '#how', label: 'Courses' },
  { href: '#about', label: 'About us' },
  { href: '#book', label: 'Quick quotation' },
  { href: '#book', label: 'Free chat' },
];

export function Footer() {
  return (
    <footer className="bg-ink-deep text-surface">
      <Container className="flex flex-col gap-9 pb-[110px] pt-16">
        <div className="flex flex-wrap items-start justify-between gap-7 landing:gap-x-12">
          <div className="flex max-w-[320px] flex-col gap-2.5">
            <span className="font-display text-[22px] font-medium tracking-[0.06em]">UHAK GPS</span>
            <span className="text-[13px] leading-[1.6] text-surface/70">
              An Australia-specialist study-abroad agency for people who are still figuring it out.
            </span>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3 text-[13px] font-medium">
            {LINKS.map((l) => (
              <a key={`${l.href}-${l.label}`} href={l.href} className="text-surface no-underline hover:text-surface">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-surface/14 pt-5 text-xs text-surface/60">
          <span>Sydney, Australia · Free 30-minute consultations</span>
          <span>© 2026 UHAK GPS</span>
        </div>
      </Container>
    </footer>
  );
}
