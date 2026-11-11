import { startTransition, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getMessages, type Locale } from '../../i18n';
import { cx } from './ui';
import { About } from './sections/About';
import { Airmail } from './sections/Airmail';
import { FeelNotes } from './sections/FeelNotes';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { Options } from './sections/Options';
import { Principles } from './sections/Principles';
import { Schools } from './sections/Schools';
import { WhyUs } from './sections/WhyUs';

type Props = {
  locale: Locale;
};

/** Soft crossfade — dim, never fully hide (avoids the old blink). */
const FADE_OUT_MS = 140;

function pathForLocale(locale: Locale) {
  return locale === 'ja' ? '/ja/' : '/';
}

function applyDocumentLocale(locale: Locale) {
  const t = getMessages(locale);
  document.documentElement.lang = locale;
  document.title = t.meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', t.meta.description);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', `${location.origin}${pathForLocale(locale)}`);
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function Landing({ locale: initialLocale }: Props) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const t = useMemo(() => getMessages(locale), [locale]);
  const [collapsed, setCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const [picks, setPicks] = useState<Record<number, boolean>>({});
  const [step, setStep] = useState(0);
  const [idFlip, setIdFlip] = useState(false);
  /** 1 = full, ~0.45 = soft dim during locale swap */
  const [contentOpacity, setContentOpacity] = useState(1);
  const localeRef = useRef(locale);
  const switching = useRef(false);
  const timers = useRef<number[]>([]);

  localeRef.current = locale;

  const clearTimers = () => {
    for (const id of timers.current) window.clearTimeout(id);
    timers.current = [];
  };

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    const onScroll = (e: Event) => {
      const target = e.target as HTMLElement | Document | null;
      if (
        target &&
        (target as HTMLElement).nodeType === 1 &&
        target !== document.documentElement &&
        target !== document.body &&
        (target as HTMLElement).scrollHeight - (target as HTMLElement).clientHeight < 4
      ) {
        return;
      }
      const y =
        !target || target === document || target === document.documentElement || target === document.body
          ? window.scrollY || document.documentElement.scrollTop || 0
          : (target as HTMLElement).scrollTop || 0;

      setCollapsed((c) => {
        if (!c && y > 90) return true;
        if (c && y < 30) return false;
        return c;
      });

      let act = '';
      for (const id of ['options', 'how', 'about'] as const) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) act = id;
      }
      setActiveNav(act);
    };

    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  }, []);

  const softSwitch = useCallback((next: Locale, push: boolean) => {
    if (next === localeRef.current || switching.current) return;

    const commit = () => {
      startTransition(() => {
        setLocale(next);
        applyDocumentLocale(next);
        if (push) window.history.pushState({ locale: next }, '', pathForLocale(next));
      });
    };

    if (prefersReducedMotion()) {
      commit();
      return;
    }

    switching.current = true;
    clearTimers();
    setContentOpacity(0.45);

    timers.current.push(
      window.setTimeout(() => {
        commit();
        timers.current.push(
          window.setTimeout(() => {
            setContentOpacity(1);
            switching.current = false;
          }, 20),
        );
      }, FADE_OUT_MS),
    );
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const next: Locale = location.pathname.startsWith('/ja') ? 'ja' : 'en';
      softSwitch(next, false);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [softSwitch]);

  return (
    <div className="paper min-h-dvh bg-surface font-sans text-[13px] font-normal leading-[1.7] text-ink">
      <Header
        collapsed={collapsed}
        activeNav={activeNav}
        t={t}
        locale={locale}
        onLocaleChange={(next) => softSwitch(next, true)}
      />
      <div
        className={cx('transition-opacity ease-out', contentOpacity < 1 ? 'duration-150' : 'duration-200')}
        style={{ opacity: contentOpacity }}
      >
        <Hero t={t} />
        <FeelNotes t={t} />
        <Options picks={picks} onToggle={(id) => setPicks((p) => ({ ...p, [id]: !p[id] }))} t={t} />
        <WhyUs t={t} />
        <HowItWorks step={step} onStep={setStep} t={t} />
        <Schools t={t} />
        <Airmail t={t} />
        <div className="green-run bg-mint">
          <About flipped={idFlip} onFlip={() => setIdFlip((v) => !v)} t={t} />
          <Principles t={t} />
        </div>
        <Footer t={t} />
      </div>
    </div>
  );
}
