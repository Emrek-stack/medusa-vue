<script setup lang="ts">
import { clx } from "@/utils/clx"
import { Kbd } from "@/components/kbd"
import { isInputElement } from "@/utils/is-input-element"
import { useEventListener } from "@vueuse/core"

interface CommandBarCommandProps {
    action: () => void | Promise<void>
    label: string
    shortcut: string
    disabled?: boolean
    type?: "button" | "submit" | "reset"
}

const props = withDefaults(defineProps<CommandBarCommandProps>(), {
    type: "button"
})

const handleKeyDown = (event: KeyboardEvent) => {
    if (isInputElement(document.activeElement)) {
        return
    }

    if (event.key.toLowerCase() === props.shortcut.toLowerCase()) {
        event.preventDefault()
        event.stopPropagation()
        props.action()
    }
}

if (!props.disabled) {
    useEventListener(document, 'keydown', handleKeyDown)
}

</script>

<template>
  <button
    :type="type"
    @click="action"
    :disabled="disabled"
    :class="clx(
        'bg-ui-contrast-bg-base txt-compact-small-plus transition-fg text-ui-contrast-fg-primary flex items-center gap-x-2 px-3 py-2.5 outline-none',
        'focus-visible:bg-ui-contrast-bg-highlight focus-visible:hover:bg-ui-contrast-bg-base-hover hover:bg-ui-contrast-bg-base-hover active:bg-ui-contrast-bg-base-pressed focus-visible:active:bg-ui-contrast-bg-base-pressed disabled:!bg-ui-bg-disabled disabled:!text-ui-fg-disabled',
        'last-of-type:-mr-1 last-of-type:pr-4',
        $attrs.class
    )"
  >
    <span>{{ label }}</span>
    <Kbd class="bg-ui-contrast-bg-subtle border-ui-contrast-border-base text-ui-contrast-fg-secondary">
        {{ shortcut.toUpperCase() }}
    </Kbd>
  </button>
</template>
