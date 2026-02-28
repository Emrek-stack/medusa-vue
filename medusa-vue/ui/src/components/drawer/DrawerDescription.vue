<script setup lang="ts">
import { DialogDescription, type DialogDescriptionProps } from "radix-vue"
import { clx } from "@/utils/clx"

const props = defineProps<DialogDescriptionProps & { class?: string }>()
</script>

<template>
  <DialogDescription
    v-bind="props"
    :class="clx('text-ui-fg-subtle txt-compact-medium', props.class)"
  >
    <slot />
  </DialogDescription>
</template>
