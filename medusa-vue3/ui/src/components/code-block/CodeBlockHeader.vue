<script setup lang="ts">
import { inject, ref, onMounted, watch, nextTick, type Ref, type ComputedRef } from "vue"
import { clx } from "@/utils/clx"
import type { CodeSnippet } from "./CodeBlock.vue"

interface CodeBlockContext {
    snippets: ComputedRef<CodeSnippet[]>
    active: Ref<CodeSnippet>
    setActive: (snippet: CodeSnippet) => void
}

const { snippets, active, setActive } = inject<CodeBlockContext>("code-block")!

withDefaults(defineProps<{
    hideLabels?: boolean
}>(), {
    hideLabels: false
})

const tabRefs = ref<HTMLElement[]>([])
const indicatorStyle = ref({ width: '0px', left: '0px' })

const updateIndicator = () => {
    const activeIndex = snippets.value.findIndex(s => s.label === active.value.label)
    if (activeIndex === -1) return

    const activeTab = tabRefs.value[activeIndex]
    if (!activeTab) return

    let left = 15 // Initial padding
    for (let i = 0; i < activeIndex; i++) {
        const tab = tabRefs.value[i]
        if (tab) {
             left += tab.offsetWidth + 12 
        }
    }
    
    const calculatedLeft = snippets.value.slice(0, activeIndex).reduce((acc, _, idx) => {
        const el = tabRefs.value[idx]
        return acc + (el?.offsetWidth || 0) + 12
    }, 15)

    indicatorStyle.value = {
        width: `${activeTab.offsetWidth}px`,
        left: `${calculatedLeft}px`
    }
}

watch(active, () => {
    nextTick(updateIndicator)
})

onMounted(() => {
    nextTick(updateIndicator)
})

</script>

<template>
  <div>
    <div
        :class="clx('flex items-start px-4 pt-2.5', $attrs.class)"
    >
        <template v-if="!hideLabels">
            <div
                v-for="snippet in snippets"
                :key="snippet.label"
                :class="clx(
                    'text-ui-contrast-fg-secondary txt-compact-small-plus transition-fg relative cursor-pointer pb-[9px] pr-3',
                    {
                        'text-ui-contrast-fg-primary cursor-default': active.label === snippet.label,
                    }
                )"
                @click="setActive(snippet)"
            >
                <span ref="tabRefs">
                    {{ snippet.label }}
                </span>
            </div>
        </template>
        <div v-if="$slots.default" class="txt-compact-small text-ui-contrast-fg-secondary ml-auto">
            <slot />
        </div>
    </div>
    <div class="w-full px-0.5">
        <div class="bg-ui-contrast-border-top relative h-px w-full">
            <div
                :class="clx(
                    'absolute bottom-0 transition-all motion-reduce:transition-none',
                    'duration-150 ease-linear'
                )"
                :style="indicatorStyle"
            >
                <div class="bg-ui-contrast-fg-primary h-px rounded-full" />
            </div>
        </div>
    </div>
  </div>
</template>
