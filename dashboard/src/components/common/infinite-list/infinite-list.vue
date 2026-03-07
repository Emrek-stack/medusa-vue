<script setup lang="ts" generic="TResponse extends { count: number; offset: number; limit: number }, TEntity extends { id: string }, TParams extends { offset?: number; limit?: number }">
import { computed, onMounted, onUnmounted, ref } from "vue"
import { Spinner } from "@minima-vue/icons"
import { toast } from "@minima-vue/ui"

interface InfiniteListProps {
  queryFn: (params: TParams) => Promise<TResponse>
  responseKey: keyof TResponse
  pageSize?: number
}

const props = withDefaults(defineProps<InfiniteListProps>(), {
  pageSize: 20,
})

const items = ref<TEntity[]>([])
const offset = ref(0)
const hasMore = ref(true)
const isPending = ref(true)
const isFetching = ref(false)
const containerRef = ref<HTMLDivElement | null>(null)

const load = async () => {
  if (!hasMore.value || isFetching.value) {
    return
  }

  isFetching.value = true

  try {
    const response = await props.queryFn({
      offset: offset.value,
      limit: props.pageSize,
    } as TParams)

    const pageItems = ((response[props.responseKey] as unknown) as TEntity[]) || []
    items.value = [...(items.value as TEntity[]), ...(pageItems as TEntity[])] as TEntity[]
    offset.value = response.offset + response.limit
    hasMore.value = response.count > offset.value
  } catch (error) {
    toast.error(error instanceof Error ? error.message : "Failed to load list")
  } finally {
    isPending.value = false
    isFetching.value = false
  }
}

const onScroll = () => {
  if (!containerRef.value) {
    return
  }

  const el = containerRef.value
  const nearEnd = el.scrollTop + el.clientHeight >= el.scrollHeight - 24

  if (nearEnd) {
    load()
  }
}

onMounted(async () => {
  await load()
  containerRef.value?.addEventListener("scroll", onScroll)
})

onUnmounted(() => {
  containerRef.value?.removeEventListener("scroll", onScroll)
})

const hasItems = computed(() => items.value.length > 0)
</script>

<template>
  <div ref="containerRef" class="h-full overflow-auto">
    <div v-if="isPending" class="flex h-full flex-col items-center justify-center">
      <Spinner class="animate-spin" />
    </div>

    <template v-else>
      <div v-if="hasItems">
        <div v-for="item in items" :key="item.id">
          <slot name="item" :item="item" />
        </div>
      </div>
      <slot v-else name="empty" />

      <div v-if="isFetching" class="flex flex-col items-center justify-center py-4">
        <Spinner class="animate-spin" />
      </div>
    </template>
  </div>
</template>
