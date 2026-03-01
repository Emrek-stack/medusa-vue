<script setup lang="ts">
import { computed, ref } from "vue"
import { RouterLink, RouterView, useRoute } from "vue-router"
import { Toaster, TooltipProvider } from "@medusa-vue/ui"
import {
  BarsThree,
  ChevronDownMini,
  MagnifyingGlassMini,
  Medusa,
  SidebarLeft,
  XMarkMini,
} from "@medusa-vue/icons"
import SidebarNav from "@docs/components/SidebarNav.vue"
import { navigationItems } from "@docs/data/navigation"

const route = useRoute()
const sidebarOpen = ref(false)

const mainNavItems = [
  { type: "link", title: "Get Started", to: "/" },
  { type: "dropdown", title: "Product" },
  { type: "dropdown", title: "Build" },
  { type: "dropdown", title: "Tools" },
  { type: "dropdown", title: "Reference" },
  { type: "link", title: "User Guide", to: null },
  { type: "button", title: "Cloud" },
] as const

const docsSection = computed(() => {
  if (route.path.startsWith("/components")) {
    return "/components/button"
  }

  if (route.path.startsWith("/icons")) {
    return "/icons/overview"
  }

  if (route.path.startsWith("/colors")) {
    return "/colors/overview"
  }

  return "/"
})
</script>

<template>
  <div class="docs-shell h-screen overflow-hidden bg-ui-bg-subtle font-base text-medium text-ui-fg-base">
    <div class="grid h-full w-full grid-cols-1 lg:mx-auto lg:grid-cols-[221px_1fr]">
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 z-40 bg-black/20 lg:hidden"
        @click="sidebarOpen = false"
      />

      <aside
        class="fixed left-0 top-0 z-50 h-[calc(100%-16px)] w-[calc(100%-16px)] max-w-[320px] rounded bg-ui-bg-base shadow-elevation-modal transition-[left] duration-200 lg:relative lg:h-screen lg:w-auto lg:max-w-[221px] lg:rounded-none lg:bg-transparent lg:shadow-none"
        :class="sidebarOpen ? 'left-2 top-2' : '-left-full lg:left-0'"
      >
        <div class="flex h-full w-full flex-col">
          <div class="sticky top-0 z-[5] px-3 pt-1">
            <div class="flex items-center justify-end pb-2 lg:hidden">
              <button
                type="button"
                class="rounded-md p-2 text-ui-fg-subtle transition hover:bg-ui-bg-base hover:text-ui-fg-base"
                @click="sidebarOpen = false"
                aria-label="Close navigation"
              >
                <XMarkMini class="h-4 w-4" />
              </button>
            </div>
          </div>

          <div class="docs-scroll flex-1 overflow-y-scroll pb-4 pt-3">
            <div>
              <SidebarNav :items="navigationItems" />
            </div>
          </div>
        </div>
      </aside>

      <div class="relative flex h-screen">
        <div class="relative flex h-full max-w-full flex-1 flex-col gap-[8px] lg:py-1 lg:mr-1">
          <div class="flex h-full w-full flex-col overflow-hidden bg-ui-bg-base md:rounded-lg shadow-elevation-card-rest">
            <header class="sticky top-0 z-30 border-b border-ui-border-base bg-ui-bg-base">
              <div class="flex w-full items-center justify-between gap-4 px-4">
                <div class="flex items-center gap-[10px]">
                  <button
                    type="button"
                    class="my-[10px] inline-flex items-center justify-center rounded-[6px] p-[6.5px] text-ui-fg-muted transition hover:bg-ui-button-transparent-hover hover:text-ui-fg-subtle lg:hidden"
                    @click="sidebarOpen = true"
                    aria-label="Open navigation"
                  >
                    <SidebarLeft class="h-4 w-4" />
                  </button>

                  <RouterLink
                    to="/"
                    class="inline-flex items-center justify-center"
                  >
                    <span class="my-[14px] inline-flex items-center justify-center rounded-[6px] bg-ui-bg-base p-[1px] shadow-borders-base">
                      <span class="inline-flex h-5 w-5 items-center justify-center rounded-[4px] text-ui-fg-subtle">
                        <Medusa class="h-5 w-5" />
                      </span>
                    </span>
                  </RouterLink>
                </div>

                <nav class="hidden flex-1 lg:block">
                  <ul class="my-[10px] hidden items-center justify-start gap-4 lg:flex">
                    <li
                      v-for="item in mainNavItems"
                      :key="item.title"
                      class="group flex items-center"
                    >
                      <RouterLink
                        v-if="item.type === 'link'"
                        :to="item.title === 'User Guide' ? docsSection : item.to || '/'"
                        class="inline-flex items-center justify-center gap-1 rounded-[4px] text-compact-small-plus no-underline transition"
                        :class="route.path === (item.title === 'User Guide' ? docsSection : item.to || '/')
                          ? 'text-ui-fg-base'
                          : 'text-ui-fg-muted hover:text-ui-fg-subtle'"
                      >
                        {{ item.title }}
                      </RouterLink>
                      <button
                        v-else-if="item.type === 'dropdown'"
                        type="button"
                        class="inline-flex items-center justify-center gap-1 rounded-[4px] py-1 text-compact-small-plus text-ui-fg-muted transition hover:text-ui-fg-subtle"
                      >
                        <span>{{ item.title }}</span>
                        <ChevronDownMini class="h-4 w-4" />
                      </button>
                      <button
                        v-else
                        type="button"
                        class="inline-flex items-center justify-center gap-1 rounded-[4px] py-1 text-compact-small-plus text-ui-fg-muted transition hover:text-ui-fg-subtle"
                      >
                        {{ item.title }}
                      </button>
                    </li>
                  </ul>
                </nav>

                <div
                  class="hidden items-center my-[10px] lg:flex"
                  data-testid="main-nav-actions"
                >
                  <button
                    type="button"
                    class="hidden items-center rounded-[6px] px-2 py-1 text-compact-small-plus text-ui-fg-muted transition hover:bg-ui-button-transparent-hover hover:text-ui-fg-subtle lg:inline-flex"
                  >
                    <span>Help</span>
                    <ChevronDownMini class="ml-1 h-4 w-4" />
                  </button>
                  <div class="flex items-center">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-[6px] px-2 py-1 text-compact-small-plus text-ui-fg-muted transition hover:bg-ui-button-transparent-hover hover:text-ui-fg-subtle"
                    >
                      Ask Bloom
                    </button>
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-[6px] p-[6.5px] text-ui-fg-muted transition hover:bg-ui-button-transparent-hover hover:text-ui-fg-subtle"
                      aria-label="Search"
                    >
                      <MagnifyingGlassMini class="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      class="hidden items-center justify-center rounded-[6px] p-[6.5px] text-ui-fg-muted transition hover:bg-ui-button-transparent-hover hover:text-ui-fg-subtle lg:inline-flex"
                      aria-label="Open menu"
                    >
                      <BarsThree class="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </header>

            <main class="docs-scroll flex-1 overflow-y-auto overflow-x-hidden">
              <div class="pt-16 lg:pt-24 pb-32 lg:pb-16 px-4 md:px-16 lg:px-0">
                <div class="mx-auto w-full max-w-[1064px]">
                  <TooltipProvider>
                    <RouterView />
                  </TooltipProvider>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>

    <Toaster />
  </div>
</template>
