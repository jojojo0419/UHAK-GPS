import type { Messages } from '../../../i18n';

const ICONS = [
  function Plane() {
    return (
      <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden>
        <path
          d="M2 13 L22 4 L15 21 L11.5 14.5 Z M11.5 14.5 L22 4"
          fill="none"
          stroke="#008069"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  function Compass() {
    return (
      <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden>
        <circle cx="12" cy="12" r="9.5" fill="none" stroke="#008069" strokeWidth="1.3" />
        <path d="M12 4 L14 12 L12 20 L10 12 Z" fill="none" stroke="#008069" strokeWidth="1.2" />
        <path d="M4 12 H6 M18 12 H20" stroke="#008069" strokeWidth="1.2" />
      </svg>
    );
  },
  function Horizon() {
    return (
      <svg viewBox="0 0 28 20" width="22" height="16" aria-hidden>
        <path d="M7 12 A7 7 0 0 1 21 12" fill="none" stroke="#008069" strokeWidth="1.4" />
        <path
          d="M14 2 V0.5 M5.5 5 L4.5 4 M22.5 5 L23.5 4"
          stroke="#008069"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M1 16 C 4 13.5, 7 18.5, 10 16 S 16 13.5, 19 16 S 24 18.5, 27 16"
          fill="none"
          stroke="#008069"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  },
] as const;

function Track({ labels, prefix }: { labels: string[]; prefix: string }) {
  return (
    <>
      {labels.map((label, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <span key={`${prefix}-${i}`} className="inline-flex items-center gap-[26px]">
            <span className="text-xs font-medium uppercase tracking-[0.28em]">{label}</span>
            <Icon />
          </span>
        );
      })}
    </>
  );
}

type Props = {
  t: Messages;
};

export function Airmail({ t }: Props) {
  // Identical halves (each = 4 phrase cycles) so translateX(-50%) loops forever.
  const half = [0, 1, 2, 3];
  return (
    <div className="airmail" aria-hidden>
      <div className="ticker-track">
        {half.map((n) => (
          <Track key={`a-${n}`} prefix={`a${n}`} labels={t.airmail} />
        ))}
        {half.map((n) => (
          <Track key={`b-${n}`} prefix={`b${n}`} labels={t.airmail} />
        ))}
      </div>
    </div>
  );
}
