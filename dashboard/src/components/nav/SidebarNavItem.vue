<script setup lang="ts">
import { computed, ref, watch } from "vue"
import type { RouteLocationRaw } from "vue-router"
import { cn } from "@/shared/utils/cn"
import type { SidebarItemType, SidebarNavItemNode } from "./types"

const props = withDefaults(
  defineProps<{
    item: SidebarNavItemNode
    type?: SidebarItemType
    currentPath: string
    fromPath?: string
  }>(),
  {
    type: "core",
  }
)

const BASE_NAV_LINK_CLASSES =
  "text-ui-fg-subtle transition-fg hover:bg-ui-bg-subtle-hover flex items-center gap-x-2 rounded-md py-0.5 pl-0.5 pr-2 outline-none [&>svg]:text-ui-fg-subtle focus-visible:shadow-borders-focus"
const ACTIVE_NAV_LINK_CLASSES = "bg-ui-bg-base shadow-elevation-card-rest text-ui-fg-base hover:bg-ui-bg-base"
const NESTED_NAV_LINK_CLASSES = "pl-[34px] pr-2 py-1 w-full text-ui-fg-muted"
const SETTING_NAV_LINK_CLASSES = "pl-2 py-1"
const DISABLED_NAV_LINK_CLASSES = "pointer-events-none cursor-not-allowed opacity-50"

const hasChildren = computed(() => Boolean(props.item.items?.length))

const isPathActive = (path: string): boolean => {
  if (props.type === "core" || props.type === "setting") {
    return props.currentPath.startsWith(path)
  }

  return props.currentPath === path
}

const includesPath = (items: SidebarNavItemNode[] | undefined, path: string): boolean => {
  if (!items?.length) {
    return false
  }

  return items.some((item) => {
    if (item.to && path === item.to) {
      return true
    }

    return includesPath(item.items, path)
  })
}

const isLeafActive = computed(() => Boolean(props.item.to && isPathActive(props.item.to)))

const isOpenByDefault = () => {
  if (!hasChildren.value) {
    return false
  }

  if (props.item.to && isPathActive(props.item.to)) {
    return true
  }

  return includesPath(props.item.items, props.currentPath)
}

const isBranchActive = computed(() => {
  if (!hasChildren.value) {
    return false
  }

  if (props.item.to && isPathActive(props.item.to)) {
    return true
  }

  return includesPath(props.item.items, props.currentPath)
})

const open = ref(isOpenByDefault())

watch(
  () => props.currentPath,
  () => {
    if (!hasChildren.value) {
      return
    }

    open.value = isOpenByDefault()
  }
)

const toggle = () => {
  if (!hasChildren.value) {
    return
  }

  open.value = !open.value
}

const navLinkClassNames = ({
  path,
  nested = false,
  setting = false,
}: {
  path: string
  nested?: boolean
  setting?: boolean
}) => {
  return cn(
    BASE_NAV_LINK_CLASSES,
    nested && NESTED_NAV_LINK_CLASSES,
    setting && SETTING_NAV_LINK_CLASSES,
    isPathActive(path) && ACTIVE_NAV_LINK_CLASSES
  )
}

const rowClass = computed(() => {
  const isSetting = props.type === "setting"
  const path = props.item.to ?? ""

  return cn(
    path && navLinkClassNames({ path, setting: isSetting }),
    !path && BASE_NAV_LINK_CLASSES,
    !path && isSetting && SETTING_NAV_LINK_CLASSES,
    props.item.disabled && DISABLED_NAV_LINK_CLASSES
  )
})

const triggerClass = computed(() =>
  cn(
    "text-ui-fg-subtle hover:text-ui-fg-base transition-fg hover:bg-ui-bg-subtle-hover flex w-full items-center gap-x-2 rounded-md py-0.5 pl-0.5 pr-2 outline-none",
    props.type === "setting" && "pl-2",
    isBranchActive.value && ACTIVE_NAV_LINK_CLASSES,
    props.item.disabled && DISABLED_NAV_LINK_CLASSES
  )
)

const resolveTo = (path: string): RouteLocationRaw => {
  if (props.type === "setting" && props.fromPath && path.startsWith("/settings")) {
    return {
      path,
      query: { from: props.fromPath },
    }
  }

  return path
}

const resolvedTo = computed<RouteLocationRaw | undefined>(() => {
  if (!props.item.to) {
    return undefined
  }

  return resolveTo(props.item.to)
})

const submenuId = computed(() => {
  const base = props.item.to ?? props.item.label
  return `sidebar-submenu-${base.replace(/[^a-zA-Z0-9_-]/g, "-").toLowerCase()}`
})
</script>

<template>
  <div class="px-3">
    <template v-if="hasChildren">
      <button
        type="button"
        :class="triggerClass"
        :aria-expanded="open"
        :aria-controls="submenuId"
        :disabled="item.disabled"
        @click="toggle"
      >
        <div v-if="type !== 'setting'" class="flex size-6 items-center justify-center">
          <component :is="item.icon" v-if="item.icon" class="h-4 w-4" />
        </div>
        <span class="txt-compact-small-plus">{{ item.label }}</span>
      </button>

      <div v-if="open" :id="submenuId">
        <div class="flex flex-col gap-y-0.5 pb-2 pt-0.5">
          <ul class="flex flex-col gap-y-0.5">
            <li v-for="child in item.items" :key="child.to ?? child.label" class="flex flex-col">
              <div class="flex h-7 items-center">
                <RouterLink
                  v-if="child.to"
                  :to="resolveTo(child.to)"
                  :class="cn(navLinkClassNames({ path: child.to, nested: true, setting: type === 'setting' }), child.disabled && DISABLED_NAV_LINK_CLASSES)"
                  :aria-current="isPathActive(child.to) ? 'page' : undefined"
                  :tabindex="child.disabled ? -1 : undefined"
                  :aria-disabled="child.disabled || undefined"
                >
                  <span class="txt-compact-small-plus">{{ child.label }}</span>
                </RouterLink>

                <div v-else class="flex items-center gap-x-2 rounded-md py-0.5 pl-0.5 pr-2 text-ui-fg-subtle">
                  <span class="txt-compact-small-plus">{{ child.label }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </template>

    <template v-else>
      <RouterLink
        v-if="resolvedTo"
        :to="resolvedTo"
        :class="rowClass"
        :aria-current="isLeafActive ? 'page' : undefined"
        :tabindex="item.disabled ? -1 : undefined"
        :aria-disabled="item.disabled || undefined"
      >
        <div v-if="type !== 'setting'" class="flex size-6 items-center justify-center">
          <component :is="item.icon" v-if="item.icon" class="h-4 w-4" />
        </div>
        <span class="txt-compact-small-plus">{{ item.label }}</span>
        <span v-if="item.badge !== undefined" class="ml-auto txt-compact-xsmall rounded bg-ui-bg-component px-1.5 py-0.5">
          {{ item.badge }}
        </span>
      </RouterLink>

      <div v-else :class="cn(rowClass, item.disabled && DISABLED_NAV_LINK_CLASSES)">
        <div v-if="type !== 'setting'" class="flex size-6 items-center justify-center">
          <component :is="item.icon" v-if="item.icon" class="h-4 w-4" />
        </div>
        <span class="txt-compact-small-plus">{{ item.label }}</span>
      </div>
    </template>
  </div>
</template>
