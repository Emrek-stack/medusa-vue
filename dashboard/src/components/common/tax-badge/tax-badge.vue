<script setup lang="ts">
import { TaxExclusive, TaxInclusive } from "@minima-vue/icons"
import { Tooltip } from "@minima-vue/ui"

interface IncludesTaxTooltipProps {
  includesTax?: boolean
}

withDefaults(defineProps<IncludesTaxTooltipProps>(), {
  includesTax: false,
})
</script>

<template>
  <Tooltip :content="includesTax ? 'Includes tax' : 'Excludes tax'">
    <TaxInclusive v-if="includesTax" class="text-ui-fg-muted shrink-0" />
    <TaxExclusive v-else class="text-ui-fg-muted shrink-0" />
  </Tooltip>
</template>
