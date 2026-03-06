<script setup lang="ts">
import { computed, ref, watch } from "vue"
import { RouterLink, RouterView, useRoute } from "vue-router"
import { Toaster, TooltipProvider } from "@minima-vue/ui"
import {
  BarsThree,
  MagnifyingGlassMini,
  SidebarLeft,
  SparklesMiniSolid,
  XMarkMini,
} from "@minima-vue/icons"
import SidebarNav from "@docs/components/SidebarNav.vue"
import MainNavDropdown from "@docs/components/main-nav/MainNavDropdown.vue"
import type { MainNavDropdownItem, MainNavItem, MainNavMenuItem } from "@docs/data/main-nav"
import { mainNavItems } from "@docs/data/main-nav"
import { navigationItems } from "@docs/data/navigation"

const route = useRoute()
const sidebarOpen = ref(false)
const desktopSidebarOpen = ref(true)

const helpMenuItem: MainNavDropdownItem = {
  type: "dropdown",
  title: "Help",
  children: [
    {
      type: "link",
      title: "Troubleshooting",
      link: "https://docs.medusajs.com/resources/troubleshooting",
    },
    {
      type: "link",
      title: "Report Issue",
      link: "https://github.com/medusajs/medusa/issues/new/choose",
    },
    {
      type: "link",
      title: "Discord Community",
      link: "https://discord.gg/medusajs",
    },
    {
      type: "divider",
    },
    {
      type: "link",
      title: "Contact Sales",
      link: "https://medusajs.com/contact/",
    },
  ],
}

const isExternalLink = (link: string) => /^https?:\/\//.test(link)

const isUserGuidePath = computed(() => {
  return (
    route.path.startsWith("/components") ||
    route.path.startsWith("/hooks") ||
    route.path.startsWith("/utils") ||
    route.path.startsWith("/installation") ||
    route.path.startsWith("/icons") ||
    route.path.startsWith("/colors")
  )
})

const hasActiveMenuLink = (items: MainNavMenuItem[]) => {
  return items.some((item) => {
    if (item.type === "divider") {
      return false
    }

    if (item.type === "link") {
      return !isExternalLink(item.link) && route.path === item.link
    }

    if (item.link && !isExternalLink(item.link) && route.path === item.link) {
      return true
    }

    return hasActiveMenuLink(item.items)
  })
}

const isMainNavItemActive = (item: MainNavItem) => {
  if (item.type === "link") {
    if (item.title === "User Guide") {
      return isUserGuidePath.value
    }

    if (isExternalLink(item.link)) {
      return false
    }

    return route.path === item.link
  }

  if (item.link && !isExternalLink(item.link) && route.path === item.link) {
    return true
  }

  return hasActiveMenuLink(item.children)
}

watch(
  () => route.path,
  () => {
    sidebarOpen.value = false
  }
)
</script>

<template>
  <div
    id="root-layout"
    class="docs-shell bg-ui-bg-subtle font-base w-full text-ui-fg-base h-full overflow-hidden grid grid-cols-1 lg:mx-auto"
    :class="desktopSidebarOpen ? 'lg:grid-cols-[221px_1fr]' : 'lg:grid-cols-1'"
  >
    <div
      v-if="sidebarOpen"
      class="fixed left-0 top-0 z-[45] h-full w-full bg-ui-bg-overlay opacity-70 lg:hidden"
      @click="sidebarOpen = false"
    />

    <aside
      class="fixed -left-full top-0 block h-[calc(100%-16px)] w-sidebar-xs max-w-sidebar-xs bg-ui-bg-base transition-[left] sm:max-w-sidebar-sm md:max-w-sidebar-md lg:relative lg:h-auto lg:w-auto lg:max-w-sidebar-lg lg:bg-transparent xl:max-w-sidebar-xl xxl:max-w-sidebar-xxl xxxl:max-w-sidebar-xxxl"
      :class="
        [
          sidebarOpen
            ? '!left-docs_0.5 !top-docs_0.5 z-50 rounded shadow-elevation-modal lg:!left-0 lg:!top-0 lg:rounded-none lg:shadow-none'
            : '',
          desktopSidebarOpen ? 'lg:left-0' : 'lg:!absolute lg:!-left-full',
        ]
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
      <div
        class="relative flex h-full max-w-full flex-1 flex-col gap-docs_0.5 scroll-m-docs_0.25 lg:mr-docs_0.25 lg:py-docs_0.25"
        :class="desktopSidebarOpen ? '' : 'lg:ml-docs_0.25'"
      >
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
                      <img
                        src="/images/logo-icon.png"
                        alt="Medusa UI logo"
                        class="bordered-icon h-5 w-5 rounded-docs_xs"
                      >
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
                    <a
                      v-if="item.type === 'link' && isExternalLink(item.link)"
                      :href="item.link"
                      class="inline-flex items-center justify-center gap-docs_0.25 rounded-docs_xs txt-compact-small-plus no-underline transition focus:shadow-borders-focus"
                      :class="
                        isMainNavItemActive(item)
                          ? 'text-ui-fg-base'
                          : 'text-ui-fg-muted hover:text-ui-fg-subtle'
                      "
                    >
                      {{ item.title }}
                    </a>
                    <RouterLink
                      v-else-if="item.type === 'link'"
                      :to="item.link"
                      class="inline-flex items-center justify-center gap-docs_0.25 rounded-docs_xs txt-compact-small-plus no-underline transition focus:shadow-borders-focus"
                      :class="
                        isMainNavItemActive(item)
                          ? 'text-ui-fg-base'
                          : 'text-ui-fg-muted hover:text-ui-fg-subtle'
                      "
                    >
                      {{ item.title }}
                    </RouterLink>
                    <MainNavDropdown
                      v-else
                      :item="item"
                      :active="isMainNavItemActive(item)"
                    />
                  </li>
                </ul>
              </nav>

              <div class="my-docs_0.75 hidden items-center lg:flex" data-testid="main-nav-actions">
                <div class="hidden items-center gap-[6px] text-ui-fg-subtle lg:flex">
                  <MainNavDropdown
                    :item="helpMenuItem"
                    class-name="text-ui-fg-subtle hover:bg-ui-button-transparent-hover rounded-docs_sm px-docs_0.5"
                    wrapper-class-name="z-10"
                  />
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
                    aria-label="Toggle sidebar"
                    @click="desktopSidebarOpen = !desktopSidebarOpen"
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
