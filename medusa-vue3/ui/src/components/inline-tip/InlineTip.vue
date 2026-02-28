<script setup lang="ts">
import { computed } from "vue"
import { clx } from "@/utils/clx"

interface InlineTipProps {
  label: string
  variant?: "info" | "warning" | "error" | "success"
}

const props = withDefaults(defineProps<InlineTipProps>(), {
  variant: "info",
})

const barClass = computed(() => {
  switch (props.variant) {
    case "warning":
      return "bg-ui-tag-orange-icon"
    case "error":
      return "bg-ui-tag-red-icon"
    case "success":
      return "bg-ui-tag-green-icon"
    default:
      return "bg-ui-tag-neutral-icon"
  }
})
</script>

<template>
  <div
    :class="
      clx(
        'bg-ui-bg-component txt-small text-ui-fg-subtle grid grid-cols-[4px_1fr] items-start gap-3 rounded-lg border p-3',
        $attrs.class as string
      )
    "
  >
    <div
      role="presentation"
      :class="clx('h-full w-1 rounded-full', barClass)"
    />
    <div class="text-pretty">
      <strong class="txt-small-plus text-ui-fg-base">{{ label }}:</strong>
      {{ " " }}
      <slot />
    </div>
  </div>
</template>
