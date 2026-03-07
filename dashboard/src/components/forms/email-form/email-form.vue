<script setup lang="ts">
import { Input } from "@minima-vue/ui"

interface EmailFormProps {
  modelValue?: string
}

withDefaults(defineProps<EmailFormProps>(), {
  modelValue: "",
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()

const onInput = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value)
}
</script>

<template>
  <Input type="email" :model-value="modelValue" placeholder="email@example.com" @input="onInput" />
</template>
