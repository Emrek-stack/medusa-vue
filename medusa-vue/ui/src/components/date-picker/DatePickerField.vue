<script setup lang="ts">
import { DateFieldRoot } from "radix-vue"
import { DateSegment } from "@/components/date-segment"
import { clx } from "@/utils/clx"
import { cva } from "class-variance-authority"
import { DateValue } from "@internationalized/date"

const datePickerFieldStyles = cva("flex items-center tabular-nums", {
  variants: {
    size: {
      small: "py-1",
      base: "py-1.5",
    },
  },
  defaultVariants: {
    size: "base",
  },
})

interface DatePickerFieldProps {
    size?: "base" | "small"
    modelValue?: DateValue | null
    defaultValue?: DateValue | null
    granularity?: "day" | "hour" | "minute" | "second"
    hourCycle?: 12 | 24
    locale?: string
    disabled?: boolean
    readonly?: boolean
    minValue?: DateValue
    maxValue?: DateValue
    placeholder?: DateValue
}

const props = withDefaults(defineProps<DatePickerFieldProps>(), {
    size: "base"
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: DateValue | null): void
}>()

</script>

<template>
  <DateFieldRoot
    v-bind="props as any"
    @update:modelValue="emit('update:modelValue', $event as any)"
    :class="clx(datePickerFieldStyles({ size }), $attrs.class)"
    v-slot="{ segments }"
  >
    <div class="flex items-center">
        <template v-for="segment in segments" :key="segment.part">
            <DateSegment :part="segment" />
        </template>
    </div>
  </DateFieldRoot>
</template>
