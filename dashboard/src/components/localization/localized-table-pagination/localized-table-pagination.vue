<script setup lang="ts">
import { TablePagination } from "@minima-vue/ui"

interface LocalizedTablePaginationProps {
  count: number
  pageSize: number
  pageIndex: number
  pageCount: number
  canPreviousPage?: boolean
  canNextPage?: boolean
}

withDefaults(defineProps<LocalizedTablePaginationProps>(), {
  canPreviousPage: false,
  canNextPage: false,
})

const emit = defineEmits<{
  (e: "next-page"): void
  (e: "previous-page"): void
}>()
</script>

<template>
  <TablePagination
    :count="count"
    :page-size="pageSize"
    :page-index="pageIndex"
    :page-count="pageCount"
    :can-previous-page="canPreviousPage"
    :can-next-page="canNextPage"
    @next-page="emit('next-page')"
    @previous-page="emit('previous-page')"
  />
</template>
