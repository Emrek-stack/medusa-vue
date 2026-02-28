<script setup lang="ts">
import { DropdownMenuTrigger as RadixDropdownMenuTrigger } from "radix-vue"

// Radix Trigger typically just slots functionality, often asChild
</script>

<template>
  <RadixDropdownMenuTrigger as-child>
    <slot />
  </RadixDropdownMenuTrigger>
</template>
