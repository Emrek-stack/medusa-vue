<script setup lang="ts">
import { DialogContent as RadixDialogContent, DialogPortal as RadixDialogPortal, DialogOverlay as RadixDialogOverlay } from "radix-vue"
import { clx } from "@/utils/clx"

</script>

<template>
  <RadixDialogPortal>
    <RadixDialogOverlay
        class="bg-ui-bg-overlay fixed inset-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <RadixDialogContent
        :class="clx(
            'bg-ui-bg-base shadow-elevation-modal fixed inset-2 flex flex-col overflow-hidden rounded-lg border outline-none',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-in-from-bottom-2  duration-200',
            $attrs.class
        )"
    >
        <slot />
    </RadixDialogContent>
  </RadixDialogPortal>
</template>
