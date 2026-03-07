<script setup lang="ts">
import { Switch } from "@minima-vue/ui"
import { Form } from "../form/form"

interface SwitchBoxProps {
  label: string
  description: string
  optional?: boolean
  tooltip?: string
  modelValue?: boolean
}

const props = withDefaults(defineProps<SwitchBoxProps>(), {
  optional: false,
  tooltip: "",
  modelValue: false,
})

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void
  (e: "checked-change", value: boolean): void
}>()

const onCheckedChange = (checked: boolean) => {
  emit("checked-change", checked)
  emit("update:modelValue", checked)
}
</script>

<template>
  <Form.Item>
    <div class="bg-ui-bg-component shadow-elevation-card-rest flex items-start gap-x-3 rounded-lg p-3">
      <Form.Control>
        <Switch :checked="modelValue" @update:checked="onCheckedChange" />
      </Form.Control>
      <div>
        <Form.Label :optional="optional" :tooltip="tooltip">{{ label }}</Form.Label>
        <Form.Hint>{{ description }}</Form.Hint>
      </div>
    </div>
  </Form.Item>
</template>
