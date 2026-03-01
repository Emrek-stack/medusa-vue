<script setup lang="ts">
import { TabsRoot as RadixTabsRoot } from "radix-vue"
import { computed, type PropType } from "vue"

const props = defineProps({
  modelValue: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  defaultValue: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()

const rootProps = computed(() => ({
  ...(props.modelValue !== undefined ? { modelValue: props.modelValue } : {}),
  ...(props.defaultValue !== undefined ? { defaultValue: props.defaultValue } : {}),
}))
</script>

<template>
  <RadixTabsRoot
    v-bind="rootProps"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </RadixTabsRoot>
</template>
