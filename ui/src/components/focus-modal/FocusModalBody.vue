<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <div
    :class="clx('flex-1', $attrs.class)"
  >
    <slot />
  </div>
</template>
