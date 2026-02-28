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
          class="mx-4 my-4 border-t border-dashed border-ui-border-base first:mt-0"
        />

        <li v-else-if="item.type === 'link'">
          <span class="block px-3">
            <RouterLink
              :to="item.to"
              class="text-compact-small-plus block w-full rounded-sm py-1 px-2 transition"
              :data-sidebar-active="isActive(item.to)"
              :class="
                isActive(item.to)
                  ? 'bg-ui-bg-base text-ui-fg-base shadow-elevation-card-rest'
                  : 'text-ui-fg-subtle hover:bg-ui-bg-base hover:text-ui-fg-base'
              "
            >
              {{ item.title }}
            </RouterLink>
          </span>
        </li>

        <li v-else class="relative my-3 first:mt-0">
          <div class="px-3">
            <button
              type="button"
              class="text-compact-x-small-plus flex w-full items-center justify-between gap-2 py-1 px-2 uppercase tracking-[0.2em] text-ui-fg-muted"
              @click="openCategories[item.title] = !openCategories[item.title]"
            >
              <span>{{ item.title }}</span>
              <TriangleDownMini v-if="openCategories[item.title]" class="h-4 w-4" />
              <TriangleUpMini v-else class="h-4 w-4" />
            </button>
          </div>

          <ul
            v-if="openCategories[item.title]"
            class="flex flex-col gap-0.5 pt-0.5"
          >
            <li v-for="link in item.items" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-compact-small-plus mx-3 block rounded-sm py-1 px-2 transition"
                :data-sidebar-active="isActive(link.to)"
                :class="
                  isActive(link.to)
                    ? 'bg-ui-bg-base text-ui-fg-base shadow-elevation-card-rest'
                    : 'text-ui-fg-subtle hover:bg-ui-bg-base hover:text-ui-fg-base'
                "
              >
                {{ link.title }}
              </RouterLink>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </nav>
</template>
