<script setup lang="ts">
import { computed } from "vue"
import { Avatar, Copy, Text } from "@minima-vue/ui"
import { RouterLink } from "vue-router"

export type Address = {
  first_name?: string | null
  last_name?: string | null
  company?: string | null
  phone?: string | null
  address_1?: string | null
  address_2?: string | null
  city?: string | null
  postal_code?: string | null
  province?: string | null
  country_code?: string | null
}

export type CustomerInfoData = {
  customer_id?: string | null
  customer?: {
    first_name?: string | null
    last_name?: string | null
  } | null
  email?: string | null
  shipping_address?: Address | null
  billing_address?: Address | null
}

interface CustomerInfoProps {
  data: CustomerInfoData
}

const props = defineProps<CustomerInfoProps>()

const name = computed(() => {
  const customer = [props.data.customer?.first_name, props.data.customer?.last_name].filter(Boolean).join(" ")
  const shipping = [props.data.shipping_address?.first_name, props.data.shipping_address?.last_name].filter(Boolean).join(" ")
  const billing = [props.data.billing_address?.first_name, props.data.billing_address?.last_name].filter(Boolean).join(" ")
  return customer || shipping || billing || props.data.email || "-"
})

const fallback = computed(() => String(name.value || "-").charAt(0).toUpperCase())

const company = computed(() => props.data.shipping_address?.company || props.data.billing_address?.company)
const phone = computed(() => props.data.shipping_address?.phone || props.data.billing_address?.phone)

const formatAddress = (address?: Address | null) => {
  if (!address) {
    return "-"
  }

  return [
    [address.first_name, address.last_name].filter(Boolean).join(" "),
    address.address_1,
    address.address_2,
    [address.postal_code, address.city].filter(Boolean).join(" "),
    [address.province, address.country_code].filter(Boolean).join(", "),
  ]
    .filter(Boolean)
    .join("\n")
}
</script>

<template>
  <div class="divide-y">
    <div class="text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4">
      <Text size="small" leading="compact" weight="plus">ID</Text>
      <RouterLink
        v-if="data.customer_id"
        :to="`/customers/${data.customer_id}`"
        class="focus:shadow-borders-focus rounded-[4px] outline-none transition-shadow"
      >
        <div class="flex items-center gap-x-2 overflow-hidden">
          <Avatar size="2xsmall" :fallback="fallback" />
          <Text size="small" leading="compact" class="text-ui-fg-subtle hover:text-ui-fg-base transition-fg truncate">
            {{ name }}
          </Text>
        </div>
      </RouterLink>
      <Text v-else size="small" leading="compact">-</Text>
    </div>

    <div v-if="company" class="text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4">
      <Text size="small" leading="compact" weight="plus">Company</Text>
      <Text size="small" leading="compact" class="truncate">{{ company }}</Text>
    </div>

    <div class="text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4">
      <Text size="small" leading="compact" weight="plus">Contact</Text>
      <div class="flex flex-col gap-y-2">
        <div class="grid grid-cols-[1fr_20px] items-start gap-x-2">
          <Text size="small" leading="compact" class="text-pretty break-all">{{ data.email || "-" }}</Text>
          <div class="flex justify-end">
            <Copy v-if="data.email" :content="data.email" class="text-ui-fg-muted" />
          </div>
        </div>
        <div v-if="phone" class="grid grid-cols-[1fr_20px] items-start gap-x-2">
          <Text size="small" leading="compact" class="text-pretty break-all">{{ phone }}</Text>
          <div class="flex justify-end">
            <Copy :content="phone" class="text-ui-fg-muted" />
          </div>
        </div>
      </div>
    </div>

    <div class="text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4">
      <Text size="small" leading="compact" weight="plus">Shipping Address</Text>
      <Text size="small" leading="compact" class="whitespace-pre-line">{{ formatAddress(data.shipping_address) }}</Text>
    </div>

    <div class="text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4">
      <Text size="small" leading="compact" weight="plus">Billing Address</Text>
      <Text size="small" leading="compact" class="whitespace-pre-line">{{ formatAddress(data.billing_address) }}</Text>
    </div>
  </div>
</template>
