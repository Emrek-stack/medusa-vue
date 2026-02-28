<script setup lang="ts">
import { AccordionContent as RadixAccordionContent } from "radix-vue"
import { clx } from "@/utils/clx"
</script>

<template>
  <RadixAccordionContent
    :class="
      clx(
        'txt-compact-small overflow-hidden px-4 py-3 text-ui-fg-subtle',
        $attrs.class
      )
    "
  >
    <slot />
  </RadixAccordionContent>
</template>
