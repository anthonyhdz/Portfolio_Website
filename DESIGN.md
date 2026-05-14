# Design System: Anthony Hernandez — UX Portfolio

## 1. Visual Theme & Atmosphere

A gallery-airy portfolio built for editorial legibility and calm authority. The atmosphere is warm-neutral — like a well-lit studio printed on cream card stock. Serif headlines anchor every section with quiet confidence; the sans-serif body copy keeps things practical and readable. There are no decorative flourishes, no dark-mode theatrics, and no visual noise competing with the work itself.

- **Density:** 3/10 — Generous whitespace. One focal element per viewport section. Content breathes.
- **Variance:** 5/10 — Moderate asymmetry. Two-column grids offset text and photo. Sidebar nav in case studies. Hero is left-aligned, not centered.
- **Motion:** 2/10 — Restrained CSS transitions only. Hover states shift color and opacity. Nav acquires a shadow on scroll. Nothing animates on its own.

The design defers entirely to the case study content. The chrome is invisible; the work is the hero.

---

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| **Canvas White** | `#FFFFFF` | Primary page background, nav background, card overlay |
| **Light Paper** | `#F5F5F5` | Secondary backgrounds (footer, alternating sections) |
| **Warm Sand** | `#F7F2EF` | Card fills, placeholder zones, case study hero bg |
| **Whisper Border** | `#DEDAD7` | Subtle tan dividers, warm structural separators |
| **Neutral Border** | `#D6D6D6` | Standard 1px borders, card borders, section rules |
| **Ink** | `#343434` | Primary body text and headlines — warm charcoal, not black |
| **Steel** | `#5D5D5D` | Secondary text: nav links, descriptions, captions, eyebrows |
| **Mid Gray** | `#858585` | Disabled states, tertiary labels |
| **Off-Black** | `#0A0A0A` | Deepest dark, inverse backgrounds only |
| **Teal** | `#0C7489` | Single accent — CTAs, active nav, links, icon strokes, metric values |
| **Teal Dark** | `#085160` | Accent hover state for buttons and links |
| **Teal Deepest** | `#05343E` | Accent active/pressed state |
| **Teal Mist** | `#F3F8F9` | Accent-tinted subtle backgrounds (card tag fills, nav hover tint) |
| **Focus Blue** | `#2D9CDB` | Focus rings only — keyboard navigation indicator |
| **Success Teal** | `#048A81` | Positive status labels |
| **Error Red** | `#EF3054` | Inline validation errors |
| **Warning Amber** | `#FFC914` | Warning states |

**Rules:**
- One accent color only: Teal (`#0C7489`). Saturation is 88% — use sparingly on interactive elements only.
- No pure black (`#000000`) anywhere in UI surfaces or text.
- No neon, no glow, no gradient overlays.
- Shadows tinted with pure black at 5–20% opacity — never colored.
- Warm Sand (`#F7F2EF`) is the card surface, not white. This creates subtle warmth without a beige cast.

---

## 3. Typography Rules

### Font Families
- **Serif — Lora** (`'Lora', Georgia, serif`) — Display headlines, section titles, case study H1s, quote text, metric numbers in case studies. Used at Regular (400) weight only.
- **Sans — Poppins** (`'Poppins', system-ui, sans-serif`) — All body text, nav, buttons, labels, eyebrows, captions. Used at Regular (400), Medium (500), SemiBold (600).

### Scale Hierarchy
| Role | Font | Size (clamp) | Weight | Line Height |
|---|---|---|---|---|
| Hero Headline | Lora | `clamp(40px, 5.5vw, 64px)` | 400 | 1.25 |
| Section Title / CS Title | Lora | `clamp(32px, 4vw, 48px)` | 400 | 1.33 |
| Case Study H1 | Lora | `clamp(40px, 5.5vw, 64px)` | 400 | 1.25 |
| Work Card Title | Poppins | `clamp(22px, 3vw, 32px)` | 400 | 40px |
| Body Large (subheadline, bio, CTA text) | Poppins | `clamp(18px, 2vw, 22px)` | 400 | 32px |
| Body Default | Poppins | `16px` | 400 | 24px |
| Body Strong | Poppins | `16px` | 600 | 24px |
| Body Small | Poppins | `14px` | 400 | 18px |
| Eyebrow Label | Poppins | `16px` | 500 | 20px (+ uppercase, 1px letter-spacing) |
| Nav / Button | Poppins | `16px` | 500 | 20px |
| Caption / Legal | Poppins | `14px` | 400 | 18px (italic for captions) |
| Metric / Quote (case study) | Lora | `22px` | 400 | 36px |
| Learning Number | Lora | `22px` | 400 | 36px |

### Typography Rules
- Serif is used **only** for editorial/display contexts: headlines, section titles, pull quotes, case study numerics.
- Sans-serif handles all functional UI: nav, buttons, labels, body text, metadata.
- No font weight above 600. Hierarchy is achieved through size, color, and family — not heavy weight contrast.
- Eyebrow text is always Poppins Medium, uppercase, 1px letter-spacing, Steel (`#5D5D5D`) color.
- Maximum body text line length: 65 characters (~900px column max for case study content).
- `clamp()` is used for all responsive headline scaling — no abrupt breakpoint jumps.

### Banned
- `Inter` — banned for this project's editorial warmth
- `Times New Roman`, `Georgia` (except as fallback after Lora in the stack)
- Any weight heavier than 700

---

## 4. Component Stylings

### Buttons
- **Shape:** Full pill — `border-radius: 999px`
- **Padding:** `12px 24px`
- **Primary:** Teal fill (`#0C7489`), white text. Hover: `#085160`. Active: `#05343E`. No shadow, no glow.
- **Secondary:** White fill, Steel border (`#858585`), Ink text. Hover: Light Paper fill (`#F5F5F5`).
- **Transition:** `background-color 200ms ease, opacity 200ms ease` — no transform bounce
- **Group behavior:** Buttons appear in a flex row with `8px` gap, wrapping on mobile
- **One primary CTA per section maximum.** Secondary button only for supplementary action.

### Cards (Case Study Featured + Work Grid)
- **Background:** Warm Sand (`#F7F2EF`) — not white
- **Border radius:** `20px` (hard-coded, consistent across all image containers)
- **Shadow:** None on resting state — elevation is communicated via background color differentiation
- **Border on hover:** Teal (`#0C7489`) — 1px, appears on card border hover state
- **Image aspect ratio:** `1:1` for work grid cards; `clamp(280px, 40vw, 600px)` height for featured case study images
- **No card borders at rest** — the warm sand surface against white canvas is enough separation

### Navigation
- **Position:** Sticky, `z-index: 100`, white background
- **Rest state:** No shadow, 1px `#D6D6D6` bottom border
- **Scrolled state:** Bottom border drops; shadow `0 2px 8px rgba(0,0,0,0.08)` appears
- **Link color at rest:** Steel (`#5D5D5D`). Hover: Ink (`#343434`). Active page: Teal (`#0C7489`)
- **Logo:** Same font as nav links (Poppins 500 16px), Ink color
- **Mobile:** Hamburger icon at 768px breakpoint; full-viewport dropdown with 48px touch targets

### Case Study Sidebar Nav
- **Width:** 230px, sticky (`top: 52px`), hidden below 999px
- **Links:** Poppins Medium 16px, Steel default → Ink hover → Teal active
- **Active indicator:** 3×20px Teal pill left of link text (using `::before` pseudo-element)
- **Hover background:** Teal Mist (`#F3F8F9`) fills the link row
- **Smooth scroll:** JavaScript-powered with scroll-spy for active state sync

### Step Cards (Case Study numbered process cards)
- **Layout:** Vertical stack with 20px gap
- **Background:** Warm Sand (`#F7F2EF`), `border-radius: 12px`, padding `24px`
- **Number:** Lora Regular 22px, Teal (`#0C7489`)
- **Body text:** Poppins Regular 16px, Ink

### Metric Cards (Case Study outcome cards)
- **Layout:** Horizontal flex row, each card `flex: 1`
- **Background:** Warm Sand, `border-radius: 12px`, padding `24px`
- **Value:** Lora Regular 22px, Teal
- **Icon:** 36px, Teal stroke
- **Description:** Poppins Regular 16px, Ink

### Learning Cards (pill-shaped)
- **Shape:** `border-radius: 999px` — pill
- **Background:** Warm Sand, padding `24px`
- **Number:** Lora Regular 22px, Teal
- **Title text:** Poppins SemiBold 16px, Ink

### Quote Cards
- **Background:** Warm Sand, `border-radius: 12px`, padding `24px`
- **Text:** Poppins Italic Regular 22px, Ink, `line-height: 36px`

### Client Logos
- **Default:** `grayscale(100%)`, `opacity: 0.65`
- **Hover:** `grayscale(0%)`, `opacity: 1`
- **Transition:** `filter 200ms ease, opacity 200ms ease`
- **Grid:** 4-column on desktop, 2-column on mobile (`<768px`)
- **Size:** `height: 48px`, auto width, `object-fit: contain`

### Experience List
- **Layout:** Flex row, space-between, company+role on left, dates+location on right
- **Divider:** 1px `#D6D6D6` border-bottom between items
- **Company:** Poppins SemiBold 16px, Ink
- **Role / Location / Dates:** Poppins Regular 16px, Ink
- **Mobile collapse:** Stack to single column, right-align removed

### Placeholder States (before images are added)
- **Fill:** Warm Sand (`#F7F2EF`)
- **Icon:** 48px SVG image icon, `#DEDAD7` stroke
- **Label:** Poppins Medium 12px, uppercase, 1.5px letter-spacing, Steel
- These are interim states — not visible in production

---

## 5. Layout Principles

- **Max content width:** `1280px`, centered with `margin: 0 auto`
- **Page padding:** `clamp(24px, 8vw, 320px)` — scales aggressively from mobile edge to desktop breathing room
- **Section vertical padding:** `96px` top and bottom (semantic token `--section-padding-y`)
- **Dividers between major sections:** 1px `#D6D6D6` rule via `::before`/`::after` pseudo-elements — never full-bleed background color swaps (except footer which is Light Paper)

### Page-level Layouts
| Page | Structure |
|---|---|
| Home | Single column — hero → featured work list → collaborate CTA |
| About | Hero: 2-col grid (`1fr 1fr`, headline+bio / photo) → clients 4-col → experience list |
| Work | Header → 2-col card grid (`1fr 1fr`) stacked in rows |
| Case Study | Full-bleed hero image → intro details → 2-col body (`230px sidebar + 1fr content`) |

### Grid Rules
- CSS Grid for all multi-column layouts. No Flexbox percentage math.
- Works page: `grid-template-columns: 1fr 1fr` — two equal columns. Not 3. Not 4.
- About hero: `grid-template-columns: 1fr 1fr` with named areas (`headline`, `bio`, `photo`)
- Client logos: `repeat(4, 1fr)` — collapses to `repeat(2, 1fr)` at 768px
- Full-height sections: use `min-height` values, never `height: 100vh` (iOS Safari jump bug)

### Spacing
- Section gaps: `96px`
- Component internal padding: `24px` (cards, nav)
- Stack spacing between type elements: `4px` (xs), `8px` (sm), `16px` (md), `32px` (lg), `48px` (xl)

---

## 6. Responsive Rules

| Breakpoint | Changes |
|---|---|
| `< 999px` | Case study sidebar nav hidden; body switches to single column |
| `< 768px` | Page padding fixed at `24px`; nav hamburger appears; works grid → 1 col; about hero 2-col collapses; clients grid → 2 col; experience items stack vertically; footer legal left-aligned |
| `< 600px` | About hero switches from grid to flex column — photo stacks below headline and bio |

- All interactive elements meet `44px` minimum touch target (nav links, buttons, sidebar links are 48px)
- No horizontal overflow at any viewport
- `clamp()` on all headlines — no font-size breakpoints needed

---

## 7. Motion & Interaction

Motion is intentionally minimal — this is a portfolio for UX work, not a motion showcase.

**Transition tokens:**
- `--transition-color`: `color 200ms ease`
- `--transition-bg`: `background-color 200ms ease`
- `--transition-opacity`: `opacity 200ms ease`
- `--transition-shadow`: `box-shadow 200ms ease`
- `--transition-ui`: color + background-color together, `200ms ease`
- `--transition-media`: filter + opacity together, `200ms ease` (grayscale logo reveal)

**Applied to:**
- Nav links: color on hover/active
- Nav bar: shadow appears on scroll
- Buttons: background-color on hover
- Client logos: grayscale + opacity on hover
- Case study sidebar links: background-color + color on hover/active

**No spring physics.** No perpetual animations. No scroll-triggered entrance effects. No loading choreography. Animations are strictly user-initiated (hover, focus, scroll position).

---

## 8. Anti-Patterns (Banned)

The following patterns are explicitly forbidden. They degrade the editorial, recruiter-facing tone of this portfolio.

- **No emojis** — anywhere in UI or content
- **No pure black (`#000000`)** — use Ink (`#343434`) for dark text
- **No neon or outer glow shadows** — all shadows are soft, neutral, low opacity
- **No gradient text** — no `background-clip: text` effects on headlines
- **No 3-equal-column card grids** — use 2-column or asymmetric layouts only
- **No centered hero sections** — hero text is left-aligned in a left-anchored max-width container
- **No `Inter` font** — Poppins + Lora pairing only
- **No colored shadows** — shadows use `rgba(0,0,0, 0.05–0.20)` only
- **No dark mode** — light-only palette, no `prefers-color-scheme` toggle
- **No scroll-jacking** — native scroll only, no custom scroll behavior
- **No custom mouse cursors**
- **No AI copywriting clichés** — banned phrases: "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer"
- **No filler scroll affordances** — no "Scroll to explore" text, no bouncing chevrons, no scroll indicator icons
- **No fake round metrics** — outcomes must cite real data (e.g., "82.3% improvement, 6.5 seconds faster") not round numbers
- **No broken image links** — placeholder divs use Warm Sand fill + SVG icon until real images are ready
- **No overlapping elements** — every element occupies its own clear spatial zone; no absolute-positioned content stacking over text
- **No secondary CTAs shadowing the primary** — one primary button per section; a secondary button may accompany it but never replaces it
