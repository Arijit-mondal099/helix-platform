# AGENTS.md — animated-app

> Companion to `CLAUDE.md` (think before coding, simplicity first, surgical changes, goal-driven verification). Every changed line must trace to the request.

## Stack
- Next.js 16.3.3 App Router (Turbopack) + React 19.1 + TypeScript 5.7 strict, `type: module` (ESM, `next.config.mjs`)
- Tailwind CSS 4.3.3 CSS-first (no `tailwind.config.*`) via `@tailwindcss/postcss` 4.3.3 + `postcss` 8.5
- Alias `@/*` → `./*` (`tsconfig.json:24`) — import as `@/components/Header`

## Commands (verified from `package.json:scripts`)
- `npm run dev` — `next dev`
- `npm run build` — `next build` — **primary verification** (typecheck + PostCSS/Tailwind)
- `npm run lint` — `next lint` (`.eslintrc.json` → `next/core-web-vitals`); `npx eslint` directly fails on ESLint 9 legacy config
- `npm start` — `next start`
- No tests, prettier, husky, CI, or `.github` workflows — do not invent

## Project Boundaries
- Single app, not monorepo. Entrypoints: `app/layout.tsx` → `app/page.tsx` → `components/*`
- `app/page.tsx` hero stage (video backdrop + `Header` + `Hero` + `Stats` in `100dvh` section) then `Products` + `CaseStudies` + `Contact` + `Footer`
- `app/case-studies/{atlas-pay,kinetic-freight,nereus-health}/page.tsx` — static case-study routes (also `app/case-studies/page.tsx`)
- `components/` — `Header.tsx`, `Hero.tsx`, `Stats.tsx`, `Products.tsx`, `CaseStudies.tsx`, `Contact.tsx`, `Footer.tsx`
- `public/` — `hero-bg-video.mp4`, `logo.webp`, `footer-cta.png`, `fonts/GeistPixel-Circle.woff2`
- `app/globals.css` is design-system source of truth — all tokens, keyframes, and base styles

## Tailwind v4 Contract (do not regress)
- `postcss.config.mjs` must be `{"@tailwindcss/postcss": {}}` — not `tailwindcss` directly
- `app/globals.css` CSS-first order matters:
  - External `@import url(...)` (Bubbledot + Font Awesome) **before** `@import "tailwindcss"` or build fails (`@import must precede all rules`)
  - `@custom-variant dark (&:where(.dark, .dark *))` (class-based dark mode)
  - `@theme inline` for font vars referencing `var(--font-inter)` — required per `references/advanced-patterns.md`
  - `@theme` for OKLCH tokens (`background/foreground/primary/...` + app tokens `nav-text/pill-dark/trust-*/signal/chassis`), `radius`, `shadow`, `container`, `--animate-*`
  - `@keyframes` **inside** `@theme` — v4 tree-shakes them unless `--animate-*` is used
- Legacy `:root { --bg: var(--color-background) ... }` kept for `var(--d)` stagger — do not delete
- Adding colors: `--color-*: oklch(...)` inside `@theme`; utilities: `@utility`, not plugins
- Components use semantic utils (`bg-pill-dark`, `text-muted`, `shadow-nav`, `animate-slide-down`, `font-display`) + `anim` stagger via `style={{'--d':'0.4s'}}`

## Fonts & Assets
- `app/layout.tsx:13` loads `next/font/google` Inter (`--font-inter`) + `next/font/local` Geist Pixel Circle from `public/fonts/GeistPixel-Circle.woff2` (`--font-geist-pixel`); consumed in `globals.css` via `@theme inline` + `@font-face` (`font-display: swap`, path `/fonts/...`)

## Git & Workflow
- Repo on `main`, `origin` `https://github.com/Arijit-mondal099/helix-platform.git` (package `animated-app` ≠ repo `helix-platform`)
- Do not commit on `main` — create `feat/*`/`fix/*` branch (`.opencode/commands/open-pr.md`)
- PR flow: `git add -p` (not `git add -A`), `git push -u origin <branch>`, print compare link `https://github.com/<owner>/<repo>/compare/<base>...<branch>?expand=1` — no `gh` CLI

## Verification
1. `npm run build` (catches PostCSS/Tailwind + TS)
2. Visual check for `hero-bg-video.mp4` backdrop and font loading if CSS changed
3. `npm run lint` only if lint-relevant files changed

## Environment Quirks
- Win32 + PowerShell 5.1: chain with `; if ($?) { ... }` not `&&`; use `workdir` param instead of `cd`
- No `opencode.json` at root; OpenCode plugin config in `.opencode/package.json` + `.opencode/commands/open-pr.md`
- Skills mirrored `.claude/skills` ↔ `.agents/skills`, locked in `skills-lock.json`: `tailwind-design-system`, `vercel-react-best-practices`, `frontend-design`, `grill-me`
