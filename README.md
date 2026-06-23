# Fadoilul Mun'im — Personal Portfolio

A polished, responsive, **one-page portfolio** built with **vanilla JavaScript** and
**Tailwind CSS v4**, bundled by **Vite**. It features a dark mode, a bilingual
**English / Bahasa Indonesia** toggle, smooth-scroll navigation with active-section
highlighting, and subtle scroll animations.

---

## ✨ Features

- **One page, ten sections** — Navbar, Hero, About, Skills, Experience, Projects,
  Certificates, Education, Contact, Footer.
- **Dark mode** — light by default; respects your OS preference on first visit, then
  remembers your explicit choice (`localStorage`). No flash of the wrong theme.
- **Bilingual EN / ID** — every visible string is translated; the choice is remembered and
  the `<html lang>` attribute updates accordingly.
- **Responsive & accessible** — mobile-first, no horizontal scroll, ≥44px tap targets,
  semantic landmarks, keyboard focus states, and WCAG-AA color contrast in both themes.
- **Performance-friendly** — self-hosted fonts (Fraunces, Instrument Sans, IBM Plex Mono) with
  system fallbacks, inline SVG icons and favicon, and `IntersectionObserver`-based animations
  that respect `prefers-reduced-motion`.

---

## 📁 File structure

```
web-portfolio/
├── index.html              # thin shell; includes the partials via {{> name }}
├── package.json            # scripts + dev dependencies (Vite, Tailwind v4)
├── vite.config.js          # Vite + @tailwindcss/vite + vite-plugin-handlebars; base: "/"
├── README.md               # this file
├── .gitignore              # ignores node_modules/ and dist/
├── Fadoilul Munim - CV.md  # the source content (kept for reference)
├── .github/workflows/
│   └── deploy.yml          # builds + deploys to GitHub Pages on push to main
├── scripts/                # build-time guardrails (i18n parity, link check)
├── src/
│   ├── partials/           # one HTML partial per section (the page markup)
│   │   ├── navbar.html  hero.html  about.html  skills.html  experience.html
│   │   └── projects.html  certificates.html  education.html  contact.html  footer.html
│   ├── data/               # data-driven records (projects, experience, certificates)
│   ├── js/                 # behavior layer — one module per concern
│   │   ├── i18n.js         # EN/ID translation strings (the I18N object)
│   │   ├── translate.js    # translatePage + checkParity
│   │   ├── dom.js  theme.js  language.js  nav.js  reveal.js
│   │   └── main.js         # thin orchestrator (imports the others, runs init())
│   └── style.css           # Tailwind v4 source: @theme tokens + @apply components
└── public/                 # static files copied verbatim into the build
    └── Fadoilul-Munim-CV.pdf  # the downloadable CV (served at /Fadoilul-Munim-CV.pdf)
```

> Build output goes to `dist/` (git-ignored, produced by `npm run build` / CI).

---

## ▶️ Preview locally

This project uses a build step, so it needs Node.js + npm.

```bash
# from inside this folder (note: the path contains a space, so keep the quotes)
cd "web-portfolio"
npm install        # first time only
npm run dev        # start the Vite dev server (with hot reload)
```

Vite prints a local URL (e.g. **http://localhost:5173**) — open it. Press `Ctrl+C` to stop.

To check the production build:

```bash
npm run build      # outputs the static site to dist/
npm run preview    # serves dist/ locally so you can verify it
```

---

## 📄 Update the CV (PDF)

The **Download CV** buttons point to `/Fadoilul-Munim-CV.pdf`. The real CV ships with the repo.

➡️ **To replace it**, save the new file at exactly:

```
public/Fadoilul-Munim-CV.pdf
```

Files in `public/` are copied to the site root, so it is served at `/Fadoilul-Munim-CV.pdf`.
The filename must match exactly. No code changes are needed.

---

## 🖼️ Add a social-share image (optional)

For nice link previews on social media / chat apps, add a **1200×630 px** PNG at:

```
public/og-image.png
```

The absolute URLs in `index.html` (`<head>`) — `og:image`, `twitter:image`, `og:url`, and
`<link rel="canonical">` — are set to the live site (`https://fadoilulmun-im.github.io/`). If
you deploy under a different domain, update them there. (Open Graph images must be absolute
URLs to render on most platforms.)

---

## ✏️ Editing content & translations

All visible text is **bilingual**, so each string lives in two places that must stay in sync:

1. **`src/partials/<section>.html`** — the English text you see in the markup (this is the
   first paint). The page is split into one partial per section, stitched into `index.html`
   at build time by `vite-plugin-handlebars`.
2. **`src/js/i18n.js`** — the `I18N` object, which holds the `en` and `id`
   strings keyed by `data-i18n` attributes.

> **Projects & experience are data-driven.** Their copy lives as `{ en, id }` records in
> `src/data/projects.js` and `src/data/experience.js` (certificates, which aren't translated,
> in `src/data/certificates.js`). Edit the record once — it feeds both the build-time markup
> (via Handlebars `{{#each}}`) and the runtime `I18N` dictionary, so there's a single source
> of truth for those sections.

### To change a piece of text
- Find its element in the relevant `src/partials/*.html`. It will have a `data-i18n="some.key"`
  attribute.
- Update the English copy in the partial **and** the matching `some.key` in **both** `I18N.en`
  and `I18N.id` in `src/i18n.js`.

### To add a new translatable string
1. Add the element with `data-i18n="my.new.key"` in the partial.
2. Add `"my.new.key": "English text"` to `I18N.en` and the Indonesian version to `I18N.id`.

### To add a whole new section
Create `src/partials/<name>.html`, then reference it from `index.html` with `{{> <name> }}`
in the order you want it to appear.

> The script logs a console warning if a key is missing from either language (open DevTools to
> catch gaps), and `npm run check:i18n` enforces the same at build time — a missing or
> mistyped key fails the build before it can deploy.

### Translating attributes (aria-label / title)
Use `data-i18n-attr="aria-label:my.key; title:my.key"` on the element, then add `my.key` to
both languages.

### Proper nouns / tech names
Company names and technologies (Laravel, React, GajiHub, etc.) are intentionally **not**
translated — keep them identical in both languages.

---

## 🎨 Tweaking the design

Open `src/style.css`. The `@theme { … }` block defines the **design tokens** — colors, the
fluid type scale, radii, and shadows — which Tailwind turns into utility classes. Change a
value there and it updates everywhere. Dark-theme colors live in the `[data-theme="dark"]`
block right below (the tokens swap automatically, so there are no `dark:` variants to chase).

A few common tweaks:
- **Accent color:** change `--color-primary` (and its dark-mode counterpart).
- **Max content width:** `--max-width` (default `1100px`).
- **Section spacing rhythm:** `--section-pad`.

Styling is **hybrid**: layout/spacing/typography use inline Tailwind utilities in
`index.html`, while repeated pieces (buttons, chips, cards) are semantic classes built with
`@apply` in `src/style.css`.

---

## 🚀 Deploy to GitHub Pages

Deployment is automated by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
every push to `main` runs `npm ci && npm run build` and publishes `dist/` to Pages.

1. Push this repo to GitHub. Use a repo named `<username>.github.io` to serve at the root
   (`https://<username>.github.io/`). The site is configured for a root deploy via
   `base: "/"` in `vite.config.js`.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the workflow manually). The Actions run builds and deploys; the
   live URL appears in the workflow's **deploy** step.

> Deploying under a project repo instead (`https://<username>.github.io/<repo>/`)? Change
> `base` in `vite.config.js` to `"/<repo>/"`.

> After deploying, remember to update the `og:url`, `og:image`, `twitter:image`, and
> `canonical` URLs in `index.html` to your live domain.

---

## ♿ Accessibility & SEO notes

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), a single `<h1>`, and an
  ordered heading structure.
- Skip-link, visible keyboard focus, `aria-expanded`/`aria-controls` on the mobile menu, and
  `aria-current` on the active nav link.
- Meta description, Open Graph + Twitter card tags, `theme-color`, and an inline-SVG favicon
  are all set in `index.html`.

---

Made with Vite, Tailwind CSS & vanilla JavaScript. © Fadoilul Mun'im.
