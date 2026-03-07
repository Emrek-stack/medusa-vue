<script setup lang="ts">
import { MagnifyingGlass } from "@minima-vue/icons"
import { Text } from "@minima-vue/ui"

interface NoResultsProps {
  title?: string
  message?: string
}

withDefaults(defineProps<NoResultsProps>(), {
  title: "No results",
  message: "Try adjusting your search",
})
</script>

<template>
  <div class="flex h-[400px] w-full items-center justify-center">
    <div class="flex flex-col items-center gap-y-2">
      <MagnifyingGlass />
      <Text size="small" leading="compact" weight="plus">{{ title }}</Text>
      <Text size="small" class="text-ui-fg-subtle">{{ message }}</Text>
    </div>
  </div>
</template>
