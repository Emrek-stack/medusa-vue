import type { Component } from "vue"

export type ItemType = "core" | "extension" | "setting"

export type NestedItemProps = {
  label: string
  to: string
  translationNs?: string
}

export type INavItem = {
  icon?: Component | unknown
  label: string
  to: string
  items?: NestedItemProps[]
  type?: ItemType
  from?: string
  translationNs?: string
}
