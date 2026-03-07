<script setup lang="ts">
interface ProgressBarProps {
  duration?: number
}

const props = withDefaults(defineProps<ProgressBarProps>(), {
  duration: 2,
})
</script>

<template>
  <div class="size-full overflow-hidden">
    <div class="bg-ui-fg-subtle h-full animate-[common_progress_linear_var(--duration)]" :style="{ '--duration': `${props.duration}s` }" />
  </div>
</template>

<style scoped>
@keyframes common_progress_linear {
  from {
    width: 0%;
  }
  to {
    width: 90%;
  }
}
</style>
