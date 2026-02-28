<script setup lang="ts">
import { 
    TooltipRoot as RadixTooltipRoot, 
    TooltipTrigger as RadixTooltipTrigger, 
    TooltipPortal as RadixTooltipPortal, 
    TooltipContent as RadixTooltipContent
} from "radix-vue"
import { clx } from "@/utils/clx"
import { computed, type PropType } from "vue"

const props = defineProps({
  content: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  open: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  defaultOpen: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  onOpenChange: {
    type: Function as PropType<((open: boolean) => void) | undefined>,
    default: undefined,
  },
  delayDuration: {
    type: Number as PropType<number | undefined>,
    default: undefined,
  },
  maxWidth: {
    type: Number,
    default: 220,
  },
  side: {
    type: String as PropType<"bottom" | "left" | "top" | "right">,
    default: "top",
  },
  sideOffset: {
    type: Number,
    default: 8,
  },
  asChild: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
    (e: 'update:open', value: boolean): void
}>()

const rootProps = computed(() => ({
  ...(props.open !== undefined ? { open: props.open } : {}),
  ...(props.defaultOpen !== undefined ? { defaultOpen: props.defaultOpen } : {}),
  ...(props.delayDuration !== undefined ? { delayDuration: props.delayDuration } : {}),
}))

const handleOpenChange = (open: boolean) => {
  emit("update:open", open)
  props.onOpenChange?.(open)
}

</script>

<template>
  <RadixTooltipRoot
    v-bind="rootProps"
    @update:open="handleOpenChange"
  >
    <RadixTooltipTrigger :as-child="props.asChild">
      <slot />
    </RadixTooltipTrigger>
    <RadixTooltipPortal>
      <RadixTooltipContent
        :side="props.side"
        :side-offset="props.sideOffset"
        align="center"
        :class="clx(
          'txt-compact-xsmall text-ui-fg-subtle bg-ui-bg-base shadow-elevation-tooltip z-[80] rounded-lg px-2.5 py-1',
          'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          $attrs.class
        )"
        :style="{ maxWidth: `${props.maxWidth}px` }"
      >
        <slot name="content">
          {{ props.content }}
        </slot>
      </RadixTooltipContent>
    </RadixTooltipPortal>
  </RadixTooltipRoot>
</template>
