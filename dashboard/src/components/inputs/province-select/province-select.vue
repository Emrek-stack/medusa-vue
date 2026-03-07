<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@minima-vue/ui"

interface ProvinceOption {
  code: string
  name: string
}

interface ProvinceSelectProps {
  modelValue?: string
  provinces?: ProvinceOption[]
}

withDefaults(defineProps<ProvinceSelectProps>(), {
  modelValue: "",
  provinces: () => [],
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()
</script>

<template>
  <Select :model-value="modelValue" @update:model-value="(value) => emit('update:modelValue', String(value))">
    <SelectTrigger>
      <SelectValue placeholder="Select province" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="province in provinces" :key="province.code" :value="province.code">
        {{ province.name }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
