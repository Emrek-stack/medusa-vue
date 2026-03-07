<script setup lang="ts">
import TreeItem from "./tree-item.vue"

interface SortableTreeItemProps {
  id: string
  depth: number
  collapsed?: boolean
  childCount?: number
  indentationWidth?: number
  disabled?: boolean
}

withDefaults(defineProps<SortableTreeItemProps>(), {
  collapsed: false,
  childCount: 0,
  indentationWidth: 24,
  disabled: false,
})

const emit = defineEmits<{
  (e: "collapse", id: string): void
}>()
</script>

<template>
  <TreeItem
    :depth="depth"
    :collapsed="collapsed"
    :child-count="childCount"
    :indentation-width="indentationWidth"
    :disabled="disabled"
    @collapse="emit('collapse', id)"
  >
    <slot />
  </TreeItem>
</template>
