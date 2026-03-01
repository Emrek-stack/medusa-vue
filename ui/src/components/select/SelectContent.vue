<script setup lang="ts">
import { SelectContent as RadixSelectContent, SelectPortal as RadixSelectPortal, SelectViewport as RadixSelectViewport } from "radix-vue"
import { clx } from "@/utils/clx"
import { computed, useAttrs } from "vue"

interface SelectContentProps {
    sideOffset?: number
    collisionPadding?: number
    position?: "item-aligned" | "popper"
    align?: "start" | "center" | "end"
    side?: "bottom" | "left" | "top" | "right"
}

const props = withDefaults(defineProps<SelectContentProps>(), {
    sideOffset: 8,
    collisionPadding: 24,
    position: "popper"
})

const attrs = useAttrs()

const contentProps = computed(() => ({
  ...attrs,
  ...props,
}))

</script>

<template>
  <RadixSelectPortal>
    <RadixSelectContent
        v-bind="contentProps"
        :class="clx(
            'bg-ui-bg-component text-ui-fg-base shadow-elevation-flyout relative max-h-[200px] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            {
                'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1': position === 'popper'
            },
            $attrs.class
        )"
    >
        <RadixSelectViewport
            :class="clx(
                'p-1',
                position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
            )"
        >
            <slot />
        </RadixSelectViewport>
    </RadixSelectContent>
  </RadixSelectPortal>
</template>
