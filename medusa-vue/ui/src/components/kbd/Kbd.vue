<script setup lang="ts">
import { clx } from "@/utils/clx"
</script>

<template>
  <kbd
    :class="clx(
        'bg-ui-tag-neutral-bg text-ui-tag-neutral-text border-ui-tag-neutral-border inline-flex h-5 w-fit min-w-[20px] items-center justify-center rounded-md border px-1',
        'txt-compact-xsmall-plus',
        $attrs.class
    )"
  >
    <slot />
  </kbd>
</template>
