<script setup lang="ts">
import { clx } from "@/utils/clx"
import { cva } from "class-variance-authority"

const statusBadgeVariants = cva(
  "flex items-center justify-center w-5 h-[18px] [&_div]:w-2 [&_div]:h-2 [&_div]:rounded-sm",
  {
    variants: {
      color: {
        green: "[&_div]:bg-ui-tag-green-icon",
        red: "[&_div]:bg-ui-tag-red-icon",
        orange: "[&_div]:bg-ui-tag-orange-icon",
        blue: "[&_div]:bg-ui-tag-blue-icon",
        purple: "[&_div]:bg-ui-tag-purple-icon",
        grey: "[&_div]:bg-ui-tag-neutral-icon",
      },
    },
    defaultVariants: {
      color: "grey",
    },
  }
)

interface StatusBadgeProps {
    color?: "green" | "red" | "orange" | "blue" | "purple" | "grey"
}

const props = withDefaults(defineProps<StatusBadgeProps>(), {
    color: "grey"
})
</script>

<template>
  <span
    :class="clx(
      'txt-compact-xsmall-plus bg-ui-bg-subtle text-ui-fg-subtle border-ui-border-base box-border flex w-fit select-none items-center overflow-hidden rounded-md border pl-0 pr-1 leading-none',
      $attrs.class
    )"
  >
    <div role="presentation" :class="statusBadgeVariants({ color: props.color })">
      <div />
    </div>
    <slot />
  </span>
</template>
