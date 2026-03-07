<script setup lang="ts">
interface SkeletonProps {
  className?: string
}

defineProps<SkeletonProps>()
</script>

<template>
  <div aria-hidden class="bg-ui-bg-component h-3 w-3 animate-pulse rounded-[4px]" :class="className" />
</template>
