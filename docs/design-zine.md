# UHAK GPS — Design Guidelines (Editorial Green / Zine)

Nov 16, 2026 · @jojo

Scope: **`/zine/`** only (`src/styles/zine.css`, `src/components/zine/`, `src/pages/zine/`, `src/layouts/ZineLayout.astro`, `src/scripts/zine-motion.ts`, `src/zine/content.ts`).

Live landing **`/`** and **`/ja/`** follow **[docs/design.md](design.md)** — do not mix the two systems.

## Overview

UHAK GPS `/zine/` is designed as an **independent editorial publication and Sydney field guide**, not a study-abroad sales site. The system uses a full-viewport green frame, an oversized journal wordmark, strict `1px` ink rules, documentary photography, and flat color blocks.

Core promise: **"Talk before you decide."**

- **Tone:** editorial, candid, grounded. Real Sydney life over brochure marketing.
- **Principles:** grid discipline, sharp rectangles (`0px` photo radius), `1px` ink dividers, restrained green.
- **Personality:** “An honest local magazine run by friends in Sydney—zero pressure, zero commission bias.”

## Color

| Token | HEX | Role |
| --- | --- | --- |
| primary | #25D366 | Viewport frame, resting section bar, footer band, **primary CTA** (`.ed-btn` / `Book a chat`), ticker/read accents |
| accent | #008069 | Category eyebrows, manifesto kicker, Near Town Hall band, focus outlines, ticker dots |
| ink | #111315 | Wordmark, headlines, body, `1px` rules, active pill thumb |
| mint | #E7F8E2 | Soft editorial blocks (book intro, guide callouts, checklist cards) |
| paper | #F3F2EE | Masthead, main editorial canvas, hero band, inquiry strip |
| surface | #FFFFFF | Hero copy panel, latest lead card, Who we are, How we work, ticker |
| muted | #7A7D80 | Secondary metadata, quiet `日本語` toggle |
| card-sky | #CFE4FB | Checklist / toolkit color block |
| card-sand | #F6E3A8 | Checklist / toolkit color block |
| border | #111315 | Section dividers, column rules, pill outlines |

**Color roles (important)**

- **`#25D366`** is chrome green (viewport frame, resting section bar, footer) and the CTA fill. Mid-page editorial bands still prefer `surface` / `paper` / `mint` / `accent`.
- Never use `#25D366` for body text or thin `1px` lines on white/paper (contrast fails).
- Text on `#25D366` or `#E7F8E2` is always `ink` `#111315`.
- Text on `#008069` is `surface` `#FFFFFF` (or `#25D366` for tiny labels only).
- Eyebrows / category tags use `accent` on `surface` or `paper`.

## Typography

| Role | Font | Size / weight |
| --- | --- | --- |
| Wordmark `UHAK` | Playfair Display (`--font-logo`) | Cover: `clamp(40px, 5.5vw, 56px)`; footer: `clamp(40px, 6vw, 72px)`; compact: `clamp(28px, 3.5vw, 40px)`; mobile: `18px`; weight `400`; tracking `-0.03em` |
| Wordmark `[GPS]` | JetBrains Mono (`--font-mono`), `600` | `0.24em` of name size; sits top-right of UHAK |
| Section `h2` | Outfit (`--font-sans`) | `clamp(22px, 2.8vw, 34px)`, semibold, uppercase |
| Hero `h1` / titles | Outfit | Hero: `clamp(32px, 3.6vw, 46px)`; titles ~`600`–`700`, tight tracking |
| Body | Outfit | `14–15px`, `400`, line-height `1.65` |
| Meta / pills / dates | JetBrains Mono (`--font-mono` / `--font-brand`) | `11–12px`, uppercase; topic pills `600` |
| Japanese | Zen Kaku Gothic New | Match English scale |

Avoid default UI stacks (Inter, Roboto, system). Do not reintroduce Plus Jakarta Sans on `/zine/`.

## Layout & Spacing

- **Viewport frame:** `body` border `8px solid #25D366` (`4px` below `760px`).
- **Grid:** `.wrap` → `max-width: 1120px`, padding `32px` / `16px` mobile.
- **Section padding:** typically `py-14` / `landing:py-20` (`56–80px`); hero uses tighter `py-7` / `landing:py-9`.
- **Geometry:** photos and most blocks `0px` radius; pills/buttons `999px` only.
- **Shadows:** none by default (toolkit hover may use a hard `2px` ink offset).
- **Breakpoint:** `760px` (`landing:`). Pair `landing:` with `lg:`, never `sm:`.

**Home band order (`/zine/`)**

1. Utility row → `1px` ink rule → cover wordmark (`paper`)
2. **Sticky section bar** (`top: 0`; no rules + `primary` fill at rest → `paper` with `1px` ink rules top + bottom once stuck) — text anchor links. Once the masthead scrolls away the bar reveals mini wordmark (left; click smooth-scrolls to top) + Instagram / `日本語` / green primary `Book a chat →` behind a `1px` ink column rule (right); mobile shows only a short `Book →`
3. **Hero** — single ink-bordered shell: `surface` copy (Free chat meta → inline `EdChat` → headline → support → `editorial-read-more`) + documentary photo (`paper` band)
4. **The latest** — lead story + filterable grid (`paper`); cover slots are empty ink-bordered boxes for now
5. **Your plan** — checklist builder + selected sheet (`paper`)
6. **Manifesto** — full-bleed cool campus photo; frosted ink-bordered callout plate (`0px` radius) centered on the photo
7. **Checklists** — 3 color blocks: sand / mint / sky (`paper`)
8. **Near Town Hall** — walk-time field notes (`accent`, light text)
9. **How we work** — 4 stamp stickers (`surface`)
10. **Who we are** — team cards with empty portrait boxes + name/place/role + FAQ accordion (`surface`)
11. Inquiry strip (`paper`) → infinite ticker (`surface`) → footer (`primary`) with 4-column nav

**Secondary routes**

- `/zine/book/` — booking form (compact masthead)
- `/zine/guides/` — single feature article skeleton (all home “Read more” / topic / checklist links currently open here)

Removed from the edition: Questions/letters Q&A, weekly costs receipt, topic explorer, multi-slug guide index, about page, Sydney Local guide meta, General information disclaimers, Guides sidebar in the hero, `Cover.astro` cover variants.

## Components

| Component | Rules | Interaction |
| --- | --- | --- |
| **Masthead** | Left: `Sydney ·` live SYD clock (+ Vol. on cover desktop). Right: `日本語` + green `Book a chat` pill (`.ed-btn`). Cover: thin `1px` ink rule under the utility row, then centered Playfair `UHAK` + JetBrains Mono `[GPS]` wordmark | Button: primary fill → ink fill / primary text on hover |
| **Sticky section bar** | `.ed-topic-bar`: `primary` green fill, no rules, at rest (links only, no CTA). When the masthead scrolls away (`.is-stuck`) the fill fades to `paper` and `1px` ink rules appear above and below, so the revealed CTA stays the standard green `.ed-btn`. JetBrains Mono uppercase text links separated by `·` (`Services · Courses · About · Quote`) — anchors to page sections (targets TBD; links without a target are inert). The only pill in the bar is the CTA (green primary + `→`) | Hover: `1px` underline. Active (click or scroll spy): `800` weight + sliding `3px` ink underline; other links dim to `0.6`. Sticky while scrolling |
| **Hero** | One bordered shell (no guides sidebar). Left `surface`: “Free chat” + inline `EdChat` + “Talk before you decide.” + short support + `Start a chat` (`editorial-read-more`). Right: documentary photo + “Sydney” caption | Chat transcript plays on intersect; wipe on copy/photo |
| **EdChat** | Inline field-note bubbles above the hero headline (`EdChat.astro`) | Replay when entering view (`data-ed-chat`) |
| **The latest** | Lead feature + up to 3 default cards; other guides unlock via topic filter. Empty cover boxes (no art yet). All CTAs → `/zine/guides/` | Stagger in on filter change |
| **Your plan** | Selectable options with check animation; sticky “Selected” sheet | Toggle `aria-pressed`; lines animate in/out |
| **Manifesto callout** | Full-bleed campus photo (`~2.35/1` desktop, `5/4` mobile) with cool green wash + grain (not flat grayscale). Frosted `surface` plate, ink border, centered over photo. Structure: JetBrains Mono accent kicker → bold lead → `1px` rule → 14px support | Subtle parallax on photo only; plate stays planted |
| **Checklists** | Three blocks (`card-sand`, `mint`, `card-sky`), ink border on hover via `.ed-block` | Hard offset hover |
| **Near Town Hall** | Accent band; place name + mint pill badge for walk time (`4 min`); muted note below | Map link |
| **How we work** | 4 columns, green line icons (`tea` / `calendar` / `notebook` / `map`) via `SpotArt.astro`, ~48–56px | Static |
| **Who we are** | Empty portrait boxes + name / place / role + accordion FAQ (`+` → rotate `45deg`) | Grid-template-rows expand |
| **Inquiry** | Paper strip; underline field + ink `.ed-btn-ink` Send (client-side stub for now) | Shows thanks state |
| **Ticker** | Duplicated groups, `translate3d(-50%)`, ~`80s` linear loop; accent dots | Pause on hover |
| **Footer** | Primary green band; large wordmark; Explore / Topics / Find us / Elsewhere | Mono links underline on hover |

**Primary button (`.ed-btn`)**  
`#25D366` fill, ink text, `1px` ink border, pill radius. Hover: ink fill + primary text. Use for masthead / guide `Book a chat`. Form submits often use `.ed-btn-ink` (ink fill → primary on hover). Prefer `editorial-read-more` for in-body text CTAs (highlighter fill + arrow nudge).

## Imagery

- **Documentary / candid** portraits and street scenes for the hero (`/images/hero-polaroid-3.webp`).
- **Manifesto** uses campus photography (`/images/manifesto-campus.webp`) with a cool botanical wash + grain — not a pure grayscale multiply treatment.
- **Guide / team covers** are empty ink-bordered boxes until real assets ship (no `Cover.astro`).
- **Spot art:** green line icons in `public/images/spot/` (`tea`, `calendar`, `notebook`, `map`) via `SpotArt.astro`; centered, ~48–56px.
- Prefer local files under `public/images/`. Avoid tourist cliché as the *only* visual idea; Opera House stock belongs on landing, not as the default zine manifesto.
- No AI-generated people as brand photography if real assets exist.

## Motion

Use `--ease-crisp: cubic-bezier(0.16, 1, 0.3, 1)` — no bounce.

| Element | Behavior |
| --- | --- |
| Reading progress | `2px` fixed top bar; scaleX with scroll |
| SYD clock | Tabular time; colon blink |
| Reveal / wipe | Section `ed-reveal`, title `ed-wipe`; nested wipes unlock when parent intersects (tall sections) |
| Topic pills | Ink thumb slides; grid stagger |
| EdChat | Bubble / typing / read animations on intersect |
| Plan builder | Check stroke + sheet lines |
| Accordion | `+` rotates `45deg`; panel `grid-template-rows` |
| Ticker | Seamless `-50%` marquee |
| Manifesto | Light parallax on photo only |
| View transitions | Short page out/in on ClientRouter |

Honor `prefers-reduced-motion: reduce` (kill animation/transition; force reveals / chat visible).

## Copy & Voice

- Short, direct, no sales funnel language.
- Headlines: questions or clear statements (`Talk before you decide.`).
- Banned: visa guarantees, “limited time,” PR promises, lifestyle hype.
- Keep `日本語` in the utility bar; Japanese pages live at `/ja/` (landing), not inside `/zine/` yet.

## Accessibility & Responsive

- Focus: `2px solid #008069` (`outline-offset: 3px`); on green/accent bands (`.on-green`, `.bg-accent`), outline uses primary.
- Tap targets ≥ `44px` where possible (pills ~`32px` height but padded hit area).
- Mobile ≤`760px`: `4px` frame; topic pills scroll horizontally; hero stacks; grids collapse to 1–2 columns.

## Implementation

Tokens and components live in **`src/styles/zine.css`**. Layout: `ZineLayout.astro`. Motion: `src/scripts/zine-motion.ts`. Content: `src/zine/content.ts`. Components: `Masthead`, `Footer`, `Wordmark`, `EdChat`, `SpotArt`.

```css
@theme {
  --color-primary: #25d366;
  --color-accent: #008069;
  --color-mint: #e7f8e2;
  --color-ink: #111315;
  --color-paper: #f3f2ee;
  --color-surface: #ffffff;
  --color-muted: #7a7d80;
  --color-card-sky: #cfe4fb;
  --color-card-sand: #f6e3a8;
  --color-border: #111315;

  --font-brand: "JetBrains Mono", "Zen Kaku Gothic New", ui-monospace, monospace;
  --font-logo: "Playfair Display", "Zen Kaku Gothic New", serif;
  --font-sans: "Outfit", "Zen Kaku Gothic New", sans-serif;
  --font-mono: "JetBrains Mono", "Zen Kaku Gothic New", ui-monospace, monospace;
  --font-jp: "Zen Kaku Gothic New", "Noto Sans JP", sans-serif;

  --radius-none: 0px;
  --radius-badge: 24px;
  --radius-pill: 999px;
  --breakpoint-landing: 760px;
  --ease-crisp: cubic-bezier(0.16, 1, 0.3, 1);
}
```

**Open items**

- [ ] Real counsellor names / years / suburbs for Who we are
- [ ] Real portraits (or drop the empty boxes) for Who we are
- [ ] Guide / latest cover art (empty boxes today)
- [ ] LINE deep link + inquiry / book endpoints
- [ ] Native-speaker pass if `/zine/` gains a Japanese route
