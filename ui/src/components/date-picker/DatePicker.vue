<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover" // Using my wrapper which uses Radix
import { Calendar } from "@/components/calendar"
import { TimeInput } from "@/components/time-input"
import { DatePickerField, DatePickerButton, DatePickerClearButton } from "."
import { CalendarMini, Clock, XMarkMini } from "@minima-vue/icons"
import { clx } from "@/utils/clx"
import { cva } from "class-variance-authority"
import { 
    CalendarDate, 
    CalendarDateTime, 
    getLocalTimeZone, 
} from "@internationalized/date"
import { createCalendarDateFromDate } from "@/utils/calendar"

const props = withDefaults(defineProps<{
    modelValue?: Date | null
    defaultValue?: Date | null
    min?: Date
    max?: Date
    granularity?: "day" | "hour" | "minute" | "second"
    hourCycle?: 12 | 24
    locale?: string
    disabled?: boolean
    readonly?: boolean
    placeholder?: string
    size?: "base" | "small"
    modal?: boolean
    shouldCloseOnSelect?: boolean
}>(), {
    size: "base",
    shouldCloseOnSelect: true,
    granularity: "day"
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: Date | null): void
}>()

const isOpen = ref(false)

// Internal value as DateValue (CalendarDate or CalendarDateTime)
// We use a custom parser to handle conversion from Date -> DateValue
const toDateValue = (date: Date): CalendarDate | CalendarDateTime => {
    return createCalendarDateFromDate(date, props.granularity)
}

const innerValue = ref<CalendarDate | CalendarDateTime | null>(
    props.modelValue ? toDateValue(props.modelValue) : (props.defaultValue ? toDateValue(props.defaultValue) : null)
)

watch(() => props.modelValue, (newVal) => {
    if (newVal) {
        innerValue.value = toDateValue(newVal)
    } else {
        innerValue.value = null
    }
})

const handleUpdate = (val: CalendarDate | CalendarDateTime | null) => {
    innerValue.value = val
    if (val) {
        const date = val.toDate(getLocalTimeZone())
        emit('update:modelValue', date)
    } else {
        emit('update:modelValue', null)
    }
}

const handleCalendarUpdate = (date: Date | null) => {
    if (!date) return // Calendar shouldn't emit null on selection usually unless cleared
    
    // We get a JS Date from Calendar (since our Calendar wrapper emits JS Date)
    // We need to merge it with current time if granularity dictates
    // Or just convert and set.
    
    let newVal = createCalendarDateFromDate(date, props.granularity)
    
    if (innerValue.value && 'hour' in innerValue.value && 'hour' in newVal) {
        // Preserve time from old value if logic dictates, but generally Calendar selection sets date.
        // If we have CalendarDateTime, we might want to keep time?
        // The reference implementation uses updateCalendarDateFromDate logic.
        // But our Calendar component emits JS Date.
        // Ideally we should pass DateValue to Calendar?
        // My Calendar component accepts `Date` via `modelValue`.
        // So I'm converting DateValue -> Date -> DateValue. A bit roundtrip but okay.
        
        // If we want to preserve time:
        const oldTime = innerValue.value as CalendarDateTime
        // We set year/month/day from date, keep time from oldTime
        newVal = new CalendarDateTime(
            newVal.year, newVal.month, newVal.day,
            oldTime.hour, oldTime.minute, oldTime.second, oldTime.millisecond
        )
    }
    
    handleUpdate(newVal)
    
    if (props.shouldCloseOnSelect && !hasTime.value) {
        isOpen.value = false
    }
}

const handleTimeUpdate = (val: any) => {
    // val is TimeValue (Time)
    // We need to merge with current date
    if (innerValue.value && val) {
        // Create new CalendarDateTime
        const current = innerValue.value as CalendarDate // or DateTime
        const newVal = new CalendarDateTime(
            current.year, current.month, current.day,
            val.hour, val.minute, val.second, val.millisecond
        )
        handleUpdate(newVal)
    }
}

const hasTime = computed(() => ['hour', 'minute', 'second'].includes(props.granularity))
const Icon = computed(() => hasTime.value ? Clock : CalendarMini)

const datePickerStyles = cva(
    clx(
        "bg-ui-bg-field shadow-borders-base txt-compact-small text-ui-fg-base transition-fg grid items-center gap-2 overflow-hidden rounded-md h-fit w-full",
        "focus-within:shadow-borders-interactive-with-active focus-visible:shadow-borders-interactive-with-active",
        "aria-[invalid=true]:shadow-borders-error invalid:shadow-borders-error"
    ),
    {
        variants: {
            size: {
                small: "grid-cols-[28px_1fr]",
                base: "grid-cols-[32px_1fr]",
            },
            hasValue: {
                true: "",
                false: "pr-2"
            }
        },
        compoundVariants: [
            { size: "small", hasValue: true, class: "grid-cols-[28px_1fr_28px]" },
            { size: "base", hasValue: true, class: "grid-cols-[32px_1fr_32px]" }
        ],
        defaultVariants: {
            size: "base",
            hasValue: false
        }
    }
)

const clear = (e: MouseEvent) => {
    e.stopPropagation()
    handleUpdate(null)
    isOpen.value = false
}

// Prepare date for Calendar (JS Date)
const calendarValue = computed(() => innerValue.value ? innerValue.value.toDate(getLocalTimeZone()) : null)

// Prepare time for TimeInput (TimeValue)
// internalValue can be CalendarDate (no time) or CalendarDateTime.
// If CalendarDate, we defaults to 00:00?
// TimeInput expects TimeValue.
import { Time } from "@internationalized/date"
const timeValue = computed(() => {
    if (innerValue.value && 'hour' in innerValue.value) {
        const v = innerValue.value as CalendarDateTime
        return new Time(v.hour, v.minute, v.second, v.millisecond)
    }
    return null // or new Time(0, 0)
})

</script>

<template>
  <Popover :open="isOpen" @update:open="isOpen = $event" :modal="modal">
    <PopoverTrigger as-child>
        <div 
            :class="clx(datePickerStyles({ size, hasValue: !!innerValue }), $attrs.class)"
        >
            <DatePickerButton :size="size">
                <component :is="Icon" />
            </DatePickerButton>
            
            <DatePickerField 
                :model-value="innerValue as any"
                @update:model-value="(v: any) => handleUpdate(v)"
                :size="size"
                :granularity="granularity"
                :hour-cycle="hourCycle"
                :locale="locale"
                :disabled="disabled"
                :readonly="readonly"
                :min-value="min ? createCalendarDateFromDate(min) : undefined"
                :max-value="max ? createCalendarDateFromDate(max) : undefined"
            />
            
            <DatePickerClearButton v-if="innerValue" @click="clear">
                <XMarkMini />
            </DatePickerClearButton>
        </div>
    </PopoverTrigger>
    <PopoverContent class="flex flex-col divide-y p-0 w-auto">
        <div class="p-3">
            <Calendar 
                :model-value="calendarValue"
                @update:model-value="handleCalendarUpdate"
                :min-value="min"
                :max-value="max"
                :locale="locale"
            />
        </div>
        <div v-if="hasTime" class="p-3 border-t border-ui-border-base">
            <TimeInput 
                :model-value="timeValue"
                @update:model-value="handleTimeUpdate"
                :hour-cycle="hourCycle" 
                :disabled="disabled"
                :readonly="readonly"
            />
        </div>
    </PopoverContent>
  </Popover>
</template>
