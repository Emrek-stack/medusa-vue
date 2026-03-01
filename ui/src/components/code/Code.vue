<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <code
    :class="clx(
        'border-ui-tag-neutral-border bg-ui-tag-neutral-bg text-ui-tag-neutral-text txt-compact-small inline-flex rounded-md border px-[6px] font-mono',
        $attrs.class
    )"
  >
    <slot />
  </code>
</template>
