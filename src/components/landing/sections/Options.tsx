import { OPTION_CARDS } from '../data';
import { cx, Container, PillLink, SectionTitle } from '../ui';

type Props = {
  picks: Record<number, boolean>;
  onToggle: (id: number) => void;
};

export function Options({ picks, onToggle }: Props) {
  const picked = OPTION_CARDS.filter((c) => picks[c.id]);

  return (
    <section id="options" aria-labelledby="optionsTitle" className="bg-cream">
      <Container className="flex flex-wrap items-start gap-8 py-[86px] pb-24">
        <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-[22px]">
          <div className="flex flex-col gap-2.5">
            <SectionTitle id="optionsTitle">Find your next chapter abroad.</SectionTitle>
            <p className="m-0 text-ink">Choose what you’re looking for. We’ll help you bridge the gap.</p>
          </div>

          <div className="opt-list flex flex-col border-b border-line">
            {OPTION_CARDS.map((card) => {
              const on = !!picks[card.id];
              return (
                <button
                  key={card.id}
                  type="button"
                  className={cx(
                    'opt-row grid w-full cursor-pointer grid-cols-[26px_minmax(0,1.1fr)_minmax(0,1fr)] items-center gap-5 border-0 border-t border-line bg-transparent px-3.5 py-[22px] text-left font-inherit text-ink transition-[background,opacity,padding] duration-250',
                    on && 'rounded-xl bg-surface shadow-[inset_0_0_0_1.5px_#1C1E21,0_6px_18px_rgba(20,32,46,.06)]',
                  )}
                  aria-pressed={on}
                  onClick={() => onToggle(card.id)}
                >
                  <span
                    aria-hidden
                    className={cx(
                      'inline-flex size-[26px] items-center justify-center rounded-full text-xs font-bold transition-all duration-250',
                      on ? 'bg-ink text-surface shadow-[inset_0_0_0_1.5px_#1C1E21]' : 'text-transparent shadow-[inset_0_0_0_1.5px_rgba(44,50,53,.25)]',
                    )}
                  >
                    ✓
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="font-display text-[clamp(16px,1.7vw,20px)] font-normal leading-[1.2] tracking-[-0.005em]">
                      {card.title}
                    </span>
                  </span>
                  <span className="flex min-w-0 flex-col gap-2">
                    <span className="text-[13px] leading-[1.55] opacity-80">{card.line}</span>
                    <span className="flex flex-wrap gap-1">
                      {card.badges.map((b) => (
                        <span
                          key={b}
                          className="rounded-pill px-2.5 py-0.5 text-[11px] font-medium text-ink shadow-[inset_0_0_0_1px_#D5D9DD]"
                        >
                          {b}
                        </span>
                      ))}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <aside aria-label="Your plan" className="sticky top-[92px] flex-1 basis-[210px] rotate-[1.2deg] pt-3">
          <div className="relative flex min-h-[260px] flex-col gap-2.5 overflow-visible rounded bg-surface bg-[repeating-linear-gradient(to_bottom,transparent_0_31px,rgba(0,128,105,.12)_31px_32px)] bg-[position:0_60px] px-[22px] py-[26px] pb-[22px] shadow-[0_1px_1px_rgba(0,0,0,.04),0_16px_20px_-14px_rgba(31,40,50,.3)]">
            <span aria-hidden className="plan-tape" />
            <span aria-hidden className="absolute bottom-0 left-4 top-0 border-l border-[rgba(229,85,59,.25)]" />
            <h3 className="mb-1 ml-2.5 font-display text-[19px] font-medium">Your Plan</h3>
            {picked.length === 0 ? (
              <p className="m-0 ml-2.5 font-hand text-sm leading-8 text-ink opacity-70">
                Click cards on the left that catch your eye.
              </p>
            ) : (
              <ul className="m-0 ml-2.5 list-none p-0">
                {picked.map((c) => (
                  <li key={c.id} className="font-hand text-base leading-8 text-accent">
                    ✓ {c.title}
                  </li>
                ))}
              </ul>
            )}
            <PillLink href="#book" className="mt-auto">
              Get Custom Roadmap →
            </PillLink>
          </div>
        </aside>
      </Container>
    </section>
  );
}
