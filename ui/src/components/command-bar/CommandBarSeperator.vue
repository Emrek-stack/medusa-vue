<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <div
    :class="clx('bg-ui-contrast-border-base h-10 w-px', $attrs.class)"
  />
</template>
