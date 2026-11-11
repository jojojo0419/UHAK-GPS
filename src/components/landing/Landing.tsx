import { useEffect, useMemo, useState } from 'react';
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

export default function Landing({ locale: initialLocale }: Props) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [visible, setVisible] = useState(true);
  const t = useMemo(() => getMessages(locale), [locale]);
  const [collapsed, setCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const [picks, setPicks] = useState<Record<number, boolean>>({});
  const [step, setStep] = useState(0);
  const [idFlip, setIdFlip] = useState(false);

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

  useEffect(() => {
    const onPopState = () => {
      const next: Locale = location.pathname.startsWith('/ja') ? 'ja' : 'en';
      setLocale(next);
      applyDocumentLocale(next);
      setVisible(true);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const switchLocale = (next: Locale) => {
    if (next === locale) return;
    setVisible(false);
    window.setTimeout(() => {
      setLocale(next);
      applyDocumentLocale(next);
      window.history.pushState({ locale: next }, '', pathForLocale(next));
      setVisible(true);
    }, 180);
  };

  return (
    <div
      className={cx(
        'paper min-h-dvh bg-surface font-sans text-[13px] font-normal leading-[1.7] text-ink transition-opacity duration-200 ease-out',
        visible ? 'opacity-100' : 'opacity-0',
      )}
    >
      <Header
        collapsed={collapsed}
        activeNav={activeNav}
        t={t}
        locale={locale}
        onLocaleChange={switchLocale}
      />
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
  );
}
