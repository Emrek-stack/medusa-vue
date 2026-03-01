<script setup lang="ts">
import { AlertDialogCancel as RadixAlertDialogCancel } from "radix-vue"
import Button from "@/components/button/Button.vue"

defineProps<{
  asChild?: boolean
}>()
</script>

<template>
  <RadixAlertDialogCancel :as-child="asChild ?? false">
    <slot v-if="asChild" />
    <Button v-else size="small" variant="secondary">
      <slot />
    </Button>
  </RadixAlertDialogCancel>
</template>
