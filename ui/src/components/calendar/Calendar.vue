<script setup lang="ts">
import { CalendarRoot, CalendarHeader, CalendarHeading, CalendarGrid, CalendarGridHead, CalendarGridBody, CalendarGridRow, CalendarHeadCell, CalendarPrev, CalendarNext } from "radix-vue"
import { TriangleLeftMini, TriangleRightMini } from "@minima-vue/icons"
import { clx } from "@/utils/clx"
import { CalendarButton } from "."
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
    get: () => {
        if (!props.modelValue) return undefined;
        return createCalendarDateFromDate(props.modelValue);
    },
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

    <div class="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 sm:gap-y-0">
        <CalendarGrid v-for="month in grid" :key="month.value.toString()" class="w-full border-collapse space-y-1">
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
                <CalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`">
                     <CalendarCell
                        v-for="weekDate in weekDates" 
                        :key="weekDate.toString()"
                        :date="weekDate as any"
                        :month="month.value as any"
                    />
                </CalendarGridRow>
            </CalendarGridBody>
        </CalendarGrid>
    </div>
  </CalendarRoot>
</template>
