<script setup lang="ts">
import { SelectLabel as RadixSelectLabel } from "radix-vue"
import { clx } from "@/utils/clx"
</script>

<template>
  <RadixSelectLabel
    :class="clx('txt-compact-xsmall-plus text-ui-fg-muted px-2 py-1.5', $attrs.class)"
  >
    <slot />
  </RadixSelectLabel>
</template>
