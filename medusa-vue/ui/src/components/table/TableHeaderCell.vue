<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <th
    :class="clx(
      'txt-compact-small-plus h-12 py-0 pl-0 pr-6 text-left',
      $attrs.class
    )"
  >
    <slot />
  </th>
</template>
