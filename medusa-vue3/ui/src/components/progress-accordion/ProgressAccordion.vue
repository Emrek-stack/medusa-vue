<script setup lang="ts">
import { AccordionRoot as RadixAccordionRoot } from "radix-vue"
import { computed, type PropType } from "vue"

const props = defineProps({
  modelValue: {
    type: [String, Array] as PropType<string | string[] | undefined>,
    default: undefined,
  },
  defaultValue: {
    type: [String, Array] as PropType<string | string[] | undefined>,
    default: undefined,
  },
  type: {
    type: String as PropType<"single" | "multiple">,
    default: "single",
  },
  collapsible: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string | string[]): void
}>()

const rootProps = computed(() => ({
  ...(props.modelValue !== undefined ? { modelValue: props.modelValue } : {}),
  ...(props.defaultValue !== undefined ? { defaultValue: props.defaultValue } : {}),
  type: props.type,
  ...(props.collapsible !== undefined ? { collapsible: props.collapsible } : {}),
}))
</script>

<template>
  <RadixAccordionRoot
    v-bind="rootProps"
    @update:model-value="emit('update:modelValue', $event as string | string[])"
  >
    <slot />
  </RadixAccordionRoot>
</template>
