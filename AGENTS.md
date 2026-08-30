# AGENTS.md — animated-app

> Companion to `CLAUDE.md` (behavior: think before coding, simplicity first, surgical changes, goal-driven verification). Every changed line must trace to the request.

## Stack
- Next.js 16.3.3 (App Router, Turbopack) + React 19.1 + TypeScript 5.7 strict, `type: module` (ESM)
- Tailwind CSS 4.3.3 (CSS-first, no `tailwind.config.*`) via `@tailwindcss/postcss` 4.3.3 + `postcss` 8.5
- Path alias `@/*` → `./*` (`tsconfig.json:24`). Import as `@/components/Header`.

## Commands (verified)
- `npm run dev` — `next dev`
- `npm run build` — `next build` — primary verification (no tests configured)
- `npm start` — `next start`
- `npm run lint` — `next lint` (uses `.eslintrc.json` → `next/core-web-vitals`; ESLint 9 legacy config fails with `npx eslint` directly)
- No test, prettier, husky, CI, or `.github` workflows exist. Do not invent them.

## Project Boundaries
- Single app, not a monorepo: `app/` (`layout.tsx`, `page.tsx`, `globals.css`), `components/` (`Header.tsx`, `Hero.tsx`, `Stats.tsx`, `Products.tsx`, `CaseStudies.tsx`), `public/` (`hero-bg-video.mp4`, `logo.webp`, `fonts/GeistPixel-Circle.woff2`)
- `app/page.tsx` composes `Header` + `Hero` + `Stats` inside hero video stage, then `Products` + `CaseStudies` below.
- `app/globals.css` is the design-system source of truth — all tokens, animations, and base styles live there.
- Fonts canonical is `public/fonts/GeistPixel-Circle.woff2` via `localFont` in `app/layout.tsx:13`.

## Tailwind v4 Contract (do not regress)
- `postcss.config.mjs` must use `{"@tailwindcss/postcss": {}}` — not `tailwindcss` directly.
- `app/globals.css` is CSS-first:
  - External `@import url(...)` (Bubbledot + Font Awesome) **must precede** `@import "tailwindcss"` — otherwise `@import rules must precede all rules`.
  - `@custom-variant dark (&:where(.dark, .dark *))` at `:13`
  - `@theme inline` for font vars referencing `var(--font-inter)` (required per `references/advanced-patterns.md`)
  - `@theme` with OKLCH semantic tokens (`background/foreground/primary/secondary/muted/border/ring/card` + app tokens `nav-text/pill-dark/trust-*`), radius `sm/md/lg/xl/pill`, shadow `nav/menu/cta`, container `hero/nav`, `--animate-*` tokens
  - `@keyframes` **inside** `@theme` (v4 tree-shaking — only emitted when `--animate-*` is used)
  - `.dark` overrides, `@layer base` with `@apply border-border bg-background text-foreground`, `@utility anim`, `[hidden]{display:none!important}`, `prefers-reduced-motion` guard
  - Legacy `:root { --bg: var(--color-background) ... }` kept for `var(--d)` stagger and older `var(--bg)` refs — do not delete.
- Adding colors: `--color-*: oklch(...)` inside `@theme`, not `theme.extend`. Adding utilities: `@utility`, not plugins.
- Components use semantic utilities (`bg-pill-dark`, `text-muted`, `shadow-nav`, `animate-slide-down`, `font-display`) + `anim` stagger via `style={{'--d':'0.4s'}}`.

## Fonts & Assets
- `app/layout.tsx` loads `next/font/google` Inter (`--font-inter`) and `next/font/local` Geist Pixel Circle (`--font-geist-pixel`); `globals.css` consumes via `@theme inline`.
- `@font-face Geist Pixel Circle` in `globals.css:5` must keep `font-display: swap` and path `/fonts/GeistPixel-Circle.woff2` (served from `public`).

## Git & Workflow
- Git repo on `main`, `origin` `https://github.com/Arijit-mondal099/helix-platform.git` (package name `animated-app` differs from repo name `helix-platform`).
- Do not commit directly on `main`; create `feat/*`/`fix/*` branch first (enforced by `.opencode/commands/open-pr.md`).
- Open PR flow: atomic commits via `git add -p` (not `git add -A`), `git push -u origin <branch>`, then print compare link `https://github.com/<owner>/<repo>/compare/<base>...<branch>?expand=1` — no `gh` CLI.

## Verification Order
1. `npm run build` (catches PostCSS/Tailwind + TypeScript)
2. Manual visual check for video background (`public/hero-bg-video.mp4`) and font loading if CSS changed

## Environment Quirks
- Win32 + PowerShell 5.1: chain with `; if ($?) { ... }` not `&&`; use `workdir` param instead of `cd`.
- No `opencode.json` at root; OpenCode plugin config lives in `.opencode/package.json` + `.opencode/commands/open-pr.md`.
- Skills mirrored in `.claude/skills` + `.agents/skills`, locked in `skills-lock.json`: `tailwind-design-system` (`references/details.md` + `advanced-patterns.md`), `vercel-react-best-practices`, `frontend-design`, `grill-me`.
