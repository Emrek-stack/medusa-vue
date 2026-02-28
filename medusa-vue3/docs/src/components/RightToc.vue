<script setup lang="ts">
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
    <div class="border-l-2 border-ui-border-strong pl-4">
      <nav class="space-y-2.5">
        <a
          v-for="item in items"
          :key="item.id"
          :href="`#${item.id}`"
          class="text-x-small-plus block transition hover:text-ui-fg-base"
          :class="item.level === 3 ? 'pl-3 text-ui-fg-muted' : 'text-ui-fg-base'"
        >
          {{ item.title }}
        </a>
      </nav>
    </div>
    <div class="mt-7 space-y-3 pl-4 text-x-small-plus text-ui-fg-subtle">
      <button type="button" class="block transition hover:text-ui-fg-base">View as Markdown</button>
      <button type="button" class="block transition hover:text-ui-fg-base">Explain this page</button>
    </div>
  </aside>
</template>
