<script setup lang="ts">
import { computed } from "vue"
import { CheckCircleSolid, CircleDottedLine, CircleHalfSolid } from "@medusa-vue/icons"
import { clx } from "@/utils/clx"

const props = withDefaults(
  defineProps<{
    status?: "not-started" | "in-progress" | "completed"
  }>(),
  {
    status: "not-started",
  }
)

const Icon = computed(() => {
  switch (props.status) {
    case "in-progress":
      return CircleHalfSolid
    case "completed":
      return CheckCircleSolid
    case "not-started":
    default:
      return CircleDottedLine
  }
})

const indicatorClass = computed(() =>
  clx("text-ui-fg-muted group-data-[state=active]/trigger:text-ui-fg-interactive")
)
</script>

<template>
  <span :class="indicatorClass">
    <component :is="Icon" />
  </span>
</template>
