<script setup lang="ts">
import { ref, provide, readonly, watch, computed } from "vue"
import { clx } from "@/utils/clx"


export interface CodeSnippet {
    label: string
    language: string
    code: string
    hideLineNumbers?: boolean
    hideCopy?: boolean
}

const props = defineProps<{
    snippets: CodeSnippet[]
}>()

const active = ref(props.snippets[0])

watch(() => props.snippets, (newSnippets) => {
    if (newSnippets.length > 0 && !newSnippets.find(s => s.label === active.value.label)) {
        active.value = newSnippets[0]
    }
})

provide("code-block", {
    snippets: computed(() => props.snippets),
    active: readonly(active),
    setActive: (snippet: CodeSnippet) => {
        active.value = snippet
    }
})

</script>

<template>
  <div
    :class="clx(
        'bg-ui-contrast-bg-base shadow-elevation-code-block flex flex-col overflow-hidden rounded-xl',
        $attrs.class
    )"
  >
    <slot />
  </div>
</template>
