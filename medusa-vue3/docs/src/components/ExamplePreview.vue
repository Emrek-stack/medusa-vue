<script setup lang="ts">
import { computed, ref } from "vue"
import { Alert } from "@medusa-vue/ui"
import DocsCodeBlock from "@docs/components/DocsCodeBlock.vue"
import FeedbackRow from "@docs/components/FeedbackRow.vue"
import { resolveExample } from "@docs/data/example-registry"

const props = defineProps<{
  slug: string
  exampleName: string
  hideFeedback?: boolean
  disableCenterAlignPreview?: boolean
}>()

const activeTab = ref<"preview" | "code">("preview")

const example = computed(() => resolveExample(props.slug, props.exampleName))
</script>

<template>
  <section class="my-4 flex flex-col space-y-4">
    <div class="flex items-center gap-2">
      <button
        type="button"
        class="rounded-full border px-[10px] py-1 txt-compact-small-plus transition"
        :class="
          activeTab === 'preview'
            ? 'border-ui-border-base bg-ui-bg-base text-ui-fg-base'
            : 'border-transparent text-ui-fg-muted'
        "
        @click="activeTab = 'preview'"
      >
        Preview
      </button>
      <button
        type="button"
        class="txt-compact-small-plus rounded-full border px-[10px] py-1 transition"
        :class="
          activeTab === 'code'
            ? 'border-ui-border-base bg-ui-bg-base text-ui-fg-base'
            : 'border-transparent text-ui-fg-muted'
        "
        @click="activeTab = 'code'"
      >
        Code
      </button>
    </div>

    <div
      v-if="activeTab === 'preview'"
      class="flex min-h-[400px] w-full overflow-auto rounded-xl border border-ui-border-base bg-ui-bg-base px-11 py-10"
      :class="[
        (example?.disableCenterAlignPreview ?? disableCenterAlignPreview)
          ? 'items-start justify-start'
          : 'items-center justify-center',
      ]"
    >
      <component :is="example?.component" v-if="example?.component" />
      <Alert v-else variant="warning">
        Example {{ exampleName }} is not available yet for the Vue documentation app.
      </Alert>
    </div>

    <DocsCodeBlock
      v-else-if="example?.code"
      :code="example.code"
      lang="vue"
      class="w-full"
    />

    <FeedbackRow
      v-if="!(example?.hideFeedback ?? hideFeedback)"
      question="Was this example helpful?"
    />
  </section>
</template>
