<script setup lang="ts">
import { Button } from "@medusa-vue/ui"
import { FlagMini, ThumbDown, ThumbUp } from "@medusa-vue/icons"

withDefaults(
  defineProps<{
    question?: string
  }>(),
  {
    question: "Was this example helpful?",
  }
)
</script>

<template>
  <div class="flex flex-wrap items-center gap-3 text-compact-small text-ui-fg-subtle">
    <span>{{ question }}</span>
    <Button size="small" variant="transparent">
      <ThumbUp />
      It was helpful
    </Button>
    <Button size="small" variant="transparent">
      <ThumbDown />
      It wasn't helpful
    </Button>
    <Button size="small" variant="transparent">
      <FlagMini />
      Report Issue
    </Button>
  </div>
</template>
