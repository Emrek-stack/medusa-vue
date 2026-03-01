<script setup lang="ts">
import { RadioGroupRoot as RadixRadioGroupRoot } from "radix-vue"
import { clx } from "@/utils/clx"

const props = defineProps<{
    modelValue?: string
    disabled?: boolean
    name?: string
    required?: boolean
    orientation?: "horizontal" | "vertical"
    dir?: "ltr" | "rtl"
    loop?: boolean
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

</script>

<template>
  <RadixRadioGroupRoot
    v-bind="props"
    :class="clx('grid gap-2', $attrs.class)"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <slot />
  </RadixRadioGroupRoot>
</template>
