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
  <aside class="sticky top-24 hidden h-fit w-full max-w-[221px] lg:block">
    <div class="flex flex-col gap-docs_2 pb-docs_1.5">
      <nav class="relative overflow-hidden">
        <div class="absolute left-0 top-2 h-[calc(100%-8px)] w-[1.5px] bg-ui-border-base" />
        <a
          v-for="item in items"
          :key="item.id"
          :href="`#${item.id}`"
          class="relative block pt-2 txt-xsmall-plus text-ui-fg-muted transition hover:text-ui-fg-base"
          :style="{ paddingLeft: `${(item.level - 1) * 12}px` }"
        >
          {{ item.title }}
        </a>
      </nav>
      <div class="flex flex-col gap-2 txt-xsmall-plus text-ui-fg-subtle">
        <button type="button" class="flex items-center gap-2 transition hover:text-ui-fg-base">
          <MarkdownSolid class="h-[15px] w-[15px]" />
          <span>View as Markdown</span>
        </button>
        <button type="button" class="flex items-center gap-2 transition hover:text-ui-fg-base">
          <Sparkles class="h-[15px] w-[15px]" />
          <span>Explain this page</span>
        </button>
      </div>
    </div>
  </aside>
</template>
