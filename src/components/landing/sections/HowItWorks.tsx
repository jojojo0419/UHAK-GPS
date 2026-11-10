import { STEPS } from '../data';
import { cx, Container, PillButton, PillLink, SectionTitle } from '../ui';

type Props = {
  step: number;
  onStep: (i: number) => void;
};

export function HowItWorks({ step, onStep }: Props) {
  const cur = STEPS[step];
  const last = step === STEPS.length - 1;

  return (
    <section id="how" aria-labelledby="howTitle" className="bg-cream">
      <Container className="py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 landing:gap-x-[46px]">
          <SectionTitle id="howTitle">How it usually goes</SectionTitle>
          <p className="m-0 max-w-[302px] text-ink">
            Most agencies start once you've decided. We start at the very first sentence, and stay after you land. No
            worries if you're not sure yet.
          </p>
        </div>

        <div role="tablist" aria-label="Steps" className="journey grid grid-cols-2 gap-3 pt-2 landing:grid-cols-6">
          {STEPS.map((s, i) => {
            const sel = step === i;
            const done = i < step;
            return (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={sel}
                className={cx(
                  'tk relative flex w-full cursor-pointer flex-col items-center gap-1.5 rounded-[14px] border-[1.5px] px-2 py-4 text-center font-inherit text-ink transition-[background,box-shadow,transform] duration-250',
                  sel
                    ? 'translate-x-0.5 -translate-y-0.5 border-ink bg-surface shadow-[-4px_4px_0_#1C1E21]'
                    : 'border-ink/10 bg-surface/50',
                )}
                onClick={() => onStep(i)}
              >
                <span className="font-mono text-xs opacity-60">0{i + 1}</span>
                <img
                  src={s.icon}
                  alt=""
                  className={cx(
                    'block size-[52px] self-center transition-[filter,transform] duration-300',
                    sel && 'scale-110 drop-shadow-[0_6px_10px_rgba(0,0,0,.25)] saturate-[1.15]',
                    !sel && !done && 'grayscale opacity-45',
                  )}
                />
                <span className="text-sm font-medium">{s.title}</span>
              </button>
            );
          })}
        </div>

        <div role="tabpanel" className="flex flex-wrap items-center gap-[23px] pt-[46px] landing:gap-x-[46px]">
          <div className="flex max-w-[202px] flex-1 basis-40 items-center gap-3.5">
            <img src={cur.icon} alt="" className="block size-[98px]" />
            <div>
              <p className="m-0 font-mono text-[4rem] leading-none tracking-normal text-accent">0{step + 1}</p>
              <p className="mt-1.5 font-jp text-xs font-light tracking-[0.05em] opacity-75">{cur.ja}</p>
            </div>
          </div>

          <div className="flex max-w-[461px] flex-[999_1_302px] flex-col gap-3">
            <p className="m-0 text-lg font-normal leading-[1.45] tracking-[0.01em] text-ink">{cur.body}</p>
            <p className="m-0 text-ink">{cur.detail}</p>
            {cur.note ? <p className="m-0 text-xs text-ink opacity-75">{cur.note}</p> : null}
            <div className="mt-1 flex flex-wrap gap-2">
              {step > 0 ? (
                <PillButton muted onClick={() => onStep(step - 1)}>
                  Previous
                </PillButton>
              ) : null}
              {!last ? (
                <PillButton onClick={() => onStep(step + 1)}>Next: {STEPS[step + 1].title}</PillButton>
              ) : (
                <PillLink href="#book">Start with step 01: a free chat</PillLink>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
