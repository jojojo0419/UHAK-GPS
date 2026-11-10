import { PRINCIPLES } from '../data';
import { Container, SectionTitle } from '../ui';

export function Principles() {
  return (
    <section id="principles" aria-labelledby="principlesTitle">
      <Container className="py-20 pb-[86px]">
        <div className="flex flex-wrap items-start gap-7 landing:gap-x-14">
          <div className="flex flex-1 basis-[300px] flex-col gap-3.5">
            <SectionTitle id="principlesTitle">Studying abroad really begins when you land.</SectionTitle>
            <p className="m-0 max-w-[400px] text-ink">
              Rooms, jobs, getting around. We stay the local person you can ask, even over coffee.
            </p>
          </div>
          <ul
            aria-label="What we believe"
            className="m-0 flex flex-1 basis-[280px] list-none flex-col gap-4 rounded-2xl bg-surface px-[26px] py-6"
          >
            {PRINCIPLES.map((p) => (
              <li key={p.title} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex size-[22px] shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-surface"
                >
                  ✓
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold">{p.title}</span>
                  <span className="text-[13px] opacity-75">{p.line}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
