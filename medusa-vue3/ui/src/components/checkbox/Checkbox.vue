<script setup lang="ts">
import { CheckboxRoot as RadixCheckbox, CheckboxIndicator } from "radix-vue"
import { CheckMini, MinusMini } from "@medusa-vue/icons"
import { clx } from "@/utils/clx"
import { computed, type PropType } from "vue"

const props = defineProps({
  checked: {
    type: [Boolean, String] as PropType<boolean | "indeterminate" | undefined>,
    default: undefined,
  },
  defaultChecked: {
    type: [Boolean, String] as PropType<boolean | "indeterminate" | undefined>,
    default: undefined,
  },
  disabled: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  name: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  required: {
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
    (e: 'update:checked', value: boolean | "indeterminate"): void
}>()

const rootProps = computed(() => ({
  ...(props.checked !== undefined ? { checked: props.checked } : {}),
  ...(props.defaultChecked !== undefined ? { defaultChecked: props.defaultChecked } : {}),
  ...(props.disabled !== undefined ? { disabled: props.disabled } : {}),
  ...(props.name !== undefined ? { name: props.name } : {}),
  ...(props.required !== undefined ? { required: props.required } : {}),
  ...(props.value !== undefined ? { value: props.value } : {}),
  ...(props.id !== undefined ? { id: props.id } : {}),
  ...(props.asChild ? { asChild: props.asChild } : {}),
}))

</script>

<template>
  <RadixCheckbox
    v-bind="rootProps"
    :class="clx(
        'group inline-flex h-5 w-5 items-center justify-center outline-none',
        $attrs.class
    )"
    @update:checked="emit('update:checked', $event)"
  >
    <div
      :class="clx(
        'text-ui-fg-on-inverted bg-ui-bg-base shadow-borders-base [&_path]:shadow-details-contrast-on-bg-interactive transition-fg h-[15px] w-[15px] rounded-[3px]',
        'group-disabled:cursor-not-allowed group-disabled:opacity-50',
        'group-focus-visible:!shadow-borders-interactive-with-focus',
        'group-hover:group-enabled:group-data-[state=unchecked]:bg-ui-bg-base-hover',
        'group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow',
        'group-data-[state=indeterminate]:bg-ui-bg-interactive group-data-[state=indeterminate]:shadow-borders-interactive-with-shadow'
      )"
    >
      <CheckboxIndicator>
        <MinusMini v-if="checked === 'indeterminate'" />
        <CheckMini v-else />
      </CheckboxIndicator>
    </div>
  </RadixCheckbox>
</template>
