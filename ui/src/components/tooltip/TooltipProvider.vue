<script setup lang="ts">
import { TooltipProvider as RadixTooltipProvider } from "radix-vue"
import { type PropType } from "vue"

const props = defineProps({
  delayDuration: {
    type: Number,
    default: 100,
  },
  skipDelayDuration: {
    type: Number,
    default: 300,
  },
  disableHoverableContent: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
})
</script>

<template>
  <RadixTooltipProvider
    :delay-duration="props.delayDuration"
    :skip-delay-duration="props.skipDelayDuration"
    :disable-hoverable-content="props.disableHoverableContent"
  >
    <slot />
  </RadixTooltipProvider>
</template>
