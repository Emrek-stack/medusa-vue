<script setup lang="ts">
import Button from "@/components/button/Button.vue"
</script>

<template>
  <div class="flex items-center justify-between gap-3 border-t border-ui-border-base px-4 py-3">
    <p class="txt-compact-small text-ui-fg-subtle">
      <slot>Showing 1-5 of 24</slot>
    </p>
    <div class="flex items-center gap-2">
      <Button variant="secondary" size="small">Previous</Button>
      <Button variant="secondary" size="small">Next</Button>
    </div>
  </div>
</template>
