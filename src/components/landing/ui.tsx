import type { ComponentProps, ReactNode } from 'react';

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx('mx-auto w-full max-w-content px-5 landing:px-[35px]', className)}>{children}</div>;
}

export function SectionTitle({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <h2
      id={id}
      className={cx(
        'm-0 font-display text-[clamp(21px,2.8vw,38px)] font-normal leading-[1.15] tracking-[0.01em] text-ink',
        className,
      )}
    >
      {children}
    </h2>
  );
}

const btnBase =
  'inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-pill border-[1.5px] px-4 text-[13px] font-medium no-underline transition duration-200 ease-out';

export function PrimaryLink({ className, ...props }: ComponentProps<'a'>) {
  return (
    <a
      {...props}
      className={cx(
        btnBase,
        'border-ink bg-primary text-ink hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[-4px_4px_0_#1C1E21]',
        className,
      )}
    />
  );
}

export function PillLink({ className, muted, ...props }: ComponentProps<'a'> & { muted?: boolean }) {
  return (
    <a
      {...props}
      className={cx(
        btnBase,
        muted
          ? 'border-accent/35 bg-transparent text-accent hover:border-ink hover:bg-ink hover:text-surface'
          : 'border-accent bg-transparent text-accent hover:border-ink hover:bg-ink hover:text-surface',
        className,
      )}
    />
  );
}

export function PillButton({ className, muted, ...props }: ComponentProps<'button'> & { muted?: boolean }) {
  return (
    <button
      type="button"
      {...props}
      className={cx(
        btnBase,
        'cursor-pointer font-inherit',
        muted
          ? 'border-accent/35 bg-transparent text-accent hover:border-ink hover:bg-ink hover:text-surface'
          : 'border-accent bg-transparent text-accent hover:border-ink hover:bg-ink hover:text-surface',
        className,
      )}
    />
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cx('inline-flex size-[18px] shrink-0 items-center justify-center rounded-full bg-accent', className)}
    >
      <svg viewBox="0 0 16 16" width="10" height="10" aria-hidden>
        <path d="M3.2 8.2 L6.4 11.2 L12.8 4.6" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
