<script setup lang="ts">
import { computed } from "vue"
import { Button, Input } from "@minima-vue/ui"

interface MetadataFormProps {
  modelValue?: Record<string, string>
}

const props = withDefaults(defineProps<MetadataFormProps>(), {
  modelValue: () => ({}),
})

const emit = defineEmits<{
  (e: "update:modelValue", value: Record<string, string>): void
}>()

const entries = computed(() => Object.entries(props.modelValue))

const updateEntry = (key: string, value: string) => {
  emit("update:modelValue", {
    ...props.modelValue,
    [key]: value,
  })
}

const removeEntry = (key: string) => {
  const next = { ...props.modelValue }
  delete next[key]
  emit("update:modelValue", next)
}

const addEntry = () => {
  let index = 1
  let key = `key_${index}`
  while (key in props.modelValue) {
    index += 1
    key = `key_${index}`
  }

  emit("update:modelValue", {
    ...props.modelValue,
    [key]: "",
  })
}

const onValueInput = (key: string) => (event: Event) => {
  updateEntry(key, (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="space-y-2">
    <div v-for="[key, value] in entries" :key="key" class="grid grid-cols-[1fr_1fr_auto] gap-2">
      <Input :model-value="key" disabled />
      <Input :model-value="value" @input="onValueInput(key)" />
      <Button size="small" variant="transparent" @click="removeEntry(key)">Remove</Button>
    </div>
    <Button size="small" variant="secondary" @click="addEntry">Add metadata</Button>
  </div>
</template>
