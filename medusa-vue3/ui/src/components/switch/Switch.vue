<script setup lang="ts">
import { SwitchRoot as RadixSwitchRoot, SwitchThumb as RadixSwitchThumb } from "radix-vue"
import { cva } from "class-variance-authority"
import { clx } from "@/utils/clx"
import { computed, type PropType } from "vue"

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
        small: "size-3 data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0.5",
        base: "size-3.5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5",
        large: "size-5 data-[state=checked]:translate-x-5.5 data-[state=unchecked]:translate-x-0.5",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
)

const props = defineProps({
  size: {
    type: String as PropType<"small" | "base" | "large">,
    default: "base",
  },
  checked: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  defaultChecked: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  required: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  name: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  disabled: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  value: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  id: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  asChild: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
    (e: 'update:checked', value: boolean): void
}>()

const rootClass = computed(() => {
    return switchVariants({ size: props.size, disabled: props.disabled ?? false })
})

const thumbClass = computed(() => {
    return thumbVariants({ size: props.size })
})

const rootProps = computed(() => ({
  ...(props.checked !== undefined ? { checked: props.checked } : {}),
  ...(props.defaultChecked !== undefined ? { defaultChecked: props.defaultChecked } : {}),
  ...(props.required !== undefined ? { required: props.required } : {}),
  ...(props.name !== undefined ? { name: props.name } : {}),
  ...(props.disabled !== undefined ? { disabled: props.disabled } : {}),
  ...(props.value !== undefined ? { value: props.value } : {}),
  ...(props.id !== undefined ? { id: props.id } : {}),
  ...(props.asChild ? { asChild: props.asChild } : {}),
}))

</script>

<template>
  <RadixSwitchRoot
    v-bind="rootProps"
    :class="clx(rootClass, $attrs.class)"
    @update:checked="emit('update:checked', $event)"
  >
    <RadixSwitchThumb :class="clx(thumbClass)" />
  </RadixSwitchRoot>
</template>
