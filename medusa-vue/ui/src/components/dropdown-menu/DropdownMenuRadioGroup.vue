<script setup lang="ts">
import { DropdownMenuRadioGroup as RadixDropdownMenuRadioGroup } from "radix-vue"

const props = defineProps<{
    modelValue?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

</script>

<template>
  <RadixDropdownMenuRadioGroup v-bind="props" @update:modelValue="emit('update:modelValue', $event)">
    <slot />
  </RadixDropdownMenuRadioGroup>
</template>
