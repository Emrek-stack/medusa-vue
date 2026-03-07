<script setup lang="ts">
import { TriangleRightMini } from "@minima-vue/icons"
import { Text } from "@minima-vue/ui"
import { RouterLink } from "vue-router"
import IconAvatar from "../icon-avatar/icon-avatar.vue"

interface SidebarLinkProps {
  to: string
  labelKey: string
  descriptionKey: string
  icon?: unknown
}

defineProps<SidebarLinkProps>()
</script>

<template>
  <RouterLink :to="to" class="group outline-none">
    <div class="flex flex-col gap-2 px-2 pb-2">
      <div class="shadow-elevation-card-rest bg-ui-bg-component transition-fg hover:bg-ui-bg-component-hover rounded-md px-4 py-2">
        <div class="flex items-center gap-4">
          <IconAvatar>
            <component :is="icon" v-if="icon" />
          </IconAvatar>
          <div class="flex flex-1 flex-col">
            <Text size="small" leading="compact" weight="plus">{{ labelKey }}</Text>
            <Text size="small" leading="compact" class="text-ui-fg-subtle">{{ descriptionKey }}</Text>
          </div>
          <div class="flex size-7 items-center justify-center">
            <TriangleRightMini class="text-ui-fg-muted rtl:rotate-180" />
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
