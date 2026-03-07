<script setup lang="ts">
import { Container, Text } from "@minima-vue/ui"
</script>

<template>
  <Container class="p-4">
    <slot>
      <Text size="small" class="text-ui-fg-subtle">Use data grid column visibility component</Text>
    </slot>
  </Container>
</template>
