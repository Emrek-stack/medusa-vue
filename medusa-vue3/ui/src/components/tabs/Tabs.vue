<script setup lang="ts">
import { TabsRoot as RadixTabsRoot } from "radix-vue"

interface TabsProps {
  modelValue?: string
  defaultValue?: string
  orientation?: "horizontal" | "vertical"
}

const props = withDefaults(defineProps<TabsProps>(), {
  orientation: "horizontal",
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()
</script>

<template>
  <RadixTabsRoot
    :model-value="props.modelValue"
    :default-value="props.defaultValue"
    :orientation="props.orientation"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </RadixTabsRoot>
</template>
