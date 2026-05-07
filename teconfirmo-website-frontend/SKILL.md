---
name: teconfirmo-website-frontend
description: Frontend rules and brand tokens for the Teconfirmo Capital website. Use this skill EVERY time the user asks you to write, edit, design, review, screenshot, or generate ANY frontend code (HTML, CSS, JS, JSX, TSX, React, Vue, Tailwind, components, pages, landing pages, sections, hero, navbar, footer, forms, buttons, cards) for Teconfirmo Capital, "el sitio", "la web", or anything displayed under the Teconfirmo brand. Trigger this BEFORE invoking `frontend-design`, BEFORE writing the first line of frontend code, and AGAIN whenever colors, typography, spacing, or logo placement come up — even if the user does NOT say "brand", "guidelines", "Teconfirmo", or "marca". Also trigger if the working dir looks like a Teconfirmo repo (path contains `teconfirmo`, has `brand_assets/`, or references brand colors). When in doubt, load it. Single source of truth for brand colors, typography, logo usage, screenshot workflow, and anti-generic design guardrails.
---

# Teconfirmo Capital — Frontend Website Rules

This skill is the operating manual for building, editing, and reviewing the **Teconfirmo Capital** website. It loads the brand identity (colors, typography, logo) and enforces a craft-first workflow with reference matching and screenshot verification.

> **Scope note:** This skill is for **frontend code and website work only**. For documents, presentations, emails, or general communications, use the `brand-guidelines-teconfirmo` skill instead. They are complementary, not redundant.

---

## Always Do First

1. **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions. This skill layers Teconfirmo brand specifics on top of `frontend-design`'s craft principles — both must be active.
2. **Load `references/brand-tokens.css`** — it contains the `@font-face` declarations for Acumin Pro and Halyard Text (self-hosted from this skill's `assets/fonts/`) plus all CSS variables. Copy it into the project and import at the app root.
3. **Copy `assets/fonts/` into the project's static folder** (typically `public/fonts/`) so the `@font-face` URLs resolve. See `references/typography-setup.md` for the exact paths per framework.
4. **Copy the official logos** from `assets/logos/` into the project's static folder. See "Brand Assets — Logo Files" section below for the 5 variants and when to use each.
5. **Check `references/components/` for an existing template** before building any new section. The library covers navbar, hero, features grid, split sections, tools carousel, and contact form — all adapted from professional reference sites and rebranded for Teconfirmo. Composing from these is faster and more consistent than building from scratch.

---

## Brand Identity (Hard-coded, Non-Negotiable)

### Colors

These hex values are the only valid brand colors. Do not invent variations, do not use Tailwind's default `blue-*` / `red-*` palettes as primary colors.

| Token | Hex | Use |
|---|---|---|
| `--tc-navy` | `#1B365F` | **Primary brand color.** Headings, navbar, primary text on light backgrounds, dark sections. |
| `--tc-navy-deep` | `#212B46` | Darker navy for backgrounds, elevated surfaces, hover states on navy. |
| `--tc-red` | `#EF3346` | **Primary accent.** CTA buttons, the "Te" in the logo, key highlights. Use sparingly — it should command attention. |
| `--tc-red-deep` | `#A4343E` | Hover/active state for red CTAs, deeper accent on light backgrounds. |
| `--tc-gold` | `#EAAB00` | **Secondary accent.** Use for the small icon detail, badges, premium/highlight moments. Never as a primary CTA. |
| `--tc-gold-deep` | `#AF6E05` | Hover state for gold elements, deeper accent. |
| `--tc-black` | `#000000` | Body text on white backgrounds (when navy is too soft). |
| `--tc-gray-500` | `#808080` | Secondary text, muted labels. |
| `--tc-gray-200` | `#CFCFCF` | Borders, dividers, disabled states. |
| `--tc-white` | `#FFFFFF` | Backgrounds, text on dark sections. |

**Color rules:**
- The default page background is `--tc-white`. The default text color is `--tc-navy` (not pure black) for headings and body.
- Dark sections use `--tc-navy` as background, with `--tc-white` text and `--tc-red` or `--tc-gold` accents.
- **Never** use `bg-blue-600`, `bg-red-500`, `text-indigo-*`, or any default Tailwind palette token as a brand color. Always use the custom tokens.
- Gold (`--tc-gold`) is a *secondary* accent — it should appear in the icon detail, small badges, or premium highlights. Never use it as the primary CTA color.

### Typography

Both fonts are **self-hosted inside this skill** at `assets/fonts/` (OTF source + WOFF2 web-optimized). Full setup in `references/typography-setup.md`.

| Role | Font | Available weights | Fallback stack |
|---|---|---|---|
| Brand name & headings | **Acumin Pro** | Regular (400), Bold (700), + italics | `'Acumin Pro', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif` |
| Descriptor & small-caps labels ("CAPITAL"-style) | **Halyard Text** | Light (300), Regular (400), + Light Italic | `'Halyard Text', 'Manrope', 'Source Sans Pro', system-ui, sans-serif` |
| Body text | **Acumin Pro** Regular (or Halyard Text Regular for finer print) | Same as above |

**Typography rules:**
- Copy the `assets/fonts/` folder into the project's static folder, then paste the `@font-face` block from `references/typography-setup.md` into the project's global CSS. Never load from Google Fonts (they aren't there) or from a CDN.
- Serve **WOFF2** in production (50% smaller than OTF). Keep the OTF as a secondary `src` in the `@font-face` for safety.
- Preload `Acumin-RPro.woff2` and `Acumin-BdPro.woff2` in `<head>` — they're the above-the-fold fonts.
- For the wordmark "Teconfirmo": use the **logo PNG files** (see Brand Assets section). Never re-typeset the wordmark in CSS.
- For "CAPITAL"-style descriptors in body copy (eyebrows, labels): **Halyard Text Regular**, all caps, letter-spacing `0.25em–0.35em`, `--tc-red` color.
- Headings: tight tracking (`-0.02em` to `-0.03em`) on display sizes (40px+).
- Body: generous line-height (`1.65` to `1.75`), letter-spacing `0`.
- Acumin Pro only ships in Regular (400) and Bold (700) — there is no Medium (500) or Semibold (600). Do **not** set those weights; the browser will synthesize a fake weight that looks wrong.
- Never pair Acumin with itself alone — use Halyard Text for accents/labels to create rhythm.

### Logo Usage

Read `references/logo-usage.md` for the full rules. Quick version:

- The 5 official logo files live in `assets/logos/` inside this skill (see "Brand Assets — Logo Files" section below). Always use these — never a placeholder.
- Minimum width: **2.8 cm in print, ~112 px on screen** for the full lockup. Below this, ask the user for an icon-only version (it's not included in this skill).
- Clear space: leave at least **1× the height of the "T"** as padding on all sides — never crowd the logo.
- **Never** recolor the logo, distort proportions, add effects (shadows, outlines), or place it on a clashing background without sufficient contrast.
- The small icon detail (yellow/red squares on the upper-right of the wordmark) is part of the logo — don't try to strip it out or recreate it separately.

---

## Reference Images

- **If a reference image is provided**: match layout, spacing, typography, and color **exactly**. Swap in placeholder content (images via `https://placehold.co/`, generic copy in Spanish since Teconfirmo is a PE-based company). Do not improve or add to the design.
- **If no reference image**: design from scratch with high craft using `frontend-design` principles + this skill's brand tokens + the anti-generic guardrails below.
- **Verification loop**: Screenshot your output, compare against the reference, fix mismatches, re-screenshot. Do at least **2 comparison rounds**. Stop only when no visible differences remain or the user says so.

---

## Local Server

- **Always serve on localhost** — never screenshot a `file:///` URL (relative paths and font-loading break).
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`).
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance — check first with `lsof -i :3000` (Mac/Linux) or `netstat -ano | findstr :3000` (Windows).

If `serve.mjs` doesn't exist, create a minimal one (Node `http.createServer` serving the project root with correct MIME types). Do not pull in heavy dependencies just for serving.

---

## Screenshot Workflow

- Use Puppeteer for screenshots. Configure the path to your local Puppeteer install at the top of `screenshot.mjs`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 hero-section` → saves as `screenshot-N-hero-section.png`.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- Default viewport: 1440×900 for desktop, 390×844 for mobile (iPhone 14 Pro). Take both for any hero or above-the-fold work.
- When comparing, be specific:
  - "heading is 32px but reference shows ~24px"
  - "card gap is 16px but should be 24px"
  - "the red looks like #EF3346 but the reference is using `--tc-red-deep` (#A4343E)"
- Check on every pass: spacing/padding, font size/weight/line-height, **exact hex colors** (against brand tokens), alignment, border-radius, shadows, image sizing, logo proportions and clear space.

---

## Output Defaults

- Single `index.html` file with all styles inline, **unless** the user specifies a framework or you're inside an existing repo with a build setup.
- **Tailwind CSS via CDN**: `<script src="https://cdn.tailwindcss.com"></script>` — and **always** include the brand color extension config (see `references/brand-tokens.css` and `references/tailwind-config.js`).
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT/1B365F/FFFFFF` (uses brand navy as background so placeholders feel on-brand).
- Mobile-first responsive. Test at 390px, 768px, 1024px, 1440px minimum.
- Spanish copy by default (Teconfirmo is a PE-based company). If the user wants English, they'll say so.

---

## Brand Assets — Logo Files (MANDATORY USE)

**The official Teconfirmo logo files ship inside this skill** at `assets/logos/`. They are transparent PNG files (RGBA, 5000×5000 source). You MUST use these files — never generate a placeholder logo, never re-typeset "Teconfirmo" in CSS/SVG, never use an emoji or text stand-in.

### The 5 official variants

| File (in `assets/logos/`) | Appearance | Use on |
|---|---|---|
| `logo-principal.png` | Red "Te" + navy "confirmo" + gold/red icon | **Default.** White and light backgrounds. |
| `logo-negativo.png` | All white | Dark backgrounds, dark photography, `--tc-navy` sections. |
| `logo-rojo.png` | All red monochrome | Single-color contexts where the brand red dominates. |
| `logo-amarillo.png` | All gold/yellow monochrome | Intended for navy backgrounds when a warm gold aesthetic is wanted (e.g., premium sections). |
| `logo-color-fondo-azul.png` | Red "Te" + white "confirmo" + gold/red icon | **The full-color variant designed for navy backgrounds.** Use this on `--tc-navy` hero sections instead of `logo-negativo.png` when you want to preserve brand color identity. |

### How to use them

1. **Copy the entire `assets/logos/` folder from this skill into the project** at `public/brand-assets/logos/` (or equivalent static asset path). Do not symlink, do not hotlink — copy.
2. Reference them with descriptive alt text:
   ```html
   <img src="/brand-assets/logos/logo-principal.png"
        alt="Teconfirmo Capital"
        width="160" height="40">
   ```
3. **Choose the variant by background:**
   - White / very light gray → `logo-principal.png`
   - `--tc-navy` solid background → `logo-color-fondo-azul.png` (preferred) or `logo-negativo.png`
   - Dark photography → `logo-negativo.png`
   - Red brand block → `logo-negativo.png`
   - Gold/premium block → `logo-amarillo.png` on navy, or `logo-rojo.png` on light
4. **These PNGs are transparent.** They have no background. Do not place them on a solid color block thinking you need to "hide the background" — you don't.
5. **Do not modify them.** No recolor, no filter, no crop, no overlay. If you need a variant that doesn't exist, ask the user — don't invent one.
6. **Source files are 5000×5000.** That's fine for any web use; browsers downscale. For production performance, the user may want to generate @1x/@2x web-optimized copies (e.g., 320×320, 640×640) — flag this as an optional optimization, but always start with the provided files.

### Never invent colors either

The only valid brand colors are in the table above and in `references/brand-tokens.css`. Do not approximate from memory, do not use Tailwind defaults.

---

## Component Library

A curated set of **section templates** lives in `references/components/`. Each one is adapted from a professional reference website and rebranded for Teconfirmo Capital using the brand's colors, typography, and logo system.

**Always check this catalog BEFORE building a section from scratch.** Composing pages from these templates is faster, more consistent, and avoids the "generic AI website" trap.

### Catalog

| Component file | Reference image | Pattern | Best for |
|---|---|---|---|
| `navbar-dark.html` | `ref-navbar-dark.png` | Navy bg, white uppercase links, **Servicios mega-dropdown** (2 cards: "Para empresas" → Factoring + Confirming, "Para inversionistas" → Inversión corto plazo). Mobile accordion + hover-intent JS. | Top of every page |
| `hero-fullbleed-photo.html` | `ref-hero-fullbleed-photo.png` | Full-viewport photo + navy gradient + transparent navbar with Servicios dropdown + **dual CTA** ("Soy empresa" / "Soy inversionista") | Home hero |
| `features-grid-dark.html` | `ref-features-grid-dark.png` | Near-black bg, dual-audience: "Para empresas" (2 cards: Factoring + Confirming) + "Para inversionistas" (1 card: Inversión corto plazo). Red/gold color coding. | Services deep-dive |
| `split-text-image.html` | `ref-split-text-image.png` | Dark bg, text-left + image-right. Copy mentions all 3 services. | "¿Por qué Teconfirmo?" |
| `split-image-text.html` | `ref-split-image-text.png` | Dark bg, image-left + text-right with stat trio. Dual-audience copy. | "Sobre Teconfirmo" |
| `tools-carousel.html` | `ref-tools-carousel.png` | Light bg, centered headline, **3-card static grid** (red top = empresas, gold top = inversionistas) | Services overview / CTA |
| `contact-form.html` | `ref-contact-form.png` | White bg, centered form with 3 fields, navy CTA button, fine print | Contact / conversion |

### How to use the catalog

1. **Identify which sections the page needs** before writing any code.
2. **For each section, view the matching reference image** in `references/components/reference-images/` so you understand the visual target.
3. **Read the corresponding component file** — it contains a header comment explaining the pattern, the logo variant chosen, and what's safe to adapt.
4. **Copy the HTML into the project, then adapt:**
   - Refine copy (the placeholders are Teconfirmo-relevant but generic)
   - Swap placeholder images for real ones from `brand_assets/photography/` if available
   - Adjust spacing/sizing only if the user explicitly asks
   - Do **not** change colors, fonts, or logo variants
5. **Compose the page** with rhythm in mind — alternate dark and light sections, never stack three dark sections in a row.

### Typical landing page composition

```
[hero-fullbleed-photo] (includes navbar)
    ↓
[features-grid-dark]              ← dark
    ↓
[split-text-image]                ← dark, text left
    ↓
[tools-carousel]                  ← LIGHT (breathing room)
    ↓
[split-image-text]                ← dark, image left (alternates)
    ↓
[contact-form]                    ← LIGHT
    ↓
[footer]                          ← build separately
```

### When the catalog isn't enough

Build a new component from scratch using `frontend-design` craft principles + this skill's brand tokens + the anti-generic guardrails below. If the new component is reusable, add it to the catalog and update `references/components/README.md`.

---

## Anti-Generic Guardrails

These prevent the "generic AI website" look. They are non-negotiable for the Teconfirmo site.

- **Colors:** Never use default Tailwind palette (`indigo-500`, `blue-600`, `red-500`, etc.). Use `--tc-navy`, `--tc-red`, `--tc-gold` and their deep variants. The brand has a strong navy + red identity — lean into it, don't dilute it.
- **Shadows:** Never use flat `shadow-md` from Tailwind defaults. Use layered, color-tinted shadows derived from `--tc-navy` at low opacity, e.g. `box-shadow: 0 1px 2px rgba(27,54,95,0.08), 0 8px 24px rgba(27,54,95,0.10);`
- **Typography:** Never use the same font for headings and body. Pair Acumin Pro (display/headings) with Halyard Text Book (small caps, descriptors, captions). Apply tight tracking (`-0.02em` to `-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** When used, layer multiple radial gradients in brand colors (navy → navy-deep, or navy → red at low opacity for premium sections). Add subtle grain/texture via SVG noise filter for depth on flat color sections.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Interactive states:** Every clickable element needs `:hover`, `:focus-visible`, and `:active` states. No exceptions. Red CTAs go to `--tc-red-deep` on hover. Navy elements lift slightly on hover.
- **Images:** On hero photography, add a gradient overlay (`linear-gradient(to top, rgba(27,54,95,0.7), transparent)`) and a color treatment layer with `mix-blend-multiply` using `--tc-navy` at 15-25% opacity to unify with brand.
- **Spacing:** Use a consistent 4px or 8px scale. Don't randomly mix `p-3`, `p-5`, `p-7` — pick a system (e.g., 4, 8, 16, 24, 32, 48, 64, 96) and stick with it.
- **Depth:** Surfaces should have a layering system (base white → elevated white-with-shadow → floating navy/dark cards), not all sit at the same z-plane.
- **Gold accent:** Used sparingly. The gold square in the logo icon is the reference — gold should feel like a small premium detail, not a primary surface color.

---

## Hard Rules

- Do not add sections, features, or content not in the reference (when one is provided).
- Do not "improve" a reference design — match it.
- Do not stop after one screenshot pass — minimum two comparison rounds.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo/red as primary colors.
- Do not invent brand colors — only use the tokens listed above.
- **Do not generate, re-typeset, or placeholder the logo.** Always use one of the 5 official PNG files in `assets/logos/`. Copy them into the project's static folder.
- Do not recolor, distort, rotate, or apply CSS filters (`drop-shadow`, `hue-rotate`, `invert`, etc.) to the logo.
- **Do not load Acumin Pro or Halyard Text from Google Fonts or any CDN** — they aren't there. The fonts are self-hosted in `assets/fonts/`; copy them into the project's static folder and use the `@font-face` block from `references/typography-setup.md`.
- Do not use `font-weight: 500` or `600` on Acumin Pro — only Regular (400) and Bold (700) are available; other weights render as synthesized (fake) and look wrong.
- Do not use pure black (`#000`) for headings — use `--tc-navy` for body headings, reserve black for body text on white if needed.
- Do not screenshot `file:///` URLs — always serve on localhost first.

---

## Bundled Resources

**Brand assets** (copy directly into the project):
- `assets/logos/` — 5 official PNG logo variants (all transparent RGBA):
  - `logo-principal.png` — red + navy (default, for light backgrounds)
  - `logo-negativo.png` — all white (for dark backgrounds)
  - `logo-color-fondo-azul.png` — color variant for navy backgrounds
  - `logo-rojo.png` — all red monochrome
  - `logo-amarillo.png` — all gold monochrome, for navy
- `assets/fonts/` — Brand typefaces, self-hosted. Both OTF (source) and WOFF2 (web-optimized):
  - Acumin Pro: Regular, Italic, Bold, Bold Italic
  - Halyard Text: Light, Light Italic, Regular

**References** (read these when working in their respective area):
- `references/brand-tokens.css` — CSS variables, base reset, and `@font-face` declarations. Drop into the project and import at the root before any other CSS.
- `references/tailwind-config.js` — Ready-to-paste Tailwind theme extension with brand colors and font families.
- `references/logo-usage.md` — Detailed logo rules: sizes, clear space, variant selection, what not to do.
- `references/typography-setup.md` — Complete font installation guide, preload hints, type scale, common pairings.
- `references/components/` — Adapted HTML/Tailwind component library based on professional reference websites (Revolut, BBVA, Clove Therapy patterns) rebranded for Teconfirmo. See "Component Library" section below for the catalog and `references/components/README.md` for full details.
