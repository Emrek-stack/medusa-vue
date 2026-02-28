<script setup lang="ts">
import { PopoverRoot as RadixPopoverRoot } from "radix-vue"

const props = defineProps<{
    open?: boolean
    defaultOpen?: boolean
    modal?: boolean
}>()

const emit = defineEmits<{
    (e: 'update:open', value: boolean): void
}>()

</script>

<template>
  <RadixPopoverRoot
    v-bind="props"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </RadixPopoverRoot>
</template>
