<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <div
    :class="clx('bg-ui-border-base -mx-1 my-1 h-px', $attrs.class)"
  />
</template>
