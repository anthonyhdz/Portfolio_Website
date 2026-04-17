# Session Log

A running record of working sessions — decisions made, context established, and open threads.

---

## 2026-03-30

### What we covered
- Reviewed SESSIONS.md — user asked for a summary of what it is and its purpose

### Decisions made
- No changes made this session

### Open threads
- Deployment visibility of SESSIONS.md and CLAUDE.md still unresolved (carried over from 2026-03-19)

---

## 2026-03-19

### What we covered
- Explored the project structure and codebase to understand the full scope of the site
- Created `CLAUDE.md` to give Claude persistent project context across sessions
- Discussed the vanilla HTML/CSS/JS stack — confirmed it's appropriate for the current site scale
- Briefly covered static site generators (Eleventy, Astro) as future options if the site grows

### Decisions made
- **CLAUDE.md** placed at project root — standard location Claude Code reads automatically
- **Audience** defined as recruiters, hiring managers, and design peers (Product Designers, UI/UX Managers, Senior/Junior Designers, Creatives)
- **Regulated industries** intentionally omitted from CLAUDE.md audience description
- **SESSIONS.md** created as a shared session log to track process and decisions over time

### Open threads
- When the site goes live (hosting/deployment), a decision will need to be made about whether SESSIONS.md and CLAUDE.md should be publicly visible or excluded (e.g., via `.gitignore`)
