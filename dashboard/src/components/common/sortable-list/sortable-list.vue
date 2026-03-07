<script setup lang="ts" generic="TItem extends { id: string }">
import { DotsSix } from "@minima-vue/icons"
import { IconButton } from "@minima-vue/ui"

interface SortableListProps {
  items: TItem[]
}

defineProps<SortableListProps>()
const emit = defineEmits<{
  (e: "change", items: TItem[]): void
}>()

const move = (items: TItem[], from: number, to: number) => {
  if (to < 0 || to >= items.length) {
    return
  }

  const next = [...items]
  const [picked] = next.splice(from, 1)
  next.splice(to, 0, picked)
  emit("change", next)
}
</script>

<template>
  <ul role="application" class="flex list-inside list-none list-image-none flex-col p-0">
    <li v-for="(item, index) in items" :key="item.id" class="transition-fg flex flex-1 list-none items-center gap-x-2 border-b px-2 py-1">
      <IconButton variant="transparent" size="small" class="cursor-grab touch-none">
        <DotsSix class="text-ui-fg-muted" />
      </IconButton>
      <div class="min-w-0 flex-1">
        <slot name="item" :item="item" :index="index" />
      </div>
      <div class="flex items-center gap-x-1">
        <button type="button" class="text-ui-fg-muted text-xs" @click="move(items, index, index - 1)">Up</button>
        <button type="button" class="text-ui-fg-muted text-xs" @click="move(items, index, index + 1)">Down</button>
      </div>
    </li>
  </ul>
</template>
