<script setup lang="ts">
defineProps<{
  title: string
  propsList: Array<{
    name: string
    type: string
    required: boolean
    default: string | null
  }>
}>()
</script>

<template>
  <section class="space-y-4">
    <h3 class="text-xl font-semibold text-ui-fg-base">
      {{ title }}
    </h3>
    <div v-if="propsList.length" class="overflow-hidden rounded-2xl border border-ui-border-base">
      <table class="min-w-full divide-y divide-ui-border-base bg-ui-bg-base">
        <thead class="bg-ui-bg-subtle">
          <tr class="text-left text-xs uppercase tracking-[0.18em] text-ui-fg-muted">
            <th class="px-4 py-3">Prop</th>
            <th class="px-4 py-3">Type</th>
            <th class="px-4 py-3">Required</th>
            <th class="px-4 py-3">Default</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-ui-border-base text-sm text-ui-fg-base">
          <tr v-for="entry in propsList" :key="entry.name">
            <td class="px-4 py-3 font-medium">{{ entry.name }}</td>
            <td class="px-4 py-3 font-mono text-xs">{{ entry.type }}</td>
            <td class="px-4 py-3">{{ entry.required ? "Yes" : "No" }}</td>
            <td class="px-4 py-3 font-mono text-xs">{{ entry.default ?? "-" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="rounded-2xl border border-dashed border-ui-border-base bg-ui-bg-subtle p-4 text-sm text-ui-fg-subtle">
      No documented props were detected for this export.
    </div>
  </section>
</template>
