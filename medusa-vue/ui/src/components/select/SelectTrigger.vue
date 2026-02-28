<script setup lang="ts">
import { SelectTrigger as RadixSelectTrigger, SelectIcon as RadixSelectIcon } from "radix-vue"
import { TrianglesMini } from "@medusa-vue/icons"
import { cva } from "class-variance-authority"
import { clx } from "@/utils/clx"
import { inject, computed, type Ref } from "vue"

const size = inject<Ref<"base" | "small">>("selectSize")

const triggerVariants = cva(
  clx(
    "bg-ui-bg-field shadow-buttons-neutral transition-fg flex w-full select-none items-center justify-between rounded-md outline-none",
    "data-[placeholder]:text-ui-fg-muted text-ui-fg-base",
    "hover:bg-ui-bg-field-hover",
    "focus-visible:shadow-borders-interactive-with-active data-[state=open]:!shadow-borders-interactive-with-active",
    "aria-[invalid=true]:border-ui-border-error aria-[invalid=true]:shadow-borders-error",
    "invalid:border-ui-border-error invalid:shadow-borders-error",
    "disabled:!bg-ui-bg-disabled disabled:!text-ui-fg-disabled",
    "group/trigger"
  ),
  {
    variants: {
      size: {
        base: "h-8 px-2 py-1.5 txt-compact-small",
        small: "h-7 px-2 py-1 txt-compact-small",
      },
    },
  }
)

const variants = computed(() => {
    return triggerVariants({ size: size?.value ?? "base" })
})

</script>

<template>
  <RadixSelectTrigger
    :class="clx(variants, $attrs.class)"
  >
    <slot />
    <RadixSelectIcon as-child>
        <TrianglesMini class="text-ui-fg-muted group-disabled/trigger:text-ui-fg-disabled" />
    </RadixSelectIcon>
  </RadixSelectTrigger>
</template>
