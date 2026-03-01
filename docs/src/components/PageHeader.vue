<script setup lang="ts">
import { Badge } from "@minima-vue/ui"

defineProps<{
  eyebrow?: string
  title: string
  description: string
}>()
</script>

<template>
  <header class="space-y-5">
    <Badge v-if="eyebrow" class="rounded-full px-3 py-1 text-xs uppercase tracking-[0.24em]">
      {{ eyebrow }}
    </Badge>
    <div class="space-y-3">
      <h1 class="h1-docs text-ui-fg-base">
        {{ title }}
      </h1>
      <p class="max-w-3xl txt-compact-small-plus text-ui-fg-subtle">
        {{ description }}
      </p>
    </div>
  </header>
</template>
