<script setup lang="ts">
import { computed } from "vue"
import { Avatar, Text } from "@minima-vue/ui"
import { RouterLink } from "vue-router"

interface UserLinkProps {
  id: string
  first_name?: string | null
  last_name?: string | null
  email: string
  type?: "customer" | "user"
}

const props = withDefaults(defineProps<UserLinkProps>(), {
  type: "user",
})

const name = computed(() => [props.first_name, props.last_name].filter(Boolean).join(" "))
const fallback = computed(() => (name.value ? name.value.slice(0, 1) : props.email.slice(0, 1)).toUpperCase())
const link = computed(() => (props.type === "user" ? `/settings/users/${props.id}` : `/customers/${props.id}`))
</script>

<template>
  <RouterLink
    :to="link"
    class="flex items-center gap-x-2 w-fit transition-fg hover:text-ui-fg-subtle outline-none focus-visible:shadow-borders-focus rounded-md"
  >
    <Avatar size="2xsmall" :fallback="fallback" />
    <Text size="small" leading="compact" weight="regular">{{ name || email }}</Text>
  </RouterLink>
</template>
