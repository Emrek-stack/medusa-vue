<script setup lang="ts">
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockHeader,
  TooltipProvider,
} from "@minima-vue/ui"

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
        },
      ]"
      :class="class"
    >
      <CodeBlockHeader />
      <CodeBlockBody />
    </CodeBlock>
  </TooltipProvider>
</template>
