<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <td
    :class="clx('h-12 py-0 pl-0 pr-6', $attrs.class)"
  >
    <slot />
  </td>
</template>
