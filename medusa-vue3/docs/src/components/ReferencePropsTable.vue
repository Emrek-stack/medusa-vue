<script setup lang="ts">
defineProps<{
  propsMap: Record<
    string,
    {
      required?: boolean
      description?: string
      defaultValue?: { value?: string }
      tsType?: { raw?: string; name?: string }
    }
  >
}>()

const getType = (entry: {
  tsType?: { raw?: string; name?: string }
}) => entry.tsType?.raw ?? entry.tsType?.name ?? "any"
</script>

<template>
  <div class="overflow-hidden rounded-md border border-ui-border-base bg-ui-bg-base">
    <table class="min-w-full divide-y divide-ui-border-base">
      <thead class="bg-ui-bg-subtle">
        <tr class="text-left text-xs uppercase tracking-[0.16em] text-ui-fg-muted">
          <th class="px-4 py-3">Prop</th>
          <th class="px-4 py-3">Type</th>
          <th class="px-4 py-3">Required</th>
          <th class="px-4 py-3">Default</th>
          <th class="px-4 py-3">Description</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-ui-border-base text-sm text-ui-fg-base">
        <tr v-for="(entry, key) in propsMap" :key="key">
          <td class="px-4 py-3 align-top font-medium">{{ key }}</td>
          <td class="px-4 py-3 align-top font-mono text-xs">{{ getType(entry) }}</td>
          <td class="px-4 py-3 align-top">{{ entry.required ? "Yes" : "No" }}</td>
          <td class="px-4 py-3 align-top font-mono text-xs">{{ entry.defaultValue?.value ?? "-" }}</td>
          <td class="px-4 py-3 align-top text-ui-fg-subtle">{{ entry.description ?? "-" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
