<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <span
    :class="clx(
        'text-ui-fg-subtle txt-compact-small ml-auto tracking-widest',
        $attrs.class
    )"
  >
    <slot />
  </span>
</template>
