<script setup lang="ts">
import { AccordionRoot as RadixAccordionRoot } from "radix-vue"

interface ProgressAccordionProps {
  modelValue?: string | string[]
  defaultValue?: string | string[]
  type?: "single" | "multiple"
  collapsible?: boolean
}

const props = withDefaults(defineProps<ProgressAccordionProps>(), {
  type: "single",
  collapsible: true,
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string | string[]): void
}>()
</script>

<template>
  <RadixAccordionRoot
    :model-value="props.modelValue"
    :default-value="props.defaultValue"
    :type="props.type"
    :collapsible="props.collapsible"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </RadixAccordionRoot>
</template>
