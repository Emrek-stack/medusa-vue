<script setup lang="ts">
import { DropdownMenuSub as RadixDropdownMenuSub } from "radix-vue"

const props = defineProps<{
    open?: boolean
    defaultOpen?: boolean
}>()

const emit = defineEmits<{
    (e: 'update:open', value: boolean): void
}>()

</script>

<template>
  <RadixDropdownMenuSub v-bind="props" @update:open="emit('update:open', $event)">
    <slot />
  </RadixDropdownMenuSub>
</template>
