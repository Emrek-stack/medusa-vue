<script setup lang="ts">
import { CalendarCell as RadixCalendarCell, CalendarCellTrigger as RadixCalendarCellTrigger } from "radix-vue"
import { CalendarDate, getLocalTimeZone, isToday } from "@internationalized/date"
import { clx } from "@/utils/clx"

const props = defineProps<{
    date: CalendarDate,
    month: CalendarDate
}>()

// isToday check. 
// @internationalized/date provides isToday(date, timeZone)
const _isToday = isToday(props.date, getLocalTimeZone())

const day = props.date

</script>

<template>
  <RadixCalendarCell :date="date" class="p-1">
    <RadixCalendarCellTrigger
        :day="day"
        :month="month"
        :class="clx(
            'bg-ui-bg-base text-ui-fg-base transition-fg relative flex size-8 items-center justify-center rounded-md p-1 outline-none text-sm font-normal transition-fg border border-transparent',
            'hover:bg-ui-bg-base-hover',
            'focus-visible:shadow-borders-focus focus-visible:border-ui-border-interactive',
            'data-[selected]:!bg-ui-bg-interactive data-[selected]:!text-ui-fg-on-color',
            'data-[disabled]:text-ui-fg-muted data-[disabled]:hover:!bg-ui-bg-base data-[disabled]:cursor-default',
            'data-[unavailable]:text-ui-fg-muted data-[unavailable]:hover:!bg-ui-bg-base data-[unavailable]:cursor-default',
            'data-[outside-view]:hidden',
            $attrs.class
        )"
    >
        {{ date.day }}
        <div
            v-if="_isToday"
            role="none"
            :class="clx(
                'bg-ui-bg-interactive absolute bottom-[3px] left-1/2 size-[3px] -translate-x-1/2 rounded-full transition-fg',
                'data-[selected]:bg-ui-fg-on-color' 
            )"
        />
    </RadixCalendarCellTrigger>
  </RadixCalendarCell>
</template>
