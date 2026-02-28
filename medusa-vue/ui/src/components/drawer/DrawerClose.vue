<script setup lang="ts">
import { DialogClose, type DialogCloseProps } from "radix-vue"
import { clx } from "@/utils/clx"
import { XMark } from "@medusa-vue/icons"

const props = defineProps<DialogCloseProps & { class?: string }>()
</script>

<template>
  <DialogClose
    v-bind="props"
    :class="clx('text-ui-fg-subtle hover:text-ui-fg-base transition-fg absolute right-4 top-4 rounded-md outline-none focus-visible:shadow-borders-interactive-with-active', props.class)"
  >
    <XMark />
    <span class="sr-only">Close</span>
  </DialogClose>
</template>
