<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <div
    :class="clx(
        'bg-ui-contrast-bg-base shadow-elevation-code-block flex items-center rounded-lg px-4 py-1.5',
        '[&>code]:text-ui-contrast-fg-primary [&>code]:code-body [&>code]:mx-2',
        $attrs.class
    )"
  >
    <slot />
  </div>
</template>
