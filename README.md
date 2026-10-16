# billing-ui-kit

Public portfolio repo: a **usage and credits dashboard** on top of a small **billing-focused design system**. This branch is the scaffold only—base tokens, Untitled UI primitives, and Storybook. Custom billing components and the dashboard UI come next.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Untitled UI React](https://www.untitledui.com/react) — **free MIT** components via the [open-source repo](https://github.com/untitleduico/react) (no PRO code in this public project)
- Tailwind CSS v4 + [React Aria](https://react-spectrum.adobe.com/react-aria/) components
- [Storybook](https://storybook.js.org/) for the design system

See [THIRD_PARTY_NOTICES](./THIRD_PARTY_NOTICES) for Untitled UI licensing details.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006). Stories cover the base components included in this scaffold: Button, Input, Badge, Table, and ProgressBar.

### Production builds

```bash
npm run build
npm run build-storybook
```

## Design tokens

Edit [`src/styles/tokens.css`](./src/styles/tokens.css) to swap brand color, spacing, and radius placeholders. Tokens map onto Untitled UI theme variables consumed by Tailwind utilities.

## Roadmap

| Weekend | Focus |
| --- | --- |
| **1** | Finalize tokens, base components, and **3 custom components**: credits meter, usage-limit alert, plan card |
| **2** | Usage & credits **dashboard** with realistic fake data |
| **3** | Edge cases (80% usage, 100% usage, payment failed, view-only user who can’t upgrade) + accessibility pass |
| **Ship** | Deploy to [Vercel](https://vercel.com/) |

## License

This repository is [MIT licensed](./LICENSE). Untitled UI React components retained here are MIT licensed; see [THIRD_PARTY_NOTICES](./THIRD_PARTY_NOTICES).
