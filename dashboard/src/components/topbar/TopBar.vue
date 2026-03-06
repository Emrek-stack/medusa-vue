<script setup lang="ts">
import { computed } from "vue"
import { MoonSolid, SidebarLeft, SunSolid } from "@minima-vue/icons"
import { IconButton } from "@minima-vue/ui"
import Notifications from "@/components/layout/notifications/index.vue"
import { useUiState } from "@/stores/ui-state"

const uiState = useUiState()
const isDark = computed(() => uiState.isDark)
const onToggleDark = () => uiState.toggleDark()
</script>

<template>
  <header class="grid w-full grid-cols-2 border-b border-ui-border-base p-3">
    <div class="flex items-center gap-x-1.5">
      <IconButton
        variant="transparent"
        size="small"
        class="hidden lg:inline-flex"
        aria-label="Toggle sidebar"
        @click="uiState.toggleSidebar('desktop')"
      >
        <SidebarLeft class="h-4 w-4 text-ui-fg-muted" />
      </IconButton>

      <IconButton
        variant="transparent"
        size="small"
        class="inline-flex lg:hidden"
        aria-label="Open sidebar"
        @click="uiState.toggleSidebar('mobile')"
      >
        <SidebarLeft class="h-4 w-4 text-ui-fg-muted" />
      </IconButton>

      <ol class="txt-compact-small-plus text-ui-fg-muted flex select-none items-center">
        <li class="flex items-center">
          <span>Platform</span>
        </li>
      </ol>
    </div>

    <div class="flex items-center justify-end gap-x-3">
      <Notifications />

      <button
        type="button"
        class="text-ui-fg-muted hover:bg-ui-bg-subtle-hover inline-flex h-8 w-8 items-center justify-center rounded-md"
        aria-label="Toggle dark mode"
        @click="onToggleDark"
      >
        <SunSolid v-if="isDark" class="h-4 w-4 text-ui-fg-muted" />
        <MoonSolid v-else class="h-4 w-4 text-ui-fg-muted" />
      </button>
    </div>
  </header>
</template>
