<script setup lang="ts">
import { DropdownMenuRoot as RadixDropdownMenuRoot } from "radix-vue"
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
  dir: {
    type: String as PropType<"ltr" | "rtl" | undefined>,
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
  ...(props.dir !== undefined ? { dir: props.dir } : {}),
  ...(props.modal !== undefined ? { modal: props.modal } : {}),
}))

</script>

<template>
  <RadixDropdownMenuRoot v-bind="rootProps" @update:open="emit('update:open', $event)">
    <slot />
  </RadixDropdownMenuRoot>
</template>
