# AGENTS.md — animated-app

> Companion to `CLAUDE.md` (repo-level behavioral guide — think before coding, simplicity first, surgical changes, goal-driven verification). Every changed line must trace to the request.

## Stack
- Next.js 16.3.3 (App Router, Turbopack) + React 19.1 + TypeScript 5.7 strict, `type: module` (ESM)
- Tailwind CSS 4.3.3 (CSS-first, no `tailwind.config.*`) via `@tailwindcss/postcss` 4.3.3 + `postcss` 8.5
- Path alias `@/*` → `./*` (`tsconfig.json:24`). Import components as `@/components/Header`.

## Commands (verified)
- `npm run dev` — `next dev`
- `npm run build` — `next build` — primary verification (no tests configured)
- `npm start` — `next start`
- `npm run lint` — `next lint` (uses `.eslintrc.json` → `next/core-web-vitals`; ESLint 9 legacy `.eslintrc.json` will fail with `npx eslint` directly)
- No test, prettier, husky, CI, or `.github` workflows exist. Do not invent them.

## Project Boundaries
- Single app, not a monorepo: `app/` (route: `layout.tsx`, `page.tsx`, `globals.css`), `components/` (`Header.tsx`, `Hero.tsx`, `Stats.tsx`), `public/` (`hero-bg-video.mp4`, `logo.webp`, `fonts/GeistPixel-Circle.woff2`)
- `app/globals.css` is the design system source of truth — all tokens, animations, and base styles live there.
- Fonts canonical is `public/fonts/GeistPixel-Circle.woff2` used by `localFont` in `layout.tsx:13` (duplicate `assets/` and `fonts/` root folders removed).

## Tailwind v4 Contract (do not regress)
- `postcss.config.mjs` must use `{"@tailwindcss/postcss": {}}` — not `tailwindcss` directly.
- `app/globals.css` entry is CSS-first:
  - External `@import url(...)` (Bubbledot + Font Awesome) **must precede** `@import "tailwindcss"` — otherwise build warns `@import rules must precede all rules`.
  - `@custom-variant dark (&:where(.dark, .dark *))` at `:13`
  - `@theme inline` for font vars referencing `var(--font-inter)` (required per `references/advanced-patterns.md`)
  - `@theme` with OKLCH semantic tokens (`background/foreground/primary/secondary/muted/border/ring/card` + app tokens `nav-text/pill-dark/trust-*`), radius `sm/md/lg/xl/pill`, shadow `nav/menu/cta`, container `hero/nav`, `--animate-*` tokens
  - `@keyframes` **inside** `@theme` (v4 tree-shaking — only emitted when `--animate-*` is used)
  - `.dark` overrides, `@layer base` with `@apply border-border bg-background text-foreground`, `@utility anim`, `[hidden]{display:none!important}`, `prefers-reduced-motion` guard
  - Legacy `:root { --bg: var(--color-background) ... }` kept for inline `var(--d)` stagger and older `var(--bg)` refs — do not delete.
- Adding colors: use `--color-*: oklch(...)` inside `@theme`, not `theme.extend`. Adding utilities: use `@utility`, not plugins.
- Components use semantic utilities (`bg-pill-dark`, `text-muted`, `shadow-nav`, `animate-slide-down`, `font-display`) + `anim` stagger via `style={{'--d':'0.4s'}}`. Avoid new arbitrary `[clamp(...)]` if a token can be added to `@theme` instead.

## Fonts & Assets
- `app/layout.tsx` loads `next/font/google` Inter (vars `--font-inter`) and `next/font/local` Geist Pixel Circle (`--font-geist-pixel`). `globals.css` consumes via `@theme inline`.
- `@font-face Geist Pixel Circle` in `globals.css:5` must keep `font-display: swap` and path `/fonts/GeistPixel-Circle.woff2` (served from `public`).

## Verification Order
1. `npm run build` (catches PostCSS/Tailwind + TypeScript)
2. Manual visual check for video background (`public/hero-bg-video.mp4`) and font loading if CSS changed

## Environment Quirks
- Win32 + PowerShell 5.1: chain commands with `; if ($?) { ... }` not `&&`; use `workdir` param instead of `cd` in tool calls.
- Not a git repo (`Is directory a git repo: no`) — no commit/PR expectations.
- Configured skills (`.claude/skills` + `.agents/skills` mirrored, locked in `skills-lock.json`): `tailwind-design-system` (reference `references/details.md` + `advanced-patterns.md`), `vercel-react-best-practices`, `frontend-design`, `grill-me`.
