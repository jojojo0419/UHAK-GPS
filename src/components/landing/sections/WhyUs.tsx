import type { Messages } from '../../../i18n';
import { Container, SectionTitle } from '../ui';

type Props = {
  t: Messages;
};

export function WhyUs({ t }: Props) {
  return (
    <section id="why" aria-labelledby="whyTitle" className="bg-cream">
      <Container className="py-20">
        <SectionTitle id="whyTitle" className="mb-10">
          {t.why.title}
        </SectionTitle>
        <div className="why-cols grid grid-cols-1 gap-7 landing:grid-cols-3 landing:gap-12">
          {t.why.items.map((item, i) => (
            <div key={i} className="flex flex-col gap-3.5 border-t border-line pt-[18px]">
              <span className="font-mono text-xs tracking-[0.04em] text-ink opacity-45">0{i + 1}</span>
              <div className="flex flex-col gap-1.5">
                <p className="m-0 text-[15px] leading-[1.45] text-ink opacity-45">
                  <span className="inline-block whitespace-nowrap line-through decoration-1 decoration-ink">
                    {item.was}
                  </span>
                </p>
                <p className="why-now m-0 font-display text-[clamp(18px,2vw,22px)] font-medium leading-[1.25] tracking-[-0.01em] text-ink">
                  <span className="inline-block whitespace-nowrap">{item.now}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
