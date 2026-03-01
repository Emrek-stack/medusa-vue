<script setup lang="ts">
import ColorsList from "@docs/components/ColorsList.vue"
import DocsCodeBlock from "@docs/components/DocsCodeBlock.vue"
import RichText from "@docs/components/RichText.vue"
import RightToc from "@docs/components/RightToc.vue"
import { colorSections } from "@docs/data/colors"

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "how-to-use-the-medusa-ui-colors", title: "How to Use the Medusa UI Colors", level: 3 },
  ...colorSections.map((section) => ({
    id: section.id,
    title: section.title,
    level: 2,
  })),
]

const usageCode = `<body class="bg-ui-bg-base">
  ...
</body>`
</script>

<template>
  <div class="docs-page-grid">
    <article class="min-w-0">
      <nav class="docs-breadcrumb">
        <span>Documentation</span>
        <span>›</span>
        <span>Medusa UI</span>
      </nav>

      <div class="docs-flow">
        <h1 class="docs-page-title">Medusa UI Colors</h1>

        <RichText
          content="In this guide, you'll learn about the color classes available in Medusa UI and how to use them."
          :lead="true"
        />

        <h2 id="overview" class="docs-section-title">Overview</h2>

        <RichText
          content="Medusa UI provides Tailwind CSS classes for colors from the Medusa design system. These classes can be used to style components and elements consistently across your Medusa and standalone applications."
        />

        <RichText
          content="To view the colors in the list below in dark mode, switch the documentation's theme from the menu in the top right."
        />

        <RichText
          content="To copy a color's Tailwind CSS class from the list below, click on it."
        />

        <h3 id="how-to-use-the-medusa-ui-colors" class="docs-subsection-title">
          How to Use the Medusa UI Colors
        </h3>

        <RichText
          content="You can use the color classes in your Medusa Admin customizations or standalone projects that have the `@minima-vue/ui` package installed."
        />

        <RichText
          content="You can apply the color classes as CSS classes to any element."
        />

        <RichText
          content="For example, to set the background color of the document's body:"
        />

        <DocsCodeBlock :code="usageCode" lang="tsx" />

        <hr class="border-ui-border-base" />

        <ColorsList />
      </div>
    </article>

    <RightToc :items="tocItems" />
  </div>
</template>
