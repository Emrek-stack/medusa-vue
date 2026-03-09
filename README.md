# Minima Vue Monorepo

Minima Vue is a Vue 3 component system for building admin extensions and standalone applications with a consistent design language.

This repository contains the core UI packages, icon library, Tailwind preset, docs app, and a dashboard app used as a reference implementation.

## Packages

- `@minima-vue/ui`: Vue 3 components, composables, and utilities
- `@minima-vue/icons`: SVG icon components for Vue
- `@minima-vue/ui-preset`: Tailwind CSS preset and design tokens
- `@minima-vue/toolbox`: internal CLI utilities for token/icon workflows
- `@minima-vue/docs`: documentation site
- `@minima-vue/dashboard`: dashboard application

## Repository Structure

```text
.
├── ui/
├── icons/
├── ui-preset/
├── toolbox/
├── docs/
├── dashboard/
├── reference/
└── .changeset/
```

## Requirements

- Node.js 20+ recommended
- npm 10+

## Getting Started

Install dependencies from the repository root:

```bash
npm install
```

## Development

Run docs app:

```bash
npm run dev
# or
npm run dev:docs
```

Run dashboard app:

```bash
npm run dev:dashboard
```

Generate docs metadata:

```bash
npm run generate:docs
```

## Build

Build all packages and apps:

```bash
npm run build
```

Build individual targets:

```bash
npm run build:packages
npm run build:docs
npm run build:dashboard
```

## Package Publishing

This repository uses Changesets.

Create a changeset:

```bash
npx changeset
```

Version packages:

```bash
npm run version-packages
```

Publish:

```bash
npm run release
```

## Using the UI Packages

Install core packages:

```bash
npm install @minima-vue/ui @minima-vue/icons
npm install -D @minima-vue/ui-preset
```

Basic usage:

```ts
import "@minima-vue/ui/style.css"
import { Button } from "@minima-vue/ui"
```

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for branching, changeset, and release flow details.

