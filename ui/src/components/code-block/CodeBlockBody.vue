<script setup lang="ts">
import { inject, ref, watch, type Ref } from "vue"
import { clx } from "@/utils/clx"
import { Copy } from "@/components/copy"
import type { CodeSnippet } from "./CodeBlock.vue"
import Prism from 'prismjs'

import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markup'

interface CodeBlockContext {
    active: Ref<CodeSnippet>
}

const { active } = inject<CodeBlockContext>("code-block")!

/**
 * Color map matching the reference palenight theme from @medusajs/ui code-block.tsx
 * These inline styles replicate the exact token colors used in prism-react-renderer's palenight theme
 * with the custom overrides defined in the reference.
 */
const tokenColors: Record<string, { color: string; fontStyle?: string }> = {
    keyword:      { color: "rgb(187,160,255)", fontStyle: "normal" },
    punctuation:  { color: "rgb(255,255,255)", fontStyle: "normal" },
    operator:     { color: "rgb(255,255,255)", fontStyle: "normal" },
    constant:     { color: "rgb(187,77,96)",   fontStyle: "normal" },
    boolean:      { color: "rgb(187,77,96)",   fontStyle: "normal" },
    function:     { color: "rgb(27,198,242)",  fontStyle: "normal" },
    number:       { color: "rgb(247,208,25)" },
    property:     { color: "rgb(247,208,25)" },
    "class-name": { color: "rgb(255,203,107)" },
    "maybe-class-name": { color: "rgb(255,203,107)" },
    string:       { color: "rgb(73,209,110)" },
    "attr-value": { color: "rgb(73,209,110)" },
    "template-string": { color: "rgb(73,209,110)" },
    comment:      { color: "var(--contrast-fg-secondary)", fontStyle: "normal" },
    tag:          { color: "rgb(255,85,114)" },
    "attr-name":  { color: "rgb(255,203,107)" },
    selector:     { color: "rgb(73,209,110)" },
    "doc-comment": { color: "var(--contrast-fg-secondary)", fontStyle: "normal" },
    prolog:       { color: "var(--contrast-fg-secondary)", fontStyle: "normal" },
    parameter:    { color: "rgba(249,250,251,1)" },
    builtin:      { color: "rgb(255,203,107)" },
    char:         { color: "rgb(73,209,110)" },
    symbol:       { color: "rgb(187,77,96)" },
    regex:        { color: "rgb(73,209,110)" },
    variable:     { color: "rgb(255,85,114)" },
    spread:       { color: "rgb(255,255,255)" },
    "template-punctuation": { color: "rgb(73,209,110)" },
    "script-punctuation":   { color: "rgb(255,255,255)" },
}

interface FlatToken {
    content: string
    types: string[]
}

/**
 * Recursively flatten Prism token tree into a flat list of {content, types}
 * This replicates what prism-react-renderer does internally
 */
function flattenTokens(token: string | Prism.Token, parentTypes: string[] = []): FlatToken[] {
    if (typeof token === 'string') {
        return [{ content: token, types: parentTypes.length ? parentTypes : ['plain'] }]
    }
    const types = [...parentTypes, token.type]
    if (typeof token.content === 'string') {
        return [{ content: token.content, types }]
    }
    if (Array.isArray(token.content)) {
        return token.content.flatMap((child: string | Prism.Token) => flattenTokens(child, types))
    }
    return flattenTokens(token.content as Prism.Token, types)
}

/**
 * Split flat tokens into lines (splitting on \n boundaries)
 */
function splitIntoLines(flatTokens: FlatToken[]): FlatToken[][] {
    const lines: FlatToken[][] = [[]]
    for (const token of flatTokens) {
        const parts = token.content.split('\n')
        for (let i = 0; i < parts.length; i++) {
            if (i > 0) {
                lines.push([])
            }
            if (parts[i] !== '') {
                lines[lines.length - 1].push({ content: parts[i], types: token.types })
            }
        }
    }
    return lines
}

function getTokenStyle(types: string[]): Record<string, string> {
    // Walk types from most specific to least specific
    for (let i = types.length - 1; i >= 0; i--) {
        const entry = tokenColors[types[i]]
        if (entry) {
            const style: Record<string, string> = { color: entry.color }
            if (entry.fontStyle) {
                style['font-style'] = entry.fontStyle
            }
            return style
        }
    }
    return { color: 'rgba(249,250,251,1)' }
}

// Reactive tokenized lines
const tokenLines = ref<FlatToken[][]>([])

watch(() => [active.value.code, active.value.language], ([newCode, newLang]) => {
    try {
        let lang = (newLang as string) || 'tsx'
        if (lang === 'vue' || lang === 'html') lang = 'markup'
        
        const grammar = Prism.languages[lang] || Prism.languages.typescript
        const tokens = Prism.tokenize(newCode as string, grammar)
        const flat = tokens.flatMap((t: string | Prism.Token) => flattenTokens(t))
        tokenLines.value = splitIntoLines(flat)
    } catch (e) {
        console.error("Failed to tokenize code", e)
        // Fallback: split raw code into lines
        tokenLines.value = (newCode as string).split('\n').map(line => [{ content: line, types: ['plain'] }])
    }
}, { immediate: true })

</script>

<template>
  <div>
    <div v-if="$slots.default || !active.hideCopy" class="border-ui-contrast-border-bot flex min-h-10 items-center gap-x-3 border-t px-4 py-2">
      <div class="code-paragraph text-ui-contrast-fg-secondary flex-1">
        <slot />
      </div>
      <Copy
        v-if="!active.hideCopy"
        :content="active.code"
        class="text-ui-contrast-fg-secondary"
      />
    </div>
    
    <div class="flex h-full flex-col overflow-hidden px-[5px] pb-[5px]">
      <div
        :class="clx(
          'bg-ui-contrast-bg-subtle border-ui-contrast-border-bot relative h-full overflow-y-auto rounded-lg border p-4',
          $attrs.class
        )"
      >
        <div class="max-w-[90%]">
             <pre
                :class="clx(
                  'code-paragraph whitespace-pre-wrap bg-transparent m-0 p-0',
                  {
                    'grid grid-cols-[auto,1fr] gap-x-4': !active.hideLineNumbers,
                  }
                )"
                style="background: transparent; color: rgba(249,250,251,1);"
              ><div v-if="!active.hideLineNumbers" role="presentation" class="flex flex-col text-right"><span v-for="(_, i) in tokenLines" :key="i" class="text-ui-contrast-fg-secondary tabular-nums">{{ i + 1 }}</span></div><div><div v-for="(line, i) in tokenLines" :key="i"><span v-for="(token, j) in line" :key="j" :style="getTokenStyle(token.types)">{{ token.content }}</span><template v-if="line.length === 0">{{ '\n' }}</template></div></div></pre>
        </div>
      </div>
    </div>
  </div>
</template>
