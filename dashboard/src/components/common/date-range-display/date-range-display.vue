<script setup lang="ts">
import { computed } from "vue"
import { Text } from "@minima-vue/ui"

interface DateRangeDisplayProps {
  startsAt?: Date | string | null
  endsAt?: Date | string | null
  showTime?: boolean
}

const props = withDefaults(defineProps<DateRangeDisplayProps>(), {
  showTime: false,
})

const startDate = computed(() => (props.startsAt ? new Date(props.startsAt) : null))
const endDate = computed(() => (props.endsAt ? new Date(props.endsAt) : null))

const format = (value: Date | null) => {
  if (!value) {
    return "-"
  }

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: props.showTime ? "short" : undefined,
  }).format(value)
}

const inFuture = (value: Date | null) => Boolean(value && value > new Date())
</script>

<template>
  <div class="grid gap-3 md:grid-cols-2">
    <div class="shadow-elevation-card-rest bg-ui-bg-component text-ui-fg-subtle flex items-center gap-x-3 rounded-md px-3 py-1.5">
      <div :class="['h-8 w-1 rounded-full', inFuture(startDate) ? 'bg-ui-tag-orange-icon' : 'bg-ui-tag-neutral-icon']" />
      <div>
        <Text weight="plus" size="small">Start Date</Text>
        <Text size="small" class="tabular-nums">{{ format(startDate) }}</Text>
      </div>
    </div>

    <div class="shadow-elevation-card-rest bg-ui-bg-component text-ui-fg-subtle flex items-center gap-x-3 rounded-md px-3 py-1.5">
      <div :class="['h-8 w-1 rounded-full', inFuture(endDate) ? 'bg-ui-tag-orange-icon' : 'bg-ui-tag-neutral-icon']" />
      <div>
        <Text weight="plus" size="small">End Date</Text>
        <Text size="small" class="tabular-nums">{{ format(endDate) }}</Text>
      </div>
    </div>
  </div>
</template>
