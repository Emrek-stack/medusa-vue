<script setup lang="ts">
import { DateFieldRoot } from "radix-vue"
import { DateSegment } from "@/components/date-segment"
import { clx } from "@/utils/clx"
import { Time } from "@internationalized/date"

interface TimeInputProps {
    modelValue?: Time | null
    defaultValue?: Time | null
    hourCycle?: 12 | 24
    disabled?: boolean
    readonly?: boolean
}

defineProps<TimeInputProps>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: Time | null): void
}>()

</script>

<template>
  <DateFieldRoot
    v-model="modelValue as any"
    :default-value="defaultValue as any"
    :hour-cycle="hourCycle"
    :disabled="disabled"
    :readonly="readonly"
    :class="clx(
        'bg-ui-bg-field shadow-borders-base txt-compact-small flex items-center rounded-md px-2 py-1',
        {
          'opacity-50 pointer-events-none': disabled,
        },
        $attrs.class
    )"
    v-slot="{ segments }"
  >
     <div class="flex items-center">
            <template v-for="segment in segments" :key="segment.part">
                <DateSegment :part="segment.part" :value="segment.value" />
            </template>
     </div>
  </DateFieldRoot>
</template>
