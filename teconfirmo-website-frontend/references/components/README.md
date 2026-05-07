# Component Library — Teconfirmo Capital

A curated set of section templates adapted from professional reference websites, rebranded for Teconfirmo Capital. Use these as **starting points**, not rigid templates — adapt copy, imagery, and minor spacing to the context. Do not change colors, fonts, or logo choices.

Each component ships as a standalone HTML snippet using:
- Tailwind v3 classes (assumes `tailwind-config.js` extension is loaded)
- CSS custom properties from `brand-tokens.css`
- PNG logo assets from `/brand-assets/logos/`

## Catalog

| File | Reference | Description | Best for |
|---|---|---|---|
| `navbar-dark.html` | `ref-navbar-dark.png` | Navy top nav with Servicios mega-dropdown (2 cards: "Para empresas" with Factoring + Confirming tags, "Para inversionistas" with Inversión corto plazo tag). Includes mobile accordion and hover-intent JS. | Top of every page |
| `hero-fullbleed-photo.html` | `ref-hero-fullbleed-photo.png` | Full-viewport photo + navy gradient overlay + integrated transparent navbar with Servicios dropdown + dual CTA ("Soy empresa" / "Soy inversionista") | Home page hero |
| `features-grid-dark.html` | `ref-features-grid-dark.png` | Near-black bg, dual-audience layout: "Para empresas" eyebrow with 2 cards (Factoring + Confirming), "Para inversionistas" eyebrow with 1 card (Inversión corto plazo). Color-coded red/gold. | Services deep-dive |
| `tools-carousel.html` | `ref-tools-carousel.png` | Light bg, centered headline, 3-card static grid with colored top accent (red for empresas, gold for inversionistas). Clean, concise service overview. | Services overview / CTA |
| `split-text-image.html` | `ref-split-text-image.png` | Dark bg, text-left + image-right. Copy mentions all 3 services. | "¿Por qué Teconfirmo?" |
| `split-image-text.html` | `ref-split-image-text.png` | Dark bg, image-left + text-right with stat trio. Copy reflects dual-audience model. | "Sobre Teconfirmo" |
| `contact-form.html` | `ref-contact-form.png` | White bg, centered form, 3 fields, navy CTA button | Contact / conversion |

## Reference Images

All 7 reference screenshots live in `reference-images/`. When you use one of these components, **view the corresponding reference image first** to understand the visual target. Then adapt to Teconfirmo using the component file.

## Adaptation Guidance

When adapting a component:

1. **Swap copy to Spanish, Teconfirmo-specific.** The default copy in each file is already in Spanish with Teconfirmo-relevant placeholders (factoring, capital, invoice financing). Refine to match the user's brief.
2. **Use real assets when available.** If the project's `brand_assets/photography/` folder has relevant images, use them. Otherwise use `https://placehold.co/WIDTHxHEIGHT/1B365F/FFFFFF?text=Teconfirmo` which keeps placeholders on-brand.
3. **Preserve brand colors.** Every color in the file is already mapped to a brand token. Do not substitute `bg-blue-600` or `text-red-500` etc.
4. **Preserve typography families.** `font-display` = Acumin Pro, `font-accent` = Halyard Text. These are loaded from `brand-tokens.css`.
5. **Preserve logo variant choice.** Each component pre-selects the right logo variant for its background (see `logo-usage.md` decision flow). Don't change unless you know why.

## When to Combine Multiple Components

A typical landing page stacks several of these:

```
[navbar-dark + hero-fullbleed-photo]    ← single unit, transparent navbar over photo
[features-grid-dark]                    ← dark "what we do" section
[split-text-image]                      ← "why us" with illustration
[tools-carousel]                        ← service offering
[split-image-text]                      ← "about us"
[contact-form]                          ← conversion CTA
[footer]                                ← (build separately)
```

The dark-light rhythm matters: avoid stacking three dark sections in a row. Break with a light section (white + tokens) for visual breathing room.

## Verification Workflow

After composing a page from these components:

1. Start the local server (`node serve.mjs`).
2. Screenshot with `node screenshot.mjs http://localhost:3000` at 1440×900 desktop and 390×844 mobile.
3. Read each screenshot with the Read tool and compare against the reference images in `reference-images/`.
4. Check specifically: logo variant matches background, colors are exact hex from brand tokens, typography uses Acumin Pro for display and Halyard Text for labels, spacing is consistent (4/8px scale).
5. At least 2 comparison rounds before declaring done.

## What These Components Are Not

- They are **not** complete pages. They are sections meant to be composed.
- They are **not** a design system with every possible variation. If you need a component not listed here (e.g., pricing table, testimonial carousel, footer), build it from scratch respecting the brand tokens and the anti-generic guardrails in `SKILL.md`.
- They are **not** frozen. If a future project needs to add to this library, add a new file with the same header format and update this README.
