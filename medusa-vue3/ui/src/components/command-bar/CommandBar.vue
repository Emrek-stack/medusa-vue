<script setup lang="ts">
import { PopoverRoot as RadixPopoverRoot, PopoverAnchor as RadixPopoverAnchor, PopoverPortal as RadixPopoverPortal, PopoverContent as RadixPopoverContent } from "radix-vue"
import { clx } from "@/utils/clx"

interface CommandBarProps {
    open?: boolean
    defaultOpen?: boolean
    disableAutoFocus?: boolean
}

withDefaults(defineProps<CommandBarProps>(), {
    open: false,
    defaultOpen: false,
    disableAutoFocus: true
})

const emit = defineEmits<{
    (e: 'update:open', value: boolean): void
}>()

</script>

<template>
  <RadixPopoverRoot
    :open="open"
    :default-open="defaultOpen"
    @update:open="emit('update:open', $event)"
  >
    <RadixPopoverAnchor
        :class="clx('fixed bottom-8 left-1/2 h-px w-px -translate-x-1/2', $attrs.class)"
    />
    <RadixPopoverPortal>
        <RadixPopoverContent
            side="top"
            :side-offset="0"
            @open-auto-focus="disableAutoFocus ? $event.preventDefault() : undefined"
            :class="clx(
                'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
            )"
        >
            <slot />
        </RadixPopoverContent>
    </RadixPopoverPortal>
  </RadixPopoverRoot>
</template>
