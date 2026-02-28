<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <div
    :class="
      clx(
        'border-ui-border-base flex items-center justify-end gap-2 border-t px-6 py-4',
        $attrs.class
      )
    "
  >
    <slot />
  </div>
</template>
