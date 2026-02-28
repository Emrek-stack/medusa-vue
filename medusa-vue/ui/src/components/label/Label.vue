<script setup lang="ts">
import { Label as RadixLabel } from "radix-vue"
import { cva } from "class-variance-authority"
import { clx } from "@/utils/clx"
import { computed } from "vue"

const labelVariants = cva("font-sans", {
  variants: {
    size: {
      xsmall: "txt-compact-xsmall",
      small: "txt-compact-small",
      base: "txt-compact-medium",
      large: "txt-compact-large",
    },
    weight: {
      regular: "font-normal",
      plus: "font-medium",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "regular",
  },
})

interface LabelProps {
  size?: "xsmall" | "small" | "base" | "large"
  weight?: "regular" | "plus"
  asChild?: boolean
}

const props = withDefaults(defineProps<LabelProps>(), {
  size: "base",
  weight: "regular",
  asChild: false
})

const variants = computed(() => {
    return labelVariants({ size: props.size, weight: props.weight })
})

</script>

<template>
  <RadixLabel
    :as-child="asChild"
    :class="clx(variants, $attrs.class)"
  >
    <slot />
  </RadixLabel>
</template>
