<script setup lang="ts">
import { PopoverContent as RadixPopoverContent, PopoverPortal as RadixPopoverPortal } from "radix-vue"
import { clx } from "@/utils/clx"

interface PopoverContentProps {
    sideOffset?: number
    side?: "bottom" | "left" | "top" | "right"
    align?: "start" | "center" | "end"
    collisionPadding?: number
    asChild?: boolean
}

const props = withDefaults(defineProps<PopoverContentProps>(), {
    sideOffset: 8,
    side: "bottom",
    align: "start",
    asChild: false
})
</script>

<template>
  <RadixPopoverPortal>
    <RadixPopoverContent
        v-bind="props"
        :class="clx(
            'bg-ui-bg-base text-ui-fg-base shadow-elevation-flyout max-h-[var(--radix-popper-available-height)] min-w-[220px] overflow-hidden rounded-lg p-1',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            $attrs.class
        )"
    >
        <slot />
    </RadixPopoverContent>
  </RadixPopoverPortal>
</template>
