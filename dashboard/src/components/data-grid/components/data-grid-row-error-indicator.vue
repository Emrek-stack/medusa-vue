<script setup lang="ts">
import { Container, Text } from "@minima-vue/ui"
</script>

<template>
  <Container class="p-4">
    <slot>
      <Text size="small" class="text-ui-fg-subtle">Data grid row error indicator component</Text>
    </slot>
  </Container>
</template>
