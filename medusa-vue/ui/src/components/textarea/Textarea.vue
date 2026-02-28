<script setup lang="ts">
import { clx } from "@/utils/clx"
import { inputBaseStyles } from "@/components/input"

// Re-export this if needed, but it's internal to input usually. 
// However inputBaseStyles is exported from input package.

defineOptions({
    inheritAttrs: false
})

defineProps<{
    modelValue?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const handleInput = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}

</script>

<template>
  <textarea
    :class="clx(
        inputBaseStyles,
        'txt-small min-h-[60px] w-full px-2 py-1.5',
        $attrs.class
    )"
    :value="modelValue"
    @input="handleInput"
    v-bind="$attrs"
  />
</template>
