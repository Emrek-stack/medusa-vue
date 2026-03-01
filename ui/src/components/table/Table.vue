<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <table
    :class="clx('text-ui-fg-subtle txt-compact-small w-full', $attrs.class)"
  >
    <slot />
  </table>
</template>
