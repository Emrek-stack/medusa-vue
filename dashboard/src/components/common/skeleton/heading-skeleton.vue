<script setup lang="ts">
import Skeleton from "./skeleton.vue"

interface HeadingSkeletonProps {
  level?: "h1" | "h2" | "h3"
  characters?: number
}

const props = withDefaults(defineProps<HeadingSkeletonProps>(), {
  level: "h1",
  characters: 10,
})

const charWidth = props.level === "h1" ? 11 : props.level === "h2" ? 10 : 9
</script>

<template>
  <Skeleton :class-name="level === 'h1' ? 'h-7' : level === 'h2' ? 'h-6' : 'h-5'" :style="{ width: `${charWidth * characters}px` }" />
</template>
