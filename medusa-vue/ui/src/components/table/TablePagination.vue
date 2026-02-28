<script setup lang="ts">
import { computed } from "vue"
import { clx } from "@/utils/clx"
import { Button } from "@/components/button"
import { Minus } from "@medusa-vue/icons"

interface TablePaginationProps {
    count: number
    pageSize: number
    pageIndex: number
    pageCount: number
    canPreviousPage: boolean
    canNextPage: boolean
    translations?: {
        of?: string
        results?: string
        pages?: string
        prev?: string
        next?: string
    }
}

const props = withDefaults(defineProps<TablePaginationProps>(), {
    translations: () => ({
        of: "of",
        results: "results",
        pages: "pages",
        prev: "Prev",
        next: "Next",
    })
})

const emit = defineEmits<{
    (e: 'nextPage'): void
    (e: 'previousPage'): void
}>()

const from = computed(() => {
    return props.count === 0 ? props.count : props.pageIndex * props.pageSize + 1
})

const to = computed(() => {
    return Math.min(props.count, (props.pageIndex + 1) * props.pageSize)
})

</script>

<template>
  <div
    :class="clx(
        'text-ui-fg-subtle txt-compact-small-plus flex w-full items-center justify-between px-3 py-4',
        $attrs.class
    )"
  >
     <div class="inline-flex items-center gap-x-1 px-3 py-[5px]">
          <p>{{ from }}</p>
          <Minus class="text-ui-fg-muted" />
          <p>{{ `${to} ${translations.of} ${count} ${translations.results}` }}</p>
     </div>
     <div class="flex items-center gap-x-2">
          <div class="inline-flex items-center gap-x-1 px-3 py-[5px]">
            <p>
              {{ pageIndex + 1 }} {{ translations.of }} {{ Math.max(pageCount, 1) }} {{ translations.pages }}
            </p>
          </div>
          <Button
            type="button"
            variant="transparent"
            @click="emit('previousPage')"
            :disabled="!canPreviousPage"
          >
            {{ translations.prev }}
          </Button>
          <Button
            type="button"
            variant="transparent"
            @click="emit('nextPage')"
            :disabled="!canNextPage"
          >
            {{ translations.next }}
          </Button>
     </div>
  </div>
</template>
