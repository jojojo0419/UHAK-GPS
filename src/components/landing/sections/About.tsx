import type { Messages } from '../../../i18n';
import { MAPS_URL } from '../data';
import { cx, Container, SectionTitle } from '../ui';

type Props = {
  flipped: boolean;
  onFlip: () => void;
  t: Messages;
};

export function About({ flipped, onFlip, t }: Props) {
  return (
    <section id="about" aria-labelledby="aboutTitle" className="bg-transparent text-ink">
      <Container className="flex flex-wrap items-center justify-center gap-10 py-[86px] landing:justify-start">
        <div className="flex w-full flex-[999_1_360px] flex-col gap-4">
          <SectionTitle id="aboutTitle">{t.about.title}</SectionTitle>
          <p className="m-0 max-w-[403px] text-ink">{t.about.body}</p>
          <div className="mt-2 flex flex-wrap gap-x-2.5 gap-y-4">
            {t.about.quotes.map((q, i) => (
              <div key={q} className="relative flex-1 basis-40 rounded-[12px] bg-surface px-4 py-3.5">
                <span
                  aria-hidden
                  className={cx(
                    'absolute bottom-[-6px] size-2.5 rotate-45 bg-surface',
                    i === 0 && 'left-[19px]',
                    i === 1 && 'left-1/2',
                    i === 2 && 'right-[19px]',
                  )}
                />
                <p className="m-0 text-[13px] font-normal italic leading-[1.5] tracking-[0.02em] text-ink">{q}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[331px] flex-1 basis-[274px] flex-col items-center gap-0">
          <div aria-hidden className="h-[39px] w-[13px] rounded-sm bg-accent" />
          <div aria-hidden className="-mt-0.5 h-2.5 w-[22px] rounded bg-primary" />

          <div
            role="button"
            tabIndex={0}
            aria-pressed={flipped}
            aria-label={t.a11y.idCard}
            className="mt-1 w-full cursor-pointer rotate-[2deg] border-0 bg-transparent p-0 text-left font-inherit text-ink [perspective:1008px]"
            onClick={onFlip}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onFlip();
              }
            }}
          >
            <div
              className={cx(
                'idflip grid transition-transform duration-700 ease-[cubic-bezier(.3,.7,.2,1)] [transform-style:preserve-3d]',
                flipped && '[transform:rotateY(180deg)]',
              )}
            >
              <div className="col-start-1 row-start-1 [backface-visibility:hidden]">
                <div className="flex h-full min-h-[200px] flex-col overflow-hidden rounded-[12px] bg-surface shadow-[0_2px_3px_rgba(31,58,80,0.08),0_10px_20px_rgba(31,58,80,0.12)]">
                  <div className="relative flex items-baseline justify-between gap-2 bg-accent px-3.5 py-3 text-surface">
                    <span className="text-xs font-medium tracking-[0.22em]">UHAK GPS</span>
                    <span className="text-xs tracking-[0.08em]">{t.about.localId}</span>
                  </div>
                  <div className="flex flex-1 items-start gap-3 px-3.5 py-4 pb-5">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.a11y.openMaps}
                      className="relative block h-[92px] w-[72px] shrink-0 overflow-hidden rounded-md bg-[#F7F1E6] no-underline shadow-[inset_0_0_0_1px_rgba(28,30,33,.08)]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src="/images/id-map.png"
                        alt=""
                        className="absolute inset-0 size-full object-cover object-center"
                      />
                    </a>
                    <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                      <div>
                        <span className="block font-mono text-xs uppercase tracking-[0.12em] opacity-70">
                          {t.about.nameLabel}
                        </span>
                        <span className="block text-[13px] font-medium leading-[1.35] tracking-[0.02em]">
                          {t.about.counsellor.name}
                        </span>
                      </div>
                      <div>
                        <span className="block font-mono text-xs uppercase tracking-[0.12em] opacity-70">
                          {t.about.sinceLabel}
                        </span>
                        <span className="block text-[13px] font-medium leading-[1.35] tracking-[0.02em]">
                          {t.about.counsellor.since}
                        </span>
                      </div>
                      <div>
                        <span className="block font-mono text-xs uppercase tracking-[0.12em] opacity-70">
                          {t.about.meetLabel}
                        </span>
                        <span className="block text-[13px] font-medium leading-[1.35] tracking-[0.02em]">
                          {t.about.counsellor.meetUs}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-start-1 row-start-1 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex h-full min-h-[200px] flex-col overflow-hidden rounded-[12px] bg-surface shadow-[0_2px_3px_rgba(31,58,80,0.08),0_10px_20px_rgba(31,58,80,0.12)]">
                  <div className="relative flex items-baseline justify-between gap-2 bg-accent px-3.5 py-3 text-surface">
                    <span className="text-xs font-medium tracking-[0.22em]">UHAK GPS</span>
                    <span className="text-xs tracking-[0.08em]">{t.about.localId}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 px-3.5 py-4 pb-5">
                    <span className="block font-mono text-xs uppercase tracking-[0.12em] opacity-70">
                      {t.about.askLabel}
                    </span>
                    <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[13px]">
                      {t.about.askTopics.map((topic) => (
                        <li key={topic} className="border-b border-accent/25 pb-2">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-2.5 text-center text-xs leading-[1.45] tracking-[0.01em] opacity-75">
            <span className="inline-block whitespace-nowrap">{t.about.tipFlip}</span>
            <br />
            <span className="inline-block whitespace-nowrap">{t.about.tipMap}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
