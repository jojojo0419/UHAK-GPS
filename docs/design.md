# UHAK GPS — Design Guidelines (Editorial Green Edition)

Nov 15, 2026 · @jojo

## Overview

UHAK GPS is designed as an **independent editorial publication and Sydney local field guide** rather than a traditional study-abroad agency website. Inspired by modern digital magazines and civic journalism layouts, the system combines a full-viewport green border frame, an oversized editorial masthead, strict `1px` black structural rules, documentary photography with color-blocked overlays, and high-contrast monochrome spot illustrations.

The core brand promise remains **"Talk before you've decided anything"**—replacing aggressive sales funnels with transparent, magazine-grade guides written by people actually living in Sydney.

- **Tone:** editorial, candid, grounded, intellectually honest. Real Sydney life over glossy brochure marketing.
- **Principles:** strict grid discipline, sharp rectangular framing (`0px` photo radius), `1px` ink dividers, and bold green color blocks used to anchor hierarchy.
- **Personality:** "An honest local magazine run by friends in Sydney—zero pressure, zero commission bias."

## Color

The palette pairs **UHAK GPS's two signature greens** (`#25D366` and `#008069`) with stark print ink (`#111315`), warm newsprint gray (`#F3F2EE`), and crisp white (`#FFFFFF`).

| Token | HEX | Role |
| --- | --- | --- |
| primary | #25D366 | Outer viewport frame, hero feature block, team/who-we-are band, footer band, active topic dots, hover highlights |
| accent | #008069 | Deep botanical green for secondary color blocks, category eyebrows, duotone photo overlays, focus outlines |
| mint | #E7F8E2 | Soft green editorial card block (used in 3-column toolkit grids) |
| ink | #111315 | Masthead wordmark, headlines, body copy, `1px` structural grid lines, active filter pills, spot illustrations |
| paper | #F3F2EE | Warm newsprint/stone canvas for main editorial grids and newsletter strip |
| surface | #FFFFFF | Clean white bands (masthead header, interactive topic explorer, principles section) |
| muted | #7A7D80 | Inactive topic filter items, secondary metadata, quiet language toggle (`日本語`) |
| card-sky | #CFE4FB | Secondary editorial color block in multi-column toolkit grids (paired with `primary` and `mint`) |
| card-sand | #F6E3A8 | Optional warm editorial highlight block for pull-out callouts |
| border | #111315 | Universal `1px` horizontal section dividers, vertical column rules, and pill outlines |

**Color & Contrast Guardrails**
- Never use `#25D366` for body text or thin `1px` lines on white/paper surfaces (low luminance contrast).
- Text placed on `#25D366` or `#E7F8E2` surfaces must always be `ink` `#111315` (`8.4:1+` contrast).
- `#008069` text is reserved for uppercase category eyebrows (`11–12px` bold) on `surface` `#FFFFFF` and `paper` `#F3F2EE`. On `#008069` fills, use `#FFFFFF` or `#25D366` text.
- Keep large page bands alternating cleanly between `surface` (`#FFFFFF`), `paper` (`#F3F2EE`), and `primary` (`#25D366`).

## Typography

Typography contrasts a **high-impact editorial masthead** with **bold neo-grotesque uppercase section headers**, readable sans-serif body text, and **monospace metadata**.

| Role | Font | Size | Weight / Styling |
| --- | --- | --- | --- |
| Masthead Logo (`UHAK GPS`) | Newsreader (or Fraunces) | `clamp(44px, 7vw, 88px)` | `600`, tight tracking `-0.03em`, centered display serif |
| Hero Feature Headline (`h1`) | Plus Jakarta Sans | `clamp(28px, 3.6vw, 44px)` | `800`, `line-height: 1.08`, `letter-spacing: -0.02em` |
| Section Header (`h2`) | Plus Jakarta Sans | `clamp(22px, 2.8vw, 34px)` | `800`, uppercase (`THE LATEST`, `WHAT WE BELIEVE`, `WHO WE ARE`), `letter-spacing: -0.01em` |
| Card / Article Title (`h3`) | Plus Jakarta Sans | `15–18px` | `700`, `line-height: 1.25`, uppercase or sentence case |
| Topic List Item (Interactive) | Plus Jakarta Sans | `clamp(20px, 2.4vw, 28px)` | `700`, `line-height: 1.35`; inactive in `muted` `#7A7D80`, active in `ink` `#111315` |
| Editorial Pull Quote | Newsreader | `clamp(20px, 2.4vw, 28px)` | `500`, `line-height: 1.35`, centered |
| Body Copy | Plus Jakarta Sans | `14–15px` | `400`, `line-height: 1.65`, `ink` `#111315` |
| Micro-Metadata, Dates & Pills | Courier Prime | `11–12px` | `400`–`700`, uppercase (`15.11.26`, `WORKING HOLIDAY`, `READ MORE ->`) |
| Japanese | Zen Kaku Gothic New / Noto Sans JP | Same scale as English | `400` body, `700` headings |

## Layout & Spacing

The entire website is framed inside a **solid `8px` `#25D366` viewport border** (`4px` on mobile), creating the self-contained silhouette of a print magazine cover. Inside, full-bleed bands are separated by **`1px solid #111315` horizontal rules**, with content aligned to a **max-width `1120px` editorial grid**.

- **Outer Viewport Frame:** `border: 8px solid #25D366` around `body` (`4px` below `760px`).
- **Inner Container:** `max-width: 1120px`, centered, horizontal padding `32px` on desktop and `16px` on mobile.
- **Section Spacing:** `56–80px` top and bottom padding per band.
- **Sharp Magazine Geometry:**
  - Photographs, featured split cards, toolkit blocks, and accordion rows use **`0px` border radius** (sharp rectangular cuts).
  - Filter pills (`ALL`, `WORKING HOLIDAY`) and primary action buttons use **`999px` pill radius** with `1px solid #111315` borders.
  - Mid-page floating callout badges use **`24px` rounded-square corners** (`border-radius: 24px`) to contrast against rectangular photography.
- **Shadows:** Zero drop shadows (`box-shadow: none`). Hierarchy is established entirely through `1px solid #111315` rules and flat color blocking.
- **Breakpoint:** `760px`. Multi-column grids collapse cleanly to `1` or `2` columns below `760px` while preserving `1px` horizontal dividers.

**Page Architecture & Band Order**

1. **Utility Top Bar & Editorial Masthead:** `surface` `#FFFFFF`, `1px` bottom rule
2. **Topic Filter Pill Bar:** `surface` `#FFFFFF`, horizontal scrollable pills, `1px` bottom rule
3. **Hero Asymmetric Feature Grid (Main Split Story + 3 Sidebar Guides):** `paper` `#F3F2EE`
4. **`THE LATEST` (4-Column Guide Grid):** `paper` `#F3F2EE`, `1px` top rule
5. **`#ASKANYTHING` Interactive Topic Explorer (2-Column Split):** `surface` `#FFFFFF`, bounded top & bottom by `1px` rules
6. **Mid-Page Documentary Photo + `#25D366` Callout Badge:** `paper` `#F3F2EE`
7. **`TOOLKITS & CHECKLISTS` (3-Column Color-Blocked Grid):** `paper` `#F3F2EE`, `1px` top rule
8. **`WHAT WE BELIEVE` (4-Column Spot Illustrations + Centered Pull Quote):** `surface` `#FFFFFF`, bounded top & bottom by `1px` rules
9. **`WHO WE ARE` (Green Team Portraits + `1px` Accordion List):** `primary` `#25D366`, `1px` top rule
10. **Inquiry Strip + Announcement Ticker + Editorial Footer:** `paper` `#F3F2EE` strip → `primary` `#25D366` (or `ink` `#111315`) footer

## Components

Every component is built from flat surfaces, `1px solid #111315` rules, and crisp typography—no drop shadows or floating cards.

| Component | Structure & Visual Rules | Interaction / State |
| --- | --- | --- |
| **Masthead Header** | Top utility row (`SYDNEY, AU · LOCAL GUIDE` left, `日本語` + `BOOK A CHAT` pill right). Below: centered oversized `UHAK GPS` serif wordmark paired with a minimal `#111315` line-art hand/compass icon | `BOOK A CHAT` pill: `#25D366` fill, `1px` black border; inverts to `#111315` fill with `#25D366` text on hover |
| **Topic Filter Bar** | Centered row labeled `TOPICS:` in `Courier Prime` `11px` uppercase followed by pill tags (`ALL`, `WORKING HOLIDAY`, `ENGLISH & VET`, `UNIVERSITY`, `SYDNEY LIFE`) | Default: transparent fill, `1px solid #111315` border. Active/Hover: solid `#111315` fill, `#FFFFFF` text |
| **Hero Asymmetric Feature** | `2fr : 1fr` grid (`gap: 32px`). **Left:** flush 2-part rectangle—left half `#25D366` green box (`h1` *"Talk before you've decided anything."*, short summary, `START A CHAT ->` link), right half full-bleed documentary photo (`0px` radius). **Right (`FEATURED GUIDES`):** 3 stacked mini-cards (`72×72px` square photo + mono tag + bold title) | Hovering any card underlines the headline and shifts photo contrast slightly (`scale(1.02)` inside `overflow: hidden` sharp frame) |
| **4-Column Article Grid** | 4 equal columns (`gap: 24px`). Each item: `4:3` sharp rectangular photo, flex row with `Courier Prime` date (`15.11.26`) left and `#008069` category right, bold `Plus Jakarta Sans` title, and bottom `READ MORE ->` mono link with `1px solid #111315` underline | `READ MORE ->` highlights with `#25D366` background fill on hover |
| **Interactive Topic Explorer** | `1fr : 1.4fr` split on `#FFFFFF`. **Left:** stacked large topic titles (`Working Holiday`, `Language Schools`, `TAFE & Vocational`, `University Pathways`, `Cost of Living`). **Right:** 3 horizontal story rows (`96×72px` duotone/collage photo + title + 1-line summary) separated by `1px solid #111315` rules | Clicking a topic sets it to `ink` `#111315` with a `10px` `#25D366` dot indicator (others stay `muted` `#7A7D80`) and filters the right-hand guide list |
| **Full-Bleed Feature Overlay** | Full-width `16:7` documentary Sydney photo (`0px` radius). Overlaid on the left-center: a `24px`-radius `#25D366` callout box (`padding: 36px`) with uppercase bold manifesto headline (`"WE DON'T SELL SCHOOLS. YOUR CHOICE STAYS YOURS."`) and mono sub-tag | Static editorial centerpiece |
| **3-Column Toolkit Grid** | Section header (`TOOLKITS`) + `1px` top rule. 3 equal sharp-edged rectangular cards (`0px` radius, `padding: 28px`) in `#25D366` (bright green), `#E7F8E2` (mint), and `#CFE4FB` (sky blue), each with bold uppercase title, concise description, and bottom `1px` rule | Hovering a block reveals a crisp `1px solid #111315` inset frame |
| **Principles & Spot Art** | `WHAT WE BELIEVE` uppercase header + 4-column grid. Each column features a `56×56px` `#111315` ink + `#25D366` accent spot illustration (hand, magnifying glass, compass, speech bubble), uppercase principle title, and 3-line explanation. Below: `1px` rule + centered `Newsreader` pull quote | Static |
| **Green Team & Accordion Band** | Full-width `#25D366` section (`WHO WE ARE`). Top: 3–4 rectangular grayscale portraits (`1px solid #111315` frame) with name, arrival year, and Sydney suburb (`Town Hall · Since 2019`). Bottom: full-width accordion list separated by `1px solid #111315` top/bottom borders (`How our 1:1 consultation works +`, `Partner schools & institutions +`, `Arrival support in Sydney +`) | Clicking an accordion row rotates `+` to `×` and expands the answer block cleanly |
| **Inquiry Strip & Footer** | **Strip (`#F3F2EE`):** centered uppercase prompt (`STILL FIGURING IT OUT? LEAVE YOUR EMAIL OR LINE ID`), `1px solid #111315` bottom-bordered transparent input, solid `#111315` pill `SEND`. **Ticker:** full-width `1px` bordered bar (`Based near Town Hall, Sydney · Free 1:1 chats ->`). **Footer (`#25D366`):** oversized `UHAK GPS` wordmark + 4 columns of uppercase mono links | Links underline with `1px solid #111315` on hover |

## Imagery & Spot Illustrations

Visuals blend **unretouched documentary photography**, **editorial duotone/collage treatments**, and **bold monochrome ink spot illustrations**.

- **Documentary Photography:** Real everyday Sydney scenes near Town Hall, Hyde Park, Surry Hills cafes, and university libraries. Natural daylight, authentic candid moments, cropped to strict `0px` rectangles.
- **Duotone & Collage Thumbnails:** Secondary thumbnails in the topic explorer and sidebar may use `#008069` or `#25D366` duotone color washes with clean geometric cutout accents, echoing independent print zines.
- **Strictly Avoid:** Opera House / Harbour Bridge tourist clichés, glossy corporate stock photos, paid Unsplash+ assets, and AI-generated imagery.
- **Spot Illustrations:** Custom `2px`-stroke `#111315` ink drawings paired with flat `#25D366` accent shapes (open hand, compass, coffee cup, magnifying glass) used in the masthead and `WHAT WE BELIEVE` grid.
- **Rights & Hosting:** Store all photos and SVGs locally inside the Astro repository (`src/assets/`) with descriptive `alt` text.

## Motion & Interaction

Interactions are **fast, tactile, and mechanical**—matching the feel of flipping through a print magazine.

| Element | Duration | Behavior |
| --- | --- | --- |
| Topic pill & button hover | `0.15s` | Instant color inversion (`#25D366` ↔ `#111315`) |
| `READ MORE ->` link hover | `0.15s` | `#25D366` background highlighter fill |
| Article thumbnail hover | `0.3s` | `cubic-bezier(.25, .8, .25, 1)`, subtle `scale(1.02)` within sharp rectangular crop |
| Interactive topic switch | `0.2s` | Smooth opacity fade (`0.15s`) on filtered guide rows + `#25D366` active dot snap |
| Accordion expand/collapse | `0.25s` | Smooth height transition + `+` icon rotation (`45deg`) |

- Disable all transitions and transforms when `prefers-reduced-motion: reduce` is active.

## Copy & Voice

Write with the **clarity, warmth, and directness of an independent local magazine**.

- **Tone:** informative, candid, conversational, zero sales pressure.
- **Headline Style:** Mix direct questions (`"Do you actually need an agent?"`) with clear editorial statements (`"Talk before you've decided anything."`).
- **Banned Expressions:** `"Limited time offer"`, `"100% visa guarantee"`, `"Permanent Residency guaranteed"`, `"Highly recommended"`, or exaggerated lifestyle hype.
- **Japanese Support:** Maintain the `日本語` toggle in the top utility bar; keep Japanese typography aligned to `Zen Kaku Gothic New` with native-speaker review prior to launch.

## Accessibility & Responsive

- **WCAG AA Contrast:** `ink` `#111315` on `surface` `#FFFFFF` (`18.8:1`), `paper` `#F3F2EE` (`16.7:1`), and `primary` `#25D366` (`9.2:1`) exceeds AAA/AA thresholds across every section.
- **Keyboard & Focus:** Every pill, topic selector, accordion button, and `READ MORE ->` link renders a `2px solid #008069` (or `#111315` on green bands) `:focus-visible` outline with `3px` offset.
- **Touch Targets:** Filter pills, accordion rows, and navigation links maintain a minimum `44px` tap height.
- **Mobile (`≤760px`):**
  - Outer viewport border reduces from `8px` to `4px`.
  - Topic filter bar becomes horizontally scrollable (`overflow-x: auto`, `white-space: nowrap`).
  - Hero asymmetric split stacks vertically (`#25D366` headline block above documentary photo, followed by sidebar guides).
  - 4-column article grid collapses to `1` column (or `2` columns on tablet); 3-column toolkits and 4-column principles collapse to `1` column separated by `1px solid #111315` rules.

## Implementation Tokens & Open Items

Configure **Astro + Tailwind CSS v4** directly via `@theme` with zero third-party UI component libraries.

```css
@import "tailwindcss";

@theme {
  /* Editorial Green Palette */
  --color-primary: #25D366;
  --color-accent: #008069;
  --color-mint: #E7F8E2;
  --color-ink: #111315;
  --color-paper: #F3F2EE;
  --color-surface: #FFFFFF;
  --color-muted: #7A7D80;
  --color-card-sky: #CFE4FB;
  --color-card-sand: #F6E3A8;
  --color-border: #111315;

  /* Typography */
  --font-masthead: "Newsreader", "Zen Kaku Gothic New", serif;
  --font-sans: "Plus Jakarta Sans", "Zen Kaku Gothic New", sans-serif;
  --font-mono: "Courier Prime", monospace;

  /* Geometry */
  --radius-none: 0px;
  --radius-badge: 24px;
  --radius-pill: 999px;
}

@layer base {
  body {
    background-color: var(--color-paper);
    color: var(--color-ink);
    font-family: var(--font-sans);
    border: 8px solid var(--color-primary);
    min-height: 100vh;
  }

  @media (max-width: 760px) {
    body {
      border-width: 4px;
    }
  }
}

@layer components {
  .editorial-rule-top {
    border-top: 1px solid var(--color-ink);
  }

  .editorial-rule-bottom {
    border-bottom: 1px solid var(--color-ink);
  }

  .editorial-pill {
    font-family: var(--font-mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border: 1px solid var(--color-ink);
    border-radius: var(--radius-pill);
    padding: 6px 14px;
    transition: background-color 0.15s ease, color 0.15s ease;
  }

  .editorial-pill:hover,
  .editorial-pill[aria-pressed="true"] {
    background-color: var(--color-ink);
    color: var(--color-surface);
  }

  .editorial-read-more {
    font-family: var(--font-mono);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--color-ink);
    border-bottom: 1px solid var(--color-ink);
    padding: 2px 3px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: background-color 0.15s ease;
  }

  .editorial-read-more:hover {
    background-color: var(--color-primary);
  }
}
```

**Pre-Launch Confirmation Checklist**

- [ ] Counsellor portraits (grayscale), names, arrival years in Australia, and Sydney suburbs for `WHO WE ARE`
- [ ] Real documentary photography around Town Hall, Hyde Park, and local cafes (`4:3` and `16:7` crops)
- [ ] Custom monochrome ink + `#25D366` SVGs for masthead mark and 4 `WHAT WE BELIEVE` spot illustrations
- [ ] Real partner institution notes and FAQ copy for the `WHO WE ARE` accordion rows
- [ ] Booking link (`#book`), LINE ID / link (`#line`), and inquiry form endpoint
- [ ] Native-speaker review of the Japanese (`日本語`) edition