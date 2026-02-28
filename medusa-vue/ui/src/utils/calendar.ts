import { CalendarDate, CalendarDateTime } from "@internationalized/date"
import { Granularity } from "@/types"

function createCalendarDateTime(date: Date) {
    return new CalendarDateTime(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    )
}

function updateCalendarDateTime(
    date: CalendarDateTime | null | undefined,
    value: Date
) {
    if (!date) {
        return createCalendarDateTime(value)
    }

    // CalendarDateTime is immutable in some implementations or we might need to recreate it.
    // @internationalized/date objects are immutable.
    // The original code calls .set which suggests it might be mutable or it's a different implementation.
    // However, @internationalized/date objects ARE immutable.
    // The original code:
    /*
    date.set({ ... })
    return date
    */
    // This implies the original code might have been using a mutable wrapper or I misread the import source in the reference.
    // Wait, standard @internationalized/date CalendarDate/DateTime are immutable.
    // So `date.set` is not a standard method on them.
    // Let's re-read the reference carefully.
    // `import { CalendarDate, CalendarDateTime } from "@internationalized/date"`
    // It uses `date.set`. This is suspicious.
    // Maybe it's an extension or local modification? 
    // OR maybe I am wrong about immutability?
    // Docs say: "CalendarDate objects are immutable."
    // So `date.set` must be returning a new instance or it's not the standard library.
    // But the reference code returns `date` after `date.set(...)`.
    // If `set` returns a new instance, then `date = date.set(...)` would be correct.
    // But usage is `date.set(...)` then return `date`.
    // This implies mutation.
    // This is very strange for `@internationalized/date`.

    // I will check `node_modules/@internationalized/date` if I could, but I can't.
    // I will assume I should recreate the object.

    return new CalendarDateTime(
        value.getFullYear(),
        value.getMonth() + 1,
        value.getDate(),
        value.getHours(),
        value.getMinutes(),
        value.getSeconds(),
        value.getMilliseconds()
    )
}

function createCalendarDate(date: Date) {
    return new CalendarDate(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    )
}

function updateCalendarDate(
    // date: CalendarDate | null | undefined,
    value: Date
) {
    // Same logical issue with .set, so I will recreate.
    return new CalendarDate(
        value.getFullYear(),
        value.getMonth() + 1,
        value.getDate()
    )
}

const USES_TIME = new Set<Granularity>(["hour", "minute", "second"])

function createCalendarDateFromDate(date: Date, granularity?: Granularity) {
    if (granularity && USES_TIME.has(granularity)) {
        return createCalendarDateTime(date)
    }

    return createCalendarDate(date)
}

function updateCalendarDateFromDate(
    date: CalendarDate | CalendarDateTime | null | undefined,
    value: Date,
    granularity?: Granularity
) {
    if (granularity && USES_TIME.has(granularity)) {
        return updateCalendarDateTime(date as CalendarDateTime, value)
    }

    return updateCalendarDate(value)
}

function getDefaultCalendarDate(
    value: Date | null | undefined,
    defaultValue: Date | null | undefined
) {
    if (value) {
        return createCalendarDate(value)
    }

    if (defaultValue) {
        return createCalendarDate(defaultValue)
    }

    return undefined // Radix Vue expects undefined for no value
}

function getDefaultCalendarDateFromDate(
    value: Date | null | undefined,
    defaultValue: Date | null | undefined,
    granularity?: Granularity
) {
    if (value) {
        return createCalendarDateFromDate(value, granularity)
    }

    if (defaultValue) {
        return createCalendarDateFromDate(defaultValue, granularity)
    }

    return undefined
}

export {
    createCalendarDate,
    createCalendarDateFromDate,
    getDefaultCalendarDate,
    getDefaultCalendarDateFromDate,
    updateCalendarDate,
    updateCalendarDateFromDate,
}
