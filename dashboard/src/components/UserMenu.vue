<script setup lang="ts">
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import {
  Avatar,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuSubMenu,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Text,
} from "@minima-vue/ui"
import {
  BookOpen,
  CircleHalfSolid,
  EllipsisHorizontal,
  OpenRectArrowOut,
  TimelineVertical,
  User as UserIcon,
} from "@minima-vue/icons"
import { useUiState } from "@/stores/ui-state"

const route = useRoute()
const router = useRouter()
const uiState = useUiState()

const userName = "Admin User"
const userEmail = "admin@example.com"
const userFallback = "AU"

const themeMode = computed<"light" | "dark">({
  get: () => (uiState.isDark ? "dark" : "light"),
  set: (value) => uiState.setDark(value === "dark"),
})

const navigate = async (path: string, withFrom = false) => {
  await router.push(
    withFrom
      ? {
          path,
          query: { from: route.path },
        }
      : { path }
  )
}

const handleLogout = async () => {
  await router.push("/dashboard")
}
</script>

<template>
  <div class="p-3">
    <DropdownMenu>
      <DropdownMenuTrigger
        class="bg-ui-bg-subtle grid w-full cursor-pointer grid-cols-[24px_1fr_15px] items-center gap-2 rounded-md py-1 ps-0.5 pe-2 outline-none hover:bg-ui-bg-subtle-hover data-[state=open]:bg-ui-bg-subtle-hover focus-visible:shadow-borders-focus"
      >
        <div class="flex size-6 items-center justify-center">
          <Avatar size="xsmall" :fallback="userFallback" />
        </div>
        <div class="flex min-w-0 items-center overflow-hidden">
          <Text size="xsmall" weight="plus" leading="compact" class="truncate">{{ userName }}</Text>
        </div>
        <EllipsisHorizontal class="text-ui-fg-muted h-4 w-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent class="min-w-[var(--radix-dropdown-menu-trigger-width)] max-w-[var(--radix-dropdown-menu-trigger-width)]">
        <div class="flex items-center gap-x-3 overflow-hidden px-2 py-1">
          <Avatar size="small" variant="rounded" :fallback="userFallback" />
          <div class="block w-full min-w-0 overflow-hidden whitespace-nowrap">
            <Text size="small" weight="plus" leading="compact" class="overflow-hidden text-ellipsis whitespace-nowrap">
              {{ userName }}
            </Text>
            <Text size="xsmall" leading="compact" class="text-ui-fg-subtle overflow-hidden text-ellipsis whitespace-nowrap">
              {{ userEmail }}
            </Text>
          </div>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem @click="navigate('/settings/profile', true)">
          <UserIcon class="text-ui-fg-subtle me-2 h-4 w-4" />
          Profil Ayarları
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="navigate('/ui-demo')">
          <BookOpen class="text-ui-fg-subtle me-2 h-4 w-4" />
          Dokümantasyon
        </DropdownMenuItem>
        <DropdownMenuItem as-child>
          <a href="https://medusajs.com/changelog/" target="_blank" rel="noreferrer noopener">
            <TimelineVertical class="text-ui-fg-subtle me-2 h-4 w-4" />
            Changelog
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuSubMenu>
          <DropdownMenuSubTrigger class="rounded-md">
            <CircleHalfSolid class="text-ui-fg-subtle me-2 h-4 w-4" />
            Tema
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup v-model="themeMode">
              <DropdownMenuRadioItem value="light">Açık</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">Koyu</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSubMenu>

        <DropdownMenuSeparator />
        <DropdownMenuItem @click="handleLogout">
          <OpenRectArrowOut class="text-ui-fg-subtle me-2 h-4 w-4" />
          Çıkış Yap
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
