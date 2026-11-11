import type { Messages } from '../../../i18n';
import { Container, KeepLines, PillLink, SectionTitle } from '../ui';

type Props = {
  t: Messages;
};

export function Schools({ t }: Props) {
  return (
    <section id="schools" aria-labelledby="schoolsTitle">
      <Container className="flex flex-col gap-8 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <SectionTitle id="schoolsTitle">{t.schools.title}</SectionTitle>
            <p className="m-0 text-ink opacity-75">
              <KeepLines text={t.schools.lead} />
            </p>
          </div>
          <PillLink href="#schools">{t.schools.seeAll}</PillLink>
        </div>

        <div className="school-cols grid grid-cols-1 gap-y-6 landing:grid-cols-3 landing:gap-x-8">
          {t.schools.cols.map((col) => (
            <div key={col.label}>
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{col.label}</p>
              <ul className="m-0 list-none p-0">
                {col.items.map((item) => (
                  <li key={item.name} className="flex flex-col gap-0.5 border-t border-line py-3.5">
                    <span className="text-sm font-medium text-ink">{item.name}</span>
                    <span className="text-xs text-ink opacity-65">{item.meta}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
