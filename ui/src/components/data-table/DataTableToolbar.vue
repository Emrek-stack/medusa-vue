<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <div
    :class="
      clx(
        'flex items-center justify-between gap-3 border-b border-ui-border-base px-4 py-3',
        $attrs.class
      )
    "
  >
    <slot />
  </div>
</template>
