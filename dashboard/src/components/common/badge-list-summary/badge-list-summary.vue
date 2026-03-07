<script setup lang="ts">
import { computed } from "vue"
import { Badge, Tooltip } from "@minima-vue/ui"

interface BadgeListSummaryProps {
  list: string[]
  n?: number
  inline?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<BadgeListSummaryProps>(), {
  n: 2,
  inline: false,
  rounded: false,
})

const hidden = computed(() => props.list.slice(props.n))
</script>

<template>
  <div :class="['text-ui-fg-subtle gap-x-2 overflow-hidden', inline ? 'inline-flex' : 'flex']">
    <Badge v-for="item in list.slice(0, n)" :key="item" size="2xsmall" :rounded="rounded ? 'full' : 'base'">
      {{ item }}
    </Badge>

    <Tooltip v-if="hidden.length" :content="hidden.join(', ')">
      <Badge size="2xsmall" :rounded="rounded ? 'full' : 'base'" class="cursor-default whitespace-nowrap">
        +{{ hidden.length }}
      </Badge>
    </Tooltip>
  </div>
</template>
