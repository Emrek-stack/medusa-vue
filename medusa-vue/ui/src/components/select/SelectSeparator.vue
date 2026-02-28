<script setup lang="ts">
import { SelectSeparator as RadixSelectSeparator } from "radix-vue"
import { clx } from "@/utils/clx"
</script>

<template>
  <RadixSelectSeparator
    :class="clx(
      'bg-ui-border-component border-t-ui-border-menu-top border-b-ui-border-menu-bot -mx-1 my-1 h-0.5 border-b border-t',
      $attrs.class
    )"
  />
</template>
