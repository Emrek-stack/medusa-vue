<script setup lang="ts">
import { SelectRoot as RadixSelectRoot } from "radix-vue"
import { computed, provide, toRef, type PropType } from "vue"

const props = defineProps({
  open: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  defaultOpen: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  defaultValue: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  modelValue: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  dir: {
    type: String as PropType<"ltr" | "rtl" | undefined>,
    default: undefined,
  },
  name: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  autocomplete: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  disabled: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  required: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  size: {
    type: String as PropType<"base" | "small">,
    default: "base",
  },
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'update:open', value: boolean): void
}>()

provide("selectSize", toRef(props, "size"))

const rootProps = computed(() => ({
  ...(props.open !== undefined ? { open: props.open } : {}),
  ...(props.defaultOpen !== undefined ? { defaultOpen: props.defaultOpen } : {}),
  ...(props.defaultValue !== undefined ? { defaultValue: props.defaultValue } : {}),
  ...(props.modelValue !== undefined ? { modelValue: props.modelValue } : {}),
  ...(props.dir !== undefined ? { dir: props.dir } : {}),
  ...(props.name !== undefined ? { name: props.name } : {}),
  ...(props.autocomplete !== undefined ? { autocomplete: props.autocomplete } : {}),
  ...(props.disabled !== undefined ? { disabled: props.disabled } : {}),
  ...(props.required !== undefined ? { required: props.required } : {}),
}))

</script>

<template>
  <RadixSelectRoot
    v-bind="rootProps"
    @update:modelValue="emit('update:modelValue', $event)"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </RadixSelectRoot>
</template>
