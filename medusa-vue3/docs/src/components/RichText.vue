<script setup lang="ts">
import { computed } from "vue"
import { renderInlineMarkdown } from "@docs/utils/markdown"

const props = defineProps<{
  content: string
  lead?: boolean
}>()

const html = computed(() => renderInlineMarkdown(props.content))
</script>

<template>
  <p
    :class="
      lead
        ? 'txt-medium text-ui-fg-base'
        : 'txt-medium text-ui-fg-base'
    "
    v-html="html"
  />
</template>
