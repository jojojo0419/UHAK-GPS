# UHAK GPS — Design Guidelines (Green)

Nov 10, 2026 · @jojo

## Overview

The Green version is a clean, WhatsApp-like landing page with two greens: bright green #25D366 for actions and deep green #008069 for accents. The brand promise is "Talk before you've decided anything", and every element is designed to lower the barrier to reaching out.

- **Tone:** clean, bright, friendly. Real everyday life over slick advertising.
- **Principles:** one idea per section, short copy, and color only where it matters.
- **Personality:** "We know our stuff. But we're not intimidating."

## Color

Use bright green only for **actions and highlights** (fills and bars). Green text, outlines and icons always use deep green, and body text stays near-black, so contrast holds.

| Token | HEX | Role |
| --- | --- | --- |
| primary | #25D366 | Primary button fill, nav underline, point highlights |
| primary-hover | #25D366 | Fill stays the same; hover adds the offset shadow |
| accent | #008069 | Secondary button outline and text, small section labels, line icons, Your Plan handwriting, link hover, focus ring, airmail band text |
| accent-stripe | #1DAA61 | Striped decorations, paired with accent |
| ink | #1C1E21 | Body text, primary button text and outline, checks |
| ink-deep | #111B21 | Footer background |
| muted | #666666 | Quiet links (日本語 switch) |
| cream | #FCF5EB | Hero, We hear these a lot, Find your next chapter, How it works backgrounds |
| mint | #E7F8E2 | Lower band (We live here and below) |
| surface | #FFFFFF | Cards, speech bubbles, polaroids, Schools section, airmail band |
| line | #E2E5E8 | Dividers, band borders |
| line-soft | #E7EAEC | List row dividers inside cards |
| badge-line | #D5D9DD | Badge outline (inset 1px) |
| note-yellow / note-blue / note-mint | #FFE47A / #CFE4FB / #D4F0DF | Sticky notes (with white) |
| option-sand / option-sky | #F6E3A8 / #DCE9F4 | Option card backgrounds |
| tag-blue / tag-gray | #7FA6CF / #C9CED3 | Category dots (with primary) |
| heart | #F15C6D | Chat reaction |
| read-tick | #53BDEB | Chat read check marks |

- Never use bright green #25D366 for text or thin lines: it is 2:1 on white and disappears.
- Never put white text on #25D366; button text is always ink #1C1E21 (8.4:1).
- Deep green #008069 text passes AA on white (4.9:1) and cream (4.5:1) but not on mint (4.4:1). On the mint band, use ink for small text and keep deep green for 18px+ or bold text and icons.
- Never place a bright green button on a green background; it only goes on cream, white or dark.
- Large backgrounds stay in cream, white and mint only. Don't add new colors.
- Tints of deep green (rgba(0,128,105,.07–.12)) are for notebook lines and card patterns only.

## Typography

Headings are **Outfit** and body text is **Plus Jakarta Sans**. Use the handwriting and typewriter faces only as accents.

| Role | Font | Size | Weight / notes |
| --- | --- | --- | --- |
| Hero headline | Outfit | clamp(28px, 3.4vw, 44px) | 400, second line 500, letter-spacing -0.01em |
| Section title (h2) | Outfit | clamp(21px, 2.8vw, 38px) | 400, line-height 1.15 |
| Card / option title | Outfit | 16–20px | 400–500 |
| Body | Plus Jakarta Sans | 13–15px | 400, line-height 1.7 |
| Nav | Plus Jakarta Sans | 13px | 500, sentence case (no all caps) |
| Labels / badges | Plus Jakarta Sans | 11–12px | 500–600, all caps only for small labels; section labels in accent #008069 |
| Handwriting (notes, polaroids, Your Plan) | Shantell Sans | 13–24px | 400; Your Plan items in accent |
| Numbers (01, No.) | Courier Prime | 11–12px | 60% opacity |
| Japanese | Zen Kaku Gothic New / Noto Sans JP (handwriting: Klee One) | Same as English | 300 for captions |

- Use 3 weights at most per screen: 400 / 500 / 600.
- Logo: **UHAK GPS**, Outfit 500, letter-spacing 0.06em, no symbol.

## Layout & spacing

The content width is **max 864px** and every section uses the same rhythm. Backgrounds change only by band.

- **Container:** max-width 864px, side padding 35px on desktop and 20px on mobile.
- **Section spacing:** 72–104px top and bottom.
- **Corner radius:** buttons 999px (pill), cards and bubbles 12–16px, notes and polaroids 0–4px.
- **Shadows:** two soft layers by default (0 1px 2px + 0 8px 20px); reserve the black offset shadow (-4px 4px 0 #1C1E21) for selected and hover states only.
- **Breakpoint:** 760px. Below it, lay out in one column (option rows, schools, ID card) or two to three columns (steps 3×2, notes 2×2).

**Section order and backgrounds**

1. Nav: clear at the top, then a white floating pill on scroll
2. Hero (chat + polaroids): cream #FCF5EB
3. We hear these a lot. (notes): cream
4. Find your next chapter abroad. (options + Your Plan): cream
5. How it works (6 steps): cream
6. Schools we know well: white
7. Airmail line band: white, accent text, 1px line top and bottom
8. We live here / Studying abroad + principles: mint #E7F8E2
9. Footer: ink-deep #111B21

## Components

Every component uses the same three rules: white surface, near-black outline, bright green only for actions.

| Component | Default | Interaction / state |
| --- | --- | --- |
| Primary button | Bright green #25D366 fill, ink text, 1.5px ink outline, pill | Hover: offset shadow -4px 4px 0 #1C1E21 + translate(2px, -2px) |
| Secondary button | Transparent, 1.5px accent #008069 outline, accent text | Hover: ink fill, white text, ink outline. Disabled: outline at 35% opacity |
| Nav | Clear at the top (cream), logo left, 4 menu items, CTA right | On scroll: white floating pill (max 760px). Underline: 3px bright green bar on hover and for the current section |
| Hero chat | White bubbles, 15px, corner 12px (3px on the tail corner), time 10px | Incoming (left) → reply (right, blue checks), arriving 0.7s apart; heart reaction pops in |
| Hero headline | "We'll figure it out, together, in Australia." | Appears after the bubbles |
| Polaroids | White frame 10px (38px bottom), caption in Shantell Sans, three overlapping at -6° / 5° / -1° | Static |
| Sticky notes | 4 in one row (yellow, white, sky, mint), clear tape | Static, alternating 0 / 18px vertical offset |
| Option list | Rows with a hairline divider: check circle, title, one line, badges (inset #D5D9DD outline) | Hover: white 75% background. Selected: white card, 1.5px dark outline, filled dark check. Adds to Your Plan |
| Your Plan | Lined notepad (accent lines at 12%), red margin line, washi tape, handwritten items in accent | Sticky in the sidebar, CTA at the bottom |
| Step tickets | 6 in one row: icon 52px, number, title | Selected: white card, black outline, offset shadow; upcoming icons grayscale at 45% |
| Schools | 3 equal columns with accent category labels, 2 schools each, name + "city · trait" | See all schools → school guide |
| ID card | Header band, photo 64×76, name, year, suburb | Tap to flip (0.7s), back shows 3 things to ask about |
| Principles | One white card checklist, 3 items | Static |
| Footer | Dark #111B21, logo + one line, menu, address and copyright | Links in white, secondary text at 60–70% opacity |

## Imagery & icons

Use **real everyday photos and skeuomorphic icons**. Avoid flashy travel ads and AI-generated-looking images.

- **Photos:** real places and people near Town Hall in Sydney (Hyde Park, the consultation room, a lunch break). Warm natural light, minimal retouching.
- **What to avoid:** tourist shots like the Opera House, crowded stock photos, Unsplash+ (paid) and AI-generated photos.
- **Step icons (skeuomorphic):** green tea → Australia map → calendar → journal → airplane → Australian flag. Soft shadow, used only at 52–86px.
- **Line icons:** 1.2–1.4px stroke in accent #008069, no fill.
- **Rights:** use only photos the client owns or has consent for. External image URLs are blocked on the canvas, so upload and store every image as a file.
- **Alt text:** every photo gets a one-line alt text that describes what's in it.

## Motion & interaction

Motion should be **short and purposeful**: only to show where you are, what changed, or the flow of a conversation.

| Element | Duration | Easing / notes |
| --- | --- | --- |
| Button hover | 0.2s | ease, offset shadow + 2px shift |
| Secondary button hover | 0.25s | ease, background, outline, text color |
| Nav transition (clear → pill) | 0.45s | ease, background, width, corner radius |
| Menu underline | 0.35s | cubic-bezier(.3,.7,.2,1), grows left to right |
| Chat bubbles arriving | 0.5s each, 0.7s apart | rise from below + slight scale-up |
| Heart reaction | 0.45s | pop (scales to 1.15× then settles) |
| Step card selection | 0.25s | background, outline, shadow |
| ID card flip | 0.7s | cubic-bezier(.3,.7,.2,1), rotateY 180° |
| Anchor scroll | — | scroll-behavior: smooth, stops under the header |

- Avoid continuous loops (tickers, floating effects). The exceptions are the subtle flow of the step dots and the slow airmail band (46s per loop).
- With prefers-reduced-motion, turn off every animation and show the end state immediately.

## Copy & voice

The copy talks **the way a friend would** and stays short. Section titles are one sentence, and each description is one line.

- **Tone:** conversational, honest, warm. "We hear these a lot." "We actually live here."
- **Length:** title ≤ 8 words, description ≤ 15 words, buttons 2–5 words.
- **Nav labels:** sentence case and conversational (What fits me / How it works / Schools we know / Life here).
- **Banned expressions:** "Limited time", "Highly recommended", guarantees of permanent residency, exaggerated claims about life abroad.
- **Principles to keep:** We don't sell schools / No promises we can't keep / Your choice stays yours.
- **Japanese:** use it sparingly, only where it adds emotion (handwritten notes, the floating banner). The final translation needs a native speaker's review.

## Accessibility & responsive

Every screen must meet **WCAG AA** and work on mobile.

- **Contrast:** body text #1C1E21 on cream, white or mint is 15:1 or higher. Ink on bright green buttons is 8.4:1; never white on #25D366. Accent #008069 text is for white and cream backgrounds (see Color).
- **Tap targets:** buttons, chips and tabs are at least 44px tall.
- **Focus:** a visible 2px accent #008069 outline, offset 3px, on every interactive element (:focus-visible).
- **Semantics:** the hero title is an `h1` and section titles are `h2`. Speech bubbles are decorative (aria-hidden), and the h1 includes the conversation text so it reads in order.
- **State:** toggles use aria-pressed and step tabs use aria-selected.
- **Mobile (≤760px):** the nav becomes 2 rows (logo + CTA / scrolling menu), option rows go to 1 column, steps 3×2, notes 2×2, schools 1 column; in-section buttons go full width.
- **Motion:** respect prefers-reduced-motion.

## Implementation tokens & open items

In the Astro + Tailwind v4 + daisyUI build, pin everything above to the theme tokens below.

```css
@plugin "daisyui/theme" {
  name: "uhakgps-green";
  --color-primary: #25D366;
  --color-primary-content: #1C1E21;
  --color-secondary: #008069;
  --color-secondary-content: #FFFFFF;
  --color-neutral: #111B21;
  --color-base-100: #FCF5EB;
  --color-base-200: #E7F8E2;
  --color-base-content: #1C1E21;
  --radius-field: 999px;
  --radius-box: 16px;
}
@theme {
  --font-display: "Outfit", "Zen Kaku Gothic New", sans-serif;
  --font-sans: "Plus Jakarta Sans", "Zen Kaku Gothic New", sans-serif;
  --font-hand: "Shantell Sans", "Klee One", cursive;
  --font-mono: "Courier Prime", monospace;
  --shadow-offset: -4px 4px 0 #1C1E21;
}
```

**Items to confirm before launch**

- [ ] Counsellor's name, year of arrival in Australia, and suburb
- [ ] Actual partner school names and notes (replace the mock names)
- [ ] Booking link (#book) and LINE link (#line)
- [ ] Long-term Settlement copy (keep any "PR" wording out of promises)
- [ ] Photo usage consent (friend and students) plus 1–2 more real student photos
- [ ] Native-speaker review of the Japanese version
- [ ] Accent #008069 small text on the mint band (4.4:1): switch to ink or enlarge
