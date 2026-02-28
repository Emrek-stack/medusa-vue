<script setup lang="ts">
import { TooltipProvider as RadixTooltipProvider } from "radix-vue"

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
  <RadixTooltipProvider v-bind="props">
    <slot />
  </RadixTooltipProvider>
</template>
