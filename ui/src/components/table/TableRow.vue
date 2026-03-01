<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <tr
    :class="clx(
      'bg-ui-bg-base hover:bg-ui-bg-base-hover border-ui-border-base transition-fg border-b',
      '[&_td:last-child]:pr-6 [&_th:last-child]:pr-6',
      '[&_td:first-child]:pl-6 [&_th:first-child]:pl-6',
      $attrs.class
    )"
  >
    <slot />
  </tr>
</template>
