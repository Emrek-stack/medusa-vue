<script setup lang="ts">
import { computed } from "vue"
import { CheckMini } from "@medusa-vue/icons"
import { clx } from "@/utils/clx"

const props = withDefaults(
  defineProps<{
    status?: "not-started" | "in-progress" | "completed"
  }>(),
  {
    status: "not-started",
  }
)

const indicatorClass = computed(() =>
  clx("inline-flex h-5 w-5 items-center justify-center rounded-full border", {
    "border-ui-border-base bg-ui-bg-base text-ui-fg-muted": props.status === "not-started",
    "border-ui-border-interactive bg-ui-bg-interactive text-ui-fg-on-color":
      props.status === "in-progress",
    "border-ui-tag-green-border bg-ui-tag-green-bg text-ui-tag-green-icon":
      props.status === "completed",
  })
)
</script>

<template>
  <span :class="indicatorClass">
    <CheckMini v-if="status === 'completed'" class="h-3.5 w-3.5" />
    <span
      v-else-if="status === 'in-progress'"
      class="h-2.5 w-2.5 rounded-full bg-current"
    />
  </span>
</template>
