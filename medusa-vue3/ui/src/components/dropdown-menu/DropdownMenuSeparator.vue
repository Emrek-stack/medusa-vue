<script setup lang="ts">
import { DropdownMenuSeparator as RadixDropdownMenuSeparator } from "radix-vue"
import { clx } from "@/utils/clx"
</script>

<template>
  <RadixDropdownMenuSeparator
    :class="clx(
      'bg-ui-border-component border-t-ui-border-menu-top border-b-ui-border-menu-bot -mx-1 my-1 h-0.5 border-b border-t',
      $attrs.class
    )"
  />
</template>
