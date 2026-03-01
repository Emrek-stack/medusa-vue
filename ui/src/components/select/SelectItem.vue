<script setup lang="ts">
import { SelectItem as RadixSelectItem, SelectItemIndicator as RadixSelectItemIndicator, SelectItemText as RadixSelectItemText } from "radix-vue"
import { Check } from "@medusa-vue/icons"
import { clx } from "@/utils/clx"

const props = defineProps<{
    value: string
    disabled?: boolean
    textValue?: string
}>()
</script>

<template>
  <RadixSelectItem
    v-bind="props"
    :class="clx(
      'bg-ui-bg-component txt-compact-small grid cursor-pointer grid-cols-[15px_1fr] items-center gap-x-2 rounded-[4px] px-2 py-1.5 outline-none transition-colors',
      'focus-visible:bg-ui-bg-component-hover',
      'active:bg-ui-bg-component-pressed',
      'data-[state=checked]:txt-compact-small-plus',
      'disabled:text-ui-fg-disabled',
      $attrs.class
    )"
  >
    <span class="flex h-[15px] w-[15px] items-center justify-center">
        <RadixSelectItemIndicator class="flex items-center justify-center">
            <Check />
        </RadixSelectItemIndicator>
    </span>
    <RadixSelectItemText class="flex-1 truncate">
        <slot />
    </RadixSelectItemText>
  </RadixSelectItem>
</template>
