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
        'border-ui-border-base border-b last-of-type:border-b-0',
        $attrs.class
      )
    "
  >
    <slot />
  </RadixAccordionItem>
</template>
