<script setup lang="ts">
import { TabsRoot as RadixTabsRoot } from "radix-vue"

interface ProgressTabsProps {
  modelValue?: string
  defaultValue?: string
}

const props = defineProps<ProgressTabsProps>()

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()
</script>

<template>
  <RadixTabsRoot
    :model-value="props.modelValue"
    :default-value="props.defaultValue"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </RadixTabsRoot>
</template>
