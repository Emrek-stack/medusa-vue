<script setup lang="ts">
import { DialogRoot as RadixDialogRoot } from "radix-vue"

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
  <RadixDialogRoot
    v-bind="props"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </RadixDialogRoot>
</template>
