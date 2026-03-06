<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue"
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  IconButton,
  Kbd,
  Text,
} from "@minima-vue/ui"
import { BellAlert, BellAlertDone, XMark } from "@minima-vue/icons"

const open = ref(false)
const hasUnread = ref(true)

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key.toLowerCase() === "n" && (event.metaKey || event.ctrlKey)) {
    event.preventDefault()
    open.value = !open.value

    if (open.value) {
      hasUnread.value = false
    }
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeyDown)
})
</script>

<template>
  <div>
    <IconButton
      variant="transparent"
      size="small"
      aria-label="Notifications"
      class="text-ui-fg-muted hover:text-ui-fg-subtle"
      @click="open = !open"
    >
      <BellAlertDone v-if="hasUnread" class="h-4 w-4" />
      <BellAlert v-else class="h-4 w-4" />
    </IconButton>

    <Drawer v-model:open="open">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
          <Text size="small" leading="compact" class="text-ui-fg-subtle">Notification center</Text>
          <div class="ml-auto flex items-center gap-x-2">
            <Kbd>esc</Kbd>
            <IconButton variant="transparent" size="small" @click="open = false">
              <XMark />
            </IconButton>
          </div>
        </DrawerHeader>

        <DrawerBody class="flex flex-col items-center justify-center gap-y-2">
          <BellAlert class="h-6 w-6 text-ui-fg-subtle" />
          <Text size="small" weight="plus">No notifications</Text>
          <Text size="small" class="text-ui-fg-muted text-center">New events will appear here.</Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </div>
</template>
