<script setup lang="ts">
import { BellAlertDone } from "@minima-vue/icons"
import { Text } from "@minima-vue/ui"
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center">
    <BellAlertDone />
    <Text size="small" leading="compact" weight="plus" class="mt-3">
      No notifications
    </Text>
    <Text size="small" class="text-ui-fg-muted mt-1 max-w-[294px] text-center">
      You don't have any notifications at the moment, but once you do they will live here.
    </Text>
  </div>
</template>
