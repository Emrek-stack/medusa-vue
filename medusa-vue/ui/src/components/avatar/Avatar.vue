<script setup lang="ts">
import { AvatarRoot, AvatarImage, AvatarFallback } from "radix-vue"
import { cva } from "class-variance-authority"
import { clx } from "@/utils/clx"
import { computed } from "vue"

const avatarVariants = cva(
  "flex shrink-0 items-center justify-center overflow-hidden shadow-borders-base bg-ui-bg-base",
  {
    variants: {
      variant: {
        squared: "",
        rounded: "rounded-full",
      },
      size: {
        "2xsmall": "h-5 w-5",
        xsmall: "h-6 w-6",
        small: "h-7 w-7",
        base: "h-8 w-8",
        large: "h-10 w-10",
        xlarge: "h-12 w-12",
      },
    },
    compoundVariants: [
      {
        variant: "squared",
        size: "2xsmall",
        class: "rounded",
      },
      {
        variant: "squared",
        size: "xsmall",
        class: "rounded-md",
      },
      {
        variant: "squared",
        size: "small",
        class: "rounded-md",
      },
      {
        variant: "squared",
        size: "base",
        class: "rounded-md",
      },
      {
        variant: "squared",
        size: "large",
        class: "rounded-lg",
      },
      {
        variant: "squared",
        size: "xlarge",
        class: "rounded-xl",
      },
    ],
    defaultVariants: {
      variant: "rounded",
      size: "base",
    },
  }
)

const innerVariants = cva(
  "aspect-square object-cover object-center",
  {
    variants: {
      variant: {
        squared: "",
        rounded: "rounded-full",
      },
      size: {
        "2xsmall": "txt-compact-xsmall-plus size-4",
        xsmall: "txt-compact-xsmall-plus size-5",
        small: "txt-compact-small-plus size-6",
        base: "txt-compact-small-plus size-7",
        large: "txt-compact-medium-plus size-9",
        xlarge: "txt-compact-large-plus size-11",
      },
    },
    compoundVariants: [
      {
        variant: "squared",
        size: "2xsmall",
        class: "rounded-sm",
      },
      {
        variant: "squared",
        size: "xsmall",
        class: "rounded",
      },
      {
        variant: "squared",
        size: "small",
        class: "rounded",
      },
      {
        variant: "squared",
        size: "base",
        class: "rounded",
      },
      {
        variant: "squared",
        size: "large",
        class: "rounded-md",
      },
      {
        variant: "squared",
        size: "xlarge",
        class: "rounded-[10px]",
      },
    ],
    defaultVariants: {
      variant: "rounded",
      size: "base",
    },
  }
)

interface AvatarProps {
  variant?: "squared" | "rounded"
  size?: "2xsmall" | "xsmall" | "small" | "base" | "large" | "xlarge"
  src?: string
  fallback: string
  asChild?: boolean
}

const props = withDefaults(defineProps<AvatarProps>(), {
  variant: "rounded",
  size: "base",
  asChild: false
})

const rootClass = computed(() => {
    return avatarVariants({ variant: props.variant, size: props.size })
})

const innerClass = computed(() => {
    return innerVariants({ variant: props.variant, size: props.size })
})

</script>

<template>
  <AvatarRoot
    :as-child="asChild"
    :class="clx(rootClass, $attrs.class)"
  >
    <AvatarImage
      v-if="src"
      :src="src"
      :class="innerClass"
    />
    <AvatarFallback
      :class="clx(
        innerClass,
        'bg-ui-bg-component-hover text-ui-fg-subtle pointer-events-none flex select-none items-center justify-center'
      )"
    >
      {{ fallback }}
    </AvatarFallback>
  </AvatarRoot>
</template>
