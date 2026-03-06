<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { TriangleRightMini } from "@minima-vue/icons"
import type { MainNavMenuItem } from "@docs/data/main-nav"

defineOptions({
  name: "MainNavMenu",
})

const props = defineProps<{
  items: MainNavMenuItem[]
}>()

const emit = defineEmits<{
  close: []
}>()

const openSubMenuIndex = ref<number | null>(null)

const isExternalLink = (link: string) => /^https?:\/\//.test(link)
const subMenuIsOpen = (index: number) => openSubMenuIndex.value === index

const handleItemClick = () => {
  emit("close")
}
</script>

<template>
  <div
    class="bg-ui-bg-component rounded-docs_DEFAULT py-docs_0.25 shadow-elevation-flyout"
    data-testid="menu"
  >
    <template v-for="(item, index) in props.items" :key="`${item.type}-${index}`">
      <div v-if="item.type === 'link'" class="px-docs_0.25">
        <a
          v-if="isExternalLink(item.link)"
          :href="item.link"
          class="text-ui-fg-base hover:bg-ui-bg-component-hover flex gap-docs_0.5 rounded-docs_xs px-docs_0.5 py-docs_0.25 no-underline"
          :target="item.openInNewTab ? '_blank' : undefined"
          :rel="item.openInNewTab ? 'noopener noreferrer' : undefined"
          @click="handleItemClick"
        >
          <span class="txt-compact-small">{{ item.title }}</span>
        </a>
        <RouterLink
          v-else
          :to="item.link"
          class="text-ui-fg-base hover:bg-ui-bg-component-hover flex gap-docs_0.5 rounded-docs_xs px-docs_0.5 py-docs_0.25 no-underline"
          @click="handleItemClick"
        >
          <span class="txt-compact-small">{{ item.title }}</span>
        </RouterLink>
      </div>

      <svg
        v-else-if="item.type === 'divider'"
        width="100%"
        height="100%"
        viewBox="0 0 205 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="197" height="8" transform="translate(4)" fill="var(--bg-component)" />
        <rect x="-4" y="3" width="213" height="1" fill="var(--border-menu-top)" />
        <rect x="-4" y="4" width="213" height="1" fill="var(--border-menu-bot)" />
      </svg>

      <div
        v-else
        class="relative px-docs_0.25"
        data-testid="sub-menu-wrapper"
        @mouseenter="openSubMenuIndex = index"
        @mouseleave="openSubMenuIndex = null"
      >
        <a
          v-if="item.link && isExternalLink(item.link)"
          :href="item.link"
          class="text-ui-fg-base hover:bg-ui-bg-component-hover flex items-center justify-between gap-docs_0.5 rounded-docs_xs px-docs_0.5 py-docs_0.25 no-underline"
          @click="handleItemClick"
        >
          <span class="txt-compact-small">{{ item.title }}</span>
          <span class="text-ui-fg-subtle mt-[2.5px] block">
            <TriangleRightMini />
          </span>
        </a>
        <RouterLink
          v-else-if="item.link"
          :to="item.link"
          class="text-ui-fg-base hover:bg-ui-bg-component-hover flex items-center justify-between gap-docs_0.5 rounded-docs_xs px-docs_0.5 py-docs_0.25 no-underline"
          @click="handleItemClick"
        >
          <span class="txt-compact-small">{{ item.title }}</span>
          <span class="text-ui-fg-subtle mt-[2.5px] block">
            <TriangleRightMini />
          </span>
        </RouterLink>
        <span
          v-else
          class="text-ui-fg-base hover:bg-ui-bg-component-hover flex items-center justify-between gap-docs_0.5 rounded-docs_xs px-docs_0.5 py-docs_0.25"
        >
          <span class="txt-compact-small">{{ item.title }}</span>
          <span class="text-ui-fg-subtle mt-[2.5px] block">
            <TriangleRightMini />
          </span>
        </span>

        <div v-if="subMenuIsOpen(index)" class="absolute left-[calc(100%-8px)] top-0 w-max">
          <MainNavMenu :items="item.items" @close="handleItemClick" />
        </div>
      </div>
    </template>
  </div>
</template>
