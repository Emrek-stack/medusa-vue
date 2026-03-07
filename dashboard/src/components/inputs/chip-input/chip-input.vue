<script setup lang="ts">
import { ref } from "vue"
import { Input, Badge } from "@minima-vue/ui"
import { XMarkMini } from "@minima-vue/icons"

interface ChipInputProps {
  modelValue?: string[]
  placeholder?: string
}

const props = withDefaults(defineProps<ChipInputProps>(), {
  modelValue: () => [],
  placeholder: "Add value",
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string[]): void
}>()

const draft = ref("")

const add = () => {
  const next = draft.value.trim()
  if (!next) return
  if (props.modelValue.includes(next)) {
    draft.value = ""
    return
  }

  emit("update:modelValue", [...props.modelValue, next])
  draft.value = ""
}

const remove = (value: string) => {
  emit("update:modelValue", props.modelValue.filter((item) => item !== value))
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-2 rounded-md border p-2">
    <Badge v-for="chip in modelValue" :key="chip" size="2xsmall" class="inline-flex items-center gap-1">
      {{ chip }}
      <button type="button" class="inline-flex" @click="remove(chip)">
        <XMarkMini />
      </button>
    </Badge>
    <Input
      v-model="draft"
      size="small"
      :placeholder="placeholder"
      class="min-w-[120px] flex-1 border-0 p-0 shadow-none"
      @keydown.enter.prevent="add"
      @blur="add"
    />
  </div>
</template>
