<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import CodeExample from "@docs/components/CodeExample.vue"
import PageHeader from "@docs/components/PageHeader.vue"
import { utilityDocs } from "@docs/data/content"
import clxSource from "../../../ui/src/utils/clx.ts?raw"

const route = useRoute()
const page = computed(() => utilityDocs[route.params.slug as keyof typeof utilityDocs])
</script>

<template>
  <div v-if="page" class="space-y-8">
    <PageHeader eyebrow="Utilities" :title="page.title" :description="page.description" />
    <CodeExample label="Usage" :code="page.usage" />
    <CodeExample label="Source" :code="clxSource" />
  </div>
</template>
