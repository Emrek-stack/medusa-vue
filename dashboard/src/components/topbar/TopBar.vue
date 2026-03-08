<script setup lang="ts">
import { computed } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { SidebarLeft, TriangleRightMini } from "@minima-vue/icons"
import { IconButton } from "@minima-vue/ui"
import Notifications from "@/components/layout/notifications/index.vue"
import { routeLabelMap } from "@/data/navigation"
import { useUiState } from "@/stores/ui-state"

const uiState = useUiState()
const route = useRoute()

const breadcrumbs = computed(() => {
  const segments = route.path.split("/").filter(Boolean)

  if (!segments.length) {
    return []
  }

  const items: { to: string; label: string }[] = []
  let current = ""

  for (const segment of segments) {
    current += `/${segment}`
    const fallback = segment.replace(/-/g, " ")
    const label = routeLabelMap[current] ?? fallback.charAt(0).toUpperCase() + fallback.slice(1)

    items.push({ to: current, label })
  }

  return items
})
</script>

<template>
  <header class="grid w-full grid-cols-2 border-b p-3">
    <div class="flex items-center gap-x-1.5">
      <IconButton
        variant="transparent"
        size="small"
        class="hidden lg:flex"
        aria-label="Toggle sidebar"
        @click="uiState.toggleSidebar('desktop')"
      >
        <SidebarLeft class="text-ui-fg-muted rtl:rotate-180" />
      </IconButton>

      <IconButton
        variant="transparent"
        size="small"
        class="hidden max-lg:flex"
        aria-label="Open sidebar"
        @click="uiState.toggleSidebar('mobile')"
      >
        <SidebarLeft class="text-ui-fg-muted rtl:rotate-180" />
      </IconButton>

      <ol class="txt-compact-small-plus text-ui-fg-muted flex select-none items-center">
        <li
          v-for="(crumb, index) in breadcrumbs"
          :key="crumb.to"
          class="flex items-center"
        >
          <RouterLink
            v-if="index < breadcrumbs.length - 1"
            :to="crumb.to"
            class="transition-fg hover:text-ui-fg-subtle"
          >
            {{ crumb.label }}
          </RouterLink>
          <div v-else>
            <span v-if="breadcrumbs.length > 1" class="block lg:hidden">...</span>
            <span :class="{ 'hidden lg:block': breadcrumbs.length > 1 }">
              {{ crumb.label }}
            </span>
          </div>
          <span v-if="index < breadcrumbs.length - 1" class="mx-2">
            <TriangleRightMini class="rtl:rotate-180" />
          </span>
        </li>
      </ol>
    </div>

    <div class="flex items-center justify-end gap-x-3">
      <Notifications />
    </div>
  </header>
</template>
