<script setup lang="ts">
import Button from "@/components/button/Button.vue"
</script>

<template>
  <Button variant="secondary" size="small">
    <slot>Sort</slot>
  </Button>
</template>
