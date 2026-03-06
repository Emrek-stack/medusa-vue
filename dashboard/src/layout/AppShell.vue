<script setup lang="ts">
import { computed, ref } from "vue"
import { RouterLink, RouterView, useRoute } from "vue-router"
import {
  Avatar,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  IconButton,
  Input,
  Text,
  clx,
} from "@minima-vue/ui"
import {
  ArrowUturnLeft,
  BellAlert,
  BuildingStorefront,
  EllipsisHorizontal,
  MagnifyingGlass,
  SidebarLeft,
  TriangleRightMini,
  XMark,
} from "@minima-vue/icons"
import SidebarNavItem from "@/components/SidebarNavItem.vue"
import UserMenu from "@/components/UserMenu.vue"
import { coreNavItems, routeLabelMap, settingsNavSections } from "@/data/navigation"

const route = useRoute()
const mobileOpen = ref(false)

const isSettingsRoute = computed(() => route.path.startsWith("/settings"))

const breadcrumbs = computed(() => {
  const segments = route.path.split("/").filter(Boolean)

  if (!segments.length) {
    return []
  }

  const items: { to: string; label: string }[] = []
  let current = ""

  for (const segment of segments) {
    current += `/${segment}`
    const label = routeLabelMap[current] ?? segment.replace(/-/g, " ")
    items.push({
      to: current,
      label: label.charAt(0).toUpperCase() + label.slice(1),
    })
  }

  return items
})

const closeMobile = () => {
  mobileOpen.value = false
}
</script>

<template>
  <div class="relative flex h-screen flex-col overflow-hidden lg:flex-row">
    <aside class="hidden h-screen w-[220px] border-e border-ui-border-base lg:flex">
      <div class="flex flex-1 flex-col justify-between overflow-y-auto">
        <div class="flex flex-1 flex-col">
          <div class="bg-ui-bg-subtle sticky top-0 z-10 p-3">
            <template v-if="isSettingsRoute">
              <RouterLink
                to="/orders"
                class="bg-ui-bg-subtle hover:bg-ui-bg-subtle-hover transition-fg flex items-center gap-x-2 rounded-md px-2 py-1 outline-none focus-visible:shadow-borders-focus"
              >
                <ArrowUturnLeft class="text-ui-fg-subtle" />
                <Text size="small" weight="plus" leading="compact">Back to Dashboard</Text>
              </RouterLink>
            </template>

            <template v-else>
              <DropdownMenu>
                <DropdownMenuTrigger as-child>
                  <button
                    class="bg-ui-bg-subtle transition-fg hover:bg-ui-bg-subtle-hover data-[state=open]:bg-ui-bg-subtle-hover grid w-full grid-cols-[24px_1fr_15px] items-center gap-x-3 rounded-md p-0.5 pr-2 outline-none focus-visible:shadow-borders-focus"
                  >
                    <Avatar fallback="M" variant="squared" size="xsmall" />
                    <div class="overflow-hidden text-left">
                      <Text size="small" weight="plus" leading="compact" class="truncate">Minima Store</Text>
                    </div>
                    <EllipsisHorizontal class="text-ui-fg-muted" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="min-w-[var(--radix-dropdown-menu-trigger-width)]">
                  <div class="flex items-center gap-x-3 px-2 py-1">
                    <Avatar variant="squared" size="small" fallback="M" />
                    <div class="min-w-0">
                      <Text size="small" weight="plus" leading="compact" class="truncate">Minima Store</Text>
                      <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Store</Text>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem as-child>
                    <RouterLink to="/settings/store" class="gap-x-2">
                      <BuildingStorefront class="text-ui-fg-subtle" />
                      Store Settings
                    </RouterLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </template>
          </div>

          <div class="px-3">
            <hr class="dashboard-divider" />
          </div>

          <div class="flex flex-1 flex-col overflow-y-auto py-3">
            <template v-if="isSettingsRoute">
              <section
                v-for="section in settingsNavSections"
                :key="section.title"
                class="pb-3"
              >
                <div class="px-5 pb-1">
                  <Text size="small" leading="compact" class="text-ui-fg-muted">{{ section.title }}</Text>
                </div>
                <nav class="flex flex-col gap-y-0.5">
                  <SidebarNavItem
                    v-for="item in section.items"
                    :key="item.to"
                    :item="item"
                    compact
                  />
                </nav>
              </section>
            </template>

            <template v-else>
              <div class="px-3 pb-3">
                <button
                  class="bg-ui-bg-subtle hover:bg-ui-bg-subtle-hover text-ui-fg-subtle flex w-full items-center gap-x-2.5 rounded-md px-2 py-1 outline-none focus-visible:shadow-borders-focus"
                >
                  <MagnifyingGlass />
                  <Text size="small" leading="compact" weight="plus" class="flex-1 text-left">Search</Text>
                  <Text size="small" leading="compact" class="text-ui-fg-muted">⌘K</Text>
                </button>
              </div>
              <nav class="flex flex-col gap-y-0.5">
                <SidebarNavItem
                  v-for="item in coreNavItems"
                  :key="item.to"
                  :item="item"
                />
              </nav>
            </template>
          </div>
        </div>

        <div class="bg-ui-bg-subtle sticky bottom-0 p-3">
          <hr class="dashboard-divider mb-3" />
          <UserMenu />
        </div>
      </div>
    </aside>

    <Transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileOpen" class="fixed inset-0 z-50 lg:hidden">
        <button class="bg-ui-bg-overlay absolute inset-0" @click="closeMobile" />
        <aside class="bg-ui-bg-subtle shadow-elevation-modal absolute inset-y-2 left-2 flex w-[304px] max-w-[calc(100%-16px)] flex-col rounded-lg border border-ui-border-base">
          <div class="p-3">
            <IconButton variant="transparent" size="small" @click="closeMobile">
              <XMark />
            </IconButton>
          </div>
          <div class="flex-1 overflow-y-auto pb-3">
            <template v-if="isSettingsRoute">
              <section
                v-for="section in settingsNavSections"
                :key="`mobile-${section.title}`"
                class="pb-3"
              >
                <div class="px-5 pb-1">
                  <Text size="small" leading="compact" class="text-ui-fg-muted">{{ section.title }}</Text>
                </div>
                <nav class="flex flex-col gap-y-0.5" @click="closeMobile">
                  <SidebarNavItem
                    v-for="item in section.items"
                    :key="item.to"
                    :item="item"
                    compact
                  />
                </nav>
              </section>
            </template>
            <template v-else>
              <nav class="flex flex-col gap-y-0.5" @click="closeMobile">
                <SidebarNavItem
                  v-for="item in coreNavItems"
                  :key="item.to"
                  :item="item"
                />
              </nav>
            </template>
          </div>
        </aside>
      </div>
    </Transition>

    <div class="flex h-screen flex-1 flex-col overflow-hidden">
      <header class="grid w-full grid-cols-2 border-b border-ui-border-base p-3">
        <div class="flex items-center gap-x-1.5">
          <IconButton variant="transparent" size="small" class="lg:hidden" @click="mobileOpen = true">
            <SidebarLeft class="text-ui-fg-muted" />
          </IconButton>

          <ol class="text-ui-fg-muted txt-compact-small-plus flex items-center select-none">
            <li v-for="(crumb, index) in breadcrumbs" :key="crumb.to" class="flex items-center">
              <RouterLink
                v-if="index < breadcrumbs.length - 1"
                :to="crumb.to"
                class="transition-fg hover:text-ui-fg-subtle"
              >
                {{ crumb.label }}
              </RouterLink>
              <span v-else class="text-ui-fg-base">{{ crumb.label }}</span>
              <span v-if="index < breadcrumbs.length - 1" class="mx-2">
                <TriangleRightMini />
              </span>
            </li>
          </ol>
        </div>

        <div class="flex items-center justify-end gap-x-2">
          <Input class="hidden max-w-[260px] lg:flex" placeholder="Search dashboard" />
          <IconButton variant="transparent" size="small">
            <BellAlert class="text-ui-fg-muted" />
          </IconButton>
        </div>
      </header>

      <main
        :class="
          clx(
            'flex h-full w-full flex-col overflow-y-auto transition-opacity duration-200',
            { 'opacity-100': true }
          )
        "
      >
        <div class="mx-auto flex w-full max-w-layout-shell flex-col gap-y-2 p-3">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
