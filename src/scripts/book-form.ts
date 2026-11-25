/**
 * Client logic for the shared Netlify booking form (`#book-form`).
 * Used by `/book/`, `/ja/book/` and `/zine/book/`. Copy lives in the markup, so this stays
 * locale-agnostic: it only toggles the elements below.
 *
 *   #book-form        the <form> (Netlify fields + `form-name`)
 *   #book-error       shown when name/contact are missing
 *   #book-send-error  shown when the POST fails
 *   #book-done        shown after a successful POST; optional `[data-done]` slots
 *                     (greeting / topics / time) are filled from the submitted values
 *
 * In `astro dev` there is no Netlify to receive the POST, so the request is skipped and
 * treated as sent — that keeps the done state previewable locally.
 */

let detach: (() => void) | undefined;

/** Pre-check topics from `?plan=wh,lang` (sent by the landing "Your Plan" CTA). */
function prefillTopics(form: HTMLFormElement) {
  const plan = new URLSearchParams(location.search).get('plan');
  if (!plan) return;
  const ids = new Set(plan.split(','));
  form.querySelectorAll<HTMLInputElement>('input[name="topics"][data-topic-id]').forEach((input) => {
    if (ids.has(input.dataset.topicId ?? '')) input.checked = true;
  });
}

function fillSummary(form: HTMLFormElement, done: HTMLElement, name: string) {
  const greeting = done.querySelector<HTMLElement>('[data-done="greeting"]');
  if (greeting) greeting.textContent = (greeting.dataset.template ?? '{name}').replace('{name}', name);

  const topics = done.querySelector<HTMLElement>('[data-done="topics"]');
  if (topics) {
    const labels = [...form.querySelectorAll<HTMLInputElement>('input[name="topics"]:checked')]
      .map((i) => i.nextElementSibling?.textContent?.trim())
      .filter(Boolean);
    topics.textContent = labels.join(' · ');
    topics.hidden = labels.length === 0;
  }

  const time = done.querySelector<HTMLElement>('[data-done="time"]');
  if (time) time.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

export function initBookForm() {
  detach?.();
  detach = undefined;

  const form = document.getElementById('book-form') as HTMLFormElement | null;
  const done = document.getElementById('book-done');
  const error = document.getElementById('book-error');
  const sendError = document.getElementById('book-send-error');
  const submit = form?.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!form || !done || !error || !sendError || !submit) return;

  prefillTopics(form);

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const contact = String(data.get('contact') ?? '').trim();
    if (!name || !contact) {
      error.hidden = false;
      return;
    }
    error.hidden = true;
    sendError.hidden = true;
    submit.disabled = true;

    try {
      // Netlify Forms: POST the url-encoded fields (incl. `form-name`) to any static path.
      if (import.meta.env.DEV) {
        await new Promise((r) => setTimeout(r, 400));
      } else {
        const body = new URLSearchParams(data as unknown as Record<string, string>).toString();
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      }
      fillSummary(form, done, name);
      form.hidden = true;
      done.hidden = false;
      done.focus();
    } catch {
      sendError.hidden = false;
    } finally {
      submit.disabled = false;
    }
  };

  form.addEventListener('submit', onSubmit);
  detach = () => form.removeEventListener('submit', onSubmit);
}
