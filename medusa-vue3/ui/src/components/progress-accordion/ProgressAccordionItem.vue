<script setup lang="ts">
import { AccordionItem as RadixAccordionItem } from "radix-vue"
import { clx } from "@/utils/clx"

defineProps<{
  value: string
  disabled?: boolean
}>()
</script>

<template>
  <RadixAccordionItem
    :value="value"
    :disabled="disabled"
    :class="
      clx(
        'overflow-hidden rounded-lg border border-ui-border-base bg-ui-bg-base',
        $attrs.class
      )
    "
  >
    <slot />
  </RadixAccordionItem>
</template>
