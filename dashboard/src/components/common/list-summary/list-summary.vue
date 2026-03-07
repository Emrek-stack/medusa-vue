<script setup lang="ts">
import { computed } from "vue"
import { Tooltip } from "@minima-vue/ui"
import { cn } from "@/shared/utils/cn"

interface ListSummaryProps {
  list: string[]
  n?: number
  inline?: boolean
  variant?: "base" | "compact"
}

const props = withDefaults(defineProps<ListSummaryProps>(), {
  n: 2,
  inline: false,
  variant: "compact",
})

const tail = computed(() => props.list.slice(props.n))
</script>

<template>
  <div
    :class="cn('text-ui-fg-subtle gap-x-1 overflow-hidden', inline ? 'inline-flex' : 'flex', variant === 'compact' ? 'txt-compact-small' : 'txt-small')"
  >
    <div class="flex-1 truncate">
      <span class="truncate">{{ list.slice(0, n).join(', ') }}</span>
    </div>
    <Tooltip v-if="tail.length" :content="tail.join(', ')">
      <span class="cursor-default whitespace-nowrap">+{{ tail.length }} more</span>
    </Tooltip>
  </div>
</template>
