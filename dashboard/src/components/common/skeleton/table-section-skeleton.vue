<script setup lang="ts">
import { Container } from "@minima-vue/ui"
import HeadingSkeleton from "./heading-skeleton.vue"
import IconButtonSkeleton from "./icon-button-skeleton.vue"
import TableSkeleton from "./table-skeleton.vue"

interface TableSectionSkeletonProps {
  rowCount?: number
  search?: boolean
  filters?: boolean
  orderBy?: boolean
  pagination?: boolean
  layout?: "fit" | "fill"
}

withDefaults(defineProps<TableSectionSkeletonProps>(), {
  rowCount: 10,
  search: true,
  filters: true,
  orderBy: true,
  pagination: true,
  layout: "fit",
})
</script>

<template>
  <Container class="divide-y p-0" aria-hidden>
    <div class="flex items-center justify-between px-6 py-4" aria-hidden>
      <HeadingSkeleton level="h2" :characters="16" />
      <IconButtonSkeleton />
    </div>
    <TableSkeleton :row-count="rowCount" :search="search" :filters="filters" :order-by="orderBy" :pagination="pagination" :layout="layout" />
  </Container>
</template>
