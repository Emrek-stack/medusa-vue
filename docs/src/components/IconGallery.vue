<script setup lang="ts">
import { computed, ref } from "vue"
import * as icons from "@medusa-vue/icons"

const query = ref("")

const entries = computed(() =>
  Object.entries(icons)
    .filter(([name]) => name.toLowerCase().includes(query.value.toLowerCase()))
    .slice(0, 300)
)
</script>

<template>
  <section class="space-y-6">
    <div class="docs-card p-5">
      <label class="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-ui-fg-muted">
        Search Icons
      </label>
      <input
        v-model="query"
        type="text"
        placeholder="Search by icon name"
        class="w-full rounded-xl border border-ui-border-base bg-ui-bg-base px-4 py-3 text-sm outline-none transition focus:border-ui-border-interactive"
      />
    </div>
    <div class="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
      <article
        v-for="[name, component] in entries"
        :key="name"
        class="docs-card flex min-h-36 flex-col items-center justify-center gap-4 p-5 text-center"
      >
        <component :is="component" class="h-6 w-6 text-ui-fg-base" />
        <p class="text-xs font-medium text-ui-fg-subtle">{{ name }}</p>
      </article>
    </div>
  </section>
</template>
