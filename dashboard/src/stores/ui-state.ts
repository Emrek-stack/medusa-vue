import { ref, watch } from "vue"
import { defineStore } from "pinia"
import { useDark, useStorage, useToggle } from "@vueuse/core"

export const useUiState = defineStore("ui-state", () => {
  const sidebarDesktop = useStorage("dashboard-sidebar-desktop", true)
  const sidebarMobile = ref(false)
  const searchOpen = ref(false)

  const isDark = useDark({
    selector: "html",
    attribute: "class",
    valueDark: "dark",
    valueLight: "",
    initialValue: "light",
    storageKey: "dashboard-theme",
  })

  watch(
    isDark,
    (value) => {
      if (typeof document === "undefined") {
        return
      }

      document.body.classList.toggle("dark", value)
      document.documentElement.setAttribute("data-theme", value ? "dark" : "light")
      document.documentElement.style.colorScheme = value ? "dark" : "light"
    },
    { immediate: true }
  )

  const toggleDark = useToggle(isDark)

  const setDark = (value: boolean) => {
    isDark.value = value
  }

  const toggleSidebar = (view: "desktop" | "mobile") => {
    if (view === "desktop") {
      sidebarDesktop.value = !sidebarDesktop.value
      return
    }

    sidebarMobile.value = !sidebarMobile.value
  }

  const closeMobileSidebar = () => {
    sidebarMobile.value = false
  }

  const openSearch = () => {
    if (sidebarMobile.value) {
      sidebarMobile.value = false
    }

    searchOpen.value = true
  }

  const closeSearch = () => {
    searchOpen.value = false
  }

  const toggleSearch = () => {
    if (searchOpen.value) {
      closeSearch()
      return
    }

    openSearch()
  }

  return {
    sidebarDesktop,
    sidebarMobile,
    searchOpen,
    isDark,
    toggleSidebar,
    closeMobileSidebar,
    openSearch,
    closeSearch,
    toggleSearch,
    toggleDark,
    setDark,
  }
})
