## Implementation Tokens & Open Items

In the **Astro + Tailwind CSS v4** build, define all brand colors, fonts, radii, and solid offset shadows directly inside `@theme` so native utility classes (`bg-cream`, `bg-mint`, `border-ink`, `shadow-card`, `font-mono`, etc.) work out of the box without any UI plugin.

```css
@import "tailwindcss";

@theme {
  /* Core Brand & Action Colors */
  --color-primary: #25D366;
  --color-accent: #008069;
  --color-accent-stripe: #1DAA61;
  --color-ink: #1C1E21;
  --color-ink-deep: #111B21;
  --color-muted: #5C6166;

  /* Band & Card Surfaces */
  --color-cream: #FCF5EB;
  --color-mint: #E7F8E2;
  --color-surface: #FFFFFF;

  /* Structural Dividers & Accents */
  --color-line: #1C1E21;
  --color-line-soft: #D8DCE0;
  --color-badge-line: #C4C9CE;
  --color-note-yellow: #FFE47A;
  --color-note-blue: #CFE4FB;
  --color-note-mint: #D4F0DF;
  --color-option-sand: #F6E3A8;
  --color-option-sky: #DCE9F4;
  --color-tag-blue: #7FA6CF;
  --color-tag-gray: #C9CED3;
  --color-heart: #F15C6D;
  --color-read-tick: #53BDEB;

  /* Typography */
  --font-display: "Outfit", "Zen Kaku Gothic New", sans-serif;
  --font-sans: "Plus Jakarta Sans", "Zen Kaku Gothic New", sans-serif;
  --font-hand: "Shantell Sans", "Klee One", cursive;
  --font-mono: "Courier Prime", monospace;

  /* Radii & Editorial Offset Shadows */
  --radius-pill: 999px;
  --radius-box: 4px;
  --radius-note: 2px;
  --shadow-card: -3px 3px 0 #1C1E21;
  --shadow-offset: -4px 4px 0 #1C1E21;
}

/* Base & Editorial Zine Primitives */
@layer base {
  body {
    background-color: var(--color-cream);
    color: var(--color-ink);
    font-family: var(--font-sans);
    border: 6px solid var(--color-accent);
    min-height: 100vh;
  }

  @media (max-width: 760px) {
    body {
      border-width: 4px;
    }
  }
}

@layer components {
  .zine-band {
    border-top: 1px solid var(--color-ink);
  }

  .zine-card {
    background-color: var(--color-surface);
    border: 1.5px solid var(--color-ink);
    border-radius: var(--radius-box);
    box-shadow: var(--shadow-card);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .zine-card-interactive:hover {
    transform: translate(1px, -1px);
    box-shadow: var(--shadow-offset);
  }

  .zine-btn-primary {
    background-color: var(--color-primary);
    color: var(--color-ink);
    font-weight: 500;
    border: 1.5px solid var(--color-ink);
    border-radius: var(--radius-pill);
    box-shadow: var(--shadow-card);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }

  .zine-btn-primary:hover {
    transform: translate(1px, -1px);
    box-shadow: var(--shadow-offset);
  }

  .zine-link {
    font-family: var(--font-mono);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--color-ink);
    border-bottom: 1.5px solid var(--color-ink);
    padding: 2px 4px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: background-color 0.15s ease;
  }

  .zine-link:hover {
    background-color: var(--color-primary);
  }
}
```

**Pre-Launch Confirmation Checklist**

- [ ] Counsellor's name, year of arrival in Australia, and Sydney suburb (for ID card)
- [ ] Actual partner school names, suburbs, and honest 1-line notes (replace mock entries)
- [ ] Booking link (`#book`) and LINE integration link (`#line`)
- [ ] Long-term Settlement option copy (verify zero PR guarantee language)
- [ ] Photo usage consent (friend & students) + 2 documentary shots near Town Hall / Hyde Park
- [ ] Native-speaker review of the Japanese (`日本語`) copy and handwritten notes
- [ ] Verify all small text on the `#E7F8E2` mint band uses `ink` `#1C1E21` (reserving `#008069` for `18px+` bold headings and icons)