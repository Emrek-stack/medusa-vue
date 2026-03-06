import type { Component } from "vue"
import {
  ShoppingCart,
  Tag,
  Buildings,
  Users,
  ReceiptPercent,
  CurrencyDollar,
  CogSixTooth,
  BuildingStorefront,
  User,
  GlobeEurope,
  Server,
} from "@minima-vue/icons"

export type NavChildItem = {
  label: string
  to: string
}

export type NavItem = {
  label: string
  to: string
  icon?: Component
  items?: NavChildItem[]
}

export type NavSection = {
  title: string
  items: NavItem[]
}

export const coreNavItems: NavItem[] = [
  {
    icon: ShoppingCart,
    label: "Orders",
    to: "/orders",
  },
  {
    icon: Tag,
    label: "Products",
    to: "/products",
    items: [
      { label: "Collections", to: "/products?view=collections" },
      { label: "Categories", to: "/products?view=categories" },
    ],
  },
  {
    icon: Buildings,
    label: "Inventory",
    to: "/inventory",
  },
  {
    icon: Users,
    label: "Customers",
    to: "/customers",
  },
  {
    icon: ReceiptPercent,
    label: "Promotions",
    to: "/promotions",
  },
  {
    icon: CurrencyDollar,
    label: "Price Lists",
    to: "/price-lists",
  },
]

export const settingsNavSections: NavSection[] = [
  {
    title: "General",
    items: [
      { icon: BuildingStorefront, label: "Store", to: "/settings/store" },
      { icon: User, label: "Users", to: "/settings/users" },
      { icon: GlobeEurope, label: "Regions", to: "/settings/regions" },
    ],
  },
  {
    title: "Developer",
    items: [
      { icon: Server, label: "API Keys", to: "/settings/api-keys" },
      { icon: CogSixTooth, label: "Workflows", to: "/settings/workflows" },
    ],
  },
]

export const routeLabelMap: Record<string, string> = {
  "/orders": "Orders",
  "/products": "Products",
  "/inventory": "Inventory",
  "/customers": "Customers",
  "/promotions": "Promotions",
  "/price-lists": "Price Lists",
  "/settings": "Settings",
  "/settings/store": "Store",
  "/settings/users": "Users",
  "/settings/regions": "Regions",
  "/settings/api-keys": "API Keys",
  "/settings/workflows": "Workflows",
}
