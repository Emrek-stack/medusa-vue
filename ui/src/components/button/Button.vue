<script setup lang="ts">
import { Primitive } from "radix-vue"
import { cva } from "class-variance-authority"
import { clx } from "@/utils/clx"
import { Spinner } from "@minima-vue/icons"
import { computed } from "vue"

const buttonVariants = cva(
  clx(
    "transition-fg relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none",
    "disabled:bg-ui-bg-disabled disabled:border-ui-border-base disabled:text-ui-fg-disabled disabled:shadow-buttons-neutral disabled:after:hidden",
    "after:transition-fg after:absolute after:inset-0 after:content-['']"
  ),
  {
    variants: {
      variant: {
        primary: clx(
          "shadow-buttons-inverted text-ui-contrast-fg-primary bg-ui-button-inverted after:button-inverted-gradient",
          "hover:bg-ui-button-inverted-hover hover:after:button-inverted-hover-gradient",
          "active:bg-ui-button-inverted-pressed active:after:button-inverted-pressed-gradient",
          "focus-visible:!shadow-buttons-inverted-focus"
        ),
        secondary: clx(
          "shadow-buttons-neutral text-ui-fg-base bg-ui-button-neutral after:button-neutral-gradient",
          "hover:bg-ui-button-neutral-hover hover:after:button-neutral-hover-gradient",
          "active:bg-ui-button-neutral-pressed active:after:button-neutral-pressed-gradient",
          "focus-visible:shadow-buttons-neutral-focus"
        ),
        transparent: clx(
          "after:hidden",
          "text-ui-fg-base bg-ui-button-transparent",
          "hover:bg-ui-button-transparent-hover",
          "active:bg-ui-button-transparent-pressed",
          "focus-visible:shadow-buttons-neutral-focus focus-visible:bg-ui-bg-base",
          "disabled:!bg-transparent disabled:!shadow-none"
        ),
        danger: clx(
          "shadow-buttons-colored shadow-buttons-danger text-ui-fg-on-color bg-ui-button-danger after:button-danger-gradient",
          "hover:bg-ui-button-danger-hover hover:after:button-danger-hover-gradient",
          "active:bg-ui-button-danger-pressed active:after:button-danger-pressed-gradient",
          "focus-visible:shadow-buttons-danger-focus"
        ),
      },
      size: {
        small: "txt-compact-small-plus gap-x-1.5 px-2 py-1",
        base: "txt-compact-small-plus gap-x-1.5 px-3 py-1.5",
        large: "txt-compact-medium-plus gap-x-1.5 px-4 py-2.5",
        xlarge: "txt-compact-large-plus gap-x-1.5 px-5 py-3.5",
      },
    },
    defaultVariants: {
      size: "base",
      variant: "primary",
    },
  }
)

interface ButtonProps {
  variant?: "primary" | "secondary" | "transparent" | "danger"
  size?: "small" | "base" | "large" | "xlarge"
  isLoading?: boolean
  asChild?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "base",
  isLoading: false,
  asChild: false,
  disabled: false
})

const variants = computed(() => {
    return buttonVariants({ variant: props.variant, size: props.size })
})

</script>

<template>
  <Primitive
    :as="asChild ? undefined : 'button'"
    :as-child="asChild"
    :class="variants"
    :disabled="disabled || isLoading"
  >
    <div v-if="isLoading" class="pointer-events-none">
        <div class="bg-ui-bg-disabled absolute inset-0 flex items-center justify-center rounded-md">
            <Spinner class="animate-spin" />
        </div>
        <slot />
    </div>
    <slot v-else />
  </Primitive>
</template>
