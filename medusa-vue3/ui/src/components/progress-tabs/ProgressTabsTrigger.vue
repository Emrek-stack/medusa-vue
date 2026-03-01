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
        'txt-compact-small-plus transition-fg text-ui-fg-muted bg-ui-bg-subtle border-r-ui-border-base inline-flex h-[52px] w-full max-w-[200px] flex-1 items-center gap-x-2 border-r px-4 text-left outline-none',
        'group/trigger overflow-hidden text-ellipsis whitespace-nowrap',
        'disabled:bg-ui-bg-disabled disabled:text-ui-fg-muted',
        'hover:bg-ui-bg-subtle-hover',
        'focus-visible:bg-ui-bg-base focus-visible:z-[1]',
        'data-[state=active]:text-ui-fg-base data-[state=active]:bg-ui-bg-base',
        $attrs.class,
      )
    "
  >
    <ProgressTabsProgressIndicator :status="props.status" />
    <slot />
  </RadixTabsTrigger>
</template>
