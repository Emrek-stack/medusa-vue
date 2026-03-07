<script setup lang="ts">
import { cn } from "@/shared/utils/cn"

defineProps<{
  color?: "green" | "red" | "blue" | "orange" | "grey" | "purple"
}>()
</script>

<template>
  <div class="txt-compact-small text-ui-fg-subtle flex h-full w-full items-center gap-x-2 overflow-hidden">
    <div role="presentation" class="flex h-5 w-2 items-center justify-center">
      <div
        :class="
          cn(
            'h-2 w-2 rounded-sm shadow-[0px_0px_0px_1px_rgba(0,0,0,0.12)_inset]',
            color === 'grey' && 'bg-ui-tag-neutral-icon',
            color === 'green' && 'bg-ui-tag-green-icon',
            color === 'red' && 'bg-ui-tag-red-icon',
            color === 'blue' && 'bg-ui-tag-blue-icon',
            color === 'orange' && 'bg-ui-tag-orange-icon',
            color === 'purple' && 'bg-ui-tag-purple-icon'
          )
        "
      />
    </div>
    <span class="truncate"><slot /></span>
  </div>
</template>
