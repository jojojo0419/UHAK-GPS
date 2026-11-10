import { useEffect, useState } from 'react';
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

export default function Landing() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const [picks, setPicks] = useState<Record<number, boolean>>({});
  const [step, setStep] = useState(0);
  const [idFlip, setIdFlip] = useState(false);

  useEffect(() => {
    const onScroll = (e: Event) => {
      const t = e.target as HTMLElement | Document | null;
      if (
        t &&
        (t as HTMLElement).nodeType === 1 &&
        t !== document.documentElement &&
        t !== document.body &&
        ((t as HTMLElement).scrollHeight - (t as HTMLElement).clientHeight) < 4
      ) {
        return;
      }
      const y =
        !t || t === document || t === document.documentElement || t === document.body
          ? window.scrollY || document.documentElement.scrollTop || 0
          : (t as HTMLElement).scrollTop || 0;

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

  return (
    <div className="paper min-h-dvh bg-surface font-sans text-[13px] font-normal leading-[1.7] text-ink">
      <Header collapsed={collapsed} activeNav={activeNav} />
      <Hero />
      <FeelNotes />
      <Options
        picks={picks}
        onToggle={(id) => setPicks((p) => ({ ...p, [id]: !p[id] }))}
      />
      <WhyUs />
      <HowItWorks step={step} onStep={setStep} />
      <Schools />
      <Airmail />
      <div className="green-run bg-mint">
        <About flipped={idFlip} onFlip={() => setIdFlip((v) => !v)} />
        <Principles />
      </div>
      <Footer />
    </div>
  );
}
