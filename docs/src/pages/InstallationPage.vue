<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { Alert } from "@minima-vue/ui"
import CodeExample from "@docs/components/CodeExample.vue"
import PageHeader from "@docs/components/PageHeader.vue"
import { installationDocs } from "@docs/data/content"

const route = useRoute()

const page = computed(() => installationDocs[route.params.slug as keyof typeof installationDocs])
</script>

<template>
  <div v-if="page" class="space-y-8">
    <PageHeader eyebrow="Installation" :title="page.title" :description="page.description" />
    <Alert variant="info">
      Import <code>@minima-vue/ui/style.css</code> once, then apply the <code>@minima-vue/ui-preset</code>
      Tailwind preset so the CSS variables and utility classes align with component expectations.
    </Alert>
    <CodeExample label="Install Command" :code="page.installCommand" />
    <section class="space-y-6">
      <CodeExample
        v-for="file in page.files"
        :key="file.label"
        :label="file.label"
        :code="file.code"
      />
    </section>
  </div>
</template>
