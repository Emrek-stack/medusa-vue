<script setup lang="ts">
import { computed } from "vue"
import { Input } from "@minima-vue/ui"

interface HandleInputProps {
  modelValue?: string
}

const props = withDefaults(defineProps<HandleInputProps>(), {
  modelValue: "",
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()

const normalized = computed(() => props.modelValue)

const onInput = (event: Event) => {
  const raw = (event.target as HTMLInputElement).value
  const next = raw
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-_]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
  emit("update:modelValue", next)
}
</script>

<template>
  <Input :model-value="normalized" @input="onInput" />
</template>
