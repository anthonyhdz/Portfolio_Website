# Portfolio Website — CLAUDE.md

## Project Overview
Static UX designer portfolio site targeting recruiters and hiring managers. No build system, no framework — plain HTML, CSS, and vanilla JavaScript.

## Personas 
Product Designers, UI/UX Managers, Senior and Junior UI/UX Designers, Creatives

## Tech Stack
- **HTML/CSS/JS** — no libraries or frameworks
- **Fonts** — Google Fonts: Poppins (UI/nav) and Lora (body/quotes)
- **Dev server** — `npx http-server` (configured in `.claude/settings.local.json`)

## Project Structure
```
/
├── index.html              # Homepage (hero, featured work, contact CTA)
├── about.html              # About page (bio, client logos)
├── work.html               # Portfolio grid (all case studies)
├── css/
│   ├── variables.css       # Design tokens (350+ CSS custom properties)
│   └── styles.css          # All styles (~1,100 lines)
├── js/
│   ├── includes.js         # Dynamically loads nav and footer
│   └── case-study-nav.js   # Sidebar smooth-scroll navigation
├── includes/
│   ├── nav.html            # Shared navigation component
│   └── footer.html         # Shared footer component
├── case-studies/
│   ├── template.html       # Boilerplate for new case studies
│   ├── sleep-apnea.html
│   └── posigen.html
└── images/
    ├── logos/              # Client logos (SVG + WebP)
    ├── projects/           # Project screenshots
    └── ui/                 # UI reference images
```

## Key Conventions

### Design Token System
Two-layer CSS variable architecture in `variables.css`:
- **Primitive tokens** — raw values (colors, spacing scale, type scale, shadows)
- **Semantic tokens** — purpose-named aliases (background, text, border, action)
- **Component tokens** — scoped aliases per component (nav, hero, card, badge, footer)

Always use existing tokens rather than hardcoding values.

### Dynamic Component Includes
`includes.js` fetches `nav.html` and `footer.html` at runtime. Pages set a `data-base` attribute on the `<body>` to resolve relative paths (e.g., `data-base="../"` for pages inside `case-studies/`). The `{base}` placeholder in include files gets replaced at load time.

### Accessibility Standards
- Semantic HTML throughout (`<nav>`, `<main>`, `<article>`, `<section>`)
- ARIA labels/attributes on all interactive elements
- `.sr-only` utility class for screen-reader-only text
- Focus ring tokens defined and applied

### Cache Busting
CSS and JS files use query string versioning (e.g., `?v=19`). Increment the version number when making changes to those files.

### Case Studies
Use `case-studies/template.html` as the starting point for new case studies. Each case study has a sidebar nav powered by `case-study-nav.js` that smooth-scrolls between sections and syncs the active link on scroll.

## Figma Integration
Figma MCP is configured and permitted. Code Connect mappings may exist. Use the Figma MCP tools when implementing designs from Figma URLs.
