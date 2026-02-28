<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <div
    :class="
      clx(
        'flex flex-col gap-2 px-6 pb-4 pt-6',
        $attrs.class
      )
    "
  >
    <slot />
  </div>
</template>
