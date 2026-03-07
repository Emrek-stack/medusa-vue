<script setup lang="ts">
import { computed, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { ArrowUpDown } from "@minima-vue/icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuHint,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  IconButton,
} from "@minima-vue/ui"

interface OrderByProps {
  keys: string[]
  prefix?: string
  queryKey?: string
}

type SortDirection = "asc" | "desc"

const props = withDefaults(defineProps<OrderByProps>(), {
  queryKey: "order",
})

const route = useRoute()
const router = useRouter()

const getParamKey = (key: string) => (props.prefix ? `${props.prefix}_${key}` : key)
const orderParamKey = computed(() => getParamKey(props.queryKey))
const offsetParamKey = computed(() => getParamKey("offset"))

const parseState = (value?: string) => {
  if (!value) {
    return {
      key: undefined as string | undefined,
      dir: "asc" as SortDirection,
    }
  }

  return {
    key: value.replace(/^-/, ""),
    dir: value.startsWith("-") ? ("desc" as SortDirection) : ("asc" as SortDirection),
  }
}

const state = ref(parseState(route.query[orderParamKey.value] as string | undefined))

watch(
  () => route.query[orderParamKey.value],
  (value) => {
    state.value = parseState(value as string | undefined)
  }
)

const updateOrderParam = (next: { key?: string; dir: SortDirection }) => {
  const nextQuery = { ...route.query }

  if (!next.key) {
    delete nextQuery[orderParamKey.value]
  } else {
    nextQuery[orderParamKey.value] = next.dir === "asc" ? next.key : `-${next.key}`
  }

  delete nextQuery[offsetParamKey.value]

  router.replace({ query: nextQuery })
}

const handleKeyChange = (key: string) => {
  state.value = {
    ...state.value,
    key,
  }

  updateOrderParam({
    key,
    dir: state.value.dir,
  })
}

const handleDirChange = (dir: string) => {
  const normalizedDir = (dir as SortDirection) ?? "asc"

  state.value = {
    ...state.value,
    dir: normalizedDir,
  }

  updateOrderParam({
    key: state.value.key,
    dir: normalizedDir,
  })
}

const formatKey = (key: string) => {
  const words = key.split("_")
  return words
    .map((word, index) => {
      if (!word) {
        return word
      }

      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }

      return word
    })
    .join(" ")
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <IconButton size="small" variant="transparent" aria-label="Order by">
        <ArrowUpDown />
      </IconButton>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end">
      <DropdownMenuRadioGroup :model-value="state.key" @update:model-value="handleKeyChange">
        <DropdownMenuRadioItem
          v-for="key in keys"
          :key="key"
          :value="key"
          @select.prevent
        >
          {{ formatKey(key) }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>

      <DropdownMenuSeparator />

      <DropdownMenuRadioGroup :model-value="state.dir" @update:model-value="handleDirChange">
        <DropdownMenuRadioItem value="asc" class="flex items-center justify-between" @select.prevent>
          Ascending
          <DropdownMenuHint>1 - 30</DropdownMenuHint>
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="desc" class="flex items-center justify-between" @select.prevent>
          Descending
          <DropdownMenuHint>30 - 1</DropdownMenuHint>
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
