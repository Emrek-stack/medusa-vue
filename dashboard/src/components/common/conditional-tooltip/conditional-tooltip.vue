<script setup lang="ts">
import { Tooltip } from "@minima-vue/ui"

interface ConditionalTooltipProps {
  showTooltip?: boolean
  content?: string
}

withDefaults(defineProps<ConditionalTooltipProps>(), {
  showTooltip: false,
  content: "",
})
</script>

<template>
  <Tooltip v-if="showTooltip" :content="content">
    <slot />
  </Tooltip>
  <slot v-else />
</template>
