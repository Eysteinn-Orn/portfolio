# Personal Portfolio

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses TypeScript, Tailwind CSS v4, and [shadcn/ui](https://ui.shadcn.com/).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Adding Components (shadcn/ui)

Use the shadcn/ui CLI to add components:

```bash
npx shadcn@latest add [component-name]
```

For example, to add a button:

```bash
npx shadcn@latest add button
```

Then import it in your code:

```typescript
import { Button } from "@/components/ui/button"

// ... use the Button component
```