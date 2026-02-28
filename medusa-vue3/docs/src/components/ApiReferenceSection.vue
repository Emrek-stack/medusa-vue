<script setup lang="ts">
import FeedbackRow from "@docs/components/FeedbackRow.vue"
import ReferencePropsTable from "@docs/components/ReferencePropsTable.vue"
import RichText from "@docs/components/RichText.vue"
import { specMap } from "@docs/data/component-docs"

const props = defineProps<{
  componentsToShow: string[]
}>()

const getSpec = (name: string) => specMap[name]
</script>

<template>
  <section id="api-reference" class="space-y-8">
    <div
      v-for="componentName in props.componentsToShow"
      :key="componentName"
      class="space-y-5"
    >
      <h3
        v-if="props.componentsToShow.length > 1"
        :id="componentName.toLowerCase().replace(/[^a-z0-9]+/g, '-')"
        class="text-xl font-semibold text-ui-fg-base"
      >
        {{ componentName }}
      </h3>
      <RichText
        v-if="getSpec(componentName)?.description"
        :content="getSpec(componentName)?.description || ''"
      />
      <ReferencePropsTable
        v-if="getSpec(componentName)?.props && Object.keys(getSpec(componentName)?.props || {}).length"
        :props-map="getSpec(componentName)?.props || {}"
      />
      <FeedbackRow
        v-if="getSpec(componentName)?.props && Object.keys(getSpec(componentName)?.props || {}).length"
        question="Was this helpful?"
      />
    </div>
  </section>
</template>
