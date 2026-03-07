<script setup lang="ts">
import Skeleton from "./skeleton.vue"

interface TextSkeletonProps {
  size?: "xlarge" | "large" | "base" | "small" | "xsmall"
  leading?: "compact" | "base"
  characters?: number
}

const props = withDefaults(defineProps<TextSkeletonProps>(), {
  size: "small",
  leading: "compact",
  characters: 10,
})

const widths = {
  xlarge: 13,
  large: 11,
  base: 10,
  small: 9,
  xsmall: 8,
}
</script>

<template>
  <Skeleton
    :class-name="[
      size === 'xsmall' ? 'h-5' : size === 'small' ? 'h-6' : size === 'base' ? 'h-7' : 'h-8',
      leading === 'compact' ? '!h-5' : ''
    ].join(' ')"
    :style="{ width: `${widths[size] * characters}px` }"
  />
</template>
