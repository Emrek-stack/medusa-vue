<script lang="ts">
import { cva } from "class-variance-authority"

export const headingVariants = cva("font-sans font-medium", {
  variants: {
    level: {
      h1: "h1-core",
      h2: "h2-core",
      h3: "h3-core",
    },
  },
  defaultVariants: {
    level: "h1",
  },
})
export interface HeadingProps {
    level?: "h1" | "h2" | "h3"
    asChild?: boolean
}

export interface HeadingProps {
    level?: "h1" | "h2" | "h3"
    asChild?: boolean
}
</script>

<script setup lang="ts">
import { Primitive } from "radix-vue"
import { clx } from "@/utils/clx"
import { computed } from "vue"

const props = withDefaults(defineProps<HeadingProps>(), {
    level: "h1",
    asChild: false
})

const variants = computed(() => {
    return headingVariants({ level: props.level })
})

</script>

<template>
  <Primitive
    :as="asChild ? undefined : (level as any)"
    :as-child="asChild"
    :class="clx(variants, $attrs.class)"
  >
    <slot />
  </Primitive>
</template>
