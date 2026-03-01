<script setup lang="ts">
import { Primitive } from "radix-vue"
import { cva } from "class-variance-authority"
import { clx } from "@/utils/clx"
import { computed } from "vue"

const textVariants = cva("", {
  variants: {
    size: {
      xsmall: "",
      small: "",
      base: "",
      large: "",
      xlarge: "",
    },
    weight: {
      regular: "font-normal",
      plus: "font-medium",
    },
    family: {
      sans: "font-sans",
      mono: "font-mono",
    },
    leading: {
      normal: "",
      compact: "",
    },
  },
  defaultVariants: {
    family: "sans",
    size: "base",
    weight: "regular",
    leading: "normal",
  },
  compoundVariants: [
    {
      size: "xsmall",
      leading: "normal",
      class: "txt-xsmall",
    },
    {
      size: "xsmall",
      leading: "compact",
      class: "txt-compact-xsmall",
    },
    {
      size: "small",
      leading: "normal",
      class: "txt-small",
    },
    {
      size: "small",
      leading: "compact",
      class: "txt-compact-small",
    },
    {
      size: "base",
      leading: "normal",
      class: "txt-medium",
    },
    {
      size: "base",
      leading: "compact",
      class: "txt-compact-medium",
    },
    {
      size: "large",
      leading: "normal",
      class: "txt-large",
    },
    {
      size: "large",
      leading: "compact",
      class: "txt-compact-large",
    },
    {
      size: "xlarge",
      leading: "normal",
      class: "txt-xlarge",
    },
    {
      size: "xlarge",
      leading: "compact",
      class: "txt-compact-xlarge",
    },
  ],
})

interface TextProps {
  size?: "xsmall" | "small" | "base" | "large" | "xlarge"
  weight?: "regular" | "plus"
  leading?: "normal" | "compact"
  family?: "sans" | "mono"
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<TextProps>(), {
  asChild: false,
  as: "p",
  family: "sans",
  size: "base",
  weight: "regular",
  leading: "normal"
})

const variants = computed(() => {
    return textVariants({ size: props.size, weight: props.weight, family: props.family, leading: props.leading })
})

</script>

<template>
  <Primitive
    :as="asChild ? undefined : as"
    :as-child="asChild"
    :class="clx(variants, $attrs.class)"
  >
    <slot />
  </Primitive>
</template>
