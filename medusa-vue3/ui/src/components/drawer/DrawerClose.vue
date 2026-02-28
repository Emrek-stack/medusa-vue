<script setup lang="ts">
import { DialogClose } from "radix-vue"
import { clx } from "@/utils/clx"
import { XMark } from "@medusa-vue/icons"

defineProps<{
  asChild?: boolean
  class?: string
}>()
</script>

<template>
  <DialogClose
    :as-child="asChild"
    :class="asChild ? undefined : clx('text-ui-fg-subtle hover:text-ui-fg-base transition-fg absolute right-4 top-4 rounded-md outline-none focus-visible:shadow-borders-interactive-with-active', $props.class)"
  >
    <slot v-if="asChild" />
    <template v-else>
      <XMark />
      <span class="sr-only">Close</span>
    </template>
  </DialogClose>
</template>
