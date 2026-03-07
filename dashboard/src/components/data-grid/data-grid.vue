<script setup lang="ts">
import { computed } from "vue"
import { DataTable, DataTableTable, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "@minima-vue/ui"

export interface DataGridColumn {
  key: string
  title: string
}

export interface DataGridRow extends Record<string, unknown> {
  id: string
}

interface DataGridProps {
  columns: DataGridColumn[]
  rows: DataGridRow[]
}

const props = defineProps<DataGridProps>()

const safeRows = computed(() => props.rows || [])
</script>

<template>
  <DataTable>
    <DataTableTable>
      <TableHeader>
        <TableRow>
          <TableHeaderCell v-for="column in columns" :key="column.key">{{ column.title }}</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="row in safeRows" :key="row.id">
          <TableCell v-for="column in columns" :key="`${row.id}-${column.key}`">
            <slot :name="`cell-${column.key}`" :row="row" :value="row[column.key]">
              {{ row[column.key] }}
            </slot>
          </TableCell>
        </TableRow>
      </TableBody>
    </DataTableTable>
  </DataTable>
</template>
