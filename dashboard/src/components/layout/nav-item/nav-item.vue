<script setup lang="ts">
import { computed, ref, watch } from "vue"
import { useRoute, type RouteLocationRaw } from "vue-router"
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from "radix-vue"
import { Text, clx } from "@minima-vue/ui"
import { ConditionalTooltip } from "@/components/common/conditional-tooltip"
import type { INavItem, ItemType, NestedItemProps } from "./types"

const props = withDefaults(defineProps<INavItem>(), {
  type: "core",
})

const route = useRoute()
const open = ref(getIsOpen(props.to, props.items, route.path))

const BASE_NAV_LINK_CLASSES =
  "text-ui-fg-subtle transition-fg hover:bg-ui-bg-subtle-hover flex items-center gap-x-2 rounded-md py-0.5 pl-0.5 pr-2 outline-none [&>svg]:text-ui-fg-subtle focus-visible:shadow-borders-focus"
const ACTIVE_NAV_LINK_CLASSES =
  "bg-ui-bg-base shadow-elevation-card-rest text-ui-fg-base hover:bg-ui-bg-base"
const NESTED_NAV_LINK_CLASSES = "pl-[34px] pr-2 py-1 w-full text-ui-fg-muted"
const SETTING_NAV_LINK_CLASSES = "pl-2 py-1"

function getIsOpen(to: string, items: NestedItemProps[] | undefined, pathname: string) {
  return [to, ...(items?.map((item) => item.to) ?? [])].some((path) =>
    pathname.startsWith(path)
  )
}

watch(
  () => route.path,
  (pathname) => {
    open.value = getIsOpen(props.to, props.items, pathname)
  }
)

const isSetting = computed(() => props.type === "setting")

const displayLabel = computed(() => props.label)

const resolveToWithFrom = (to: string): RouteLocationRaw => {
  if (props.from) {
    return {
      path: to,
      query: { from: props.from },
    }
  }

  return to
}

const navLinkClassNames = ({
  to,
  isActive,
  isNested = false,
  isSetting = false,
  exact = false,
}: {
  to: string
  isActive: boolean
  isNested?: boolean
  isSetting?: boolean
  exact?: boolean
}) => {
  const type = props.type as ItemType

  if (type === "core" || type === "setting") {
    isActive = exact ? route.path === to : route.path.startsWith(to)
  }

  return clx(BASE_NAV_LINK_CLASSES, {
    [NESTED_NAV_LINK_CLASSES]: isNested,
    [ACTIVE_NAV_LINK_CLASSES]: isActive,
    [SETTING_NAV_LINK_CLASSES]: isSetting,
  })
}

const hasItems = computed(() => Boolean(props.items?.length))
</script>

<template>
  <div class="px-3">
    <ConditionalTooltip :show-tooltip="false" :content="''">
      <RouterLink
        :to="resolveToWithFrom(to)"
        :class="
          clx(navLinkClassNames({ isActive: route.path.startsWith(to), isSetting, to }), {
            'max-lg:hidden': hasItems,
          })
        "
      >
        <div v-if="type !== 'setting'" class="flex size-6 items-center justify-center">
          <template v-if="icon">
            <div
              v-if="type === 'extension'"
              class="shadow-borders-base bg-ui-bg-base flex h-5 w-5 items-center justify-center rounded-[4px]"
            >
              <div class="h-[15px] w-[15px] overflow-hidden rounded-sm">
                <component :is="icon" />
              </div>
            </div>
            <component :is="icon" v-else />
          </template>
        </div>
        <Text size="small" weight="plus" leading="compact">
          {{ displayLabel }}
        </Text>
      </RouterLink>
    </ConditionalTooltip>

    <CollapsibleRoot v-if="hasItems" :open="open" @update:open="open = $event">
      <CollapsibleTrigger
        :class="
          clx(
            'text-ui-fg-subtle hover:text-ui-fg-base transition-fg hover:bg-ui-bg-subtle-hover flex w-full items-center gap-x-2 rounded-md py-0.5 pl-0.5 pr-2 outline-none lg:hidden',
            { 'pl-2': isSetting }
          )
        "
      >
        <div v-if="type !== 'setting'" class="flex size-6 items-center justify-center">
          <template v-if="icon">
            <div
              v-if="type === 'extension'"
              class="shadow-borders-base bg-ui-bg-base flex h-5 w-5 items-center justify-center rounded-[4px]"
            >
              <div class="h-[15px] w-[15px] overflow-hidden rounded-sm">
                <component :is="icon" />
              </div>
            </div>
            <component :is="icon" v-else />
          </template>
        </div>
        <Text size="small" weight="plus" leading="compact">
          {{ displayLabel }}
        </Text>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div class="flex flex-col gap-y-0.5 pb-2 pt-0.5">
          <ul class="flex flex-col gap-y-0.5">
            <li class="flex w-full items-center gap-x-1 lg:hidden">
              <ConditionalTooltip :show-tooltip="false" :content="''">
                <RouterLink
                  :to="to"
                  :class="
                    clx(
                      navLinkClassNames({
                        to,
                        isActive: route.path.startsWith(to),
                        isSetting,
                        isNested: true,
                        exact: true,
                      })
                    )
                  "
                >
                  <Text size="small" weight="plus" leading="compact">
                    {{ displayLabel }}
                  </Text>
                </RouterLink>
              </ConditionalTooltip>
            </li>

            <li v-for="item in items" :key="item.to" class="flex h-7 items-center">
              <ConditionalTooltip :show-tooltip="false" :content="''">
                <RouterLink
                  :to="item.to"
                  :class="
                    clx(
                      navLinkClassNames({
                        to: item.to,
                        isActive: route.path.startsWith(item.to),
                        isSetting,
                        isNested: true,
                        exact: true,
                      })
                    )
                  "
                >
                  <Text size="small" weight="plus" leading="compact">
                    {{ item.label }}
                  </Text>
                </RouterLink>
              </ConditionalTooltip>
            </li>
          </ul>
        </div>
      </CollapsibleContent>
    </CollapsibleRoot>
  </div>
</template>
