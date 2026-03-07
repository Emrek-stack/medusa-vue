<script setup lang="ts">
import { EllipsisHorizontal } from "@minima-vue/icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, IconButton, Tooltip } from "@minima-vue/ui"
import { RouterLink } from "vue-router"

export type Action = {
  label: string
  icon?: unknown
  disabled?: boolean
  disabledTooltip?: string
  to?: string
  onClick?: () => void
}

export type ActionGroup = {
  actions: Action[]
}

interface ActionMenuProps {
  groups: ActionGroup[]
  variant?: "transparent" | "primary"
}

withDefaults(defineProps<ActionMenuProps>(), {
  variant: "transparent",
})

const emit = defineEmits<{
  (e: "action", action: Action): void
}>()

const onActionClick = (action: Action) => {
  if (action.disabled) {
    return
  }

  action.onClick?.()
  emit("action", action)
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <slot>
        <IconButton size="small" :variant="variant" aria-label="Actions">
          <EllipsisHorizontal />
        </IconButton>
      </slot>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end">
      <template v-for="(group, groupIndex) in groups" :key="groupIndex">
        <DropdownMenuItem
          v-for="(action, actionIndex) in group.actions"
          :key="`${groupIndex}-${actionIndex}-${action.label}`"
          :disabled="action.disabled"
          @select.prevent="onActionClick(action)"
        >
          <template v-if="action.to">
            <RouterLink :to="action.to" class="flex w-full items-center gap-x-2">
              <component :is="action.icon" v-if="action.icon" />
              <span>{{ action.label }}</span>
            </RouterLink>
          </template>
          <template v-else>
            <Tooltip v-if="action.disabled && action.disabledTooltip" :content="action.disabledTooltip">
              <span class="flex items-center gap-x-2">
                <component :is="action.icon" v-if="action.icon" />
                <span>{{ action.label }}</span>
              </span>
            </Tooltip>
            <span v-else class="flex items-center gap-x-2">
              <component :is="action.icon" v-if="action.icon" />
              <span>{{ action.label }}</span>
            </span>
          </template>
        </DropdownMenuItem>
        <DropdownMenuSeparator v-if="groupIndex < groups.length - 1" />
      </template>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
