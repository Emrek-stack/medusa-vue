<script setup lang="ts">
import { AlertDialogRoot as RadixAlertDialogRoot } from "radix-vue"
import { toRef } from "vue"
import { providePromptVariant, type PromptVariant } from "./context"

interface PromptProps {
  open?: boolean
  defaultOpen?: boolean
  variant?: PromptVariant
}

const props = withDefaults(defineProps<PromptProps>(), {
  variant: "danger",
})

const emit = defineEmits<{
  (e: "update:open", value: boolean): void
}>()

providePromptVariant(toRef(props, "variant"))
</script>

<template>
  <RadixAlertDialogRoot
    :open="props.open"
    :default-open="props.defaultOpen"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </RadixAlertDialogRoot>
</template>
