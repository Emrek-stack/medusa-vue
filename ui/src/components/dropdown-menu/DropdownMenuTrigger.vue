<script setup lang="ts">
import { DropdownMenuTrigger as RadixDropdownMenuTrigger } from "radix-vue"

defineProps<{
  asChild?: boolean
}>()
</script>

<template>
  <RadixDropdownMenuTrigger :as-child="asChild" v-bind="$attrs">
    <slot />
  </RadixDropdownMenuTrigger>
</template>
