<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { Alert } from "@medusa-vue/ui"
import CodeExample from "@docs/components/CodeExample.vue"
import PageHeader from "@docs/components/PageHeader.vue"
import { hookDocs } from "@docs/data/content"

const route = useRoute()
const page = computed(() => hookDocs[route.params.slug as keyof typeof hookDocs])
</script>

<template>
  <div v-if="page" class="space-y-8">
    <PageHeader eyebrow="Hooks" :title="page.title" :description="page.description" />
    <CodeExample label="Usage" :code="page.usage" />
    <CodeExample label="Example" :code="page.example" />
    <Alert v-if="route.params.slug === 'use-prompt'" variant="warning">
      The Vue port does not ship the Prompt primitive yet, so the composable remains intentionally incomplete.
    </Alert>
  </div>
</template>
