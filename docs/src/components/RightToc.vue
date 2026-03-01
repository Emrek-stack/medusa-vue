<script setup lang="ts">
import { MarkdownSolid, Sparkles } from "@minima-vue/icons"

defineProps<{
  items: Array<{
    id: string
    title: string
    level: number
  }>
}>()
</script>

<template>
  <aside class="sticky top-24 hidden h-fit xl:block">
    <div class="border-l-2 border-ui-border-strong pl-3.5">
      <nav class="space-y-2">
        <a
          v-for="item in items"
          :key="item.id"
          :href="`#${item.id}`"
          class="block txt-xsmall-plus transition hover:text-ui-fg-base"
          :class="item.level === 3 ? 'pl-3 text-ui-fg-muted' : 'text-ui-fg-base'"
        >
          {{ item.title }}
        </a>
      </nav>
    </div>
    <div class="mt-8 space-y-3 pl-3.5 txt-xsmall-plus text-ui-fg-subtle">
      <button type="button" class="flex items-center gap-2 transition hover:text-ui-fg-base">
        <MarkdownSolid class="h-4 w-4" />
        <span>View as Markdown</span>
      </button>
      <button type="button" class="flex items-center gap-2 transition hover:text-ui-fg-base">
        <Sparkles class="h-4 w-4" />
        <span>Explain this page</span>
      </button>
    </div>
  </aside>
</template>
