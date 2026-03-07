<script setup lang="ts">
import { cn } from "@/shared/utils/cn"
import { RouterLink } from "vue-router"

interface LinkButtonProps {
  to: string
  variant?: "primary" | "interactive"
}

const props = withDefaults(defineProps<LinkButtonProps>(), {
  variant: "interactive",
})
</script>

<template>
  <RouterLink
    :to="to"
    :class="cn(
      'transition-fg txt-compact-small-plus rounded-[4px] outline-none focus-visible:shadow-borders-focus',
      variant === 'interactive'
        ? 'text-ui-fg-interactive hover:text-ui-fg-interactive-hover'
        : 'text-ui-fg-base hover:text-ui-fg-subtle'
    )"
  >
    <slot />
  </RouterLink>
</template>
