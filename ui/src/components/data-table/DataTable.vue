<script setup lang="ts">
import { clx } from "@/utils/clx"

defineProps<{
  instance?: any
  class?: string
}>()
</script>

<template>
  <div
    :class="
      clx(
        'overflow-hidden rounded-lg border border-ui-border-base bg-ui-bg-base',
        $props.class
      )
    "
  >
    <slot />
  </div>
</template>
