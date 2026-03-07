<script setup lang="ts">
import { Text } from "@minima-vue/ui"

interface ListicleProps {
  labelKey: string
  descriptionKey: string
}

defineProps<ListicleProps>()
</script>

<template>
  <div class="flex flex-col gap-2 px-2 pb-2">
    <div class="shadow-elevation-card-rest bg-ui-bg-component transition-fg hover:bg-ui-bg-component-hover rounded-md px-4 py-2">
      <div class="flex items-center gap-4">
        <div class="flex flex-1 flex-col">
          <Text size="small" leading="compact" weight="plus">{{ labelKey }}</Text>
          <Text size="small" leading="compact" class="text-ui-fg-subtle">{{ descriptionKey }}</Text>
        </div>
        <div class="flex size-7 items-center justify-center">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
