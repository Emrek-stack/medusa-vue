<script setup lang="ts">
defineProps<{
  code: string
  label?: string
}>()
</script>

<template>
  <section class="space-y-3">
    <p v-if="label" class="text-xs font-medium uppercase tracking-[0.2em] text-ui-fg-muted">
      {{ label }}
    </p>
    <pre class="docs-code"><code>{{ code }}</code></pre>
  </section>
</template>
