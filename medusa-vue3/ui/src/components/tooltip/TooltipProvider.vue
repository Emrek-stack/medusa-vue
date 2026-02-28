<script setup lang="ts">
interface TooltipProviderProps {
    delayDuration?: number
    skipDelayDuration?: number
    disableHoverableContent?: boolean
}

const props = withDefaults(defineProps<TooltipProviderProps>(), {
    delayDuration: 100,
    skipDelayDuration: 300
})
</script>

<template>
  <div class="tooltip-provider-stub">
    <slot />
  </div>
</template>
