import type { Messages } from '../../../i18n';
import { NOTE_META } from '../data';
import { cx, Container, KeepLines, SectionTitle } from '../ui';

type Props = {
  t: Messages;
};

export function FeelNotes({ t }: Props) {
  return (
    <section id="feel" aria-labelledby="feelTitle" className="bg-cream">
      <Container className="py-20">
        <div className="flex flex-col items-center gap-6">
          <div className="flex max-w-[520px] flex-col items-center text-center">
            <SectionTitle id="feelTitle" className="mb-3">
              {t.feel.title}
            </SectionTitle>
            <p className="m-0 text-ink">
              <KeepLines text={t.feel.lead} />
            </p>
          </div>

          <div className="notes grid w-full max-w-[640px] grid-cols-6 items-start gap-x-5 gap-y-12 overflow-visible px-2 pb-6 pt-4">
            {NOTE_META.map((meta, i) => {
              const note = t.feel.notes[i];
              return (
                <div
                  key={`${i}-${note.text}`}
                  className={cx(
                    'relative flex min-h-[137px] w-full flex-col justify-start gap-2 box-border overflow-visible px-[17px] py-[22px] shadow-[0_1px_1px_rgba(0,0,0,0.04),0_10px_12px_-9px_rgba(31,40,50,0.28)]',
                    meta.bg,
                    meta.tilt,
                    meta.offset,
                    meta.span,
                  )}
                >
                  <span
                    aria-hidden
                    className={cx('note-tape', meta.tape, 'cool' in meta && meta.cool && 'note-tape--cool')}
                  />
                  <p className={cx('m-0 font-hand text-ink', meta.type)}>
                    {note.highlightMarked ? (
                      <>
                        {note.highlightPrefix ? `${note.highlightPrefix} ` : null}
                        <span className="bg-[linear-gradient(transparent_62%,rgba(37,211,102,0.7)_62%)] px-px font-medium [box-decoration-break:clone]">
                          {note.highlightMarked}
                        </span>
                      </>
                    ) : (
                      note.text
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
