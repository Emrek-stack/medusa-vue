<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <div
    :class="clx(
        'bg-ui-contrast-bg-base relative flex items-center overflow-hidden rounded-full px-1',
        'after:shadow-elevation-flyout after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:content-[\'\']',
        $attrs.class
    )"
  >
    <slot />
  </div>
</template>
