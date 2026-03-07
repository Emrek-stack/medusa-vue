<script setup lang="ts">
import { Button } from "@minima-vue/ui"
import { cn } from "@/shared/utils/cn"

export type SegmentedControlOption = {
  value: string
  label: string
}

interface SegmentedControlProps {
  value: string
  options: SegmentedControlOption[]
}

const props = defineProps<SegmentedControlProps>()
const emit = defineEmits<{
  (e: "update:value", value: string): void
}>()
</script>

<template>
  <div
    class="bg-ui-bg-disabled grid items-center gap-x-[1px] rounded-md p-[1px]"
    :style="{ gridTemplateColumns: `repeat(${options.length}, 1fr)` }"
  >
    <Button
      v-for="option in options"
      :key="option.value"
      size="small"
      type="button"
      :variant="value === option.value ? 'secondary' : 'transparent'"
      :class="cn('w-auto', value !== option.value && 'hover:text-ui-fg-base text-ui-fg-muted')"
      @click="emit('update:value', option.value)"
    >
      {{ option.label }}
    </Button>
  </div>
</template>
