<script setup lang="ts">
import { clx } from "@/utils/clx"
import { IconButton } from "@/components/icon-button"
</script>

<template>
  <IconButton
    size="2xsmall"
    variant="transparent"
    type="button"
    :class="clx('text-ui-fg-muted', $attrs.class)"
  >
    <slot />
  </IconButton>
</template>
