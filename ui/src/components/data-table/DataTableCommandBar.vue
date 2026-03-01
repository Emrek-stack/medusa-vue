<script setup lang="ts">
import Button from "@/components/button/Button.vue"
</script>

<template>
  <div class="flex items-center justify-between gap-3 border-t border-ui-border-base bg-ui-bg-subtle px-4 py-3">
    <p class="txt-compact-small-plus text-ui-fg-base">
      <slot name="label">2 rows selected</slot>
    </p>
    <div class="flex items-center gap-2">
      <slot>
        <Button variant="secondary" size="small">Export</Button>
        <Button variant="danger" size="small">Delete</Button>
      </slot>
    </div>
  </div>
</template>
