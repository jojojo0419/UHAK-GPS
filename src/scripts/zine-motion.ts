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

/** Smooth jump to a y position or element (instant for reduced motion). */
const scrollToTarget = (target: number | HTMLElement, offset = 0) => {
  const top = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: reduce() ? 'auto' : 'smooth' });
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

/**
 * Sticky section nav: anchor links with a sliding underline that follows
 * scroll position. Missing targets stay inert (click still shows active).
 */
function initSectionNav() {
  const nav = document.querySelector<HTMLElement>('[data-section-nav]');
  const bar = document.querySelector<HTMLElement>('[data-section-nav-bar]');
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-section-link]')];
  if (!nav || !bar || !links.length) return;

  const targetOf = (link: HTMLAnchorElement) => {
    const id = link.hash.slice(1);
    return id ? document.getElementById(id) : null;
  };

  let current: HTMLAnchorElement | null = null;

  const moveBar = (link: HTMLAnchorElement | null, animate: boolean) => {
    if (!link) {
      bar.style.opacity = '0';
      return;
    }
    const nr = nav.getBoundingClientRect();
    const lr = link.getBoundingClientRect();
    const x = lr.left - nr.left + nav.scrollLeft;
    bar.style.transition = animate
      ? `transform 0.35s ${EASE}, width 0.35s ${EASE}, opacity 0.2s ease`
      : 'none';
    bar.style.width = `${lr.width}px`;
    bar.style.transform = `translate3d(${x}px, 0, 0)`;
    bar.style.opacity = '1';
  };

  const setActive = (link: HTMLAnchorElement | null, animate = true) => {
    if (link === current) return;
    current = link;
    links.forEach((l) => {
      if (l === link) l.setAttribute('aria-current', 'true');
      else l.removeAttribute('aria-current');
    });
    moveBar(link, animate && !reduce());
  };

  moveBar(null, false);

  links.forEach((link) => {
    const onClick = (e: MouseEvent) => {
      // Placeholder anchors: no jump / URL change until the section exists,
      // but still show the active state so the click reads.
      const target = targetOf(link);
      e.preventDefault();
      setActive(link);
      if (!target) return;
      // Land below the sticky bar.
      const barH = document.querySelector<HTMLElement>('[data-topic-bar]')?.offsetHeight ?? 0;
      scrollToTarget(target, -barH);
      history.pushState(null, '', link.hash);
    };
    link.addEventListener('click', onClick);
    onClean(() => link.removeEventListener('click', onClick));
  });

  // Scroll spy: the section crossing the upper-middle of the viewport wins.
  const pairs = links
    .map((link) => ({ link, target: targetOf(link) }))
    .filter((p): p is { link: HTMLAnchorElement; target: HTMLElement } => !!p.target);
  if (pairs.length) {
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => (en.isIntersecting ? visible.add(en.target) : visible.delete(en.target)));
        const hit = pairs.find((p) => visible.has(p.target));
        setActive(hit ? hit.link : null);
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    pairs.forEach((p) => io.observe(p.target));
    onClean(() => io.disconnect());
  }

  const onResize = () => moveBar(current, false);
  window.addEventListener('resize', onResize, { passive: true });
  nav.addEventListener('scroll', onResize, { passive: true });
  onClean(() => {
    window.removeEventListener('resize', onResize);
    nav.removeEventListener('scroll', onResize);
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

/** Topic bar picks up brand + 日本語 + Book once the masthead scrolls out of view. */
function initTopicBarStuck() {
  const bar = document.querySelector<HTMLElement>('[data-topic-bar]');
  const masthead = document.querySelector<HTMLElement>('.ed-masthead');
  if (!bar || !masthead) return;

  const io = new IntersectionObserver(([entry]) => {
    bar.classList.toggle('is-stuck', !entry.isIntersecting);
  });
  io.observe(masthead);
  onClean(() => io.disconnect());

  // Bar wordmark: glide back to the top instead of reloading /zine/.
  const brand = bar.querySelector<HTMLElement>('[data-scroll-top]');
  if (!brand) return;
  const onBrandClick = (e: MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    scrollToTarget(0);
  };
  brand.addEventListener('click', onBrandClick);
  onClean(() => brand.removeEventListener('click', onBrandClick));
}

function boot() {
  cleanup();
  // Opt into hidden-until-reveal styles only when this script runs.
  document.documentElement.classList.add('ed-motion');
  initProgress();
  initClock();
  initReveal();
  initSectionNav();
  initTopicBarStuck();
  initPlan();
  initAccordion();
  initEdChat();
}

document.addEventListener('astro:page-load', boot);
if (document.readyState !== 'loading') boot();
else document.addEventListener('DOMContentLoaded', boot);
