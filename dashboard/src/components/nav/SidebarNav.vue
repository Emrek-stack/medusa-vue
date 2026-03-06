<script setup lang="ts">
import {
  ArrowUturnLeft,
  BookOpen,
  BuildingStorefront,
  Buildings,
  CogSixTooth,
  EllipsisHorizontal,
  Key,
  MagnifyingGlass,
  MinusMini,
  MoonSolid,
  OpenRectArrowOut,
  ShieldCheck,
  SquaresPlus,
  SunSolid,
  User,
  Users,
} from "@minima-vue/icons"
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"

import {
  Avatar,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuSubMenu,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Kbd,
  Text,
} from "@minima-vue/ui"
import { cn } from "@/shared/utils/cn"
import { useUiState } from "@/stores/ui-state"

import SidebarNavItem from "./SidebarNavItem.vue"
import type { SidebarNavItemNode, SidebarSection } from "./types"

const route = useRoute()
const router = useRouter()
const uiState = useUiState()

const currentPath = computed(() => route.path)
const isSettingsRoute = computed(() => currentPath.value.startsWith("/settings"))
const isMacLike = computed(() =>
  typeof navigator !== "undefined" ? /Mac|iPhone|iPad|iPod/.test(navigator.platform) : true
)
const shortcutHint = computed(() => (isMacLike.value ? "⌘K" : "Ctrl K"))

const fromQuery = computed(() => {
  const from = route.query.from
  return typeof from === "string" ? from : "/dashboard"
})

const backTarget = computed(() => {
  if (!fromQuery.value || fromQuery.value.startsWith("/settings")) {
    return "/dashboard"
  }

  return fromQuery.value
})

const storeName = "Platform"
const storeFallback = "P"

const userName = "Admin User"
const userEmail = "admin@example.com"
const userFallback = "AU"

const coreRoutes = computed<SidebarNavItemNode[]>(() => [
  {
    icon: SquaresPlus,
    label: "Kontrol Paneli",
    to: "/dashboard",
  },
  {
    icon: Buildings,
    label: "Tenant Yönetimi",
    to: "/tenants",
    items: [
      { label: "Tüm Tenantlar", to: "/tenants" },
      { label: "Yeni Tenant", to: "/tenants/create" },
    ],
  },
  {
    icon: Users,
    label: "Kullanıcı Yönetimi",
    to: "/users",
    items: [
      { label: "Tüm Kullanıcılar", to: "/users" },
      { label: "Yeni Kullanıcı", to: "/users/create" },
    ],
  },
  {
    icon: ShieldCheck,
    label: "Rol Yönetimi",
    to: "/roles",
    items: [
      { label: "Tüm Roller", to: "/roles" },
      { label: "Yeni Rol", to: "/roles/create" },
    ],
  },
  {
    icon: Key,
    label: "Yetki Yönetimi",
    to: "/permissions",
    items: [
      { label: "Tüm Yetkiler", to: "/permissions" },
      { label: "Yeni Yetki", to: "/permissions/create" },
    ],
  },
  {
    icon: BookOpen,
    label: "UI Demo",
    to: "/ui-demo",
  },
])

const settingsSections = computed<SidebarSection[]>(() => [
  {
    label: "Genel",
    items: [
      { label: "Genel", to: "/settings/general" },
      { label: "Tenantlar", to: "/settings/tenants" },
      { label: "Roller", to: "/settings/roles" },
      { label: "İzinler", to: "/settings/permissions" },
    ],
  },
  {
    label: "Geliştirici",
    items: [
      { label: "API Anahtarları", to: "/settings/api-keys" },
      { label: "Entegrasyonlar", to: "/settings/integrations" },
      { label: "Güncellemeler", to: "/settings/updates" },
    ],
  },
  {
    label: "Hesabım",
    items: [
      { label: "Profil", to: "/settings/profile" },
      { label: "Tercihler", to: "/settings/preferences" },
    ],
  },
])

const navigate = async (path: string, withFrom = false) => {
  await router.push(
    withFrom
      ? {
          path,
          query: { from: currentPath.value },
        }
      : { path }
  )
}

const handleLogout = async () => {
  await router.push("/dashboard")
}
</script>

<template>
  <aside class="flex flex-1 flex-col justify-between overflow-y-auto">
    <template v-if="!isSettingsRoute">
      <div class="flex flex-1 flex-col">
        <div class="bg-ui-bg-subtle sticky top-0">
          <div class="w-full p-3">
            <DropdownMenu>
              <DropdownMenuTrigger
                :class="
                  cn(
                    'bg-ui-bg-subtle transition-fg grid w-full grid-cols-[24px_1fr_15px] items-center gap-x-3 rounded-md p-0.5 pr-2 outline-none',
                    'hover:bg-ui-bg-subtle-hover data-[state=open]:bg-ui-bg-subtle-hover focus-visible:shadow-borders-focus'
                  )
                "
              >
                <Avatar variant="squared" size="xsmall" :fallback="storeFallback" />
                <div class="block overflow-hidden text-left">
                  <Text size="small" weight="plus" leading="compact" class="truncate">{{ storeName }}</Text>
                </div>
                <EllipsisHorizontal class="text-ui-fg-muted h-4 w-4" />
              </DropdownMenuTrigger>

              <DropdownMenuContent class="w-[220px] min-w-0">
                <div class="flex items-center gap-x-3 px-2 py-1">
                  <Avatar variant="squared" size="small" :fallback="storeFallback" />
                  <div class="flex flex-col overflow-hidden">
                    <Text size="small" weight="plus" leading="compact" class="truncate">{{ storeName }}</Text>
                    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Store</Text>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem class="gap-x-2" @click="navigate('/settings/general', true)">
                  <BuildingStorefront class="text-ui-fg-subtle mr-2 h-4 w-4" />
                  Store settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem class="gap-x-2" @click="handleLogout">
                  <OpenRectArrowOut class="text-ui-fg-subtle mr-2 h-4 w-4" />
                  Çıkış Yap
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div class="px-3">
            <hr class="h-px border-0 bg-ui-border-base" />
          </div>
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div class="flex flex-1 flex-col">
            <nav class="flex flex-col gap-y-1 py-3">
              <div class="px-3">
                <button
                  type="button"
                  :class="
                    cn(
                      'bg-ui-bg-subtle text-ui-fg-subtle flex w-full items-center gap-x-2.5 rounded-md px-2 py-1 outline-none',
                      'hover:bg-ui-bg-subtle-hover focus-visible:shadow-borders-focus'
                    )
                  "
                  @click="uiState.toggleSearch"
                >
                  <MagnifyingGlass class="text-ui-fg-muted h-4 w-4" />
                  <div class="flex-1 text-left">
                    <Text size="small" leading="compact" weight="plus">Search</Text>
                  </div>
                  <Kbd class="bg-ui-bg-component text-ui-fg-muted border-ui-border-base">{{ shortcutHint }}</Kbd>
                </button>
              </div>

              <SidebarNavItem
                v-for="item in coreRoutes"
                :key="item.to ?? item.label"
                :item="item"
                type="core"
                :current-path="currentPath"
              />
            </nav>
          </div>

          <div class="py-3">
            <div class="px-3">
              <button
                type="button"
                :class="
                  cn(
                    'bg-ui-bg-subtle text-ui-fg-subtle flex w-full items-center gap-x-2.5 rounded-md px-2 py-1 outline-none',
                    'hover:bg-ui-bg-subtle-hover focus-visible:shadow-borders-focus'
                  )
                "
                @click="navigate('/settings/general', true)"
              >
                <CogSixTooth class="h-4 w-4" />
                <div class="flex-1 text-left">
                  <Text size="small" leading="compact" weight="plus">Ayarlar</Text>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div class="bg-ui-bg-subtle sticky bottom-0">
          <div class="px-3">
            <hr class="h-px border-0 bg-ui-border-base" />
          </div>
          <div class="p-3">
            <DropdownMenu>
              <DropdownMenuTrigger
                :class="
                  cn(
                    'bg-ui-bg-subtle grid w-full cursor-pointer grid-cols-[24px_1fr_15px] items-center gap-2 rounded-md py-1 pl-0.5 pr-2 outline-none',
                    'hover:bg-ui-bg-subtle-hover data-[state=open]:bg-ui-bg-subtle-hover focus-visible:shadow-borders-focus'
                  )
                "
              >
                <div class="flex size-6 items-center justify-center">
                  <Avatar size="xsmall" :fallback="userFallback" />
                </div>
                <div class="flex min-w-0 items-center overflow-hidden">
                  <Text size="xsmall" weight="plus" leading="compact" class="truncate">{{ userName }}</Text>
                </div>
                <EllipsisHorizontal class="text-ui-fg-muted h-4 w-4" />
              </DropdownMenuTrigger>

              <DropdownMenuContent class="min-w-[220px]">
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
                  <User class="text-ui-fg-subtle mr-2 h-4 w-4" />
                  Profil Ayarları
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem @click="navigate('/ui-demo')">
                  <BookOpen class="text-ui-fg-subtle mr-2 h-4 w-4" />
                  Dokümantasyon
                </DropdownMenuItem>

                <DropdownMenuSubMenu>
                  <DropdownMenuSubTrigger class="rounded-md">
                    <component :is="uiState.isDark ? SunSolid : MoonSolid" class="text-ui-fg-subtle mr-2 h-4 w-4" />
                    Tema
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem @click="uiState.setDark(false)">
                      Açık
                      <span v-if="!uiState.isDark" class="ml-auto text-ui-fg-muted">Aktif</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem @click="uiState.setDark(true)">
                      Koyu
                      <span v-if="uiState.isDark" class="ml-auto text-ui-fg-muted">Aktif</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSubMenu>

                <DropdownMenuSeparator />
                <DropdownMenuItem @click="handleLogout">
                  <OpenRectArrowOut class="text-ui-fg-subtle mr-2 h-4 w-4" />
                  Çıkış Yap
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="relative flex flex-1 flex-col justify-between overflow-y-auto">
        <div class="bg-ui-bg-subtle sticky top-0">
          <div class="bg-ui-bg-subtle p-3">
            <button
              type="button"
              :class="
                cn(
                  'bg-ui-bg-subtle transition-fg flex w-full items-center rounded-md outline-none hover:bg-ui-bg-subtle-hover focus-visible:shadow-borders-focus'
                )
              "
              @click="navigate(backTarget)"
            >
              <div class="flex items-center gap-x-2.5 px-2 py-1">
                <div class="flex items-center justify-center">
                  <ArrowUturnLeft class="text-ui-fg-subtle h-4 w-4" />
                </div>
                <Text leading="compact" weight="plus" size="small">Ayarlar</Text>
              </div>
            </button>
          </div>
          <div class="px-3">
            <hr class="h-px border-0 bg-ui-border-base" />
          </div>
        </div>

        <div class="flex flex-1 flex-col">
          <div class="flex flex-1 flex-col overflow-y-auto">
            <template v-for="(section, sectionIndex) in settingsSections" :key="section.label">
              <details open class="py-3">
                <summary class="list-none px-3">
                  <div class="text-ui-fg-muted flex h-7 items-center justify-between px-2">
                    <Text size="small" leading="compact">{{ section.label }}</Text>
                    <span class="inline-flex h-7 w-7 items-center justify-center rounded-md">
                      <MinusMini class="text-ui-fg-muted h-4 w-4" />
                    </span>
                  </div>
                </summary>

                <div class="pt-0.5">
                  <nav class="flex flex-col gap-y-0.5">
                    <SidebarNavItem
                      v-for="item in section.items"
                      :key="item.to ?? item.label"
                      :item="item"
                      type="setting"
                      :current-path="currentPath"
                      :from-path="backTarget"
                    />
                  </nav>
                </div>
              </details>

              <div v-if="sectionIndex !== settingsSections.length - 1" class="px-3">
                <hr class="h-px border-0 bg-ui-border-base" />
              </div>
            </template>
          </div>

          <div class="bg-ui-bg-subtle sticky bottom-0">
            <div class="px-3">
              <hr class="h-px border-0 bg-ui-border-base" />
            </div>
            <div class="p-3">
              <DropdownMenu>
                <DropdownMenuTrigger
                  :class="
                    cn(
                      'bg-ui-bg-subtle grid w-full cursor-pointer grid-cols-[24px_1fr_15px] items-center gap-2 rounded-md py-1 pl-0.5 pr-2 outline-none',
                      'hover:bg-ui-bg-subtle-hover data-[state=open]:bg-ui-bg-subtle-hover focus-visible:shadow-borders-focus'
                    )
                  "
                >
                  <div class="flex size-6 items-center justify-center">
                    <Avatar size="xsmall" :fallback="userFallback" />
                  </div>
                  <div class="flex min-w-0 items-center overflow-hidden">
                    <Text size="xsmall" weight="plus" leading="compact" class="truncate">{{ userName }}</Text>
                  </div>
                  <EllipsisHorizontal class="text-ui-fg-muted h-4 w-4" />
                </DropdownMenuTrigger>

                <DropdownMenuContent class="min-w-[220px]">
                  <DropdownMenuItem @click="navigate('/settings/profile', true)">
                    <User class="text-ui-fg-subtle mr-2 h-4 w-4" />
                    Profil Ayarları
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem @click="handleLogout">
                    <OpenRectArrowOut class="text-ui-fg-subtle mr-2 h-4 w-4" />
                    Çıkış Yap
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </template>
  </aside>
</template>
