<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { MagnifyingGlass, XMark } from "@minima-vue/icons"
import { Kbd, Text } from "@minima-vue/ui"
import { useUiState } from "@/stores/ui-state"

type SearchGroup = {
  title: string
  items: Array<{
    label: string
    to: string
    keywords?: string[]
  }>
}

const router = useRouter()
const route = useRoute()
const uiState = useUiState()

const inputRef = ref<HTMLInputElement | null>(null)
const query = ref("")

const groups: SearchGroup[] = [
  {
    title: "Workspace",
    items: [
      { label: "Kontrol Paneli", to: "/dashboard", keywords: ["home", "dashboard"] },
      { label: "Tenant Yönetimi", to: "/tenants", keywords: ["tenant", "workspace"] },
      { label: "Kullanıcı Yönetimi", to: "/users", keywords: ["user", "team"] },
      { label: "Rol Yönetimi", to: "/roles", keywords: ["role", "rbac"] },
      { label: "Yetki Yönetimi", to: "/permissions", keywords: ["permission", "scope"] },
      { label: "UI Demo", to: "/ui-demo", keywords: ["demo", "components"] },
    ],
  },
  {
    title: "Settings",
    items: [
      { label: "Genel", to: "/settings/general" },
      { label: "Tenantlar", to: "/settings/tenants" },
      { label: "Roller", to: "/settings/roles" },
      { label: "İzinler", to: "/settings/permissions" },
      { label: "API Anahtarları", to: "/settings/api-keys" },
      { label: "Entegrasyonlar", to: "/settings/integrations" },
      { label: "Güncellemeler", to: "/settings/updates" },
      { label: "Profil", to: "/settings/profile" },
      { label: "Tercihler", to: "/settings/preferences" },
    ],
  },
]

const normalize = (value: string) =>
  value
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()

const normalizedQuery = computed(() => normalize(query.value))
const isMacLike = computed(() =>
  typeof navigator !== "undefined" ? /Mac|iPhone|iPad|iPod/.test(navigator.platform) : true
)

const filteredGroups = computed(() => {
  if (!normalizedQuery.value) {
    return groups
  }

  return groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        const searchable = [item.label, item.to, ...(item.keywords ?? [])].map(normalize)
        return searchable.some((value) => value.includes(normalizedQuery.value))
      }),
    }))
    .filter((group) => group.items.length > 0)
})

const hasResult = computed(() => filteredGroups.value.length > 0)

const close = () => {
  uiState.closeSearch()
}

const openRoute = async (to: string) => {
  close()
  await router.push(to)
}

const onOverlayClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    close()
  }
}

const isInputElement = (element: Element | null) => {
  if (!element) {
    return false
  }

  const tag = element.tagName.toLowerCase()

  if (tag === "textarea") {
    return true
  }

  if (tag === "input") {
    const input = element as HTMLInputElement
    return input.type !== "button" && input.type !== "submit" && input.type !== "reset"
  }

  return (element as HTMLElement).isContentEditable
}

const onInputKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    event.preventDefault()
    close()
  }

  if (event.key === "Enter" && filteredGroups.value[0]?.items[0]) {
    event.preventDefault()
    openRoute(filteredGroups.value[0].items[0].to)
  }
}

const onGlobalKeydown = (event: KeyboardEvent) => {
  const isSearchShortcut = event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)

  if (isSearchShortcut) {
    const target = event.target as Element | null
    if (isInputElement(target) && target !== inputRef.value) {
      return
    }

    event.preventDefault()
    uiState.toggleSearch()
    return
  }

  if (event.key === "Escape" && uiState.searchOpen) {
    event.preventDefault()
    close()
  }
}

watch(
  () => uiState.searchOpen,
  async (open) => {
    if (!open) {
      query.value = ""
      return
    }

    await nextTick()
    inputRef.value?.focus()
    inputRef.value?.select()
  }
)

watch(
  () => route.fullPath,
  () => {
    if (uiState.searchOpen) {
      close()
    }
  }
)

watch(
  () => uiState.searchOpen,
  (_, __, onCleanup) => {
    window.addEventListener("keydown", onGlobalKeydown)

    onCleanup(() => {
      window.removeEventListener("keydown", onGlobalKeydown)
    })
  },
  { immediate: true }
)
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="uiState.searchOpen"
        class="bg-ui-bg-overlay fixed inset-0 z-[80] flex items-start justify-center p-2 pt-10 sm:p-4 sm:pt-16"
        @mousedown="onOverlayClick"
      >
        <section
          class="bg-ui-bg-base shadow-elevation-modal flex w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-ui-border-base"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <header class="border-b border-ui-border-base px-4 py-3">
            <div class="flex items-center gap-x-2">
              <MagnifyingGlass class="text-ui-fg-subtle h-4 w-4" />
              <input
                ref="inputRef"
                v-model="query"
                type="search"
                placeholder="Search pages..."
                class="txt-compact-small-plus text-ui-fg-base placeholder:text-ui-fg-muted h-6 flex-1 bg-transparent outline-none"
                @keydown="onInputKeydown"
              />
              <Kbd class="bg-ui-bg-field text-ui-fg-muted border-ui-border-base">{{ isMacLike ? '⌘K' : 'Ctrl K' }}</Kbd>
              <button
                type="button"
                class="text-ui-fg-muted hover:text-ui-fg-base hover:bg-ui-bg-subtle-hover inline-flex h-7 w-7 items-center justify-center rounded-md"
                aria-label="Close search"
                @click="close"
              >
                <XMark class="h-4 w-4" />
              </button>
            </div>
          </header>

          <div class="max-h-[360px] overflow-y-auto px-2 pb-4">
            <template v-if="hasResult">
              <section v-for="group in filteredGroups" :key="group.title" class="pt-3">
                <Text size="xsmall" class="text-ui-fg-muted px-2 pb-1">{{ group.title }}</Text>
                <button
                  v-for="item in group.items"
                  :key="item.to"
                  type="button"
                  class="text-ui-fg-base hover:bg-ui-bg-base-hover focus-visible:shadow-borders-focus txt-compact-small flex w-full items-center justify-between rounded-md px-2 py-2 text-left outline-none"
                  @click="openRoute(item.to)"
                >
                  <span>{{ item.label }}</span>
                  <Text size="xsmall" class="text-ui-fg-muted">{{ item.to }}</Text>
                </button>
              </section>
            </template>

            <div v-else class="text-ui-fg-subtle flex min-h-[220px] flex-col items-center justify-center gap-y-2">
              <MagnifyingGlass class="text-ui-fg-muted h-4 w-4" />
              <Text size="small" weight="plus">Sonuç bulunamadı</Text>
              <Text size="small" class="text-ui-fg-muted">Farklı bir anahtar kelime deneyin.</Text>
            </div>
          </div>

          <footer class="bg-ui-bg-field border-t border-ui-border-base px-4 py-2">
            <div class="text-ui-fg-subtle flex items-center justify-end gap-x-3">
              <div class="flex items-center gap-x-1">
                <Text size="xsmall">Close</Text>
                <Kbd class="bg-ui-bg-field-component">Esc</Kbd>
              </div>
              <div class="bg-ui-border-strong h-3 w-px" />
              <div class="flex items-center gap-x-1">
                <Text size="xsmall">Open</Text>
                <Kbd class="bg-ui-bg-field-component">↵</Kbd>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>
