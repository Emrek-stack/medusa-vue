<script setup lang="ts">
import { DialogTitle as RadixDialogTitle } from "radix-vue"
import { clx } from "@/utils/clx"

defineProps<{
  asChild?: boolean
  class?: string
}>()
</script>

<template>
  <RadixDialogTitle
    :as-child="asChild"
    :class="clx('txt-compact-large-plus text-ui-fg-base font-medium', $props.class)"
  >
    <slot />
  </RadixDialogTitle>
</template>
