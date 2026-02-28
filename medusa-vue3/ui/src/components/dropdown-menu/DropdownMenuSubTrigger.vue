<script setup lang="ts">
import { DropdownMenuSubTrigger as RadixDropdownMenuSubTrigger } from "radix-vue"
import { ChevronRightMini } from "@medusa-vue/icons"
import { clx } from "@/utils/clx"

const props = defineProps<{
    disabled?: boolean
    asChild?: boolean
}>()
</script>

<template>
  <RadixDropdownMenuSubTrigger
    v-bind="props"
    :class="clx(
      'bg-ui-bg-component text-ui-fg-base txt-compact-small relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 outline-none transition-colors',
      'focus-visible:bg-ui-bg-component-hover focus:bg-ui-bg-component-hover',
      'active:bg-ui-bg-component-hover',
      'data-[disabled]:text-ui-fg-disabled data-[disabled]:pointer-events-none',
      'data-[state=open]:!bg-ui-bg-component-hover',
      $attrs.class
    )"
  >
    <slot />
    <ChevronRightMini class="text-ui-fg-muted ml-auto" />
  </RadixDropdownMenuSubTrigger>
</template>
