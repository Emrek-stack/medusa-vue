<script setup lang="ts">
import { watch } from "vue"
import { useRoute } from "vue-router"
import { XMark } from "@minima-vue/icons"

import SearchDialog from "@/components/layout/search/SearchDialog.vue"
import SidebarNav from "@/components/nav/SidebarNav.vue"
import TopBar from "@/components/topbar/TopBar.vue"
import { useUiState } from "@/stores/ui-state"

const route = useRoute()
const uiState = useUiState()

watch(
  () => route.fullPath,
  () => {
    uiState.closeMobileSidebar()
  }
)
</script>

<template>
  <div class="bg-ui-bg-subtle text-ui-fg-base relative flex h-screen flex-col items-start overflow-hidden lg:flex-row">
    <div
      v-if="uiState.sidebarDesktop.value"
      class="hidden h-screen w-[220px] border-r border-ui-border-base lg:flex"
    >
      <SidebarNav />
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="uiState.sidebarMobile.value" class="fixed inset-0 z-50 lg:hidden">
          <div class="bg-ui-bg-overlay absolute inset-0" @click="uiState.toggleSidebar('mobile')" />

          <aside
            class="bg-ui-bg-subtle shadow-elevation-modal fixed inset-y-2 left-2 flex w-full max-w-[304px] flex-col overflow-hidden rounded-lg border-r border-ui-border-base"
          >
            <div class="p-3">
              <button
                type="button"
                class="text-ui-fg-subtle hover:bg-ui-bg-subtle-hover inline-flex h-8 w-8 items-center justify-center rounded-md"
                aria-label="Close sidebar"
                @click="uiState.toggleSidebar('mobile')"
              >
                <XMark class="h-4 w-4" />
              </button>
            </div>
            <SidebarNav />
          </aside>
        </div>
      </Transition>
    </Teleport>

    <div class="flex h-screen w-full flex-col overflow-auto">
      <TopBar />
      <SearchDialog />

      <main class="flex h-full w-full flex-col items-center overflow-y-auto">
        <div class="mx-auto flex w-full max-w-[1600px] flex-col gap-y-2 p-3">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
