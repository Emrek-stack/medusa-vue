<script setup lang="ts">
import { computed } from "vue"
import { RouterLink, useRoute, useRouter } from "vue-router"
import {
  Button,
  DataTable as UiDataTable,
  DataTableTable,
  DataTableToolbar,
  Heading,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TablePagination,
  TableRow,
  Text,
} from "@minima-vue/ui"

import FilterGroup from "@/components/filtering/filter-group/FilterGroup.vue"
import OrderBy from "@/components/filtering/order-by/OrderBy.vue"
import Query from "@/components/filtering/query/Query.vue"
import type { FilterDefinition } from "@/components/filtering/types"
import { cn } from "@/shared/utils/cn"

type DataTableColumn = {
  id: string
  header: string
  accessor?: string | ((row: Record<string, unknown>) => unknown)
  enableSorting?: boolean
  sortKey?: string
  class?: string
  headerClass?: string
}

type DataTableAction = {
  label: string
  disabled?: boolean
  to?: string
  onClick?: () => void
}

type EmptyState = {
  title: string
  description?: string
}

interface DataTableProps {
  data?: Record<string, unknown>[]
  columns: DataTableColumn[]
  filters?: FilterDefinition[]
  action?: DataTableAction
  actions?: DataTableAction[]
  rowCount?: number
  getRowId?: (row: Record<string, unknown>) => string
  enablePagination?: boolean
  enableSearch?: boolean
  enableFilterMenu?: boolean
  rowHref?: (row: Record<string, unknown>) => string
  emptyState?: EmptyState
  heading?: string
  headingLevel?: "h1" | "h2" | "h3"
  subHeading?: string
  prefix?: string
  pageSize?: number
  isLoading?: boolean
  layout?: "fill" | "auto"
}

const props = withDefaults(defineProps<DataTableProps>(), {
  data: () => [],
  filters: () => [],
  actions: () => [],
  enablePagination: true,
  enableSearch: true,
  enableFilterMenu: true,
  headingLevel: "h1",
  pageSize: 10,
  isLoading: false,
  layout: "auto",
  emptyState: () => ({
    title: "No results",
    description: "Try adjusting your search or filters.",
  }),
})

const route = useRoute()
const router = useRouter()

const getQueryParamKey = (key: string) => (props.prefix ? `${props.prefix}_${key}` : key)
const getQueryValue = (key: string) => {
  const raw = route.query[key]

  if (Array.isArray(raw)) {
    return raw[0]
  }

  return raw
}

const queryKey = computed(() => getQueryParamKey("q"))
const orderKey = computed(() => getQueryParamKey("order"))
const offsetKey = computed(() => getQueryParamKey("offset"))

const searchQuery = computed(() => {
  const value = getQueryValue(queryKey.value)
  return (typeof value === "string" ? value : "").toLocaleLowerCase("tr")
})
const orderQuery = computed(() => {
  const value = getQueryValue(orderKey.value)
  return typeof value === "string" ? value : ""
})
const offsetQuery = computed(() => {
  const value = getQueryValue(offsetKey.value)
  return Number(typeof value === "string" ? value : "0")
})

const sortableKeys = computed(() => {
  return props.columns
    .filter((column) => column.enableSorting)
    .map((column) => {
      if (column.sortKey) {
        return column.sortKey
      }

      if (typeof column.accessor === "string") {
        return column.accessor
      }

      return column.id
    })
})

const parsedFilters = computed<{ filter: FilterDefinition; value: unknown }[]>(() => {
  const entries: { filter: FilterDefinition; value: unknown }[] = []

  props.filters.forEach((filter) => {
    const key = getQueryParamKey(filter.id)
    const raw = getQueryValue(key)

    if (typeof raw !== "string" || !raw.length) {
      return
    }

    if (filter.type === "select") {
      const values = raw
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean)

      if (!values.length) {
        return
      }

      entries.push({
        filter,
        value: filter.multiple ? values : values[0],
      })

      return
    }

    if (filter.type === "number") {
      const value = Number(raw)
      if (Number.isNaN(value)) {
        return
      }

      entries.push({ filter, value })
      return
    }

    if (filter.type === "date") {
      try {
        entries.push({ filter, value: JSON.parse(raw) })
      } catch {
        entries.push({ filter, value: raw })
      }

      return
    }

    entries.push({
      filter,
      value: raw,
    })
  })

  return entries
})

const getCellValue = (row: Record<string, unknown>, column: DataTableColumn) => {
  if (typeof column.accessor === "function") {
    return column.accessor(row)
  }

  if (typeof column.accessor === "string") {
    return row[column.accessor]
  }

  return row[column.id]
}

const normalizedRows = computed(() => {
  let rows = [...props.data]

  if (searchQuery.value) {
    rows = rows.filter((row) => {
      const raw = Object.values(row)
        .map((value) => String(value ?? ""))
        .join(" ")
        .toLocaleLowerCase("tr")

      return raw.includes(searchQuery.value)
    })
  }

  parsedFilters.value.forEach(({ filter, value }) => {
    rows = rows.filter((row) => {
      const rowValue = row[filter.id]

      if (filter.type === "select") {
        if (Array.isArray(value)) {
          if (Array.isArray(rowValue)) {
            const rowValues = rowValue.map((entry) => String(entry))
            return value.some((entry) => rowValues.includes(entry))
          }

          return value.includes(String(rowValue))
        }

        if (Array.isArray(rowValue)) {
          return rowValue.map((entry) => String(entry)).includes(String(value))
        }

        return String(rowValue) === String(value)
      }

      if (filter.type === "string") {
        const normalizedFilter = String(value).toLocaleLowerCase("tr")
        return String(rowValue ?? "")
          .toLocaleLowerCase("tr")
          .includes(normalizedFilter)
      }

      if (filter.type === "number") {
        return Number(rowValue) === Number(value)
      }

      return true
    })
  })

  if (!orderQuery.value) {
    return rows
  }

  const desc = orderQuery.value.startsWith("-")
  const key = desc ? orderQuery.value.slice(1) : orderQuery.value

  rows.sort((a, b) => {
    const aValue = a[key]
    const bValue = b[key]

    if (aValue === bValue) {
      return 0
    }

    if (aValue === undefined || aValue === null) {
      return desc ? 1 : -1
    }

    if (bValue === undefined || bValue === null) {
      return desc ? -1 : 1
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return desc ? bValue - aValue : aValue - bValue
    }

    return desc
      ? String(bValue).localeCompare(String(aValue), "tr")
      : String(aValue).localeCompare(String(bValue), "tr")
  })

  return rows
})

const rowCount = computed(() => (props.rowCount === undefined ? normalizedRows.value.length : props.rowCount))

const pageIndex = computed(() => {
  if (!props.enablePagination) {
    return 0
  }

  return Math.max(0, Math.floor(offsetQuery.value / props.pageSize))
})

const pageCount = computed(() => {
  if (!props.enablePagination) {
    return 1
  }

  return Math.max(1, Math.ceil(rowCount.value / props.pageSize))
})

const canPreviousPage = computed(() => pageIndex.value > 0)
const canNextPage = computed(() => pageIndex.value < pageCount.value - 1)

const pagedRows = computed(() => {
  if (!props.enablePagination) {
    return normalizedRows.value
  }

  const start = pageIndex.value * props.pageSize
  return normalizedRows.value.slice(start, start + props.pageSize)
})

const updateOffset = (nextPageIndex: number) => {
  const nextQuery = { ...route.query }

  if (nextPageIndex <= 0) {
    delete nextQuery[offsetKey.value]
  } else {
    nextQuery[offsetKey.value] = String(nextPageIndex * props.pageSize)
  }

  router.replace({ query: nextQuery })
}

const nextPage = () => {
  if (canNextPage.value) {
    updateOffset(pageIndex.value + 1)
  }
}

const previousPage = () => {
  if (canPreviousPage.value) {
    updateOffset(pageIndex.value - 1)
  }
}

const onRowClick = (event: MouseEvent, row: Record<string, unknown>) => {
  if (!props.rowHref) {
    return
  }

  const href = props.rowHref(row)

  if (event.metaKey || event.ctrlKey || event.button === 1) {
    window.open(href, "_blank", "noreferrer")
    return
  }

  if (event.shiftKey) {
    window.open(href, undefined, "noreferrer")
    return
  }

  router.push(href)
}

const allActions = computed(() => (props.actions.length ? props.actions : props.action ? [props.action] : []))
</script>

<template>
  <UiDataTable
    :class="
      cn(
        'divide-y',
        props.layout === 'fill' ? 'h-full [&_tr]:last-of-type:!border-b' : undefined
      )
    "
  >
    <div v-if="heading || subHeading || allActions.length" class="flex items-center justify-between px-6 py-4">
      <div v-if="heading || subHeading">
        <Heading v-if="heading" :level="headingLevel">{{ heading }}</Heading>
        <Text v-if="subHeading" size="small" class="text-ui-fg-subtle">{{ subHeading }}</Text>
      </div>

      <div class="flex items-center gap-x-2">
        <slot name="header-actions" />
        <template v-for="(tableAction, index) in allActions" :key="`${tableAction.label}-${index}`">
          <Button
            v-if="tableAction.to"
            as-child
            size="small"
            variant="secondary"
            :disabled="tableAction.disabled"
          >
            <RouterLink :to="tableAction.to">{{ tableAction.label }}</RouterLink>
          </Button>
          <Button
            v-else
            size="small"
            variant="secondary"
            :disabled="tableAction.disabled"
            @click="tableAction.onClick?.()"
          >
            {{ tableAction.label }}
          </Button>
        </template>
      </div>
    </div>

    <DataTableToolbar
      v-if="enableSearch || sortableKeys.length || (enableFilterMenu && filters.length) || $slots['filter-bar']"
      class="flex items-start justify-between gap-x-4 px-6 py-4"
    >
      <div class="w-full max-w-[60%]">
        <div class="flex flex-wrap items-center gap-2">
          <slot name="filter-bar" />
          <FilterGroup
            v-if="enableFilterMenu && filters.length"
            :filters="filters"
            :prefix="prefix"
          />
        </div>
      </div>

      <div class="flex shrink-0 items-center gap-x-2">
        <div v-if="enableSearch" class="w-full md:w-auto">
          <Query :placeholder="'Search'" :prefix="prefix" />
        </div>
        <OrderBy
          v-if="sortableKeys.length"
          :keys="sortableKeys"
          :prefix="prefix"
        />
      </div>
    </DataTableToolbar>

    <DataTableTable>
      <TableHeader class="border-t-0 [&_tr]:bg-ui-bg-base [&_tr]:hover:bg-ui-bg-base">
        <TableRow>
          <TableHeaderCell
            v-for="column in columns"
            :key="column.id"
            :class="column.headerClass"
          >
            {{ column.header }}
          </TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow v-if="isLoading">
          <TableCell :colspan="columns.length" class="py-8 text-center">
            <Text size="small" class="text-ui-fg-subtle">Loading...</Text>
          </TableCell>
        </TableRow>

        <TableRow v-else-if="!pagedRows.length">
          <TableCell :colspan="columns.length" class="py-8 text-center">
            <div class="flex flex-col items-center gap-y-1">
              <Text size="small" weight="plus">{{ emptyState.title }}</Text>
              <Text v-if="emptyState.description" size="small" class="text-ui-fg-subtle">
                {{ emptyState.description }}
              </Text>
            </div>
          </TableCell>
        </TableRow>

        <TableRow
          v-for="row in pagedRows"
          v-else
          :key="getRowId ? getRowId(row) : String(row.id ?? JSON.stringify(row))"
          :class="cn(rowHref && 'cursor-pointer')"
          @click="onRowClick($event, row)"
        >
          <TableCell
            v-for="column in columns"
            :key="`${String(getRowId ? getRowId(row) : row.id)}-${column.id}`"
            :class="column.class"
          >
            <slot
              :name="`cell-${column.id}`"
              :row="row"
              :value="getCellValue(row, column)"
            >
              <span class="truncate">{{ getCellValue(row, column) }}</span>
            </slot>
          </TableCell>
        </TableRow>
      </TableBody>
    </DataTableTable>

    <TablePagination
      v-if="enablePagination"
      :count="rowCount"
      :page-size="pageSize"
      :page-index="pageIndex"
      :page-count="pageCount"
      :can-previous-page="canPreviousPage"
      :can-next-page="canNextPage"
      @next-page="nextPage"
      @previous-page="previousPage"
    />
  </UiDataTable>
</template>
