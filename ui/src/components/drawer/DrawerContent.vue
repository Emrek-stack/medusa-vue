<script setup lang="ts">
import { DialogContent as RadixDialogContent, DialogPortal as RadixDialogPortal, DialogOverlay as RadixDialogOverlay } from "radix-vue"
import { clx } from "@/utils/clx"

</script>

<template>
  <RadixDialogPortal>
    <RadixDialogOverlay
        class="bg-ui-bg-overlay fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <RadixDialogContent
        :class="clx(
          'bg-ui-bg-base shadow-elevation-modal border-ui-border-base fixed inset-y-2 z-[60] flex w-full flex-1 flex-col rounded-lg border outline-none max-sm:inset-x-2 max-sm:w-[calc(100%-16px)] sm:right-2 sm:max-w-[560px]',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-right-1/2 duration-200',
            $attrs.class
        )"
    >
        <slot />
    </RadixDialogContent>
  </RadixDialogPortal>
</template>
