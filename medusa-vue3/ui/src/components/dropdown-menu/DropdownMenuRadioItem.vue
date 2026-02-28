<script setup lang="ts">
import { DropdownMenuRadioItem as RadixDropdownMenuRadioItem, DropdownMenuItemIndicator as RadixDropdownMenuItemIndicator } from "radix-vue"
import { EllipseMiniSolid } from "@medusa-vue/icons"
import { clx } from "@/utils/clx"

const props = defineProps<{
    value: string
    disabled?: boolean
}>()

</script>

<template>
  <RadixDropdownMenuRadioItem
    v-bind="props"
    :class="clx(
      'bg-ui-bg-component txt-compact-small relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-[31px] pr-2 outline-none transition-colors',
      'focus-visible:bg-ui-bg-component-hover focus:bg-ui-bg-component-hover',
      'active:bg-ui-bg-component-hover',
      'data-[disabled]:text-ui-fg-disabled data-[disabled]:pointer-events-none',
      'data-[state=checked]:txt-compact-small-plus',
      $attrs.class
    )"
  >
    <span class="absolute left-2 flex size-[15px] items-center justify-center">
      <RadixDropdownMenuItemIndicator>
        <EllipseMiniSolid class="text-ui-fg-base" />
      </RadixDropdownMenuItemIndicator>
    </span>
    <slot />
  </RadixDropdownMenuRadioItem>
</template>
