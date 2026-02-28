<script setup lang="ts">
import { DropdownMenuItem as RadixDropdownMenuItem } from "radix-vue"
import { clx } from "@/utils/clx"

const props = defineProps<{
    disabled?: boolean
    asChild?: boolean
}>()

</script>

<template>
  <RadixDropdownMenuItem
    v-bind="props"
    :class="clx(
      'bg-ui-bg-component text-ui-fg-base txt-compact-small relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 outline-none transition-colors',
      'focus-visible:bg-ui-bg-component-hover focus:bg-ui-bg-component-hover',
      'active:bg-ui-bg-component-hover',
      'data-[disabled]:text-ui-fg-disabled data-[disabled]:pointer-events-none',
      $attrs.class
    )"
  >
    <slot />
  </RadixDropdownMenuItem>
</template>
