<script setup lang="ts">
import { PopoverTrigger as RadixPopoverTrigger } from "radix-vue"
</script>

<template>
  <RadixPopoverTrigger as-child>
    <slot />
  </RadixPopoverTrigger>
</template>
