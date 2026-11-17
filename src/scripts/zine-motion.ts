/**
 * UHAK GPS editorial motion — tactile, crisp, no bounce.
 * Re-inits on every Astro ClientRouter page load.
 */

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
const reduce = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type Cleaner = () => void;
const cleaners: Cleaner[] = [];
const onClean = (fn: Cleaner) => cleaners.push(fn);
const cleanup = () => {
  while (cleaners.length) cleaners.pop()?.();
};

function initProgress() {
  const bar = document.querySelector<HTMLElement>('[data-reading-progress]');
  if (!bar) return;
  const fill = bar.querySelector<HTMLElement>('[data-reading-progress-fill]');
  if (!fill) return;

  const update = () => {
    const el = document.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0;
    fill.style.transform = `scaleX(${p})`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  onClean(() => {
    window.removeEventListener('scroll', update);
    window.removeEventListener('resize', update);
  });
}

function initClock() {
  const root = document.querySelector<HTMLElement>('[data-syd-clock]');
  if (!root) return;
  const hours = root.querySelector('[data-syd-h]');
  const mins = root.querySelector('[data-syd-m]');
  const colon = root.querySelector('[data-syd-colon]');
  if (!hours || !mins || !colon) return;

  const dateEl = document.querySelector('[data-syd-date]');
  const dateFmt = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  let blink = true;
  const tick = () => {
    const parts = new Intl.DateTimeFormat('en-AU', {
      timeZone: 'Australia/Sydney',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(new Date());
    hours.textContent = parts.find((p) => p.type === 'hour')?.value ?? '00';
    mins.textContent = parts.find((p) => p.type === 'minute')?.value ?? '00';
    if (dateEl) dateEl.textContent = dateFmt.format(new Date());
    if (!reduce()) {
      blink = !blink;
      colon.classList.toggle('is-off', !blink);
    } else {
      colon.classList.remove('is-off');
    }
  };
  tick();
  const id = window.setInterval(tick, 1000);
  onClean(() => clearInterval(id));
}

function initReveal() {
  const markIn = (el: Element) => {
    el.classList.add('is-in');
    // Tall sections can intersect mid-body while the title has already
    // scrolled above — still unlock nested wipe/rule animations.
    el.querySelectorAll('.ed-wipe, .ed-rule-draw').forEach((child) => {
      child.classList.add('is-in');
    });
  };

  if (reduce()) {
    document.querySelectorAll('.ed-reveal, .ed-wipe, .ed-rule-draw').forEach(markIn);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          markIn(entry.target);
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  document.querySelectorAll('.ed-reveal, .ed-wipe, .ed-rule-draw').forEach((el) => io.observe(el));
  onClean(() => io.disconnect());

  const scene = document.querySelector<HTMLElement>('[data-parallax-scene]');
  if (!scene) return;
  const bg = scene.querySelector<HTMLElement>('[data-parallax-bg]');
  const badge = scene.querySelector<HTMLElement>('[data-parallax-badge]');
  if (!bg || !badge) return;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const rect = scene.getBoundingClientRect();
      const vh = window.innerHeight;
      const mid = rect.top + rect.height / 2 - vh / 2;
      const t = Math.max(-1, Math.min(1, mid / vh));
      // Subtle drift only — no scale (scale was cropping the portrait into mush).
      bg.style.transform = `translate3d(0, ${t * -8}px, 0)`;
      badge.style.transform = 'none';
      ticking = false;
    });
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  onClean(() => window.removeEventListener('scroll', onScroll));
}

function initPlan() {
  const root = document.querySelector<HTMLElement>('[data-plan]');
  if (!root) return;
  const options = [...root.querySelectorAll<HTMLButtonElement>('[data-plan-option]')];
  const sheet = root.querySelector<HTMLElement>('[data-plan-sheet]');
  const empty = root.querySelector<HTMLElement>('[data-plan-empty]');
  if (!sheet) return;

  const sync = () => {
    const picked = options.filter((o) => o.getAttribute('aria-pressed') === 'true');
    empty?.classList.toggle('is-hidden', picked.length > 0);

    const existing = new Map(
      [...sheet.querySelectorAll<HTMLElement>('[data-plan-line]')].map((el) => [el.dataset.id!, el]),
    );

    picked.forEach((opt, i) => {
      const id = opt.dataset.id!;
      let line = existing.get(id);
      if (!line) {
        line = document.createElement('li');
        line.className = 'plan-line';
        line.dataset.planLine = '';
        line.dataset.id = id;
        line.innerHTML = `<span class="plan-line-check" aria-hidden="true">✓</span><span class="plan-line-text"></span>`;
        (line.querySelector('.plan-line-text') as HTMLElement).textContent = opt.dataset.title ?? '';
        sheet.appendChild(line);
        if (!reduce()) void line.offsetWidth;
        line.classList.add('is-in');
      } else {
        existing.delete(id);
        line.classList.remove('is-removing');
        line.style.order = String(i);
      }
    });

    existing.forEach((line) => {
      if (reduce()) {
        line.remove();
        return;
      }
      line.classList.add('is-removing');
      const done = () => line.remove();
      line.addEventListener('transitionend', done, { once: true });
      window.setTimeout(done, 420);
    });
  };

  options.forEach((opt) => {
    const onClick = () => {
      const on = opt.getAttribute('aria-pressed') === 'true';
      opt.setAttribute('aria-pressed', String(!on));
      opt.classList.toggle('is-on', !on);
      sync();
    };
    opt.addEventListener('click', onClick);
    onClean(() => opt.removeEventListener('click', onClick));
  });
}

function initTopicPills() {
  const track = document.querySelector<HTMLElement>('[data-pill-track]');
  const thumb = document.querySelector<HTMLElement>('[data-pill-thumb]');
  const pills = [...document.querySelectorAll<HTMLButtonElement>('[data-topic][aria-controls="latest-grid"]')];
  const items = [...document.querySelectorAll<HTMLElement>('#latest-grid [data-topic]')];
  if (!track || !thumb || !pills.length) return;

  const moveThumb = (pill: HTMLButtonElement, animate: boolean) => {
    const tr = track.getBoundingClientRect();
    const pr = pill.getBoundingClientRect();
    const x = pr.left - tr.left + track.scrollLeft;
    thumb.style.width = `${pr.width}px`;
    thumb.style.transform = `translate3d(${x}px, 0, 0)`;
    thumb.style.opacity = '1';
    if (!animate) thumb.style.transition = 'none';
    else thumb.style.transition = `transform 0.35s ${EASE}, width 0.35s ${EASE}`;
    if (!animate)
      requestAnimationFrame(() => {
        thumb.style.transition = `transform 0.35s ${EASE}, width 0.35s ${EASE}`;
      });
  };

  const filter = (topic: string) => {
    const visible = items.filter((el) =>
      topic === 'all' ? el.dataset.default === 'true' : el.dataset.topic === topic,
    );
    items.forEach((el) => {
      el.hidden = true;
      el.classList.remove('is-stagger-in');
    });
    visible.forEach((el, i) => {
      el.hidden = false;
      if (reduce()) {
        el.classList.add('is-stagger-in');
        return;
      }
      el.style.setProperty('--stagger', `${i * 30}ms`);
      void el.offsetWidth;
      el.classList.add('is-stagger-in');
    });
  };

  const activate = (pill: HTMLButtonElement, animate = true) => {
    pills.forEach((p) => p.setAttribute('aria-pressed', String(p === pill)));
    moveThumb(pill, animate);
    filter(pill.dataset.topic ?? 'all');
  };

  const active = pills.find((p) => p.getAttribute('aria-pressed') === 'true') ?? pills[0];
  activate(active, false);

  pills.forEach((pill) => {
    const onClick = () => activate(pill, true);
    pill.addEventListener('click', onClick);
    onClean(() => pill.removeEventListener('click', onClick));
  });

  const onResize = () => {
    const current = pills.find((p) => p.getAttribute('aria-pressed') === 'true');
    if (current) moveThumb(current, false);
  };
  window.addEventListener('resize', onResize, { passive: true });
  track.addEventListener('scroll', onResize, { passive: true });
  onClean(() => {
    window.removeEventListener('resize', onResize);
    track.removeEventListener('scroll', onResize);
  });
}

function initAccordion() {
  const items = [...document.querySelectorAll<HTMLElement>('[data-acc]')];
  items.forEach((item) => {
    const btn = item.querySelector<HTMLButtonElement>('[data-acc-btn]');
    const panel = item.querySelector<HTMLElement>('[data-acc-panel]');
    if (!btn || !panel) return;

    const setOpen = (open: boolean) => {
      btn.setAttribute('aria-expanded', String(open));
      item.classList.toggle('is-open', open);
      panel.style.gridTemplateRows = open ? '1fr' : '0fr';
    };

    setOpen(btn.getAttribute('aria-expanded') === 'true');

    const onClick = () => setOpen(btn.getAttribute('aria-expanded') !== 'true');
    btn.addEventListener('click', onClick);
    onClean(() => btn.removeEventListener('click', onClick));
  });
}

/** Replay the editorial chat transcript when it enters view. */
function initEdChat() {
  const root = document.querySelector<HTMLElement>('[data-ed-chat]');
  if (!root) return;

  const play = () => {
    root.classList.remove('is-play');
    // Force reflow so CSS animations restart cleanly.
    void root.offsetWidth;
    root.classList.add('is-play');
  };

  if (reduce()) {
    root.classList.add('is-play');
    return;
  }

  let armed = true;
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && armed) {
        armed = false;
        play();
      } else if (!entry.isIntersecting) {
        armed = true;
      }
    },
    { threshold: 0.45 },
  );
  io.observe(root);
  onClean(() => io.disconnect());
}

function boot() {
  cleanup();
  // Opt into hidden-until-reveal styles only when this script runs.
  document.documentElement.classList.add('ed-motion');
  initProgress();
  initClock();
  initReveal();
  initTopicPills();
  initPlan();
  initAccordion();
  initEdChat();
}

document.addEventListener('astro:page-load', boot);
if (document.readyState !== 'loading') boot();
else document.addEventListener('DOMContentLoaded', boot);
