# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio (Fadoilul Mun'im) built with **vanilla JavaScript and
Tailwind CSS v4, bundled by Vite — no UI framework, no tests, no linter.** Source files:
`index.html` (a thin shell), `src/partials/*.html` (one HTML partial per section — `navbar`,
`hero`, `about`, `skills`, `experience`, `projects`, `certificates`, `education`, `contact`,
`footer`), `src/style.css` (Tailwind v4 source + design tokens), and the behavior layer in
`src/js/` — split one module per task: `i18n.js` (the EN/ID translation strings),
`dom.js` (`$`/`$$`/storage helpers), `translate.js` (`translatePage` + parity check),
`theme.js`, `language.js`, `nav.js`, `reveal.js`, and `main.js` (the thin orchestrator that
imports the others and runs `init()`). `index.html`
stitches the partials together at build time via
`vite-plugin-handlebars` (`{{> navbar }}` → `src/partials/navbar.html`), so it stays static —
no runtime cost. Static files served as-is live in `public/` (e.g.
`public/Fadoilul-Munim-CV.pdf`); `npm run build` emits the deployable site to `dist/`.

## Running

```bash
# the folder path contains a space — keep the quotes
npm install          # first time only
npm run dev          # Vite dev server + HMR (prints a localhost URL)
npm run build        # production build → dist/ (minified, hashed assets)
npm run preview      # serve the built dist/ locally to sanity-check it
```

The only runtime network dependency is the Inter web font; a system-font fallback covers
offline use.

## Bilingual content model (most important thing to know)

Every visible string exists in **two places that must stay in sync**:

1. `src/partials/<section>.html` — the English text in the markup (this is the first paint).
2. `src/js/i18n.js` — the `I18N` object, holding `en` and `id` strings keyed by the
   element's `data-i18n` attribute (imported by `src/js/translate.js`).

`translatePage(lang)` rewrites the DOM from `I18N` on load and on language toggle. So:

- **Editing copy:** update the English text in the relevant `src/partials/*.html` **and** the
  matching key in **both** `I18N.en` and `I18N.id`. Every key must exist in both languages —
  `checkParity()` logs a console warning on load if one is missing (check DevTools).
- **Adding a string:** add the element with `data-i18n="my.key"` in the partial, then add
  `my.key` to both `I18N.en` and `I18N.id`.
- **Adding a whole section:** create `src/partials/<name>.html` and reference it from
  `index.html` with `{{> <name> }}`.
- **Translatable attributes:** use `data-i18n-attr="aria-label:my.key; title:my.key"`.
  Raw-HTML strings use `data-i18n-html` instead of `data-i18n`.
- **Do not translate proper nouns** (Laravel, React, GajiHub, etc.) — keep them identical in
  both languages.

`Fadoilul Munim - CV.md` is the content source of truth for the copy.

## Theme & language bootstrap

- An inline script in `index.html`'s `<head>` sets `data-theme` and `lang` on `<html>`
  **before the stylesheet paints**, to prevent a flash of the wrong theme. Precedence:
  explicit `localStorage` choice > OS `prefers-color-scheme`. It also adds the `js` class.
- `src/js/theme.js` and `src/js/language.js` then *wire their toggles* (they do not set the
  initial theme/lang). Theme follows the
  OS only until the user makes an explicit choice; both theme and language persist in
  `localStorage` (`theme`, `lang`). All `localStorage` access goes through the try/catch
  `readStored`/`writeStored` wrappers in `src/js/dom.js` for private-mode.

## Styling (Tailwind CSS v4)

Styling is **hybrid**: layout/spacing/typography use inline utility classes in `index.html`,
while repeated atoms (`.btn`, `.chip`, `.tcard`, `.nav__link`, …) are semantic classes defined
with `@apply` in `src/style.css`. That file is the single source of truth:

- **Design tokens** live in the `@theme { … }` block (colors, the fluid `--text-*` scale,
  radii, shadows) and generate the utilities. Light is the default; the `[data-theme="dark"]`
  block right below overrides the swappable tokens. Because tokens use a *regular* `@theme`
  (not `@theme inline`), every color/shadow utility resolves through `var(--token)` and
  re-colors automatically when `data-theme` flips — so **no `dark:` variants are needed** on
  color utilities. The `@custom-variant dark (…)` line re-points Tailwind's `dark:` at the
  `data-theme` attribute for the few stateful one-offs.
- Effects that aren't expressible as utilities (hero overlay, timeline rail/dots, scroll-reveal,
  sticky header, mobile nav panel) are hand-written CSS at the bottom of the file.
- The 880px desktop breakpoint is written as the arbitrary variant `min-[880px]:` (Tailwind's
  `sm`/`lg` cover 640/1024).

## Deploy

Pushed to **GitHub Pages** automatically by `.github/workflows/deploy.yml` (Vite build →
`dist/` → Pages) on every push to `main`. One-time: set **Settings → Pages → Source: GitHub
Actions**. It's a user/org site at the root, so `vite.config.js` uses `base: "/"`. After
deploying, update the placeholder `https://your-domain.example/` URLs in `index.html`'s
`<head>` (`canonical`, `og:url`, `og:image`, `twitter:image`). To swap the CV, replace
`public/Fadoilul-Munim-CV.pdf` (served at `/Fadoilul-Munim-CV.pdf`, hard-coded in the download
buttons).
