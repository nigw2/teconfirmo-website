# Logo Usage — Teconfirmo Capital

Source: brand guidelines PDF + official logo files provided by the brand team.

## The 5 Official Logo Files

All ship inside this skill at `assets/logos/` as **transparent RGBA PNG files at 5000×5000 source resolution**. They are the single source of truth for the logo — never generate a placeholder, never re-typeset the wordmark in CSS or SVG, never use emoji or text as a stand-in.

| File | Composition | Primary use |
|---|---|---|
| **`logo-principal.png`** | Red "Te" + navy "confirmo" + gold/red icon + red "CAPITAL" | **Default.** Light backgrounds (white, light gray, light photography). |
| **`logo-negativo.png`** | All white | Dark backgrounds, dark photography, when maximum contrast is needed on a busy dark surface. |
| **`logo-color-fondo-azul.png`** | Red "Te" + white "confirmo" + gold/red icon + red "CAPITAL" | **Preferred on `--tc-navy` solid backgrounds.** Preserves brand color identity while staying legible on navy. |
| **`logo-rojo.png`** | All red monochrome | Single-color contexts where brand red dominates — red blocks, one-color print, promotional overlays. |
| **`logo-amarillo.png`** | All gold/yellow monochrome | Specifically designed for navy backgrounds when a warm/premium aesthetic is wanted. Use sparingly. |

## Choosing the Right Variant

Decision flow:

1. Is the background **white or very light**?  → `logo-principal.png`
2. Is the background a **brand-navy solid** (`#1B365F` or `#212B46`)?
   - Default → `logo-color-fondo-azul.png`
   - Need maximum contrast / minimal look → `logo-negativo.png`
   - Want warm/premium feel → `logo-amarillo.png`
3. Is the background **dark photography** (not solid navy)? → `logo-negativo.png`
4. Is it a **single-color red block** (`--tc-red` solid)? → `logo-negativo.png` (white on red)
5. Is the print/design constrained to **one ink**? → `logo-rojo.png` if red is available, else `logo-negativo.png` on dark or `logo-principal.png` on light.

## Anatomy of the Wordmark

```
[Te][confirmo]  ▣  ← small gold/red icon, top-right of "o"
    CAPITAL      ← Halyard Text Book, all caps, red
```

- **"Te"** — `--tc-red` (#EF3346) in color variants; white or monochrome in others. Acumin Pro Bold.
- **"confirmo"** — `--tc-navy` (#1B365F) in the main variant; white in "color-fondo-azul" and "negativo"; monochrome red/gold in the others. Acumin Pro Bold.
- **Icon detail (top-right)** — composition of `--tc-gold` and `--tc-red` squares forming a stylized "T". In monochrome variants, the icon takes the single color of the wordmark.
- **"CAPITAL"** — `--tc-red` in the main variant; white or monochrome in others. Halyard Text Book, all caps, generous letter-spacing.

## Proportions (from brand guidelines)

Base unit = `X`:

- **Wordmark width:** ~17.25 X
- **Wordmark height (including "CAPITAL" descriptor):** ~4.25 X
- **Clear space (área clara):** at minimum **1 X on every side** of the lockup. Treat this as inviolable padding — no other element may enter this zone. Measure against the height of the "T" stroke as a practical shortcut.

## Minimum Sizes

- **Print:** 2.8 cm wide minimum.
- **Screen:** ~112 px wide minimum for the full lockup.
- For favicons, app icons, or anything below ~32 px, an icon-only version is needed. **The icon-only mark is not included in this skill** — if the user needs it, ask them for an export of just the icon glyph. Do not try to crop it out of the PNGs.

## Implementation — HTML

Copy the contents of `assets/logos/` from this skill into the project's static folder (e.g., `public/brand-assets/logos/` in Next.js, `static/brand-assets/logos/` in Vite/Astro, or `/assets/logos/` for plain HTML).

```html
<!-- Default navbar, light background -->
<a href="/" aria-label="Teconfirmo Capital — inicio">
  <img src="/brand-assets/logos/logo-principal.png"
       alt="Teconfirmo Capital"
       width="160" height="40"
       style="height: 40px; width: auto;">
</a>

<!-- On a navy hero section -->
<img src="/brand-assets/logos/logo-color-fondo-azul.png"
     alt="Teconfirmo Capital"
     width="160" height="40">

<!-- On dark photography -->
<img src="/brand-assets/logos/logo-negativo.png"
     alt="Teconfirmo Capital"
     width="160" height="40">
```

Notes:
- Always set `alt="Teconfirmo Capital"` (no more, no less) for accessibility.
- Prefer explicit `width` + `height` attributes to prevent layout shift.
- Use `height: Npx; width: auto;` in CSS to scale cleanly.
- Default navbar height for the wordmark: **36–48 px** on desktop, **28–32 px** on mobile.

## Performance Optimization (optional)

The source PNGs are 5000×5000 — oversized for web. For production:

1. Export web-sized copies at **@1x and @2x** of actual display size (e.g., for a 160×40 navbar logo, generate 160×40 and 320×80).
2. Use `srcset` for DPR-aware loading:
   ```html
   <img src="/logos/logo-principal@1x.png"
        srcset="/logos/logo-principal@1x.png 1x,
                /logos/logo-principal@2x.png 2x"
        alt="Teconfirmo Capital">
   ```
3. Consider converting to **WebP or AVIF** for additional ~30–60% file size reduction, with PNG fallback.

Only do this optimization **after** the design is approved. Flag it to the user as an optional follow-up.

## Hard Rules — Do Not

- **Do not recolor** the wordmark. If you need a different color, there is probably already a variant — check the 5 files first.
- **Do not distort** proportions — never stretch, squash, or skew. Always scale with `width: auto` or lock aspect ratio.
- **Do not rotate** the logo.
- **Do not add effects** — no drop shadows, glows, outlines, bevels, 3D, or CSS `filter` like `drop-shadow()` / `hue-rotate()` / `invert()`.
- **Do not place on busy or low-contrast backgrounds.** If contrast is insufficient, either switch variant or place the logo on a solid brand-color block first.
- **Do not strip or recreate the icon detail** when using the full lockup.
- **Do not re-typeset** the wordmark in CSS, SVG, or any other method. Always use the provided PNG file.
- **Do not assume the gold-only variant** (`logo-amarillo.png`) is the main logo — it's a specific-use variant for navy backgrounds.
- **Do not use the 5000×5000 source files at full resolution in `<img>` tags** without specifying a smaller display size — they'll load fine but waste bandwidth. Always constrain with `width`/`height` or CSS.
