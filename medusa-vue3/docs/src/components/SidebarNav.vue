<script setup lang="ts">
import { nextTick, reactive, watch } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { TriangleDownMini, TriangleUpMini } from "@medusa-vue/icons"
import type { SidebarItem } from "@docs/data/navigation"

const props = defineProps<{
  items: SidebarItem[]
}>()

const route = useRoute()
const openCategories = reactive<Record<string, boolean>>({})

const isActive = (to: string) => route.path === to
const isTitleOneWord = (title: string) => title.split(" ").length === 1

const syncOpenCategories = () => {
  props.items.forEach((item) => {
    if (item.type !== "category") {
      return
    }

    if (!(item.title in openCategories)) {
      openCategories[item.title] = item.initialOpen ?? false
    }

    if (item.items.some((link) => isActive(link.to))) {
      openCategories[item.title] = true
    }
  })
}

const revealActiveItem = async () => {
  await nextTick()

  const activeLink = document.querySelector("[data-sidebar-active='true']")

  if (activeLink instanceof HTMLElement) {
    activeLink.scrollIntoView({
      block: "center",
    })
  }
}

watch(
  () => route.path,
  async () => {
    syncOpenCategories()
    await revealActiveItem()
  },
  { immediate: true }
)
</script>

<template>
  <nav aria-label="Sidebar navigation">
    <ul class="flex flex-col">
      <template v-for="(item, index) in items" :key="`${item.type}-${index}`">
        <li
          v-if="item.type === 'separator'"
          class="px-docs_0.75 my-docs_0.75 first:mt-0"
        >
          <span class="block h-px w-full bg-border-dotted bg-[length:4px_1px] bg-repeat-x bg-bottom" />
        </li>

        <li v-else-if="item.type === 'link'">
          <span class="block px-docs_0.75">
            <RouterLink
              :to="item.to"
              class="block w-full rounded-docs_sm px-docs_0.5 py-docs_0.25 txt-compact-small-plus transition"
              :data-sidebar-active="isActive(item.to)"
              :class="
                isActive(item.to)
                  ? 'bg-ui-bg-base text-ui-fg-base shadow-elevation-card-rest'
                  : 'text-ui-fg-subtle hover:bg-ui-bg-base-hover lg:hover:bg-ui-bg-subtle-hover'
              "
            >
              <span
                class="block"
                :class="isTitleOneWord(item.title) ? 'truncate' : 'break-words'"
                data-testid="sidebar-item-title"
              >
                {{ item.title }}
              </span>
            </RouterLink>
          </span>
        </li>

        <li v-else class="relative my-docs_0.75 first:!mt-0 w-full">
          <div class="px-docs_0.75">
            <div
              class="relative z-[2] flex cursor-pointer items-center justify-between gap-docs_0.5 px-docs_0.5 py-docs_0.25 text-ui-fg-muted"
              tabindex="-1"
              data-testid="sidebar-item-category"
              @click="openCategories[item.title] = !openCategories[item.title]"
            >
              <span
                class="block txt-compact-xsmall-plus"
                :class="isTitleOneWord(item.title) ? 'truncate' : 'break-words'"
                data-testid="sidebar-item-title"
              >
                {{ item.title }}
              </span>
              <TriangleDownMini
                v-if="openCategories[item.title]"
                class="h-4 w-4"
              />
              <TriangleUpMini
                v-else
                class="h-4 w-4"
              />
            </div>
          </div>

          <ul
            class="ease-ease relative z-[1] flex flex-col gap-docs_0.125 pb-docs_0.5 pt-docs_0.125"
            :class="openCategories[item.title] ? '' : 'm-0 h-0 overflow-hidden'"
            data-testid="sidebar-item-category-children"
          >
            <li v-for="link in item.items" :key="link.to">
              <span class="block px-docs_0.75">
                <RouterLink
                  :to="link.to"
                  class="block w-full rounded-docs_sm px-docs_0.5 py-docs_0.25 txt-compact-small-plus transition"
                  :data-sidebar-active="isActive(link.to)"
                  :class="
                    isActive(link.to)
                      ? 'bg-ui-bg-base text-ui-fg-base shadow-elevation-card-rest'
                      : 'text-ui-fg-subtle hover:bg-ui-bg-base-hover lg:hover:bg-ui-bg-subtle-hover'
                  "
                >
                  <span
                    class="inline-block"
                    :class="isTitleOneWord(link.title) ? 'truncate' : 'break-words'"
                    data-testid="sidebar-item-title"
                  >
                    {{ link.title }}
                  </span>
                </RouterLink>
              </span>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </nav>
</template>
