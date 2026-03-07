<script setup lang="ts">
import { computed } from "vue"
import { cn } from "@/shared/utils/cn"

interface IconAvatarProps {
  size?: "small" | "large" | "xlarge"
  variant?: "squared" | "rounded"
}

const props = withDefaults(defineProps<IconAvatarProps>(), {
  size: "small",
  variant: "rounded",
})

const classes = computed(() => {
  return cn(
    "shadow-borders-base flex items-center justify-center",
    props.variant === "squared" ? "rounded-md" : "rounded-full",
    props.size === "small" && "size-7 [&>div]:size-6 [&>div]:rounded-[4px]",
    props.size === "large" && "size-10 [&>div]:size-9 [&>div]:rounded-[6px]",
    props.size === "xlarge" && "size-12 [&>div]:size-11 [&>div]:rounded-[10px]"
  )
})
</script>

<template>
  <div :class="classes">
    <div class="bg-ui-bg-field text-ui-fg-subtle flex items-center justify-center">
      <slot />
    </div>
  </div>
</template>
