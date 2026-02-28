<script setup lang="ts">
defineProps<{
  title: string
  tokens: readonly string[]
}>()
</script>

<template>
  <section class="docs-card p-5">
    <div class="mb-5 flex items-center justify-between gap-4">
      <h2 class="text-xl font-semibold text-ui-fg-base">{{ title }}</h2>
      <span class="text-xs uppercase tracking-[0.18em] text-ui-fg-muted">{{ tokens.length }} tokens</span>
    </div>
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="token in tokens"
        :key="token"
        class="rounded-2xl border border-ui-border-base bg-ui-bg-subtle p-4"
      >
        <div
          class="mb-3 h-20 rounded-xl border border-ui-border-base"
          :style="{ backgroundColor: `var(--${token})` }"
        />
        <p class="text-sm font-medium text-ui-fg-base">{{ token }}</p>
        <p class="mt-1 font-mono text-xs text-ui-fg-muted">var(--{{ token }})</p>
      </article>
    </div>
  </section>
</template>
