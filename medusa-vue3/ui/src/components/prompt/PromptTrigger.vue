<script setup lang="ts">
import { AlertDialogTrigger as RadixAlertDialogTrigger } from "radix-vue"

defineProps<{
  asChild?: boolean
}>()
</script>

<template>
  <RadixAlertDialogTrigger :as-child="asChild ?? true" v-bind="$attrs">
    <slot />
  </RadixAlertDialogTrigger>
</template>
