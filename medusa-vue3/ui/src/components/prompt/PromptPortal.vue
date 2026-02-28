<script setup lang="ts">
import { AlertDialogPortal as RadixAlertDialogPortal } from "radix-vue"
</script>

<template>
  <RadixAlertDialogPortal>
    <slot />
  </RadixAlertDialogPortal>
</template>
