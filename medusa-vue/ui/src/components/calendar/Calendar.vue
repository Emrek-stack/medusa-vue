<script setup lang="ts">
import { CalendarRoot, CalendarHeader, CalendarHeading, CalendarGrid, CalendarGridHead, CalendarGridBody, CalendarGridRow, CalendarHeadCell, CalendarPrev, CalendarNext } from "radix-vue"
import { TriangleLeftMini, TriangleRightMini } from "@medusa-vue/icons"
import { clx } from "@/utils/clx"
import { CalendarButton } from "./"
import CalendarCell from "./CalendarCell.vue"
import { createCalendarDate, createCalendarDateFromDate } from "@/utils/calendar"
import { getLocalTimeZone } from "@internationalized/date"
import { computed } from "vue"

interface CalendarProps {
    modelValue?: Date | null
    defaultValue?: Date | null
    minValue?: Date
    maxValue?: Date
    locale?: string
    disabled?: boolean
    readonly?: boolean
    fixedWeeks?: boolean
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

const props = defineProps<CalendarProps>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: Date | null): void
}>()

const innerValue = computed({
    get: () => props.modelValue ? createCalendarDateFromDate(props.modelValue) : undefined,
    set: (v) => {
        if (!v) {
            emit('update:modelValue', null)
            return
        }
        emit('update:modelValue', v.toDate(getLocalTimeZone()))
    }
})

</script>

<template>
  <CalendarRoot
    v-slot="{ weekDays, grid }"
    v-model="innerValue"
    :class="clx('flex flex-col gap-y-2', $attrs.class)"
    :locale="locale"
    :disabled="disabled"
    :readonly="readonly"
    :fixed-weeks="fixedWeeks"
    :week-starts-on="weekStartsOn"
    :min-value="minValue ? createCalendarDate(minValue) : undefined"
    :max-value="maxValue ? createCalendarDate(maxValue) : undefined"
  >
    <CalendarHeader class="bg-ui-bg-field border-base grid grid-cols-[28px_1fr_28px] items-center gap-1 rounded-md border p-0.5">
        <CalendarPrev as-child>
            <CalendarButton>
                <TriangleLeftMini />
            </CalendarButton>
        </CalendarPrev>
        <div class="flex items-center justify-center">
             <CalendarHeading class="txt-compact-small-plus" />
        </div>
        <CalendarNext as-child>
            <CalendarButton>
                <TriangleRightMini />
            </CalendarButton>
        </CalendarNext>
    </CalendarHeader>

    <CalendarGrid class="w-full border-collapse space-y-1">
        <CalendarGridHead>
            <CalendarGridRow>
                <CalendarHeadCell
                    v-for="day in weekDays" :key="day"
                    class="txt-compact-small-plus text-ui-fg-muted size-8 p-1 rounded-md bg-transparent border-0"
                >
                    {{ day }}
                </CalendarHeadCell>
            </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody>
            <CalendarGridRow v-for="week in grid" :key="week.toString()">
                 <CalendarCell
                    v-for="day in week" 
                    :key="day.toString()"
                    :date="day as any"
                />
            </CalendarGridRow>
        </CalendarGridBody>
    </CalendarGrid>
  </CalendarRoot>
</template>
