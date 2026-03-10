<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue"
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Heading,
  IconButton,
} from "@minima-vue/ui"
import { BellAlert, BellAlertDone } from "@minima-vue/icons"
import { InfiniteList } from "@/components/common/infinite-list"
import NotificationItem from "./notification-item.vue"
import NotificationsEmptyState from "./notifications-empty-state.vue"
import type {
  AdminNotification,
  AdminNotificationListParams,
  AdminNotificationListResponse,
} from "./types"

const LAST_READ_NOTIFICATION_KEY = "notificationsLastReadAt"

const open = ref(false)
const hasUnread = ref(false)
const lastReadAt = ref<string | null>(localStorage.getItem(LAST_READ_NOTIFICATION_KEY))

let unreadInterval: ReturnType<typeof setInterval> | undefined

const toTimestamp = (value: string | null | undefined) => {
  if (!value) {
    return 0
  }

  const parsed = Date.parse(value)

  if (Number.isNaN(parsed)) {
    return 0
  }

  return parsed
}

const listNotifications = async (
  params: AdminNotificationListParams = {}
): Promise<AdminNotificationListResponse> => {
  const searchParams = new URLSearchParams()
  const requestParams: AdminNotificationListParams = {
    ...params,
    channel: "feed",
  }

  for (const [key, value] of Object.entries(requestParams)) {
    if (value !== undefined && value !== null) {
      searchParams.set(key, String(value))
    }
  }

  const response = await fetch(`/admin/notifications?${searchParams.toString()}`, {
    credentials: "include",
  })

  if (!response.ok) {
    throw new Error("Failed to load notifications")
  }

  const contentType = response.headers.get("content-type") || ""

  if (!contentType.includes("application/json")) {
    throw new Error("Failed to load notifications: backend returned a non-JSON response.")
  }

  return response.json() as Promise<AdminNotificationListResponse>
}

const loadUnreadState = async () => {
  try {
    const response = await listNotifications({
      limit: 1,
      offset: 0,
      fields: "created_at",
    })

    const lastNotification = response.notifications?.[0]

    if (!lastNotification?.created_at) {
      return
    }

    if (
      toTimestamp(lastNotification.created_at) >
      toTimestamp(localStorage.getItem(LAST_READ_NOTIFICATION_KEY))
    ) {
      hasUnread.value = true
    }
  } catch {
    // Ignore polling failures and let the notification list surface errors when opened.
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "n" && (event.metaKey || event.ctrlKey)) {
    open.value = !open.value
  }
}

const handleOnOpen = (shouldOpen: boolean) => {
  if (shouldOpen) {
    hasUnread.value = false
    open.value = true
    localStorage.setItem(LAST_READ_NOTIFICATION_KEY, new Date().toISOString())
  } else {
    open.value = false
    lastReadAt.value = localStorage.getItem(LAST_READ_NOTIFICATION_KEY)
  }
}

const isUnread = (createdAt: string) => {
  return toTimestamp(createdAt) > toTimestamp(lastReadAt.value)
}

const asAdminNotification = (item: { id: string }) => {
  return item as AdminNotification
}

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown)
  void loadUnreadState()
  unreadInterval = setInterval(() => {
    void loadUnreadState()
  }, 60_000)
})

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeyDown)
  if (unreadInterval) {
    clearInterval(unreadInterval)
  }
})
</script>

<template>
  <Drawer :open="open" @update:open="handleOnOpen">
    <DrawerTrigger as-child>
      <IconButton
        variant="transparent"
        size="small"
        aria-label="Notifications"
        class="text-ui-fg-muted hover:text-ui-fg-subtle"
      >
        <BellAlertDone v-if="hasUnread" />
        <BellAlert v-else />
      </IconButton>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle as-child>
          <Heading>Notifications</Heading>
        </DrawerTitle>
        <DrawerDescription class="sr-only">
          Notifications about Medusa activities will be listed here.
        </DrawerDescription>
      </DrawerHeader>

      <DrawerBody class="overflow-y-auto px-0">
        <InfiniteList
          response-key="notifications"
          :query-fn="listNotifications"
          :enabled="open"
        >
          <template #empty>
            <NotificationsEmptyState />
          </template>
          <template #item="{ item }">
            <NotificationItem
              :notification="asAdminNotification(item)"
              :unread="isUnread(asAdminNotification(item).created_at)"
            />
          </template>
        </InfiniteList>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
</template>
