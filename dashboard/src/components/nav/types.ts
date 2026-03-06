import type { Component } from "vue"

export type SidebarItemType = "core" | "setting"

export type SidebarNavItemNode = {
  label: string
  to?: string
  icon?: Component | unknown
  items?: SidebarNavItemNode[]
  badge?: string | number
  keywords?: string[]
  disabled?: boolean
}

export type SidebarSection = {
  label: string
  items: SidebarNavItemNode[]
}
