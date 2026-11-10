import { NOTES } from '../data';
import { cx, Container, SectionTitle } from '../ui';

export function FeelNotes() {
  return (
    <section id="feel" aria-labelledby="feelTitle" className="bg-cream">
      <Container className="py-20">
        <div className="flex flex-col items-center gap-6">
          <div className="flex max-w-[520px] flex-col items-center text-center">
            <SectionTitle id="feelTitle" className="mb-3">
              We hear what you feel.
            </SectionTitle>
            <p className="m-0 text-ink">We support 000 students with services that help your study journey in Australia.</p>
          </div>

          <div className="notes grid w-full max-w-[640px] grid-cols-6 items-start gap-x-5 gap-y-12 overflow-visible px-2 pb-6 pt-4">
            {NOTES.map((note) => (
              <div
                key={note.text}
                className={cx(
                  'relative flex min-h-[137px] w-full flex-col justify-start gap-2 box-border overflow-visible px-[17px] py-[22px] shadow-[0_1px_1px_rgba(0,0,0,0.04),0_10px_12px_-9px_rgba(31,40,50,0.28)]',
                  note.bg,
                  note.tilt,
                  note.offset,
                  note.span,
                )}
              >
                <span
                  aria-hidden
                  className={cx('note-tape', note.tape, 'cool' in note && 'note-tape--cool')}
                />
                <p className={cx('m-0 font-hand text-ink', note.type)}>
                  {note.highlight ? (
                    <>
                      Personal support in{' '}
                      <span className="bg-[linear-gradient(transparent_62%,rgba(37,211,102,0.7)_62%)] px-px font-medium [box-decoration-break:clone]">
                        Japanese, Korean, and English
                      </span>
                    </>
                  ) : (
                    note.text
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
