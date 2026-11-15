## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Design

Two separate design docs — do not mix tokens across surfaces:

- **Landing `/` and `/ja/`:** **[docs/design.md](docs/design.md)** (`global.css`, `landing.css`, `src/components/landing/`)
- **Zine `/zine/`:** **[docs/design-zine.md](docs/design-zine.md)** (`zine.css`, `src/components/zine/`, `src/pages/zine/`)

A Cursor rule (`.cursor/rules/design-guidelines.mdc`) applies landing guidelines when editing `src/**` UI files — for zine work, open `docs/design-zine.md`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
