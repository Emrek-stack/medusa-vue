<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <div
    :class="clx(
        'txt-compact-small text-ui-contrast-fg-secondary ml-auto',
        $attrs.class
    )"
  >
    <slot />
  </div>
</template>
