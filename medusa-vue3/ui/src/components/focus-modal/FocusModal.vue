<script setup lang="ts">
import { DialogRoot as RadixDialogRoot } from "radix-vue"
import { computed, type PropType } from "vue"

const props = defineProps({
  open: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  defaultOpen: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  modal: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
})

const emit = defineEmits<{
    (e: 'update:open', value: boolean): void
}>()

const rootProps = computed(() => ({
  ...(props.open !== undefined ? { open: props.open } : {}),
  ...(props.defaultOpen !== undefined ? { defaultOpen: props.defaultOpen } : {}),
  ...(props.modal !== undefined ? { modal: props.modal } : {}),
}))

</script>

<template>
  <RadixDialogRoot
    v-bind="rootProps"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </RadixDialogRoot>
</template>
