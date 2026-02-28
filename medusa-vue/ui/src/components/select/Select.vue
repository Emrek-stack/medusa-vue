<script setup lang="ts">
import { SelectRoot as RadixSelectRoot } from "radix-vue"
import { provide, toRef } from "vue"

const props = withDefaults(defineProps<{
    open?: boolean
    defaultOpen?: boolean
    defaultValue?: string
    modelValue?: string
    dir?: "ltr" | "rtl"
    name?: string
    autocomplete?: string
    disabled?: boolean
    required?: boolean
    size?: "base" | "small"
}>(), {
    size: "base"
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'update:open', value: boolean): void
}>()

provide("selectSize", toRef(props, "size"))

</script>

<template>
  <RadixSelectRoot
    v-bind="props"
    @update:modelValue="emit('update:modelValue', $event)"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </RadixSelectRoot>
</template>
