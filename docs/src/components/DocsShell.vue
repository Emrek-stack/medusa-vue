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
  SparklesMiniSolid,
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

const resolveNavLink = (item: (typeof mainNavItems)[number]) => {
  if (item.type !== "link") {
    return "/"
  }

  if (item.title === "User Guide") {
    return docsSection.value
  }

  return item.to || "/"
}
</script>

<template>
  <div
    id="root-layout"
    class="docs-shell grid h-full w-full grid-cols-1 overflow-hidden bg-ui-bg-subtle font-base txt-medium text-ui-fg-base lg:mx-auto lg:grid-cols-[221px_1fr]"
  >
    <div
      v-if="sidebarOpen"
      class="fixed left-0 top-0 z-[45] h-full w-full bg-ui-bg-overlay opacity-70 lg:hidden"
      @click="sidebarOpen = false"
    />

    <aside
      class="fixed -left-full top-0 block h-[calc(100%-16px)] w-sidebar-xs max-w-sidebar-xs bg-ui-bg-base transition-[left] sm:max-w-sidebar-sm md:max-w-sidebar-md lg:relative lg:h-auto lg:w-auto lg:max-w-sidebar-lg lg:bg-transparent xl:max-w-sidebar-xl xxl:max-w-sidebar-xxl xxxl:max-w-sidebar-xxxl"
      :class="
        sidebarOpen
          ? '!left-docs_0.5 !top-docs_0.5 z-50 rounded shadow-elevation-modal lg:!left-0 lg:!top-0 lg:rounded-none lg:shadow-none'
          : 'lg:left-0'
      "
      style="animation-fill-mode: forwards"
    >
      <ul class="flex h-full w-full flex-col">
        <div class="docs-scroll clip flex-1 overflow-y-scroll pb-docs_0.75 max-h-screen" id="sidebar">
          <div class="sticky top-0 z-[5] bg-ui-bg-base pt-docs_0.25 lg:bg-ui-bg-subtle">
            <div class="m-docs_0.75 lg:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-docs_sm bg-transparent p-0 text-ui-fg-muted transition hover:bg-transparent"
                @click="sidebarOpen = false"
                aria-label="Close navigation"
              >
                <XMarkMini class="h-4 w-4 text-ui-fg-subtle" />
              </button>
            </div>
          </div>

          <div class="pt-docs_0.75">
            <SidebarNav :items="navigationItems" />
          </div>
        </div>
      </ul>
    </aside>

    <div class="relative flex h-screen">
      <div class="relative flex h-full max-w-full flex-1 flex-col gap-docs_0.5 scroll-m-docs_0.25 lg:mr-docs_0.25 lg:py-docs_0.25">
        <div
          id="main"
          class="docs-scroll flex h-full w-full flex-col items-center overflow-y-scroll overflow-x-hidden bg-ui-bg-base shadow-elevation-card-rest md:rounded-docs_DEFAULT"
        >
          <header class="sticky top-0 z-20 w-full border-b border-ui-border-base bg-ui-bg-base" data-testid="main-nav">
            <div
              class="flex w-full items-center justify-between gap-docs_1 px-docs_1"
              data-testid="main-nav-content"
            >
              <div class="flex items-center gap-[10px]">
                <button
                  type="button"
                  class="my-docs_0.75 inline-flex items-center justify-center gap-[6px] rounded-docs_sm bg-transparent !p-[6.5px] font-base txt-compact-small-plus text-ui-fg-muted transition hover:bg-ui-button-transparent-hover hover:text-ui-fg-subtle lg:hidden"
                  @click="sidebarOpen = true"
                  aria-label="Open navigation"
                >
                  <SidebarLeft class="h-4 w-4" />
                </button>

                <RouterLink to="/" data-testid="logo-link">
                  <span
                    class="my-[14px] inline-flex items-center justify-center rounded-docs_sm bg-ui-bg-base p-docs_0.125 shadow-borders-base"
                  >
                    <span class="h-[20px] w-[20px] rounded-docs_xs">
                      <Medusa class="bordered-icon h-5 w-5 rounded-docs_xs text-ui-fg-subtle" />
                    </span>
                  </span>
                </RouterLink>
              </div>

              <nav class="hidden flex-grow lg:block">
                <ul class="my-docs_0.75 hidden items-center justify-start gap-docs_1 lg:flex">
                  <li
                    v-for="item in mainNavItems"
                    :key="item.title"
                    class="group flex items-center"
                  >
                    <RouterLink
                      v-if="item.type === 'link'"
                      :to="resolveNavLink(item)"
                      class="inline-flex items-center justify-center gap-docs_0.25 rounded-docs_xs txt-compact-small-plus no-underline transition focus:shadow-borders-focus"
                      :class="
                        route.path === resolveNavLink(item)
                          ? 'text-ui-fg-base'
                          : 'text-ui-fg-muted hover:text-ui-fg-subtle'
                      "
                    >
                      {{ item.title }}
                    </RouterLink>
                    <button
                      v-else-if="item.type === 'dropdown'"
                      type="button"
                      class="inline-flex cursor-pointer items-center gap-docs_0.25 py-docs_0.25 txt-compact-small-plus text-ui-fg-muted transition hover:text-ui-fg-subtle focus:shadow-borders-focus"
                      data-testid="dropdown-title-wrapper"
                    >
                      <span data-testid="dropdown-title">{{ item.title }}</span>
                      <ChevronDownMini class="h-4 w-4" data-testid="triangle-icon" />
                    </button>
                    <button
                      v-else
                      type="button"
                      class="inline-flex items-center justify-center gap-docs_0.25 rounded-docs_xs txt-compact-small-plus text-ui-fg-muted transition hover:text-ui-fg-subtle focus:shadow-borders-focus"
                    >
                      {{ item.title }}
                    </button>
                  </li>
                </ul>
              </nav>

              <div class="my-docs_0.75 hidden items-center lg:flex" data-testid="main-nav-actions">
                <div class="hidden items-center gap-[6px] text-ui-fg-subtle lg:flex">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center gap-docs_0.25 rounded-docs_sm px-docs_0.5 py-docs_0.25 txt-compact-small-plus text-ui-fg-subtle transition hover:bg-ui-button-transparent-hover"
                  >
                    <span>Help</span>
                    <ChevronDownMini class="h-4 w-4" />
                  </button>
                </div>

                <div class="flex items-center">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center gap-[6px] rounded-docs_sm px-docs_0.5 py-docs_0.25 font-base txt-compact-small-plus text-ui-fg-muted transition hover:bg-ui-button-transparent-hover"
                  >
                    <SparklesMiniSolid class="h-[15px] w-[15px]" />
                    <span class="text-ui-fg-subtle">Ask Bloom</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center justify-center gap-[6px] rounded-docs_sm bg-transparent !p-[6.5px] font-base txt-compact-small-plus text-ui-fg-base transition hover:bg-ui-button-transparent-hover"
                    aria-label="Search"
                  >
                    <MagnifyingGlassMini class="h-5 w-5 text-ui-fg-subtle" />
                  </button>
                  <button
                    type="button"
                    class="hidden items-center justify-center gap-[6px] rounded-docs_sm bg-transparent !p-[6.5px] font-base txt-compact-small-plus text-ui-fg-base transition hover:bg-ui-button-transparent-hover lg:inline-flex"
                    aria-label="Open menu"
                  >
                    <BarsThree class="h-5 w-5 text-ui-fg-subtle" />
                  </button>
                </div>
              </div>
            </div>
          </header>

          <div id="content" class="grid grid-cols-1 pb-docs_8 pt-docs_4 lg:mx-auto lg:pb-docs_4 lg:pt-docs_6">
            <div class="flex justify-center">
              <div
                class="h-fit w-full max-w-inner-content-xs px-docs_1 sm:max-w-inner-content-sm md:max-w-inner-content-md md:px-docs_4 lg:max-w-inner-content-lg lg:px-0 xl:max-w-inner-content-xl xxl:max-w-inner-content-xxl xxxl:max-w-inner-content-xxxl"
              >
                <TooltipProvider>
                  <RouterView />
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Toaster />
  </div>
</template>
