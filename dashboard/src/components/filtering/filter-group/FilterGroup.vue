<script setup lang="ts">
import { computed, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@minima-vue/ui"
import SelectFilter from "./SelectFilter.vue"
import type { FilterDefinition } from "@/components/filtering/types"

type ActiveFilter = FilterDefinition & {
  openOnMount: boolean
}

interface FilterGroupProps {
  filters: FilterDefinition[]
  prefix?: string
}

const props = defineProps<FilterGroupProps>()

const route = useRoute()
const router = useRouter()

const getParamKey = (key: string) => (props.prefix ? `${props.prefix}_${key}` : key)
const offsetParamKey = computed(() => getParamKey("offset"))

const getQueryValue = (key: string) => {
  const raw = route.query[key]

  if (Array.isArray(raw)) {
    return raw[0]
  }

  return raw
}

const isFilterActive = (key: string) => {
  const value = getQueryValue(getParamKey(key))
  return typeof value === "string" && value.length > 0
}

const getInitialFilters = () =>
  props.filters
    .filter((filter) => isFilterActive(filter.id))
    .map((filter) => ({
      ...filter,
      openOnMount: false,
    }))

const activeFilters = ref<ActiveFilter[]>(getInitialFilters())
const availableFilters = computed(() =>
  props.filters.filter((filter) => !activeFilters.value.some((activeFilter) => activeFilter.id === filter.id))
)
const isClearable = computed(() => activeFilters.value.length > 0)

const addFilter = (filter: FilterDefinition) => {
  activeFilters.value = [
    ...activeFilters.value,
    {
      ...filter,
      openOnMount: true,
    },
  ]
}

const removeFilter = (key: string) => {
  activeFilters.value = activeFilters.value.filter((filter) => filter.id !== key)
}

const syncFiltersFromQuery = () => {
  props.filters.forEach((filter) => {
    if (!isFilterActive(filter.id)) {
      return
    }

    const exists = activeFilters.value.some((activeFilter) => activeFilter.id === filter.id)

    if (exists) {
      return
    }

    activeFilters.value = [
      ...activeFilters.value,
      {
        ...filter,
        openOnMount: false,
      },
    ]
  })
}

watch(
  () => route.query,
  () => {
    syncFiltersFromQuery()
  },
  { deep: true }
)

const clearAll = () => {
  const nextQuery = { ...route.query }

  props.filters.forEach((filter) => {
    delete nextQuery[getParamKey(filter.id)]
  })

  delete nextQuery[offsetParamKey.value]

  activeFilters.value = []
  router.replace({ query: nextQuery })
}
</script>

<template>
  <div v-if="filters.length" class="flex flex-wrap items-center gap-2">
    <template v-for="filter in activeFilters" :key="filter.id">
      <SelectFilter
        v-if="filter.type === 'select'"
        :filter="filter"
        :prefix="prefix"
        :open-on-mount="filter.openOnMount"
        @remove="removeFilter"
      />
    </template>

    <DropdownMenu v-if="availableFilters.length">
      <DropdownMenuTrigger as-child>
        <Button variant="secondary" size="small">Add filter</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuItem
          v-for="filter in availableFilters"
          :key="filter.id"
          @select.prevent="addFilter(filter)"
        >
          {{ filter.label }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <Button v-if="isClearable" variant="transparent" size="small" @click="clearAll">
      Clear all
    </Button>
  </div>
</template>
