<script setup lang="ts">
import { SwitchRoot as RadixSwitchRoot, SwitchThumb as RadixSwitchThumb } from "radix-vue"
import { cva } from "class-variance-authority"
import { clx } from "@/utils/clx"
import { computed } from "vue"

const switchVariants = cva(
  "focus-visible:shadow-borders-interactive-w-focus transition-fg inline-flex shrink-0 cursor-pointer items-center rounded-full border-transparent shadow-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      size: {
        small: "w-7 h-4",
        base: "w-9 h-5",
        large: "w-11 h-6",
      },
      disabled: {
        true: "cursor-not-allowed bg-ui-bg-disabled",
        false: "data-[state=checked]:bg-ui-bg-interactive data-[state=unchecked]:bg-ui-bg-component",
      },
    },
    defaultVariants: {
      size: "base",
      disabled: false,
    },
  }
)

const thumbVariants = cva(
  "pointer-events-none block rounded-full bg-ui-bg-base ring-0 shadow-elevation-card-rest transition-transform",
  {
    variants: {
      size: {
        small: "size-3",
        base: "size-3.5",
        large: "size-5",
      },
      checked: {
        true: "",
        false: "translate-x-0.5",
      },
    },
    compoundVariants: [
      {
        size: "small",
        checked: true,
        class: "translate-x-3.5",
      },
      {
        size: "base",
        checked: true,
        class: "translate-x-5",
      },
      {
        size: "large",
        checked: true,
        class: "translate-x-5.5",
      },
    ],
    defaultVariants: {
      size: "base",
      checked: false,
    },
  }
)

interface SwitchProps {
    size?: "small" | "base" | "large"
    checked?: boolean
    defaultChecked?: boolean
    required?: boolean
    name?: string
    disabled?: boolean
    value?: string
    id?: string
    asChild?: boolean
}

const props = withDefaults(defineProps<SwitchProps>(), {
    size: "base",
    asChild: false
})

const emit = defineEmits<{
    (e: 'update:checked', value: boolean): void
}>()

const rootClass = computed(() => {
    return switchVariants({ size: props.size })
})

const thumbClass = computed(() => {
    return thumbVariants({ size: props.size })
})

</script>

<template>
  <RadixSwitchRoot
    v-bind="props"
    :class="clx(rootClass, $attrs.class)"
    @update:checked="emit('update:checked', $event)"
  >
    <RadixSwitchThumb :class="clx(thumbClass)" />
  </RadixSwitchRoot>
</template>
