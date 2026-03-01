<script setup lang="ts">
import { AlertDialogOverlay as RadixAlertDialogOverlay } from "radix-vue"
import { clx } from "@/utils/clx"

defineProps<{
  class?: string
}>()
</script>

<template>
  <RadixAlertDialogOverlay
    :class="
      clx(
        'bg-ui-bg-overlay fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        $props.class
      )
    "
  />
</template>
