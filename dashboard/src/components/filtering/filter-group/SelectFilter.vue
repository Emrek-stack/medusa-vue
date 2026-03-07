<script setup lang="ts">
import { computed, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { CheckMini, EllipseMiniSolid, XMarkMini } from "@minima-vue/icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Text,
} from "@minima-vue/ui"
import type { SelectFilterDefinition } from "@/components/filtering/types"
import { cn } from "@/shared/utils/cn"

interface SelectFilterProps {
  filter: SelectFilterDefinition
  prefix?: string
  openOnMount?: boolean
}

const props = withDefaults(defineProps<SelectFilterProps>(), {
  openOnMount: false,
})

const emit = defineEmits<{
  (e: "remove", key: string): void
}>()

const route = useRoute()
const router = useRouter()

const open = ref(props.openOnMount)
const search = ref("")

const getParamKey = (key: string) => (props.prefix ? `${props.prefix}_${key}` : key)
const paramKey = computed(() => getParamKey(props.filter.id))
const offsetParamKey = computed(() => getParamKey("offset"))

const selectedValues = computed(() => {
  const raw = route.query[paramKey.value] as string | undefined

  if (!raw) {
    return [] as string[]
  }

  return raw
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
})

const selectedLabels = computed(() => {
  return selectedValues.value
    .map((value) => props.filter.options.find((option) => option.value === value)?.label)
    .filter(Boolean)
})

const filteredOptions = computed(() => {
  if (!props.filter.searchable || !search.value.trim()) {
    return props.filter.options
  }

  const query = search.value.toLocaleLowerCase("tr")

  return props.filter.options.filter((option) =>
    option.label.toLocaleLowerCase("tr").includes(query)
  )
})

const updateQueryValue = (nextValues: string[]) => {
  const nextQuery = { ...route.query }

  if (!nextValues.length) {
    delete nextQuery[paramKey.value]
  } else {
    nextQuery[paramKey.value] = nextValues.join(",")
  }

  delete nextQuery[offsetParamKey.value]

  router.replace({ query: nextQuery })
}

const onSelect = (value: string) => {
  const current = selectedValues.value

  if (props.filter.multiple) {
    if (current.includes(value)) {
      updateQueryValue(current.filter((entry) => entry !== value))
      return
    }

    updateQueryValue([...current, value])
    return
  }

  if (current[0] === value) {
    updateQueryValue([])
    return
  }

  updateQueryValue([value])
  open.value = false
}

const remove = () => {
  updateQueryValue([])
  emit("remove", props.filter.id)
}

watch(open, (isOpen, wasOpen) => {
  if (wasOpen && !isOpen && !selectedValues.value.length) {
    emit("remove", props.filter.id)
  }
})
</script>

<template>
  <DropdownMenu v-model:open="open">
    <div
      class="bg-ui-bg-field shadow-borders-base text-ui-fg-subtle flex cursor-default select-none items-stretch overflow-hidden rounded-md"
    >
      <DropdownMenuTrigger as-child>
        <button
          type="button"
          class="hover:bg-ui-bg-field-hover data-[state=open]:bg-ui-bg-field-hover flex min-w-0 items-center gap-x-2 px-2 py-1"
        >
          <Text size="small" weight="plus" leading="compact">{{ filter.label }}</Text>
          <Text v-if="selectedLabels.length" size="xsmall" class="text-ui-fg-muted truncate">
            {{ selectedLabels.join(", ") }}
          </Text>
        </button>
      </DropdownMenuTrigger>

      <button
        v-if="selectedValues.length"
        type="button"
        class="text-ui-fg-muted hover:bg-ui-bg-subtle-hover px-1"
        @click.stop="remove"
      >
        <XMarkMini />
      </button>
    </div>

    <DropdownMenuContent align="start" class="w-[300px]">
      <div v-if="filter.searchable" class="p-1">
        <Input v-model="search" size="small" placeholder="Search" />
      </div>

      <div class="max-h-[220px] overflow-y-auto p-1">
        <DropdownMenuItem
          v-for="option in filteredOptions"
          :key="option.value"
          class="gap-x-2"
          @select.prevent="onSelect(option.value)"
        >
          <span class="inline-flex h-5 w-5 items-center justify-center">
            <component
              :is="filter.multiple ? CheckMini : EllipseMiniSolid"
              :class="cn(!selectedValues.includes(option.value) && 'opacity-0')"
            />
          </span>
          {{ option.label }}
        </DropdownMenuItem>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
