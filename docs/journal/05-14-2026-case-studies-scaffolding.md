# Case Studies — Page Scaffolding & Work Grid Wiring

**Date:** May 14, 2026
**Files:** `case-studies/*.html`, `work.html`

---

## Summary

Scaffolded four new case study pages from `case-studies/template.html` and wired the placeholder cards in `work.html` to point at them. The Work grid now has every card linked to a real page — no more `href="#"` stubs in the grid.

---

## What We Did

### 1. Created four case study pages from the template

Each is a full copy of `case-studies/template.html` with only the `<title>` updated. Body content is still placeholder copy (cards, metrics, quotes, figures) ready to be filled in per project.

| File | `<title>` |
|---|---|
| `case-studies/hctra-org.html` | HCTRA.org Case Study — Anthony Hernandez |
| `case-studies/dm-website.html` | Dignity Memorial Case Study — Anthony Hernandez |
| `case-studies/ez-tag-app.html` | EZ TAG App Case Study — Anthony Hernandez |
| `case-studies/ez-tag-kiosk.html` | EZ TAG Kiosk Case Study — Anthony Hernandez |

All four use the standard `<body data-base="../">` for the includes.js base-path resolution, and the same versioned CSS/JS query strings as the template (`variables.css?v=5`, `styles.css?v=22`, `includes.js?v=3`).

### 2. Wired Row 2 of `work.html`

Replaced `href="#"` on both anchors (image link and title link) of the two Row 2 cards:

- **HCTRA card** (`work.html:85`) — both anchors now point to `case-studies/hctra-org.html`. Client kept as "Harris County Toll Road Authority". Title copy set to "Modernizing a civic platform for 5M+ users."
- **Dignity Memorial card** (`work.html:104`) — both anchors now point to `case-studies/dm-website.html`. `aria-label` updated from generic "Case study placeholder" to "Dignity Memorial case study" to match the HCTRA pattern.

### 3. Wired Row 3 of `work.html`

The two Row 3 placeholder cards were both labeled "Case study placeholder" with `Client name` / `href="#"`. Replaced them with two HCTRA sub-projects:

- **EZ TAG App card** (`work.html:128`) — `aria-label="EZ TAG App case study"`, client = `HCTRA`, both anchors link to `case-studies/ez-tag-app.html`. Title copy: "A tolling app 87K drivers use every month".
- **EZ TAG Kiosk card** (`work.html:147`) — `aria-label="EZ TAG Kiosk case study"`, client = `HCTRA`, both anchors link to `case-studies/ez-tag-kiosk.html`. Title copy: "Cutting toll store wait times by 10% with self-service kiosks".

---

## Decisions Made

1. **Template-first scaffolding, content second.** New case studies are committed as bare template copies with only the `<title>` personalized. This keeps the structural changes (file count, routing wiring) decoupled from the still-to-come writing/research work for each case study.

2. **Both anchors per card get linked.** Each `.work-card` has two anchors — one wrapping the image, one wrapping the title `<h2>`. Both point at the same case study URL. This matches the existing Row 1 pattern (Sleep Apnea, PosiGen) where the image anchor also carries `aria-hidden="true" tabindex="-1"` to keep keyboard tab order on the title link only. Row 2 and Row 3 cards do not yet carry those a11y attributes — see "Work That Remains".

3. **Three HCTRA case studies, three angles.** The HCTRA work splits into three cards (hctra-org.html, ez-tag-app.html, ez-tag-kiosk.html) rather than one combined case study, so each can stand on its own as a portfolio entry. The shared client name on Row 3 cards is shortened to "HCTRA" to avoid repeating "Harris County Toll Road Authority" three times in the grid.

---

## Work That Remains

### Per case study page
- **Hero image** — every page still shows the dashed-outline placeholder. Replace `.cs-hero-placeholder` with `<img src="../images/case-studies/<project>-hero.jpg" …>` once hero art is ready.
- **Client name + title** — `cs-client` reads "Client name", `cs-title` reads "Description of the work, goal, or outcome". Update per project.
- **Details block** — Role/Team/Methods/Discipline/Platform/Time Frame all carry the template's placeholder values.
- **Section bodies** — Overview, Challenge, Research, Design Process, Outcomes all use placeholder copy. The metric cards still read "85% — Improved information discovery…" across all four pages.
- **More Work footer** — the two related-work cards at the bottom of each case study are `href="#"` placeholders. Once content is finalized, point them at sibling case studies (e.g., from `ez-tag-app.html`, link to `ez-tag-kiosk.html` and `hctra-org.html`).

### Per work-card in `work.html`
- **A11y parity with Row 1** — Row 2 and Row 3 image anchors don't yet have `aria-hidden="true" tabindex="-1"`. Add these so screen reader users and keyboard users only encounter the title link, matching the Sleep Apnea / PosiGen cards.
- **Card images** — every new card uses the placeholder SVG. Replace `.work-card-image-placeholder` with real `<img>` tags once project thumbnails are produced.

### Cache busting
- No CSS or JS changes were made today, so version query strings stay at `variables.css?v=5`, `styles.css?v=22`, `includes.js?v=3`. New HTML files don't need cache-bust treatment themselves.

---

## File Inventory

| New file | Source | Status |
|---|---|---|
| `case-studies/hctra-org.html` | copy of `template.html` | scaffolded, content pending |
| `case-studies/dm-website.html` | copy of `template.html` | scaffolded, content pending |
| `case-studies/ez-tag-app.html` | copy of `template.html` | scaffolded, content pending |
| `case-studies/ez-tag-kiosk.html` | copy of `template.html` | scaffolded, content pending |

| Edited file | Change |
|---|---|
| `work.html` | Row 2 & Row 3 cards now link to the four new pages; Row 3 clients set to "HCTRA"; aria-labels updated; titles populated |
