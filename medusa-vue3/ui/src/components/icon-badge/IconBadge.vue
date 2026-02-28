<script setup lang="ts">
import { Primitive } from "radix-vue"
import { cva } from "class-variance-authority"
import { computed } from "vue"
import { clx } from "@/utils/clx"

const iconBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border [&_svg]:shrink-0",
  {
    variants: {
      color: {
        green:
          "bg-ui-tag-green-bg text-ui-tag-green-icon border-ui-tag-green-border",
        red: "bg-ui-tag-red-bg text-ui-tag-red-icon border-ui-tag-red-border",
        blue: "bg-ui-tag-blue-bg text-ui-tag-blue-icon border-ui-tag-blue-border",
        orange:
          "bg-ui-tag-orange-bg text-ui-tag-orange-icon border-ui-tag-orange-border",
        grey:
          "bg-ui-tag-neutral-bg text-ui-tag-neutral-icon border-ui-tag-neutral-border",
        purple:
          "bg-ui-tag-purple-bg text-ui-tag-purple-icon border-ui-tag-purple-border",
      },
      size: {
        base: "h-8 w-8 [&_svg]:h-4 [&_svg]:w-4",
        large: "h-10 w-10 [&_svg]:h-5 [&_svg]:w-5",
      },
    },
    defaultVariants: {
      color: "grey",
      size: "base",
    },
  }
)

interface IconBadgeProps {
  asChild?: boolean
  color?: "green" | "red" | "blue" | "orange" | "grey" | "purple"
  size?: "base" | "large"
}

const props = withDefaults(defineProps<IconBadgeProps>(), {
  asChild: false,
  color: "grey",
  size: "base",
})

const variants = computed(() =>
  iconBadgeVariants({
    color: props.color,
    size: props.size,
  })
)
</script>

<template>
  <Primitive
    :as="asChild ? undefined : 'span'"
    :as-child="asChild"
    :class="clx(variants, $attrs.class)"
  >
    <slot />
  </Primitive>
</template>
