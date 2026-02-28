<script setup lang="ts">
import ColorPalette from "@docs/components/ColorPalette.vue"
import PageHeader from "@docs/components/PageHeader.vue"
import { colorGroups } from "@docs/data/colors"
</script>

<template>
  <div class="space-y-8">
    <PageHeader
      eyebrow="Foundations"
      title="Color System"
      description="These token groups come from the Medusa Vue Tailwind preset. The docs app uses the same CSS variables that power the UI package, so the swatches reflect the live runtime values."
    />
    <ColorPalette
      v-for="group in colorGroups"
      :key="group.title"
      :title="group.title"
      :tokens="group.tokens"
    />
  </div>
</template>
