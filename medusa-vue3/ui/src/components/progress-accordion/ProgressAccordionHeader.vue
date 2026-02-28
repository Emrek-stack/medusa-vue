<script setup lang="ts">
import { AccordionHeader as RadixAccordionHeader, AccordionTrigger as RadixAccordionTrigger } from "radix-vue"
import { ChevronDownMini } from "@medusa-vue/icons"
import { clx } from "@/utils/clx"
import ProgressAccordionProgressIndicator from "./ProgressAccordionProgressIndicator.vue"

const props = withDefaults(
  defineProps<{
    status?: "not-started" | "in-progress" | "completed"
  }>(),
  {
    status: "not-started",
  }
)
</script>

<template>
  <RadixAccordionHeader>
    <RadixAccordionTrigger
      :class="
        clx(
          'txt-compact-small-plus flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-ui-fg-base outline-none transition',
          'hover:bg-ui-bg-subtle data-[state=open]:border-b data-[state=open]:border-ui-border-base',
          $attrs.class
        )
      "
    >
      <span class="flex items-center gap-2">
        <ProgressAccordionProgressIndicator :status="props.status" />
        <slot />
      </span>
      <ChevronDownMini class="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
    </RadixAccordionTrigger>
  </RadixAccordionHeader>
</template>
