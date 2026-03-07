<script setup lang="ts" generic="T extends { id: string }">
import { computed, ref } from "vue"
import SortableTreeItem from "./sortable-tree-item.vue"
import type { FlattenedItem } from "./types"
import { flattenTree } from "./utils"

interface SortableTreeProps {
  items: T[]
  childrenProp?: string
  indentationWidth?: number
  enableDrag?: boolean
}

const props = withDefaults(defineProps<SortableTreeProps>(), {
  childrenProp: "children",
  indentationWidth: 24,
  enableDrag: true,
})

const emit = defineEmits<{
  (e: "change", payload: { id: string; parentId: string | null; index: number }, items: T[]): void
}>()

const collapsedState = ref<Record<string, boolean>>({})

const flat = computed(() => flattenTree(props.items, props.childrenProp) as FlattenedItem[])

const isCollapsed = (id: string) => Boolean(collapsedState.value[id])

const toggle = (id: string) => {
  collapsedState.value = {
    ...collapsedState.value,
    [id]: !collapsedState.value[id],
  }
}

const getChildrenCount = (item: FlattenedItem) => {
  const raw = item[props.childrenProp as keyof FlattenedItem] as unknown
  return Array.isArray(raw) ? raw.length : 0
}

const emitNoopChange = (item: FlattenedItem) => {
  emit(
    "change",
    {
      id: item.id,
      parentId: item.parentId,
      index: item.index,
    },
    props.items
  )
}
</script>

<template>
  <ul class="flex flex-col">
    <SortableTreeItem
      v-for="item in flat"
      :key="item.id"
      :id="item.id"
      :depth="item.depth"
      :collapsed="isCollapsed(item.id)"
      :child-count="getChildrenCount(item)"
      :indentation-width="indentationWidth"
      :disabled="!enableDrag"
      @collapse="toggle"
      @dblclick="emitNoopChange(item)"
    >
      <slot name="value" :item="item">
        {{ item.id }}
      </slot>
    </SortableTreeItem>
  </ul>
</template>
