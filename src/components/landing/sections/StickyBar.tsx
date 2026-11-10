import { ASK_CHIPS } from '../data';
import { cx } from '../ui';

type Props = {
  asked: string;
  onAsk: (q: string) => void;
  onClose: () => void;
};

export function StickyBar({ asked, onAsk, onClose }: Props) {
  return (
    <div
      role="region"
      aria-label="Free chat"
      className="fixed bottom-3.5 left-1/2 z-[1000] flex w-max max-w-[calc(100%-23px)] -translate-x-1/2 flex-wrap items-center gap-2 rounded-[14px] bg-accent px-3.5 py-2 text-surface shadow-[0_7px_22px_rgba(0,0,0,0.15)] box-border"
    >
      <div className="-rotate-[5deg] shrink-0 rounded-sm bg-surface px-[3px] pb-2 pt-[3px] shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
        <div className="flex size-9 items-center justify-center rounded-sm bg-[#F3E7D3]">
          <img src="/images/sticky-avatar.webp" alt="" className="block size-8" />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 basis-56 flex-col gap-1">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-xs font-normal tracking-[0.01em] text-surface">
            {asked ? 'Good question. Bring it to your chat.' : 'Been wondering…'}
          </span>
          <span className="font-jp text-[13px] font-bold tracking-[0.03em] text-surface">まずは30分、話してみませんか。</span>
        </div>
        <div className="fb-tags flex flex-wrap gap-1">
          {ASK_CHIPS.map((q) => {
            const on = asked === q;
            return (
              <button
                key={q}
                type="button"
                aria-pressed={on}
                className={cx(
                  'min-h-5 cursor-pointer rounded-pill border border-surface/60 px-2 py-0.5 text-xs tracking-[0.03em]',
                  on ? 'bg-surface text-accent' : 'bg-transparent text-surface',
                )}
                onClick={() => onAsk(on ? '' : q)}
              >
                {q}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-0.5 border-l-[1.5px] border-dashed border-surface/55 pl-2.5">
        <a
          href="#book"
          className="inline-flex min-h-7 items-center whitespace-nowrap rounded-pill bg-surface px-3 py-1.5 text-xs font-medium tracking-[0.01em] text-ink no-underline"
        >
          Book a free chat
        </a>
        <button
          type="button"
          aria-label="Close"
          className="inline-flex size-8 cursor-pointer items-center justify-center border-0 bg-transparent p-0"
          onClick={onClose}
        >
          <span className="inline-flex size-[17px] items-center justify-center rounded-full bg-surface/80">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
              <path d="M1 1 L9 9 M9 1 L1 9" stroke="#1C1E21" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
