# billing-ui-kit

Public portfolio project: a **usage and credits dashboard** built on a small billing-focused design system.

This repo is scaffold-only for now — base components, design tokens, and Storybook are in place. Dashboard screens and custom billing components are planned for upcoming weekend builds.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Untitled UI React](https://www.untitledui.com/react) — **free MIT components only** (no PRO code)
- [Tailwind CSS](https://tailwindcss.com/) v4 (Untitled UI theme)
- [Storybook](https://storybook.js.org/) for component docs

Base components included today:

| Component | Location |
|-----------|----------|
| Button | `src/components/base/buttons/button.tsx` |
| Input | `src/components/base/input/input.tsx` |
| Badge | `src/components/base/badges/badges.tsx` |
| Table | `src/components/application/table/table.tsx` |
| Progress bar | `src/components/base/progress-indicators/progress-indicators.tsx` |

Supporting primitives (checkbox, dropdown, tooltip, avatar) are kept where required by the table component.

## Design tokens

Edit `src/tokens/brand-tokens.css` to swap brand colors, spacing rhythm, and corner radii. Tokens bridge into Untitled UI CSS variables consumed by the theme in `src/styles/theme.css`.

## Third-party license

Untitled UI React component code is MIT-licensed. See [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md). This project is also MIT-licensed — see [LICENSE](./LICENSE).

## Development

```bash
npm install
npm run dev          # Next.js at http://localhost:3000
npm run storybook    # Storybook at http://localhost:6006
```

Production checks:

```bash
npm run build
npm run build-storybook
```

Add more Untitled UI **free** components over time:

```bash
npx untitledui@latest add <component-name>
```

Do not add Untitled UI PRO components to this public repo.

## Roadmap

**Weekend 1 — Foundation**

- Finalize tokens and base components in Storybook
- Build 3 custom billing components: credits meter, usage-limit alert, plan card

**Weekend 2 — Dashboard**

- Usage and credits dashboard layout with realistic fake data

**Weekend 3 — Edge cases & ship**

- States: 80% usage, 100% usage, payment failed, view-only user (cannot upgrade)
- Accessibility pass
- Deploy to Vercel
