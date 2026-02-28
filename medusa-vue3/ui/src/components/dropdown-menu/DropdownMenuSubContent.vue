<script setup lang="ts">
import { DropdownMenuSubContent as RadixDropdownMenuSubContent, DropdownMenuPortal as RadixDropdownMenuPortal } from "radix-vue"
import { clx } from "@/utils/clx"

const props = withDefaults(defineProps<{
    collisionPadding?: number
}>(), {
    collisionPadding: 8
})
</script>

<template>
  <RadixDropdownMenuPortal>
    <RadixDropdownMenuSubContent
        v-bind="props"
        :class="clx(
         'bg-ui-bg-component text-ui-fg-base shadow-elevation-flyout max-h-[var(--radix-popper-available-height)] min-w-[220px] overflow-hidden rounded-lg p-1',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            $attrs.class
        )"
    >
        <slot />
    </RadixDropdownMenuSubContent>
  </RadixDropdownMenuPortal>
</template>
