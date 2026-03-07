<script setup lang="ts">
import { Input } from "@minima-vue/ui"

export interface AddressFormValue {
  first_name?: string
  last_name?: string
  company?: string
  address_1?: string
  address_2?: string
  city?: string
  postal_code?: string
  province?: string
  country_code?: string
  phone?: string
}

interface AddressFormProps {
  modelValue?: AddressFormValue
}

const props = withDefaults(defineProps<AddressFormProps>(), {
  modelValue: () => ({}),
})

const emit = defineEmits<{
  (e: "update:modelValue", value: AddressFormValue): void
}>()

const update = (key: keyof AddressFormValue, value: string) => {
  emit("update:modelValue", {
    ...props.modelValue,
    [key]: value,
  })
}

const onInput = (key: keyof AddressFormValue) => (event: Event) => {
  update(key, (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="grid gap-3 md:grid-cols-2">
    <Input :model-value="modelValue.first_name" placeholder="First name" @input="onInput('first_name')" />
    <Input :model-value="modelValue.last_name" placeholder="Last name" @input="onInput('last_name')" />
    <Input class="md:col-span-2" :model-value="modelValue.company" placeholder="Company" @input="onInput('company')" />
    <Input class="md:col-span-2" :model-value="modelValue.address_1" placeholder="Address line 1" @input="onInput('address_1')" />
    <Input class="md:col-span-2" :model-value="modelValue.address_2" placeholder="Address line 2" @input="onInput('address_2')" />
    <Input :model-value="modelValue.city" placeholder="City" @input="onInput('city')" />
    <Input :model-value="modelValue.postal_code" placeholder="Postal code" @input="onInput('postal_code')" />
    <Input :model-value="modelValue.province" placeholder="Province" @input="onInput('province')" />
    <Input :model-value="modelValue.country_code" placeholder="Country code" @input="onInput('country_code')" />
    <Input class="md:col-span-2" :model-value="modelValue.phone" placeholder="Phone" @input="onInput('phone')" />
  </div>
</template>
