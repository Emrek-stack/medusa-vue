<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <tbody
    :class="clx('border-ui-border-base border-b', $attrs.class)"
  >
    <slot />
  </tbody>
</template>
