<script setup lang="ts">
import { Text } from "@minima-vue/ui"

interface SectionRowProps {
  title: string
  value?: string | null
}

defineProps<SectionRowProps>()
</script>

<template>
  <div class="text-ui-fg-subtle grid w-full grid-cols-2 items-center gap-4 px-6 py-4">
    <Text size="small" weight="plus" leading="compact">{{ title }}</Text>
    <div class="flex items-center justify-between gap-x-4">
      <Text size="small" leading="compact" class="whitespace-pre-line text-pretty">
        {{ value ?? '-' }}
      </Text>
      <slot name="actions" />
    </div>
  </div>
</template>
