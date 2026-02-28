<script setup lang="ts">
import { ref, computed } from "vue"
import { useClipboard } from "@vueuse/core"
import { clx } from "@/utils/clx"
import { Tooltip } from "@/components/tooltip"
import { 
    CheckCircleMiniSolid, 
    CheckCircleSolid, 
    SquareTwoStack, 
    SquareTwoStackMini 
} from "@medusa-vue/icons"
import { Primitive } from "radix-vue"

interface CopyProps {
    content: string
    variant?: "mini" | "default" | null
    asChild?: boolean
}

const props = withDefaults(defineProps<CopyProps>(), {
    variant: "default",
    asChild: false
})

const { copy, copied } = useClipboard({ source: props.content, legacy: true })
const open = ref(false)

const handleCopy = (e: Event) => {
    e.stopPropagation()
    copy(props.content)
    open.value = true
    setTimeout(() => {
        open.value = false
    }, 2000)
}

const isDefault = computed(() => props.variant === "default")

const tooltipText = computed(() => copied.value ? "Copied" : "Copy")

</script>

<template>
  <Tooltip :content="tooltipText" :open="copied || open" @update:open="open = $event">
    <Primitive
        :as="asChild ? undefined : 'button'"
        :as-child="asChild"
        type="button"
        aria-label="Copy code snippet"
        :class="clx('h-fit w-fit', $attrs.class)"
        @click="handleCopy"
    >
        <slot>
            <template v-if="copied">
                <CheckCircleSolid v-if="isDefault" class="text-ui-fg-subtle" />
                <CheckCircleMiniSolid v-else class="text-ui-fg-subtle" />
            </template>
            <template v-else>
                <SquareTwoStack v-if="isDefault" class="text-ui-fg-subtle" />
                <SquareTwoStackMini v-else class="text-ui-fg-subtle" />
            </template>
        </slot>
    </Primitive>
  </Tooltip>
</template>
