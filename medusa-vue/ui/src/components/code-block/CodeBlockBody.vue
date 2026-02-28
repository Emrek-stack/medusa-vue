<script setup lang="ts">
import { inject, ref, watch, type Ref } from "vue"
import { clx } from "@/utils/clx"
import { Copy } from "@/components/copy"
import type { CodeSnippet } from "./CodeBlock.vue"


interface CodeBlockContext {
    active: Ref<CodeSnippet>
}

const { active } = inject<CodeBlockContext>("code-block")!

const highlightedCode = ref("")

// Shiki initialization (singleton concept or per usage)
// For simplicity, we create highlighter on mount if possible or use a shared promis
// IMPORTANT: Shiki is async.


// Watch active code and highlight
watch(() => [active.value.code, active.value.language], async ([newCode, _newLang]) => {
     // Ideally usage of a robust highlighter helper
     // For now:
     // highlightedCode.value = ...
     // Since I cannot run shiki in this environment to test, and user might not have it.
     // I will output plain text if shiki fails or just render as pre/code.
     
     // Temporary fallback logic:
     highlightedCode.value = newCode // Fallback
}, { immediate: true })

</script>

<template>
  <div>
    <div v-if="$slots.default || !active.hideCopy" class="border-ui-contrast-border-bot flex min-h-10 items-center gap-x-3 border-t px-4 py-2">
        <div class="code-body text-ui-contrast-fg-secondary flex-1">
            <slot />
        </div>
        <Copy v-if="!active.hideCopy" :content="active.code" class="text-ui-contrast-fg-secondary" />
    </div>
    <div class="flex h-full flex-col overflow-hidden px-[5px] pb-[5px]">
        <div 
            :class="clx(
                'bg-ui-contrast-bg-subtle border-ui-contrast-border-bot relative h-full overflow-y-auto rounded-lg border p-4',
                $attrs.class
            )"
        >
            <div class="max-w-[90%]">
                <!-- Fallback or Shiki Render -->
                <pre :class="clx('code-body whitespace-pre-wrap bg-transparent text-ui-contrast-fg-primary')">
                    <code>{{ active.code }}</code>
                </pre>
            </div>
        </div>
    </div>
  </div>
</template>
