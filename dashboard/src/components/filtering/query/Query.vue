<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { Input } from "@minima-vue/ui"

interface QueryProps {
  placeholder?: string
  prefix?: string
  queryKey?: string
}

const props = withDefaults(defineProps<QueryProps>(), {
  placeholder: "Search",
  queryKey: "q",
})

const route = useRoute()
const router = useRouter()

const getParamKey = (key: string) => (props.prefix ? `${props.prefix}_${key}` : key)

const queryParamKey = computed(() => getParamKey(props.queryKey))
const offsetParamKey = computed(() => getParamKey("offset"))
const inputValue = ref((route.query[queryParamKey.value] as string | undefined) ?? "")

let debounceTimer: ReturnType<typeof setTimeout> | null = null

const updateSearchParam = (newValue: string) => {
  const nextQuery = { ...route.query }

  if (newValue) {
    nextQuery[queryParamKey.value] = newValue
  } else {
    delete nextQuery[queryParamKey.value]
  }

  delete nextQuery[offsetParamKey.value]

  router.replace({ query: nextQuery })
}

watch(
  () => route.query[queryParamKey.value],
  (value) => {
    const nextValue = (value as string | undefined) ?? ""
    if (nextValue !== inputValue.value) {
      inputValue.value = nextValue
    }
  }
)

watch(inputValue, (value) => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }

  debounceTimer = setTimeout(() => {
    updateSearchParam(value)
  }, 500)
})

onBeforeUnmount(() => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }
})
</script>

<template>
  <Input
    v-model="inputValue"
    type="search"
    size="small"
    :placeholder="placeholder"
  />
</template>
