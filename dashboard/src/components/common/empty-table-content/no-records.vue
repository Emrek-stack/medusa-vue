<script setup lang="ts">
import { ExclamationCircle, PlusMini } from "@minima-vue/icons"
import { Button, Text } from "@minima-vue/ui"
import { RouterLink } from "vue-router"

interface ActionConfig {
  to: string
  label: string
}

interface NoRecordsProps {
  title?: string
  message?: string
  action?: ActionConfig
  buttonVariant?: "default" | "transparentIconLeft"
}

withDefaults(defineProps<NoRecordsProps>(), {
  title: "No records",
  message: "No records found",
  buttonVariant: "default",
})
</script>

<template>
  <div class="flex h-[150px] w-full flex-col items-center justify-center gap-y-4">
    <div class="flex flex-col items-center gap-y-3">
      <ExclamationCircle class="text-ui-fg-subtle" />
      <div class="flex flex-col items-center gap-y-1">
        <Text size="small" leading="compact" weight="plus">{{ title }}</Text>
        <Text size="small" class="text-ui-fg-muted">{{ message }}</Text>
      </div>
    </div>

    <RouterLink v-if="action" :to="action.to">
      <Button v-if="buttonVariant === 'default'" variant="secondary" size="small">{{ action.label }}</Button>
      <Button v-else variant="transparent" class="text-ui-fg-interactive">
        <PlusMini /> {{ action.label }}
      </Button>
    </RouterLink>
  </div>
</template>
