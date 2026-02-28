<script setup lang="ts">
import { AlertDialogDescription as RadixAlertDialogDescription } from "radix-vue"
import { clx } from "@/utils/clx"

defineProps<{
  asChild?: boolean
  class?: string
}>()
</script>

<template>
  <RadixAlertDialogDescription
    :as-child="asChild"
    :class="clx('text-ui-fg-subtle txt-compact-medium', $props.class)"
  >
    <slot />
  </RadixAlertDialogDescription>
</template>
