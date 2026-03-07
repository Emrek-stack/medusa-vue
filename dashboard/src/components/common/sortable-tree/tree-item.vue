<script setup lang="ts">
import { TriangleRightMini } from "@minima-vue/icons"

interface TreeItemProps {
  depth: number
  collapsed?: boolean
  childCount?: number
  disabled?: boolean
  indentationWidth?: number
}

withDefaults(defineProps<TreeItemProps>(), {
  collapsed: false,
  childCount: 0,
  disabled: false,
  indentationWidth: 24,
})

const emit = defineEmits<{
  (e: "collapse"): void
}>()
</script>

<template>
  <li :style="{ paddingLeft: `${indentationWidth * depth}px` }" class="list-none">
    <div class="bg-ui-bg-base transition-fg relative flex items-center gap-x-3 border-y px-6 py-2.5" :class="{ 'bg-ui-bg-disabled': disabled }">
      <button
        type="button"
        class="inline-flex size-7 items-center justify-center"
        :disabled="!childCount"
        @click="emit('collapse')"
      >
        <TriangleRightMini class="text-ui-fg-subtle transition-transform" :class="{ 'rotate-90': !collapsed }" />
      </button>
      <div class="txt-compact-small text-ui-fg-subtle flex-grow truncate">
        <slot />
      </div>
    </div>
  </li>
</template>
