<script setup lang="ts">
import { computed, ref } from "vue"
import { RouterLink } from "vue-router"
import { TriangleDownMini } from "@minima-vue/icons"
import MainNavMenu from "./MainNavMenu.vue"
import type { MainNavDropdownItem } from "@docs/data/main-nav"

const props = defineProps<{
  item: MainNavDropdownItem
  active?: boolean
  className?: string
  wrapperClassName?: string
}>()

const isOpen = ref(false)

const isExternalLink = (link: string) => /^https?:\/\//.test(link)

const textClass = computed(() => {
  if (props.active) {
    return "text-ui-fg-base"
  }

  if (isOpen.value) {
    return "text-ui-fg-subtle"
  }

  return "text-ui-fg-muted hover:text-ui-fg-subtle"
})

const triggerClass = computed(() => {
  return [
    "inline-flex items-center justify-center gap-docs_0.25 rounded-docs_xs txt-compact-small-plus no-underline transition focus:shadow-borders-focus",
    textClass.value,
    props.className || "",
  ]
})

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <div
    class="relative"
    :class="wrapperClassName"
    data-testid="dropdown-wrapper"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <a
      v-if="item.link && isExternalLink(item.link)"
      :href="item.link"
      class="!flex"
      :class="triggerClass"
      data-testid="dropdown-title-wrapper"
    >
      <span data-testid="dropdown-title">{{ item.title }}</span>
      <TriangleDownMini
        class="transition-transform"
        :class="isOpen ? 'rotate-180' : ''"
        data-testid="triangle-icon"
      />
    </a>
    <RouterLink
      v-else-if="item.link"
      :to="item.link"
      class="!flex"
      :class="triggerClass"
      data-testid="dropdown-title-wrapper"
    >
      <span data-testid="dropdown-title">{{ item.title }}</span>
      <TriangleDownMini
        class="transition-transform"
        :class="isOpen ? 'rotate-180' : ''"
        data-testid="triangle-icon"
      />
    </RouterLink>
    <div
      v-else
      class="cursor-pointer flex items-center gap-docs_0.25 py-docs_0.25"
      :class="[textClass, className || '']"
      tabindex="-1"
      data-testid="dropdown-title-wrapper"
    >
      <span class="txt-compact-small-plus" data-testid="dropdown-title">
        {{ item.title }}
      </span>
      <TriangleDownMini
        class="transition-transform"
        :class="isOpen ? 'rotate-180' : ''"
        data-testid="triangle-icon"
      />
    </div>

    <div class="absolute -left-docs_0.75 top-full pt-docs_0.25">
      <MainNavMenu
        v-if="isOpen"
        class="min-w-[190px]"
        :items="item.children"
        @close="closeMenu"
      />
    </div>
  </div>
</template>
