<script setup lang="ts">
import {
  Copy,
  CodeBlock,
  CodeBlockBody,
  CodeBlockHeader,
  CodeBlockMeta,
  TooltipProvider,
} from "@minima-vue/ui"
import { CogSixTooth, ExclamationCircle } from "@minima-vue/icons"

withDefaults(
  defineProps<{
    code: string
    lang?: string
    label?: string
    class?: string
  }>(),
  {
    lang: "tsx",
    label: "Code",
    class: "",
  }
)
</script>

<template>
  <TooltipProvider>
    <CodeBlock
      :snippets="[
        {
          label,
          language: lang,
          code,
          hideLineNumbers: true,
          hideCopy: true,
        },
      ]"
      :class="['mb-docs_1', $props.class]"
    >
      <CodeBlockHeader>
        <CodeBlockMeta class="flex items-center gap-2">
          <button
            type="button"
            aria-label="Code settings"
            class="inline-flex items-center justify-center text-ui-contrast-fg-secondary transition hover:text-ui-contrast-fg-primary"
          >
            <CogSixTooth class="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Code info"
            class="inline-flex items-center justify-center text-ui-contrast-fg-secondary transition hover:text-ui-contrast-fg-primary"
          >
            <ExclamationCircle class="h-4 w-4" />
          </button>
          <Copy
            :content="code"
            class="text-ui-contrast-fg-secondary transition hover:text-ui-contrast-fg-primary"
          />
        </CodeBlockMeta>
      </CodeBlockHeader>
      <CodeBlockBody />
    </CodeBlock>
  </TooltipProvider>
</template>
