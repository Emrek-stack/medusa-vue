<script setup lang="ts">
import { SelectValue as RadixSelectValue } from "radix-vue"

defineProps<{
    placeholder?: string
}>()
</script>

<template>
  <RadixSelectValue :placeholder="placeholder">
    <slot />
  </RadixSelectValue>
</template>
