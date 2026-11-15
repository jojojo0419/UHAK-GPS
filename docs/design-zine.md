# UHAK GPS — Design Guidelines (Editorial Green / Zine)

Nov 16, 2026 · @jojo

Scope: **`/zine/`** only (`src/styles/zine.css`, `src/components/zine/`, `src/pages/zine/`).

Live landing **`/`** and **`/ja/`** follow **[docs/design.md](design.md)** — do not mix the two systems.

## Overview

UHAK GPS `/zine/` is designed as an **independent editorial publication and Sydney field guide**, not a study-abroad sales site. The system uses a full-viewport green frame, an oversized journal wordmark, strict `1px` ink rules, documentary photography, and flat color blocks.

Core promise: **"Talk before you’ve decided."**

- **Tone:** editorial, candid, grounded. Real Sydney life over brochure marketing.
- **Principles:** grid discipline, sharp rectangles (`0px` photo radius), `1px` ink dividers, restrained green.
- **Personality:** “An honest local magazine run by friends in Sydney—zero pressure, zero commission bias.”

## Color

| Token | HEX | Role |
| --- | --- | --- |
| primary | #25D366 | Viewport frame, footer band, **primary CTA buttons** (`Book a chat`), small labels/dots on dark bands, manifesto label accent |
| accent | #008069 | Category eyebrows, manifesto callout, Near Town Hall band, focus outlines, ticker dots |
| ink | #111315 | Wordmark, headlines, body, `1px` rules, active pill thumb |
| mint | #E7F8E2 | Soft editorial blocks (book intro, guide callouts, checklist cards) |
| paper | #F3F2EE | Main editorial canvas, inquiry strip |
| surface | #FFFFFF | Masthead, sticky topic bar, hero copy panel, Who we are, principles |
| muted | #7A7D80 | Secondary metadata, quiet `日本語` toggle |
| card-sky | #CFE4FB | Checklist / toolkit color block |
| card-sand | #F6E3A8 | Checklist / toolkit color block |
| border | #111315 | Section dividers, column rules, pill outlines |

**Color roles (important)**

- **`#25D366`** is the chrome green (viewport frame + footer) and the CTA fill. Large mid-page bands still prefer `surface` / `paper` / `mint` / `accent`.
- Never use `#25D366` for body text or thin `1px` lines on white/paper (contrast fails).
- Text on `#25D366` or `#E7F8E2` is always `ink` `#111315`.
- Text on `#008069` is `surface` `#FFFFFF` (or `#25D366` for tiny labels only).
- Eyebrows / category tags use `accent` on `surface` or `paper`.

## Typography

| Role | Font | Size / weight |
| --- | --- | --- |
| Wordmark `UHAK` | Newsreader (`--font-logo`) | `clamp(36px, 5.5vw, 64px)` cover/footer; weight `400`; tracking `-0.03em` |
| Wordmark `[GPS]` | Courier Prime (`--font-courier`) | `0.26em` of name size; sits top-right of UHAK; cover wordmark optically nudged `translateX(12px)` |
| Section `h2` | Outfit (`--font-sans`) | `clamp(22px, 2.8vw, 34px)`, semibold, uppercase |
| Hero `h1` / titles | Outfit | `clamp(32px, 3.8vw, 48px)` hero; titles ~`600`–`700`, tight tracking |
| Body | Outfit | `14–15px`, `400`, line-height `1.65` |
| Meta / pills / dates | Zilla Slab as editorial mono stand-in (`--font-mono`) + Courier for true mono labels | `11–12px`, uppercase |
| Japanese | Zen Kaku Gothic New | Match English scale |

Avoid default UI stacks (Inter, Roboto, system). Do not reintroduce Plus Jakarta Sans on `/zine/`.

## Layout & Spacing

- **Viewport frame:** `body` border `8px solid #25D366` (`4px` below `760px`).
- **Grid:** `.wrap` → `max-width: 1120px`, padding `32px` / `16px` mobile.
- **Section padding:** typically `py-14` / `landing:py-20` (`56–80px`).
- **Geometry:** photos and most blocks `0px` radius; pills/buttons `999px`; manifesto callout `24px` (`--radius-badge`).
- **Shadows:** none by default (toolkit hover may use a hard `2px` ink offset).
- **Breakpoint:** `760px` (`landing:`). Pair `landing:` with `lg:`, never `sm:`.

**Home band order (`/zine/`)**

1. Utility row + cover wordmark (`surface`)
2. **Sticky topic pills** (`surface`, `top: 0`, no “Topics:” label)
3. Hero split: `surface` copy + photo | Guides sidebar (`paper`)
4. **The latest** — lead story + filterable grid (`paper`)
5. **Your plan** — checklist builder + selected sheet (`paper`)
6. **Manifesto** — full-bleed grayscale portrait, person on the **right**; `accent` callout overlapping bottom rule on the **left** (`24px` radius, `1.5px` ink border)
7. **Checklists** — 3 color blocks: sand / mint / sky (`paper`)
8. **Near Town Hall** — walk-time field notes (`accent`, light text)
9. **What we believe** — 4 spot illustrations (`surface`)
10. **Who we are** — name/place/role only (no portraits) + FAQ accordion (`surface`)
11. Inquiry strip (`paper`) → infinite ticker (`surface`) → footer (`primary`) with 4-column nav

Removed from the edition: Questions/letters Q&A, weekly costs receipt, topic explorer, All guides index, about page, Sydney Local guide meta, General information disclaimers.

## Components

| Component | Rules | Interaction |
| --- | --- | --- |
| **Masthead** | Left: `Sydney ·` live SYD clock. Right: `日本語` + green `Book a chat` pill. Cover: centered Newsreader/`[GPS]` wordmark | Button: primary fill → ink fill / primary text on hover |
| **Sticky topic bar** | Centered pills only: `All`, `Working Holiday`, `English & VET`, `University`, `Sydney Life`. Sliding ink thumb | Filters `#latest-grid`; sticky while scrolling |
| **Hero** | Bordered split: left `surface` (“Talk before you’ve decided.” + `ed-btn`); right documentary photo. Sidebar: 3 guide rows | Photo crop hover scale inside sharp frame |
| **The latest** | Lead feature + up to 3 default cards; other guides unlock via topic filter | Stagger in on filter change |
| **Your plan** | Selectable options with check animation; sticky “Selected” sheet | Toggle `aria-pressed`; lines animate in/out |
| **Manifesto callout** | Grayscale full-bleed photo (`16/9` desktop, `4/3` mobile), subject weighted **right** (`object-position` ~`28% 18%`). Callout: `accent` + white type, wrap-left, overlaps photo bottom by `32px`. Structure: Courier label → headline → `1px` rule → 14px support | Subtle parallax on photo only; badge stays planted |
| **Checklists** | Three blocks (`card-sand`, `mint`, `card-sky`), ink border on hover via `.ed-block` | Hard offset hover |
| **Near Town Hall** | Accent band; walk times in primary green meta | Map link |
| **What we believe** | 4 columns, `56px` SpotArt (hand, magnifier, compass, bubble) | Static |
| **Who we are** | Text-only team (name, place, role) + accordion FAQ (`+` → `×`) | Grid-template-rows expand |
| **Ticker** | Duplicated groups, `translate3d(-50%)`, ~`80s` linear loop; accent dots | Pause on hover |
| **Footer** | Primary green band; large wordmark; Explore / Topics / Find us / Elsewhere | Mono links underline on hover |

**Primary button (`.ed-btn`)**  
`#25D366` fill, ink text, `1px` ink border, pill radius. Hover: ink fill + primary text. Prefer this for `Book a chat`; avoid painting large page bands with primary.

## Imagery

- **Documentary / candid** portraits and street scenes; grayscale + light `accent` multiply on manifesto.
- **Hero** may stay in color; manifesto stays mono.
- **Covers** for guides: photo, ticket, stamp, map, type, shapes variants (`Cover.astro`).
- **Spot art:** ink + primary accent SVGs in `SpotArt.astro`.
- Prefer local files under `public/images/`. Avoid tourist cliché as the *only* visual idea; Opera House stock is optional scenery, not the default manifesto treatment when a portrait is intended.
- No AI-generated people as brand photography if real assets exist.

## Motion

Use `--ease-crisp: cubic-bezier(0.16, 1, 0.3, 1)` — no bounce.

| Element | Behavior |
| --- | --- |
| Reading progress | `2px` fixed top bar; scaleX with scroll |
| SYD clock | Tabular time; colon blink |
| Reveal / wipe | Section `ed-reveal`, title `ed-wipe`; nested wipes unlock when parent intersects (tall sections) |
| Topic pills | Ink thumb slides; grid stagger |
| Plan builder | Check stroke + sheet lines |
| Accordion | `+` rotates `45deg`; panel `grid-template-rows` |
| Ticker | Seamless `-50%` marquee |
| View transitions | Short page out/in on ClientRouter |

Honor `prefers-reduced-motion: reduce` (kill animation/transition; force reveals visible).

## Copy & Voice

- Short, direct, no sales funnel language.
- Headlines: questions or clear statements (`Talk before you’ve decided.`).
- Banned: visa guarantees, “limited time,” PR promises, lifestyle hype.
- Keep `日本語` in the utility bar; Japanese pages live at `/ja/` (landing), not inside `/zine/` yet.

## Accessibility & Responsive

- Focus: `2px solid #008069` (`outline-offset: 3px`); on green/accent bands, outline may use primary.
- Tap targets ≥ `44px` where possible (pills ~`32px` height but padded hit area).
- Mobile ≤`760px`: `4px` frame; topic pills scroll horizontally; hero stacks; grids collapse to 1–2 columns.

## Implementation

Tokens and components live in **`src/styles/zine.css`**. Layout: `ZineLayout.astro`. Motion: `src/scripts/zine-motion.ts`. Content: `src/zine/content.ts`.

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

  --font-brand: "Zilla Slab", "Zen Kaku Gothic New", serif;
  --font-logo: "Newsreader", "Zen Kaku Gothic New", serif;
  --font-sans: "Outfit", "Zen Kaku Gothic New", sans-serif;
  --font-mono: "Zilla Slab", "Zen Kaku Gothic New", serif;
  --font-courier: "Courier Prime", monospace;
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
- [ ] Final manifesto portrait crop (person right, full-bleed, not face-dominant)
- [ ] LINE deep link + inquiry endpoint
- [ ] Native-speaker pass if `/zine/` gains a Japanese route
