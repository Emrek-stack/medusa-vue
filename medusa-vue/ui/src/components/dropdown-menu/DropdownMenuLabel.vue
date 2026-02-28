<script setup lang="ts">
import { DropdownMenuLabel as RadixDropdownMenuLabel } from "radix-vue"
import { clx } from "@/utils/clx"
</script>

<template>
  <RadixDropdownMenuLabel
    :class="clx('text-ui-fg-subtle txt-compact-xsmall-plus px-2 py-1.5', $attrs.class)"
  >
    <slot />
  </RadixDropdownMenuLabel>
</template>
