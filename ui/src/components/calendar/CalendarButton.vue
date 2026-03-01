<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <button
    type="button"
    :class="clx(
        'transition-fg bg-ui-bg-base hover:bg-ui-bg-base-hover shadow-buttons-neutral focus-visible:shadow-buttons-neutral-focus active:bg-ui-bg-base-pressed text-ui-fg-subtle flex size-7 items-center justify-center rounded-md outline-none disabled:text-ui-fg-disabled border border-transparent',
        $attrs.class
    )"
  >
    <slot />
  </button>
</template>
