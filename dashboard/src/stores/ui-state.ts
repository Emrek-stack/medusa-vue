import { ref } from "vue"

const sidebarDesktop = ref(true)
const sidebarMobile = ref(false)
const searchOpen = ref(false)
const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return false
  }

  try {
    const saved = window.localStorage.getItem("dashboard-theme")
    if (saved === "dark") {
      return true
    }
    if (saved === "light") {
      return false
    }
  } catch {
    // noop
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false
}

const isDark = ref(getInitialTheme())

const applyTheme = (value: boolean) => {
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", value)
    document.body.classList.toggle("dark", value)
    document.documentElement.setAttribute("data-theme", value ? "dark" : "light")
    document.documentElement.style.colorScheme = value ? "dark" : "light"
  }

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem("dashboard-theme", value ? "dark" : "light")
    } catch {
      // noop
    }
  }
}

applyTheme(isDark.value)

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

const toggleDark = () => {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

const setDark = (value: boolean) => {
  isDark.value = value
  applyTheme(isDark.value)
}

export const useUiState = () => ({
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
})
