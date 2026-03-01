<script setup lang="ts">
import { DialogDescription } from "radix-vue"
import { clx } from "@/utils/clx"

defineProps<{
  asChild?: boolean
  class?: string
}>()
</script>

<template>
  <DialogDescription
    :as-child="asChild"
    :class="clx('text-ui-fg-subtle txt-compact-medium', $props.class)"
  >
    <slot />
  </DialogDescription>
</template>
