<script setup lang="ts">
import { ref, watch } from "vue"
import { RouterLink } from "vue-router"
import {
  Avatar,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Text,
} from "@minima-vue/ui"
import { BookOpen, CircleHalfSolid, OpenRectArrowOut, TimelineVertical, User } from "@minima-vue/icons"

const theme = ref<"system" | "light" | "dark">("system")

watch(theme, (value) => {
  if (typeof window === "undefined") {
    return
  }

  const root = document.documentElement

  if (value === "system") {
    root.removeAttribute("data-theme")
    return
  }

  root.setAttribute("data-theme", value)
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <button
        class="bg-ui-bg-subtle hover:bg-ui-bg-subtle-hover grid w-full grid-cols-[24px_1fr_15px] items-center gap-x-2 rounded-md py-1 pl-0.5 pr-2 outline-none focus-visible:shadow-borders-focus"
      >
        <Avatar fallback="EK" size="xsmall" />
        <div class="truncate text-left">
          <Text size="xsmall" leading="compact" weight="plus" class="truncate">Emre Karahan</Text>
        </div>
        <span class="text-ui-fg-muted">•••</span>
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent class="min-w-[var(--radix-dropdown-menu-trigger-width)]">
      <div class="flex items-center gap-x-3 overflow-hidden px-2 py-1">
        <Avatar size="small" fallback="EK" />
        <div class="flex min-w-0 flex-col">
          <Text size="small" leading="compact" weight="plus" class="truncate">Emre Karahan</Text>
          <Text size="xsmall" leading="compact" class="text-ui-fg-subtle truncate">emre@example.com</Text>
        </div>
      </div>

      <DropdownMenuSeparator />
      <DropdownMenuItem as-child>
        <RouterLink to="/settings/users" class="gap-x-2">
          <User class="text-ui-fg-subtle" />
          Profile Settings
        </RouterLink>
      </DropdownMenuItem>
      <DropdownMenuItem as-child>
        <a href="https://docs.medusajs.com" target="_blank" class="flex items-center gap-x-2">
          <BookOpen class="text-ui-fg-subtle" />
          Documentation
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem as-child>
        <a href="https://medusajs.com/changelog/" target="_blank" class="flex items-center gap-x-2">
          <TimelineVertical class="text-ui-fg-subtle" />
          Changelog
        </a>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="gap-x-2">
        <CircleHalfSolid class="text-ui-fg-subtle" />
        Theme
      </DropdownMenuItem>
      <DropdownMenuRadioGroup v-model="theme">
        <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="gap-x-2">
        <OpenRectArrowOut class="text-ui-fg-subtle" />
        Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
