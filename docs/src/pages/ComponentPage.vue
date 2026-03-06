<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { Alert } from "@minima-vue/ui"
import ApiReferenceSection from "@docs/components/ApiReferenceSection.vue"
import DocsCodeBlock from "@docs/components/DocsCodeBlock.vue"
import ExamplePreview from "@docs/components/ExamplePreview.vue"
import RichText from "@docs/components/RichText.vue"
import RightToc from "@docs/components/RightToc.vue"
import { findComponentDoc } from "@docs/data/component-docs"
import { findComponent } from "@docs/data/navigation"
import { siteBrand } from "@docs/data/site"
import { renderInlineMarkdown } from "@docs/utils/markdown"

const route = useRoute()
const entry = computed(() => findComponent(route.params.slug as string))
const doc = computed(() => findComponentDoc(route.params.slug as string))

const tocItems = computed(() => {
  if (!doc.value) {
    return []
  }

  const entries = doc.value.blocks.flatMap((block) => {
    if (block.type === "heading" && block.level >= 2) {
      return [{ id: block.id, title: block.text, level: block.level }]
    }

    if (block.type === "api-reference") {
      return [
        { id: "api-reference", title: "API Reference", level: 2 },
        ...((block.componentsToShow.length > 1 ? block.componentsToShow : []).map((name) => ({
          id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          title: name,
          level: 3,
        }))),
      ]
    }

    return []
  })

  return entries.filter(
    (entry, index) =>
      entries.findIndex((candidate) => candidate.id === entry.id && candidate.title === entry.title) ===
      index
  )
})

const firstSectionIndex = computed(
  () => doc.value?.blocks.findIndex((block) => block.type === "heading" && block.level === 2) ?? -1
)

const transformCode = (value: string) =>
  value
    .replace(/@medusajs\//g, "@minima-vue/")
    .replace(/CodeBlock\.Header\.Meta/g, "CodeBlockMeta")
    .replace(/CodeBlock\.Header/g, "CodeBlockHeader")
    .replace(/CodeBlock\.Body/g, "CodeBlockBody")
</script>

<template>
  <div v-if="entry && doc" class="docs-page-grid">
    <article class="min-w-0 space-y-8">
      <nav class="docs-breadcrumb">
        <span>Documentation</span>
        <span>›</span>
        <span>{{ siteBrand.name }}</span>
      </nav>

      <div class="docs-flow">
        <template v-for="(block, index) in doc.blocks" :key="`${block.type}-${index}`">
          <h1
            v-if="block.type === 'heading' && block.level === 1"
            :id="block.id"
            class="docs-page-title"
          >
            {{ block.text }}
          </h1>

          <h2
            v-else-if="block.type === 'heading' && block.level === 2"
            :id="block.id"
            class="docs-section-title"
          >
            {{ block.text }}
          </h2>

          <h3
            v-else-if="block.type === 'heading' && block.level === 3"
            :id="block.id"
            class="docs-subsection-title"
          >
            {{ block.text }}
          </h3>

          <RichText
            v-else-if="block.type === 'paragraph'"
            :content="block.content"
            :lead="index < firstSectionIndex && index < 2"
          />

          <hr
            v-else-if="block.type === 'divider'"
            class="my-docs_2 h-px w-full border-0 bg-ui-border-base"
          />

          <ul
            v-else-if="block.type === 'list' && !block.ordered"
            class="mb-docs_1.5 list-disc px-docs_1 text-ui-fg-base"
          >
            <li
              v-for="(item, itemIndex) in block.items"
              :key="`list-${index}-${itemIndex}`"
              class="txt-medium text-ui-fg-base"
              v-html="renderInlineMarkdown(item)"
            />
          </ul>

          <ol
            v-else-if="block.type === 'list' && block.ordered"
            class="mb-docs_1.5 list-decimal px-docs_1 text-ui-fg-base"
          >
            <li
              v-for="(item, itemIndex) in block.items"
              :key="`list-${index}-${itemIndex}`"
              class="txt-medium text-ui-fg-base"
              v-html="renderInlineMarkdown(item)"
            />
          </ol>

          <DocsCodeBlock
            v-else-if="block.type === 'code'"
            :code="transformCode(block.code)"
            :lang="block.lang"
          />

          <ExamplePreview
            v-else-if="block.type === 'example'"
            :slug="entry.slug"
            :example-name="block.name"
            :hide-feedback="block.hideFeedback"
            :disable-center-align-preview="block.disableCenterAlignPreview"
          />

          <ApiReferenceSection
            v-else-if="block.type === 'api-reference'"
            :components-to-show="block.componentsToShow"
          />
        </template>
      </div>
    </article>

    <RightToc :items="tocItems" />
  </div>

  <div v-else class="space-y-4">
    <h1 class="docs-page-title">Component Not Found</h1>
    <Alert variant="warning">
      This component is not available in the generated docs manifest.
    </Alert>
  </div>
</template>
