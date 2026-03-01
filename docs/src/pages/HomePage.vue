<script setup lang="ts">
import { RouterLink } from "vue-router"
import { ArrowUpRightOnBox } from "@minima-vue/icons"
import RightToc from "@docs/components/RightToc.vue"
import { siteBrand } from "@docs/data/site"

const tocItems = [
  { id: "figma-design-system", title: "Figma Design System", level: 2 },
  { id: "packages", title: "Packages", level: 2 },
  { id: "how-minima-vue-is-built", title: "How Minima Vue Is Built", level: 2 },
]
</script>

<template>
  <div class="docs-page-grid">
    <article class="min-w-0">
      <nav class="docs-breadcrumb">
        <span>Documentation</span>
        <span>›</span>
        <span>{{ siteBrand.name }}</span>
      </nav>

      <div class="docs-flow">
        <h1 class="docs-page-title">
          {{ siteBrand.docsTitle }}
        </h1>

        <p class="txt-large text-ui-fg-base">
          Welcome to {{ siteBrand.name }}, a Vue component system for admin extensions and standalone applications.
        </p>

        <p class="docs-copy max-w-[780px]">
          {{ siteBrand.name }} is a collection of components, hooks, utility functions, icons, and
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>
          classes that can be used to build a consistent user interface across admin panels and client applications.
        </p>

        <section class="space-y-6">
          <h2 id="figma-design-system" class="docs-section-title">
            Figma Design System
          </h2>

          <p class="docs-copy max-w-[780px]">
            The visual system behind {{ siteBrand.name }} is still easiest to inspect through the
            <a
              href="https://www.figma.com/community/file/1278648465968635936/Medusa-UI"
              target="_blank"
              rel="noreferrer"
            >
              Figma
            </a>.
            file used as the original reference. It remains a useful source for components, icons, and design tokens.
          </p>

          <p class="docs-copy max-w-[780px]">
            This is especially useful if you have the Figma Dev MCP set up, allowing you to easily
            inspect source patterns and adapt them for {{ siteBrand.name }} projects.
          </p>

          <a
            href="https://www.figma.com/community/file/1278648465968635936/Medusa-UI"
            target="_blank"
            rel="noreferrer"
            class="flex max-w-[640px] items-center justify-between rounded-xl border border-ui-border-base bg-ui-bg-base px-4 py-3 shadow-elevation-card-rest transition hover:bg-ui-bg-base"
          >
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f1115] text-sm font-medium text-white">
                F
              </div>
              <div>
                <p class="txt-medium-plus text-ui-fg-base">{{ siteBrand.name }}</p>
                <p class="txt-medium text-ui-fg-subtle">Reference file for colors, type, icons, and components</p>
              </div>
            </div>
            <ArrowUpRightOnBox class="h-4 w-4 text-ui-fg-subtle" />
          </a>
        </section>

        <hr class="border-ui-border-base" />

        <section class="space-y-6">
          <h2 id="packages" class="docs-section-title">
            Packages
          </h2>

          <p class="docs-copy max-w-[780px]">
            {{ siteBrand.name }} is split into multiple packages. Each package is published to npm and can be
            installed separately.
          </p>

          <ul class="list-disc space-y-3 pl-5 txt-large text-ui-fg-base">
            <li><code>@minima-vue/ui</code> - Vue components, hooks, and utility functions used in {{ siteBrand.name }}.</li>
            <li><code>@minima-vue/ui-preset</code> - Tailwind CSS preset containing the token and utility layer for {{ siteBrand.name }}.</li>
            <li><code>@minima-vue/icons</code> - Icons shipped with {{ siteBrand.name }}.</li>
          </ul>

          <p class="docs-copy max-w-[780px]">
            Learn how to install and use these packages either for
            <RouterLink to="/installation/medusa-admin-extension" class="underline underline-offset-2">
              admin extensions
            </RouterLink>
            customizations or a
            <RouterLink to="/installation/standalone-project" class="underline underline-offset-2">
              standalone project
            </RouterLink>.
          </p>
        </section>

        <hr class="border-ui-border-base" />

        <section class="space-y-6">
          <h2 id="how-minima-vue-is-built" class="docs-section-title">
            How Minima Vue Is Built
          </h2>

          <p class="docs-copy max-w-[780px]">
            At its core, {{ siteBrand.name }} is a styled and slightly opinionated implementation of Radix
            primitives, informed by established admin UI patterns and component composition techniques.
          </p>

          <p class="docs-copy max-w-[780px]">
            The component system is intentionally simple and composable. This allows you to build
            whatever you need without overloading the component API.
          </p>

          <p class="docs-copy max-w-[780px]">
            The package set also leans on native HTML APIs where possible, respecting and passing
            props to the underlying elements accordingly.
          </p>
        </section>
      </div>
    </article>

    <RightToc :items="tocItems" />
  </div>
</template>
