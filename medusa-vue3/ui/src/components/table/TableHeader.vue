<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <thead
    :class="clx(
      'border-ui-border-base txt-compact-small-plus [&_tr]:bg-ui-bg-subtle [&_tr]:hover:bg-ui-bg-subtle border-y',
      $attrs.class
    )"
  >
    <slot />
  </thead>
</template>
