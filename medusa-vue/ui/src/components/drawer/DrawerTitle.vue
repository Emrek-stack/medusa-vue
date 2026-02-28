<script setup lang="ts">
import { DialogTitle, type DialogTitleProps } from "radix-vue"
import { clx } from "@/utils/clx"

const props = defineProps<DialogTitleProps & { class?: string }>()
</script>

<template>
  <DialogTitle
    v-bind="props"
    :class="clx('text-ui-fg-base txt-compact-large-plus font-medium', props.class)"
  >
    <slot />
  </DialogTitle>
</template>
