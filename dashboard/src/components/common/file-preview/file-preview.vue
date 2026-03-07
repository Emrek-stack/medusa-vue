<script setup lang="ts">
import { ArrowDownTray, Spinner } from "@minima-vue/icons"
import { IconButton, Text } from "@minima-vue/ui"
import ActionMenu, { type ActionGroup } from "../action-menu/action-menu.vue"

interface FilePreviewProps {
  filename: string
  url?: string
  loading?: boolean
  activity?: string
  actions?: ActionGroup[]
  hideThumbnail?: boolean
}

withDefaults(defineProps<FilePreviewProps>(), {
  loading: false,
  hideThumbnail: false,
})
</script>

<template>
  <div class="shadow-elevation-card-rest bg-ui-bg-component transition-fg rounded-md px-3 py-2">
    <div class="flex flex-row items-center justify-between gap-2">
      <div class="flex flex-row items-center gap-3">
        <svg
          v-if="!hideThumbnail"
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.25" y="0.25" width="23.5" height="31.5" rx="3.75" fill="url(#g1)" stroke="url(#g2)" stroke-width="0.5" />
          <defs>
            <linearGradient id="g1" x1="12" y1="0" x2="12" y2="32"><stop stop-color="#F4F4F5" /><stop offset="1" stop-color="#E4E4E7" /></linearGradient>
            <linearGradient id="g2" x1="12" y1="0" x2="12" y2="32"><stop stop-color="#E4E4E7" /><stop offset="1" stop-color="#D4D4D8" /></linearGradient>
          </defs>
        </svg>

        <div class="flex flex-col justify-center">
          <Text size="small" leading="compact" class="truncate max-w-[260px]">{{ filename }}</Text>
          <Text v-if="loading && activity" leading="compact" size="xsmall" class="text-ui-fg-interactive">{{ activity }}</Text>
        </div>
      </div>

      <Spinner v-if="loading" class="animate-spin" />
      <ActionMenu v-else-if="actions && actions.length" :groups="actions" />
      <IconButton v-else-if="url" variant="transparent" as-child>
        <a :href="url" :download="filename || `${Date.now()}`">
          <ArrowDownTray />
        </a>
      </IconButton>
    </div>
  </div>
</template>
