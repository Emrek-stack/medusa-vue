<script setup lang="ts">
import { AlertDialogTitle as RadixAlertDialogTitle } from "radix-vue"
import { clx } from "@/utils/clx"

defineProps<{
  asChild?: boolean
  class?: string
}>()
</script>

<template>
  <RadixAlertDialogTitle
    :as-child="asChild"
    :class="clx('text-ui-fg-base txt-compact-large-plus font-medium', $props.class)"
  >
    <slot />
  </RadixAlertDialogTitle>
</template>
