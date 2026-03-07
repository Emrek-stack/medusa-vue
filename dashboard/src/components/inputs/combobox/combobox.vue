<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@minima-vue/ui"

interface ComboOption {
  value: string
  label: string
}

interface ComboboxProps {
  modelValue?: string
  options?: ComboOption[]
  placeholder?: string
}

withDefaults(defineProps<ComboboxProps>(), {
  modelValue: "",
  options: () => [],
  placeholder: "Select",
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()
</script>

<template>
  <Select :model-value="modelValue" @update:model-value="(value) => emit('update:modelValue', String(value))">
    <SelectTrigger>
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
