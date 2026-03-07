<script setup lang="ts">
import { InformationCircleSolid } from "@minima-vue/icons"
import { Label, Text, Tooltip } from "@minima-vue/ui"

interface FormLabelProps {
  optional?: boolean
  tooltip?: string
}

withDefaults(defineProps<FormLabelProps>(), {
  optional: false,
  tooltip: "",
})
</script>

<template>
  <div class="flex items-center gap-x-1">
    <Label size="small" weight="plus">
      <slot />
    </Label>
    <Tooltip v-if="tooltip" :content="tooltip">
      <InformationCircleSolid class="text-ui-fg-muted" />
    </Tooltip>
    <Text v-if="optional" size="small" leading="compact" class="text-ui-fg-muted">(Optional)</Text>
  </div>
</template>
