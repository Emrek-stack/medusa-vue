<script setup lang="ts">
import { provide } from "vue"
import { Button } from "@minima-vue/ui"

type ChipGroupVariant = "base" | "component"

interface ChipGroupProps {
  onClearAll?: () => void
  onRemove?: (index: number) => void
  variant?: ChipGroupVariant
}

const props = withDefaults(defineProps<ChipGroupProps>(), {
  variant: "component",
})

provide("chip-group-variant", props.variant)
provide("chip-group-remove", props.onRemove)
</script>

<template>
  <ul role="application" class="flex flex-wrap items-center gap-2">
    <slot />
    <li v-if="onClearAll">
      <Button size="small" variant="transparent" type="button" class="text-ui-fg-muted" @click="onClearAll">
        Clear all
      </Button>
    </li>
  </ul>
</template>
