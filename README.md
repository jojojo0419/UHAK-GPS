# UHAK GPS

Astro + React landing site for UHAK GPS (study abroad & Working Holiday guidance).

## Stack

- Astro (static) + React islands
- Tailwind CSS v4 (`@tailwindcss/vite`) with brand tokens in `src/styles/global.css`
- Netlify hosting (`netlify.toml`)
- Legacy single-file export kept in `legacy/`

## Styles & landing

| Path | Role |
| --- | --- |
| `src/styles/global.css` | Tailwind + `@theme` brand tokens + base |
| `src/styles/landing.css` | Motion / sticky header / a few mobile overrides |
| `src/components/landing/` | React sections (`data.ts`, `ui.tsx`, `sections/*`) |
| `docs/design.md` | Design guidelines |

Prefer Tailwind tokens (`bg-cream`, `text-accent`, `font-display`, `rounded-pill`, …) for new UI.

## Local

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Next steps

- Sveltia CMS + JA/EN blog
- Search
- Analytics
