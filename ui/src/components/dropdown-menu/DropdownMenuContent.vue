<script setup lang="ts">
import { DropdownMenuContent as RadixDropdownMenuContent, DropdownMenuPortal as RadixDropdownMenuPortal } from "radix-vue"
import { clx } from "@/utils/clx"

interface DropdownMenuContentProps {
    sideOffset?: number
    collisionPadding?: number
    align?: "start" | "center" | "end"
    side?: "bottom" | "left" | "top" | "right"
}

const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
    sideOffset: 8,
    collisionPadding: 8,
    align: "center",
    side: "bottom"
})

</script>

<template>
  <RadixDropdownMenuPortal>
    <RadixDropdownMenuContent
        v-bind="props"
        :class="clx(
            'bg-ui-bg-component text-ui-fg-base shadow-elevation-flyout z-[80] max-h-[var(--radix-popper-available-height)] min-w-[220px] overflow-hidden rounded-lg p-1',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            $attrs.class
        )"
    >
        <slot />
    </RadixDropdownMenuContent>
  </RadixDropdownMenuPortal>
</template>
