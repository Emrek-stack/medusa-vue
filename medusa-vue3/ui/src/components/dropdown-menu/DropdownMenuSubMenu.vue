<script setup lang="ts">
import { DropdownMenuSub as RadixDropdownMenuSub } from "radix-vue"
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
})

const emit = defineEmits<{
    (e: 'update:open', value: boolean): void
}>()

const rootProps = computed(() => ({
  ...(props.open !== undefined ? { open: props.open } : {}),
  ...(props.defaultOpen !== undefined ? { defaultOpen: props.defaultOpen } : {}),
}))

</script>

<template>
  <RadixDropdownMenuSub v-bind="rootProps" @update:open="emit('update:open', $event)">
    <slot />
  </RadixDropdownMenuSub>
</template>
