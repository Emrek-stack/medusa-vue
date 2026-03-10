<script setup lang="ts">
import { computed } from "vue"
import { formatDistance } from "date-fns"
import { InformationCircleSolid } from "@minima-vue/icons"
import { Text } from "@minima-vue/ui"
import FilePreview from "@/components/common/file-preview/file-preview.vue"
import type { AdminNotification, NotificationData } from "./types"

const props = withDefaults(defineProps<{
  notification: AdminNotification
  unread?: boolean
}>(), {
  unread: false,
})

const data = computed<NotificationData | null>(() => {
  const rawData = props.notification.data

  if (!rawData || typeof rawData !== "object") {
    return null
  }

  const source = rawData as Record<string, unknown>
  const title = source.title

  if (typeof title !== "string" || !title) {
    return null
  }

  const description = typeof source.description === "string" ? source.description : undefined
  const rawFile = source.file

  if (!rawFile || typeof rawFile !== "object") {
    return {
      title,
      description,
    }
  }

  const fileSource = rawFile as Record<string, unknown>
  const url = typeof fileSource.url === "string" ? fileSource.url : undefined

  return {
    title,
    description,
    file: {
      filename: typeof fileSource.filename === "string" ? fileSource.filename : undefined,
      url,
      mimeType: typeof fileSource.mimeType === "string" ? fileSource.mimeType : undefined,
    },
  }
})

const timeAgo = computed(() => {
  const createdAt = new Date(props.notification.created_at)

  if (Number.isNaN(createdAt.getTime())) {
    return ""
  }

  return formatDistance(createdAt, new Date(), { addSuffix: true })
})
</script>

<template>
  <div v-if="data" class="relative flex items-start justify-center gap-3 border-b p-6">
    <div class="text-ui-fg-muted flex size-5 items-center justify-center">
      <InformationCircleSolid />
    </div>

    <div class="flex w-full flex-col gap-y-3">
      <div class="flex flex-col">
        <div class="flex items-center justify-between">
          <Text size="small" leading="compact" weight="plus">
            {{ data.title }}
          </Text>

          <div class="align-center flex items-center justify-center gap-2">
            <Text
              as="span"
              :class="['text-ui-fg-subtle', { 'text-ui-fg-base': unread }]"
              size="small"
              leading="compact"
              weight="plus"
            >
              {{ timeAgo }}
            </Text>
            <div v-if="unread" class="bg-ui-bg-interactive h-2 w-2 rounded" role="status" />
          </div>
        </div>

        <Text v-if="data.description" class="text-ui-fg-subtle whitespace-pre-line" size="small">
          {{ data.description }}
        </Text>
      </div>

      <FilePreview
        v-if="data.file?.url"
        :filename="data.file.filename ?? ''"
        :url="data.file.url"
        hide-thumbnail
      />
    </div>
  </div>
</template>
