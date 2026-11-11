import type { Messages } from '../../../i18n';
import { Container, KeepLines, SectionTitle } from '../ui';

type Props = {
  t: Messages;
};

export function Principles({ t }: Props) {
  return (
    <section id="principles" aria-labelledby="principlesTitle">
      <Container className="py-20 pb-[86px]">
        <div className="flex flex-wrap items-start gap-7 landing:gap-x-14">
          <div className="flex flex-1 basis-[300px] flex-col gap-3.5">
            <SectionTitle id="principlesTitle">{t.principles.title}</SectionTitle>
            <p className="m-0 max-w-[400px] text-ink">
              <KeepLines text={t.principles.lead} />
            </p>
          </div>
          <ul
            aria-label={t.a11y.beliefs}
            className="m-0 flex flex-1 basis-[280px] list-none flex-col gap-4 rounded-2xl bg-surface px-[26px] py-6"
          >
            {t.principles.items.map((p) => (
              <li key={p.title} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex size-[22px] shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-surface"
                >
                  ✓
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="inline-block whitespace-nowrap text-sm font-semibold">{p.title}</span>
                  <span className="text-[13px] opacity-75">
                    <KeepLines text={p.line} />
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
