<script setup lang="ts">
import { Slot } from "radix-vue"
import { Spinner } from "@minima-vue/icons"
import { cva, type VariantProps } from "class-variance-authority"
import { clx } from "@/utils/clx"
import { computed } from "vue"

const iconButtonVariants = cva(
  clx(
    "transition-fg inline-flex w-fit items-center justify-center overflow-hidden rounded-md outline-none",
    "disabled:bg-ui-bg-disabled disabled:shadow-buttons-neutral disabled:text-ui-fg-disabled "
  ),
  {
    variants: {
      variant: {
        primary: clx(
          "shadow-buttons-neutral text-ui-fg-subtle bg-ui-button-neutral",
          "hover:bg-ui-button-neutral-hover",
          "active:bg-ui-button-neutral-pressed",
          "focus-visible:shadow-buttons-neutral-focus"
        ),
        transparent: clx(
          "text-ui-fg-subtle bg-ui-button-transparent",
          "hover:bg-ui-button-transparent-hover",
          "active:bg-ui-button-transparent-pressed",
          "focus-visible:shadow-buttons-neutral-focus focus-visible:bg-ui-bg-base",
          "disabled:!bg-transparent disabled:!shadow-none"
        ),
      },
      size: {
        "2xsmall": "h-5 w-5",
        xsmall: "h-6 w-6 p-1",
        small: "h-7 w-7 p-1",
        base: "h-8 w-8 p-1.5",
        large: "h-10 w-10 p-2.5",
        xlarge: "h-12 w-12 p-3.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
    },
  }
)

type IconButtonVariants = VariantProps<typeof iconButtonVariants>

interface IconButtonProps {
    variant?: IconButtonVariants['variant']
    size?: IconButtonVariants['size']
    asChild?: boolean
    isLoading?: boolean
    disabled?: boolean
}

const props = withDefaults(defineProps<IconButtonProps>(), {
    variant: "primary",
    size: "base",
    asChild: false,
    isLoading: false,
    disabled: false
})

const variants = computed(() => {
    return iconButtonVariants({ variant: props.variant, size: props.size })
})

</script>

<template>
  <component
    :is="asChild ? Slot : 'button'"
    :class="clx(variants, $attrs.class)"
    :disabled="disabled || isLoading"
  >
    <span v-if="isLoading" class="pointer-events-none">
        <div :class="clx('bg-ui-bg-disabled absolute inset-0 flex items-center justify-center rounded-md')">
            <Spinner class="animate-spin" />
        </div>
        <slot />
    </span>
    <slot v-else />
  </component>
</template>
