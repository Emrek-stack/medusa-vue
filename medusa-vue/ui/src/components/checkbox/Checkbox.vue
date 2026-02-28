<script setup lang="ts">
import { CheckboxRoot as RadixCheckbox } from "radix-vue"
import { CheckMini, MinusMini } from "@medusa-vue/icons"
import { clx } from "@/utils/clx"

interface CheckboxProps {
    checked?: boolean | "indeterminate"
    disabled?: boolean
    name?: string
    required?: boolean
    value?: string
    id?: string
    asChild?: boolean
}

const props = withDefaults(defineProps<CheckboxProps>(), {
    asChild: false
})

const emit = defineEmits<{
    (e: 'update:checked', value: boolean | "indeterminate"): void
}>()

</script>

<template>
  <RadixCheckbox.Root
    v-bind="props"
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
      <RadixCheckbox.Indicator>
        <MinusMini v-if="checked === 'indeterminate'" />
        <CheckMini v-else />
      </RadixCheckbox.Indicator>
    </div>
  </RadixCheckbox.Root>
</template>
