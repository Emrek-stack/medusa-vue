<script setup lang="ts">
import { TabsTrigger as RadixTabsTrigger } from "radix-vue"
import { clx } from "@/utils/clx"
import ProgressTabsProgressIndicator from "./ProgressTabsProgressIndicator.vue"

const props = withDefaults(
  defineProps<{
    value: string
    status?: "not-started" | "in-progress" | "completed"
    disabled?: boolean
  }>(),
  {
    status: "not-started",
  }
)
</script>

<template>
  <RadixTabsTrigger
    :value="value"
    :disabled="disabled"
    :class="
      clx(
        'txt-compact-small-plus inline-flex items-center gap-2 rounded-md px-3 py-2 text-ui-fg-subtle outline-none transition',
        'data-[state=active]:bg-ui-bg-subtle data-[state=active]:text-ui-fg-base',
        'disabled:pointer-events-none disabled:text-ui-fg-disabled',
        $attrs.class
      )
    "
  >
    <ProgressTabsProgressIndicator :status="props.status" />
    <slot />
  </RadixTabsTrigger>
</template>
