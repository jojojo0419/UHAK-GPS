import type { Messages } from '../../../i18n';
import { CheckIcon, Container, KeepLines, PillLink, PrimaryLink } from '../ui';

type Props = {
  t: Messages;
};

export function Hero({ t }: Props) {
  return (
    <div className="hero-band bg-cream">
      <section id="top" className="font-sans">
        <Container className="flex flex-wrap items-center justify-center gap-10 py-16 landing:justify-start landing:py-20">
          <div className="flex min-w-[280px] w-full flex-1 basis-80 flex-col items-center gap-[17px] landing:items-start">
            <div className="wa-chat2 mx-auto flex w-full max-w-[330px] flex-col gap-1.5 landing:mx-0" aria-hidden>
              <span className="wa-b wa-b-1 relative mb-3.5 max-w-[86%] self-start rounded-[3px_12px_12px_12px] bg-surface px-3 py-2 text-[15px] leading-[1.35] text-ink shadow-[0_1px_1px_rgba(0,0,0,.06),0_4px_12px_rgba(28,30,33,.08)]">
                <span className="mb-0.5 block text-[11px] font-semibold opacity-60">UHAK GPS</span>
                {t.hero.chatAsk}
                <span className="float-right ml-2.5 mt-1.5 inline-flex items-center gap-0.5 text-[10px] text-ink/50">10:01</span>
                <span className="wa-react absolute -bottom-[15px] left-3 inline-flex h-[22px] w-[30px] items-center justify-center rounded-pill bg-surface shadow-[0_1px_2px_rgba(0,0,0,.1),0_2px_6px_rgba(28,30,33,.12)]">
                  <svg viewBox="0 0 24 22" width="14" height="13" aria-hidden>
                    <path d="M12 21 C 5 15.5, 1.5 12, 1.5 7.2 C 1.5 3.8, 4.1 1.5, 7 1.5 C 9.1 1.5, 10.9 2.7, 12 4.6 C 13.1 2.7, 14.9 1.5, 17 1.5 C 19.9 1.5, 22.5 3.8, 22.5 7.2 C 22.5 12, 19 15.5, 12 21 Z" fill="#F15C6D" />
                  </svg>
                </span>
              </span>
              <span className="wa-b wa-b-2 max-w-[86%] self-end rounded-[12px_3px_12px_12px] bg-surface px-3 py-2 text-[15px] leading-[1.35] text-ink shadow-[0_1px_1px_rgba(0,0,0,.06),0_4px_12px_rgba(28,30,33,.08)]">
                {t.hero.chatReply}
                <span className="float-right ml-2.5 mt-1.5 inline-flex items-center gap-0.5 text-[10px] text-ink/50">
                  10:02
                  <svg viewBox="0 0 16 11" width="14" height="9" aria-hidden>
                    <path d="M1 6 L4 9 L10 2 M6 9 L7 10 L15 1" fill="none" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
            </div>

            <h1 className="wa-h1 m-0 mt-1 text-center font-display text-[clamp(28px,3.4vw,44px)] font-normal leading-[1.1] tracking-[-0.01em] text-ink landing:text-left">
              <span className="sr-only">{t.hero.srChat}</span>
              <KeepLines text={t.hero.headlineLine1} forceKeep />
              <br />
              <KeepLines text={t.hero.headlineLine2} className="font-medium" forceKeep />
            </h1>

            <ul className="m-0 flex max-w-[360px] list-none flex-col items-center gap-3 p-0 landing:items-start">
              {t.hero.checks.map((text) => (
                <li key={text} className="flex items-center gap-2.5">
                  <CheckIcon />
                  <span className="text-sm leading-[1.45] text-ink whitespace-nowrap">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap justify-center gap-2 landing:justify-start">
              <PrimaryLink href="#book">{t.hero.bookCta}</PrimaryLink>
              <PillLink href="#line">{t.hero.lineCta}</PillLink>
            </div>
          </div>

          <figure className="mx-auto m-0 max-w-[300px] flex-1 basis-[300px] rotate-[3deg] bg-surface px-2.5 pt-2.5 shadow-[0_2px_4px_rgba(31,58,80,.08),0_12px_28px_rgba(31,58,80,.14)] landing:mx-0">
            <img
              src="/images/hero-polaroid-2.webp"
              alt={t.hero.polaroidAlt}
              className="aspect-[3/4] w-full object-cover"
            />
            <figcaption className="px-1 py-2.5 pb-3 font-hand text-[13px] leading-[1.2] text-ink">
              {t.hero.polaroidCaption}
            </figcaption>
          </figure>
        </Container>
      </section>
    </div>
  );
}
