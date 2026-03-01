export const homePackages = [
  {
    name: "@minima-vue/ui",
    description:
      "Vue 3 implementation of the Medusa design system with composable primitives and pre-styled components.",
    install: "npm install @minima-vue/ui @minima-vue/icons @minima-vue/ui-preset",
    route: "/installation/standalone-project",
  },
  {
    name: "@minima-vue/icons",
    description:
      "SVG icon components generated for Vue so design tokens and component examples stay consistent.",
    install: "npm install @minima-vue/icons",
    route: "/icons/overview",
  },
  {
    name: "@minima-vue/ui-preset",
    description:
      "Tailwind preset carrying Medusa color tokens, typography utilities, effects, and component primitives.",
    install: "npm install -D @minima-vue/ui-preset tailwindcss",
    route: "/colors/overview",
  },
  {
    name: "@minima-vue/toolbox",
    description:
      "Workspace utility package used for token and icon generation, and now for docs-side metadata workflows.",
    install: "npm install -D @minima-vue/toolbox",
    route: "/installation/medusa-admin-extension",
  },
] as const

export const installationDocs = {
  "standalone-project": {
    title: "Standalone Project",
    description:
      "Use the full Medusa Vue design system inside a regular Vue 3 and Vite application.",
    installCommand:
      "npm install @minima-vue/ui @minima-vue/icons @minima-vue/ui-preset",
    files: [
      {
        label: "tailwind.config.ts",
        code: `import type { Config } from "tailwindcss"\nimport preset from "@minima-vue/ui-preset"\n\nexport default {\n  presets: [preset as Config],\n  content: ["./index.html", "./src/**/*.{ts,vue}"],\n} satisfies Config`,
      },
      {
        label: "main.ts",
        code: `import { createApp } from "vue"\nimport App from "./App.vue"\nimport "@minima-vue/ui/style.css"\n\ncreateApp(App).mount("#app")`,
      },
      {
        label: "App.vue",
        code: `<script setup lang="ts">\nimport { Button } from "@minima-vue/ui"\n</script>\n\n<template>\n  <Button>Launch</Button>\n</template>`,
      },
    ],
  },
  "medusa-admin-extension": {
    title: "Medusa Admin Extension",
    description:
      "Wire the Vue packages into an admin-side extension or workspace package and share the same token contract.",
    installCommand:
      "npm install @minima-vue/ui @minima-vue/icons @minima-vue/ui-preset && npm install -D @minima-vue/toolbox",
    files: [
      {
        label: "workspace package.json",
        code: `{\n  "scripts": {\n    "dev": "vite",\n    "build": "vite build",\n    "generate:tokens": "toolbox tokens -o './src/theme'",\n    "generate:icons": "toolbox icons -o './src/icons'"\n  }\n}`,
      },
      {
        label: "entrypoint",
        code: `import "@minima-vue/ui/style.css"\nimport { Alert, Button } from "@minima-vue/ui"\n\nexport default {\n  components: { Alert, Button },\n}`,
      },
    ],
  },
} as const

export const hookDocs = {
  "use-toggle-state": {
    title: "useToggleState",
    description:
      "Small utility composable for open and close state handling with an immutable state ref and explicit helpers.",
    usage: `import { useToggleState } from "@minima-vue/ui"\n\nconst { state, open, close, toggle } = useToggleState(false)`,
    example: `<script setup lang="ts">\nimport { computed } from "vue"\nimport { Button } from "@minima-vue/ui"\nimport { useToggleState } from "@minima-vue/ui"\n\nconst { state, open, close, toggle } = useToggleState()\nconst label = computed(() => (state.value ? "Open" : "Closed"))\n</script>\n\n<template>\n  <div class="flex items-center gap-3">\n    <Button @click="toggle">Toggle</Button>\n    <Button variant="secondary" @click="open">Open</Button>\n    <Button variant="transparent" @click="close">Close</Button>\n    <span>{{ label }}</span>\n  </div>\n</template>`,
  },
  "use-prompt": {
    title: "usePrompt",
    description:
      "Reserved for the future Prompt implementation in the Vue port. The composable currently throws to make the missing behavior explicit.",
    usage: `import { usePrompt } from "@minima-vue/ui"\n\nconst prompt = usePrompt()`,
    example: `// Current state\nexport const usePrompt = () => {\n  throw new Error("usePrompt is not yet implemented in Vue version.")\n}`,
  },
} as const

export const utilityDocs = {
  clx: {
    title: "clx",
    description:
      "Thin utility around clsx and tailwind-merge so component class composition stays compact while avoiding Tailwind conflicts.",
    usage: `import { clx } from "@minima-vue/ui"\n\nconst classes = clx("px-4", isActive && "bg-ui-bg-highlight")`,
  },
} as const

export const componentCopy: Record<string, string> = {
  alert: "A feedback surface for status messages, warnings, and contextual notices.",
  avatar: "Visual identity primitive for users, organizations, and records.",
  badge: "Small status and metadata label with Medusa token-driven styling.",
  button: "Action trigger with Medusa sizes, variants, and loading affordances.",
  calendar: "Date grid primitive for range and single-date experiences.",
  "code-block": "Framed code presentation block for documentation and examples.",
  "command-bar": "Inline command summary pattern for selected actions and shortcuts.",
  "currency-input": "Localized currency input that stays aligned with Medusa field styling.",
  "date-picker": "Higher-level date selection field built on top of calendar primitives.",
  drawer: "Slide-over panel for secondary workflows and forms.",
  "dropdown-menu": "Context and overflow menu primitives backed by Radix Vue behavior.",
  "focus-modal": "Focus-trapped modal for high-attention tasks.",
  heading: "Type scale primitive for information hierarchy.",
  hint: "Inline guidance element for contextual help and subtle messaging.",
  "icon-button": "Compact action button with an icon-first layout.",
  input: "Default text field matching Medusa form tokens and spacing.",
  label: "Form label primitive that pairs with inputs and grouped controls.",
  select: "Tokenized select menu with grouped options and portal-based content.",
  switch: "Boolean toggle component with explicit state visuals.",
  table: "Structured table primitive with reusable header, row, and pagination pieces.",
  textarea: "Multiline input built on the same field system as Input.",
  toast: "Transient notification surface for lightweight feedback flows.",
  tooltip: "Hover and focus hint primitive for terse contextual text.",
}

export const getComponentDescription = (slug: string, title: string) =>
  componentCopy[slug] ??
  `${title} is part of the Medusa Vue UI package and follows the same tokenized styling and composition patterns as the reference design system.`
