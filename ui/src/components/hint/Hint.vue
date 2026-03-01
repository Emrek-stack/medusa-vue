<script setup lang="ts">
import { cva } from "class-variance-authority"
import { ExclamationCircleSolid } from "@minima-vue/icons"
import { clx } from "@/utils/clx"
import { computed } from "vue"

const hintVariants = cva("txt-small", {
  variants: {
    variant: {
      info: "text-ui-fg-subtle",
      error: "text-ui-fg-error grid grid-cols-[20px_1fr] gap-1 items-start",
    },
  },
  defaultVariants: {
    variant: "info",
  },
})

interface HintProps {
    variant?: "info" | "error"
}

const props = withDefaults(defineProps<HintProps>(), {
    variant: "info"
})

const variants = computed(() => {
    return hintVariants({ variant: props.variant })
})

</script>

<template>
  <span
    :class="clx(variants, $attrs.class)"
  >
    <div v-if="variant === 'error'" class="size-5 flex items-center justify-center">
        <ExclamationCircleSolid />
    </div>
    <slot />
  </span>
</template>
