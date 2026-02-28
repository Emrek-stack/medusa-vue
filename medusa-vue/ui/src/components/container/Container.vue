<script setup lang="ts">
import { clx } from "@/utils/clx"
import { Primitive } from "radix-vue"

// Container is a simple div wrapper in React.
// We can use Primitive for polymorphism if desired, though React version is just div.
// React version uses `React.forwardRef` and `div`.

// We support asChild.

defineProps<{
    asChild?: boolean
}>()

</script>

<template>
  <Primitive
    :as="asChild ? undefined : 'div'"
    :as-child="asChild"
    :class="clx(
        'shadow-elevation-card-rest bg-ui-bg-base w-full rounded-lg px-6 py-4',
        $attrs.class
    )"
  >
    <slot />
  </Primitive>
</template>
