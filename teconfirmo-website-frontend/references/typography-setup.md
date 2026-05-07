# Typography Setup — Teconfirmo Capital

The official Teconfirmo brand fonts **ship inside this skill** at `assets/fonts/`. They are self-hosted — no Adobe Fonts kit ID, no Google Fonts, no third-party CDN. Privacy-friendly, fast, and fully under the brand's control.

## Font Files Included

### Acumin Pro (display + body)

| File (both `.woff2` and `.otf`) | Weight | Style | CSS usage |
|---|---|---|---|
| `AcuminPro-Regular` | 400 | normal | body text, inputs, UI |
| `AcuminPro-Italic` | 400 | italic | emphasis in body |
| `AcuminPro-Bold` | 700 | normal | all headings, wordmark, CTAs |
| `AcuminPro-BoldItalic` | 700 | italic | emphasized headings (rare) |

**Not included (not provided by the brand):** Semibold (600), Medium (500), Light (300), Black (900). If you need a visual weight between Regular and Bold, either stick with Regular (400) or commit to Bold (700) — do not fake a Semibold by applying `font-weight: 600` as the browser will synthesize a weight from Regular, which looks poor.

### Halyard Text (accent / labels / secondary body)

| File | Weight | Style | CSS usage |
|---|---|---|---|
| `HalyardText-Light` | 300 | normal | small labels, captions, fine print |
| `HalyardText-LightItalic` | 300 | italic | italicized fine print |
| `HalyardText-Regular` | 400 | normal | all-caps nav, eyebrow labels, alternative body |

**Important note — "Halyard Text" vs "Halyard Display":** The brand guidelines PDF specifies *Halyard Display - Book* for the "CAPITAL" descriptor under the wordmark. The font files provided are *Halyard Text* — a sibling font in the same superfamily (both by Darden Studio), with nearly identical letterforms but slightly different optical sizing. Halyard Display is optimized for sizes 30px+, Halyard Text for smaller body use. For web where the descriptor "CAPITAL" would typically render at 12–16px on screen, Halyard Text is actually more appropriate.

**We never re-typeset the logo in CSS anyway** — the descriptor comes baked into the PNG logo asset. Halyard Text is used for:
- All-caps navigation labels (`INICIO`, `NOSOTROS`, `SERVICIOS`, etc.)
- Eyebrow labels above section headings
- Fine print (disclaimers, legal, footnotes)
- Captions under images

If the brand team later provides Halyard Display files, swap the file references in `brand-tokens.css` and add `font-family: 'Halyard Display'` as the first choice in `--font-accent`.

## Installation

### Step 1 — Copy fonts into the project

Copy the entire contents of this skill's `assets/fonts/` folder into the project's static assets. The recommended location depends on the framework:

| Framework | Destination |
|---|---|
| Plain HTML | `./fonts/` |
| Next.js | `public/fonts/` |
| Vite / Astro | `public/fonts/` |
| Create React App | `public/fonts/` |
| Nuxt | `public/fonts/` |

So the final URL the browser requests is `/fonts/AcuminPro-Regular.woff2`.

### Step 2 — Include `brand-tokens.css`

Copy `references/brand-tokens.css` (from this skill) into the project and import it at the app root, **before any other CSS**. It contains the `@font-face` declarations plus all brand tokens.

- Next.js (App Router): `import '@/styles/brand-tokens.css'` at the top of `app/layout.tsx`
- Next.js (Pages Router): import in `pages/_app.tsx`
- Vite/React: import in `src/main.tsx`
- Plain HTML: `<link rel="stylesheet" href="/css/brand-tokens.css">` in `<head>`

### Step 3 — Preload critical fonts (optional but recommended)

For the fonts used above-the-fold (typically Acumin Bold for the hero headline), preload them to avoid Flash of Unstyled Text (FOUT):

```html
<link rel="preload" href="/fonts/AcuminPro-Bold.woff2"
      as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/AcuminPro-Regular.woff2"
      as="font" type="font/woff2" crossorigin>
```

Place these in the `<head>` **before** the brand-tokens.css link/import.

### Step 4 — Verify

Open the site in the browser, inspect any text element, and confirm the computed `font-family` resolves to `Acumin Pro` (not the fallback). Check the Network tab — the .woff2 files should load with status 200.

## Usage in Code

After setup, simply reference the font families via CSS variables or Tailwind tokens:

### Plain CSS
```css
.headline {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: var(--tracking-display);
}
.label {
  font-family: var(--font-accent);
  text-transform: uppercase;
  letter-spacing: var(--tracking-caps);
}
```

### Tailwind
```html
<h1 class="font-display font-bold tracking-tc-display">Headline</h1>
<span class="font-accent uppercase tracking-tc-caps">Label</span>
```

(Requires the Tailwind config extension from `references/tailwind-config.js`.)

## Type Scale (recommended)

Use this scale as a starting point. Adjust for specific layouts, but keep within the system.

| Role | Size (desktop) | Size (mobile) | Weight | Tracking | Line height | Font |
|---|---|---|---|---|---|---|
| Display / Hero h1 | 64–88 px | 40–52 px | 700 | -0.025em | 1.05 | Acumin Pro |
| h2 | 40–56 px | 28–36 px | 700 | -0.02em | 1.15 | Acumin Pro |
| h3 | 24–30 px | 22–26 px | 700 | -0.015em | 1.3 | Acumin Pro |
| Lead / Intro | 18–20 px | 17 px | 400 | 0 | 1.55 | Acumin Pro |
| Body | 16–17 px | 16 px | 400 | 0 | 1.7 | Acumin Pro |
| Small | 14 px | 14 px | 400 | 0 | 1.5 | Acumin Pro |
| Caption / Fine print | 12–13 px | 12 px | 300 | 0.01em | 1.5 | Halyard Text Light |
| Caps label / Eyebrow | 12–14 px | 12 px | 400 | 0.28em | 1.4 | Halyard Text Regular |
| Button | 14–16 px | 14 px | 700 | 0.04em | 1 | Acumin Pro |

## Common Pairings

- **Hero:** large Acumin Pro Bold display heading + small Halyard Text uppercase label above it (`--tc-red` color).
- **Section header:** Halyard Text small caps label (eyebrow) → Acumin Pro Bold h2 → Acumin Pro Regular intro paragraph.
- **CTA button:** Acumin Pro Bold, 14–16px, slight positive tracking (`0.04em`). Not all-caps unless small.
- **Navbar link:** Halyard Text Regular, 13–14px, uppercase, generous tracking (`0.2–0.28em`). Active state gets `--tc-white` full opacity; inactive gets 70% opacity.
- **Form label:** Halyard Text Regular, 13px, not uppercase. Placeholder in Halyard Text Light.
- **Quote / testimonial:** Acumin Pro Bold Italic for the quote, Halyard Text Regular for the attribution line.

## What Not to Do

- Do not use the same font for headings and body — always pair Acumin (display/body) with Halyard (accent).
- Do not use `font-weight: 500` or `600` with Acumin Pro — only Regular (400) and Bold (700) are available. Anything else synthesizes a fake weight that looks wrong.
- Do not use `font-weight: 700` with Halyard Text — we don't have a Bold file. If you need emphasis in a Halyard context, uppercase + letter-spacing does the work.
- Do not load fonts from Google Fonts, Typekit, or any third party — use the local files.
- Do not letter-space Acumin headings positively at display sizes (40px+) — always use **negative** tracking (`-0.02em` to `-0.025em`).
- Do not load the `.otf` files directly in the browser — use `.woff2` for performance. The `.otf` files are kept as fallback for older browsers and for desktop install if ever needed.
