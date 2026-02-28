<script setup lang="ts">
import { DropdownMenuCheckboxItem as RadixDropdownMenuCheckboxItem, DropdownMenuItemIndicator as RadixDropdownMenuItemIndicator } from "radix-vue"
import { CheckMini } from "@medusa-vue/icons"
import { clx } from "@/utils/clx"

const props = defineProps<{
    checked?: boolean | "indeterminate"
    disabled?: boolean
}>()

const emit = defineEmits<{
    (e: 'update:checked', value: boolean): void
}>()

</script>

<template>
  <RadixDropdownMenuCheckboxItem
    v-bind="props"
    @update:checked="emit('update:checked', $event)"
    :class="clx(
      'bg-ui-bg-component text-ui-fg-base txt-compact-small relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-[31px] pr-2 outline-none transition-colors',
      'focus-visible:bg-ui-bg-component-hover focus:bg-ui-bg-component-hover',
      'active:bg-ui-bg-component-hover',
      'data-[disabled]:text-ui-fg-disabled data-[disabled]:pointer-events-none',
      'data-[state=checked]:txt-compact-small-plus',
      $attrs.class
    )"
  >
     <span class="absolute left-2 flex size-[15px] items-center justify-center">
      <RadixDropdownMenuItemIndicator>
        <CheckMini />
      </RadixDropdownMenuItemIndicator>
    </span>
    <slot />
  </RadixDropdownMenuCheckboxItem>
</template>
