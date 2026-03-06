<script setup lang="ts">
import { Text } from "@minima-vue/ui"

defineProps<{
  label: string
  value: string
  delta?: string
}>()
</script>

<template>
  <article class="dashboard-panel flex flex-col gap-y-1 p-4">
    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">{{ label }}</Text>
    <Text size="large" leading="compact" weight="plus" class="text-ui-fg-base">{{ value }}</Text>
    <Text v-if="delta" size="xsmall" leading="compact" class="text-ui-fg-subtle">{{ delta }}</Text>
  </article>
</template>
