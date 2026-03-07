<script setup lang="ts">
import { computed } from "vue"
import Skeleton from "./skeleton.vue"
import TableFooterSkeleton from "./table-footer-skeleton.vue"

interface TableSkeletonProps {
  rowCount?: number
  search?: boolean
  filters?: boolean
  orderBy?: boolean
  pagination?: boolean
  layout?: "fit" | "fill"
}

const props = withDefaults(defineProps<TableSkeletonProps>(), {
  rowCount: 10,
  search: true,
  filters: true,
  orderBy: true,
  pagination: true,
  layout: "fit",
})

const rows = computed(() => Array.from({ length: props.rowCount + 1 }, (_, i) => i))
const hasToolbar = computed(() => props.search || props.filters || props.orderBy)
</script>

<template>
  <div :class="{ 'flex h-full flex-col overflow-hidden': layout === 'fill' }">
    <div v-if="hasToolbar" class="flex items-center justify-between px-6 py-4">
      <Skeleton v-if="filters" class-name="h-7 w-full max-w-[135px]" />
      <div v-if="search || orderBy" class="flex items-center gap-x-2">
        <Skeleton v-if="search" class-name="h-7 w-[160px]" />
        <Skeleton v-if="orderBy" class-name="h-7 w-7" />
      </div>
    </div>

    <div class="flex flex-col divide-y border-y">
      <Skeleton v-for="row in rows" :key="row" class-name="h-10 w-full rounded-none" />
    </div>

    <TableFooterSkeleton v-if="pagination" :layout="layout" />
  </div>
</template>
