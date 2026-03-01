<script setup lang="ts">
import { AccordionContent as RadixAccordionContent } from "radix-vue"
import { clx } from "@/utils/clx"
</script>

<template>
  <RadixAccordionContent
    :class="
      clx(
        'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pl-[88px] pr-6',
        $attrs.class
      )
    "
  >
    <slot />
  </RadixAccordionContent>
</template>
