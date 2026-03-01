<script setup lang="ts">
import { AlertDialogRoot as RadixAlertDialogRoot } from "radix-vue"
import { computed, toRef, type PropType } from "vue"
import { providePromptVariant, type PromptVariant } from "./context"

const props = defineProps({
  open: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  defaultOpen: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  variant: {
    type: String as PropType<PromptVariant>,
    default: "danger",
  },
})

const emit = defineEmits<{
  (e: "update:open", value: boolean): void
}>()

providePromptVariant(toRef(props, "variant"))

const rootProps = computed(() => ({
  ...(props.open !== undefined ? { open: props.open } : {}),
  ...(props.defaultOpen !== undefined ? { defaultOpen: props.defaultOpen } : {}),
}))
</script>

<template>
  <RadixAlertDialogRoot
    v-bind="rootProps"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </RadixAlertDialogRoot>
</template>
