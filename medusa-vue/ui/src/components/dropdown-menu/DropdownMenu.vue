<script setup lang="ts">
import { DropdownMenuRoot as RadixDropdownMenuRoot } from "radix-vue"

const props = defineProps<{
    open?: boolean
    defaultOpen?: boolean
    dir?: "ltr" | "rtl"
    modal?: boolean
}>()

const emit = defineEmits<{
    (e: 'update:open', value: boolean): void
}>()

</script>

<template>
  <RadixDropdownMenuRoot v-bind="props" @update:open="emit('update:open', $event)">
    <slot />
  </RadixDropdownMenuRoot>
</template>
