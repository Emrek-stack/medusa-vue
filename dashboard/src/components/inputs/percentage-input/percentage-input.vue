<script setup lang="ts">
import { computed } from "vue"
import { Input } from "@minima-vue/ui"

interface PercentageInputProps {
  modelValue?: number | null
}

const props = withDefaults(defineProps<PercentageInputProps>(), {
  modelValue: null,
})

const emit = defineEmits<{
  (e: "update:modelValue", value: number | null): void
}>()

const value = computed(() => (props.modelValue == null ? "" : String(props.modelValue)))

const onInput = (event: Event) => {
  const raw = (event.target as HTMLInputElement).value
  if (raw === "") {
    emit("update:modelValue", null)
    return
  }

  const parsed = Number(raw)
  if (Number.isNaN(parsed)) {
    return
  }

  const normalized = Math.max(0, Math.min(100, parsed))
  emit("update:modelValue", normalized)
}
</script>

<template>
  <div class="relative">
    <Input type="number" min="0" max="100" step="0.01" :model-value="value" @input="onInput" />
    <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ui-fg-muted">%</span>
  </div>
</template>
