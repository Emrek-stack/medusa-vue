<script setup lang="ts">
import { AccordionHeader as RadixAccordionHeader, AccordionTrigger as RadixAccordionTrigger } from "radix-vue"
import { PlusMini } from "@minima-vue/icons"
import { clx } from "@/utils/clx"
import { IconButton } from "@/components/icon-button"
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
  <RadixAccordionHeader
    :class="
      clx(
        'h3-core text-ui-fg-base group flex w-full flex-1 items-center gap-4 px-6',
        $attrs.class
      )
    "
  >
    <ProgressAccordionProgressIndicator :status="props.status" />
    <slot />
    <RadixAccordionTrigger as-child class="ml-auto">
      <IconButton variant="transparent">
        <PlusMini class="transform transition-transform group-data-[state=open]:rotate-45" />
      </IconButton>
    </RadixAccordionTrigger>
  </RadixAccordionHeader>
</template>
