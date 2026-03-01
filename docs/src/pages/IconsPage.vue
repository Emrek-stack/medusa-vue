<script setup lang="ts">
import ExamplePreview from "@docs/components/ExamplePreview.vue"
import IconSearch from "@docs/components/IconSearch.vue"
import DocsCodeBlock from "@docs/components/DocsCodeBlock.vue"
import RichText from "@docs/components/RichText.vue"
import RightToc from "@docs/components/RightToc.vue"

const tocItems = [
  { id: "installation", title: "Installation", level: 2 },
  { id: "installation-in-standalone-projects", title: "Installation in Standalone Projects", level: 3 },
  { id: "usage", title: "Usage", level: 2 },
  { id: "icons-list", title: "Icons List", level: 2 },
  { id: "icon-props", title: "Icon Props", level: 2 },
  { id: "icon-color", title: "Icon Color", level: 3 },
  { id: "icon-size", title: "Icon Size", level: 3 },
]

const installCode = `npm install @minima-vue/icons`
const usageCode = `import { Sun } from "@minima-vue/icons"

export default {
  components: { Sun },
}`
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
        <h1 class="docs-page-title">Icons</h1>

        <RichText
          content="In this guide, you'll learn how to install and use Medusa UI icons."
          :lead="true"
        />

        <RichText
          content="The Medusa UI icons package is a collection of Vue icon components from Medusa's design system. You can use these icons either in your Medusa Admin customizations, or in your standalone Vue projects."
          :lead="true"
        />

        <h2 id="installation" class="docs-section-title">Installation</h2>

        <RichText
          content="The Medusa UI icons package is available by default in your Medusa application, so you can use them in your Medusa Admin customizations without any additional installation steps."
        />

        <h3 id="installation-in-standalone-projects" class="docs-subsection-title">
          Installation in Standalone Projects
        </h3>

        <div class="docs-card px-6 py-4">
          <ul class="list-disc space-y-2 pl-5 txt-compact-small-plus text-ui-fg-base">
            <li>Vue 3 installed in your project.</li>
          </ul>
        </div>

        <RichText
          content="To install the Medusa UI icons package in your Vue-based project, run the following command:"
        />

        <DocsCodeBlock :code="installCode" lang="bash" label="bash" />

        <hr class="border-ui-border-base" />

        <h2 id="usage" class="docs-section-title">Usage</h2>

        <RichText
          content="You can import and use the icons in your Vue components:"
        />

        <DocsCodeBlock :code="usageCode" lang="ts" label="ts" />

        <hr class="border-ui-border-base" />

        <h2 id="icons-list" class="docs-section-title">Icons List</h2>

        <RichText
          content="Below is a list of all the icons available in the Medusa UI design system. Click on any icon to copy its component name."
        />

        <IconSearch />

        <hr class="border-ui-border-base" />

        <h2 id="icon-props" class="docs-section-title">Icon Props</h2>

        <RichText content="Icons accept all props that an `svg` element accepts." />

        <h3 id="icon-color" class="docs-subsection-title">Icon Color</h3>

        <RichText
          content="By default, outline icons' stroke color and solid icon's fill color are set to `currentColor`."
        />

        <RichText
          content="You can set a different color by passing the `color` prop."
        />

        <ExamplePreview slug="icons" example-name="icon-color" :hide-feedback="true" />

        <RichText
          content="You can also use a CSS class by passing the `className` prop."
        />

        <ExamplePreview slug="icons" example-name="icon-color-classes" :hide-feedback="true" />

        <h3 id="icon-size" class="docs-subsection-title">Icon Size</h3>

        <RichText
          content="All icon's width and height are `20px` and it's not possible to change them."
        />
      </div>
    </article>

    <RightToc :items="tocItems" />
  </div>
</template>
