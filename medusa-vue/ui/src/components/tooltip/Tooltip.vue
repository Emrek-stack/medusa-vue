<script setup lang="ts">
import { 
    TooltipRoot as RadixTooltipRoot, 
    TooltipTrigger as RadixTooltipTrigger, 
    TooltipPortal as RadixTooltipPortal, 
    TooltipContent as RadixTooltipContent,
    TooltipProvider as RadixTooltipProvider
} from "radix-vue"
import { clx } from "@/utils/clx"
// import { type HTMLAttributes } from "vue"

interface TooltipProps {
    content?: string
    open?: boolean
    defaultOpen?: boolean
    onOpenChange?: (open: boolean) => void
    delayDuration?: number
    maxWidth?: number
    side?: "bottom" | "left" | "top" | "right"
    sideOffset?: number
    asChild?: boolean
}

withDefaults(defineProps<TooltipProps>(), {
    maxWidth: 220,
    side: "top",
    sideOffset: 8,
    asChild: true // Default to true as we wrap children usually
})

// Note: Radix Vue events are typically emitted.
const emit = defineEmits<{
    (e: 'update:open', value: boolean): void
}>()

</script>

<template>
  <RadixTooltipProvider :delayDuration="0">
      <RadixTooltipRoot
        :open="open"
        :default-open="defaultOpen"
        :delay-duration="delayDuration"
        @update:open="emit('update:open', $event)"
      >
        <RadixTooltipTrigger :as-child="asChild">
            <slot />
        </RadixTooltipTrigger>
        <RadixTooltipPortal>
            <RadixTooltipContent
                :side="side"
                :side-offset="sideOffset"
                align="center"
                :class="clx(
                  'txt-compact-xsmall text-ui-fg-subtle bg-ui-bg-base shadow-elevation-tooltip rounded-lg px-2.5 py-1',
                  'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                  $attrs.class
                )"
                :style="{ maxWidth: `${maxWidth}px` }"
            >
                <slot name="content">
                    {{ content }}
                </slot>
            </RadixTooltipContent>
        </RadixTooltipPortal>
      </RadixTooltipRoot>
  </RadixTooltipProvider>
</template>
