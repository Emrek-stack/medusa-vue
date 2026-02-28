<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <div
    :class="clx(
        'txt-compact-small-plus text-ui-contrast-fg-secondary px-3 py-2.5',
        $attrs.class
    )"
  >
    <slot />
  </div>
</template>
