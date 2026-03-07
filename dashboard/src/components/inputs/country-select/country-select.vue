<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@minima-vue/ui"

interface CountryOption {
  code: string
  name: string
}

interface CountrySelectProps {
  modelValue?: string
  countries?: CountryOption[]
}

const props = withDefaults(defineProps<CountrySelectProps>(), {
  modelValue: "",
  countries: () => [],
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()
</script>

<template>
  <Select :model-value="modelValue" @update:model-value="(value) => emit('update:modelValue', String(value))">
    <SelectTrigger>
      <SelectValue placeholder="Select country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="country in countries" :key="country.code" :value="country.code">
        {{ country.name }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
