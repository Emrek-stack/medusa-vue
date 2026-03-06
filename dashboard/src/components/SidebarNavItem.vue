<script setup lang="ts">
import { computed, ref } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { Text, clx } from "@minima-vue/ui"
import { TriangleRightMini } from "@minima-vue/icons"
import type { NavItem } from "@/data/navigation"

const props = withDefaults(
  defineProps<{
    item: NavItem
    compact?: boolean
    nested?: boolean
  }>(),
  {
    compact: false,
    nested: false,
  }
)

const route = useRoute()
const open = ref(true)

const isActive = computed(() => route.path === props.item.to || route.path.startsWith(`${props.item.to}/`))
const hasChildren = computed(() => !!props.item.items?.length)
</script>

<template>
  <div class="px-3">
    <RouterLink
      :to="item.to"
      :class="
        clx(
          'text-ui-fg-subtle transition-fg hover:bg-ui-bg-subtle-hover flex items-center gap-x-2 rounded-md py-1 pl-2 pr-2 outline-none focus-visible:shadow-borders-focus',
          {
            'bg-ui-bg-base text-ui-fg-base shadow-elevation-card-rest': isActive,
            'py-1.5': !compact,
            'pl-8': nested,
          }
        )
      "
    >
      <div v-if="item.icon && !nested" class="flex size-5 items-center justify-center">
        <component :is="item.icon" class="text-ui-fg-subtle" />
      </div>
      <Text size="small" leading="compact" weight="plus">
        {{ item.label }}
      </Text>
      <button
        v-if="hasChildren"
        type="button"
        class="ml-auto inline-flex items-center justify-center rounded-sm p-0.5"
        @click.prevent="open = !open"
      >
        <TriangleRightMini class="text-ui-fg-muted transition-transform" :class="{ 'rotate-90': open }" />
      </button>
    </RouterLink>

    <div v-if="hasChildren && open" class="flex flex-col gap-y-0.5 pb-2 pt-1">
      <RouterLink
        v-for="sub in item.items"
        :key="sub.to"
        :to="sub.to"
        :class="
          clx(
            'text-ui-fg-muted hover:bg-ui-bg-subtle-hover txt-compact-small-plus rounded-md py-1 pl-8 pr-2 outline-none transition',
            {
              'bg-ui-bg-base text-ui-fg-base shadow-elevation-card-rest': route.fullPath === sub.to,
            }
          )
        "
      >
        {{ sub.label }}
      </RouterLink>
    </div>
  </div>
</template>
