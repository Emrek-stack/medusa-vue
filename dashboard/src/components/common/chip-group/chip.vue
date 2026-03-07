<script setup lang="ts">
import { inject } from "vue"
import { XMarkMini } from "@minima-vue/icons"

interface ChipProps {
  index: number
}

defineProps<ChipProps>()

const variant = inject<"base" | "component">("chip-group-variant", "component")
const onRemove = inject<((index: number) => void) | undefined>("chip-group-remove", undefined)
</script>

<template>
  <li
    :class="[
      'shadow-borders-base flex items-stretch overflow-hidden rounded-md border',
      variant === 'component' ? 'bg-ui-bg-component' : 'bg-ui-bg-base'
    ]"
  >
    <span class="txt-compact-small-plus text-ui-fg-subtle flex items-center justify-center px-2 py-1">
      <slot />
    </span>
    <button
      v-if="onRemove"
      type="button"
      class="text-ui-fg-muted hover:bg-ui-bg-base-hover px-1"
      @click="onRemove(index)"
    >
      <XMarkMini />
    </button>
  </li>
</template>
