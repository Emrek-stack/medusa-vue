<script setup lang="ts">
import {
  AlertDialogContent as RadixAlertDialogContent,
  AlertDialogOverlay as RadixAlertDialogOverlay,
  AlertDialogPortal as RadixAlertDialogPortal,
} from "radix-vue"
import { clx } from "@/utils/clx"
</script>

<template>
  <RadixAlertDialogPortal>
    <slot name="overlay">
      <RadixAlertDialogOverlay
        class="bg-ui-bg-overlay fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      />
    </slot>
    <RadixAlertDialogContent
      :class="
        clx(
          'bg-ui-bg-base shadow-elevation-modal fixed left-1/2 top-1/2 z-50 w-[calc(100vw-32px)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-ui-border-base outline-none',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-200',
          $attrs.class
        )
      "
    >
      <slot />
    </RadixAlertDialogContent>
  </RadixAlertDialogPortal>
</template>
