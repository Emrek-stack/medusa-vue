<script setup lang="ts">
import { clx } from "@/utils/clx"
import { cva } from "class-variance-authority"

const datePickerButtonStyles = cva(
    clx(
        "text-ui-fg-muted transition-fg flex items-center justify-center outline-none",
        "group-aria-[invalid=true]/date-picker:text-ui-fg-error",
        "group-disabled/date-picker:text-ui-fg-disabled"
    ),
    {
        variants: {
            size: {
                base: "size-8",
                small: "size-7",
            }
        },
        defaultVariants: {
            size: "base"
        }
    }
)

interface DatePickerButtonProps {
    size?: "base" | "small"
}

defineProps<DatePickerButtonProps>()
</script>

<template>
  <button
    type="button"
    :class="clx(datePickerButtonStyles({ size }), $attrs.class)"
  >
    <slot />
  </button>
</template>
