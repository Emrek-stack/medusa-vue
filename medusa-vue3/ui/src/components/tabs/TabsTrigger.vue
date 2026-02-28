<script setup lang="ts">
import { TabsTrigger as RadixTabsTrigger } from "radix-vue"
import { clx } from "@/utils/clx"

defineProps<{
  value: string
  disabled?: boolean
}>()
</script>

<template>
  <RadixTabsTrigger
    :value="value"
    :disabled="disabled"
    :class="
      clx(
        'txt-compact-small-plus inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-ui-fg-subtle outline-none transition',
        'data-[state=active]:bg-ui-bg-base data-[state=active]:text-ui-fg-base data-[state=active]:shadow-elevation-card-rest',
        'disabled:pointer-events-none disabled:text-ui-fg-disabled',
        $attrs.class
      )
    "
  >
    <slot />
  </RadixTabsTrigger>
</template>
