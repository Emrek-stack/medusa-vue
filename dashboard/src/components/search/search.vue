<script setup lang="ts">
import { ref, watch } from "vue"
import { MagnifyingGlass } from "@minima-vue/icons"
import { FocusModal, FocusModalBody, FocusModalContent, FocusModalHeader, FocusModalTitle, IconButton, Input, Text } from "@minima-vue/ui"

export type SearchResultItem = {
  id: string
  label: string
  description?: string
  to?: string
}

interface SearchProps {
  open?: boolean
  results?: SearchResultItem[]
  placeholder?: string
}

const props = withDefaults(defineProps<SearchProps>(), {
  open: false,
  results: () => [],
  placeholder: "Search",
})

const emit = defineEmits<{
  (e: "update:open", open: boolean): void
  (e: "select", item: SearchResultItem): void
}>()

const isOpen = ref(props.open)
const query = ref("")

watch(
  () => props.open,
  (value) => {
    isOpen.value = value
  }
)

watch(isOpen, (value) => emit("update:open", value))

const select = (item: SearchResultItem) => {
  emit("select", item)
  isOpen.value = false
}
</script>

<template>
  <IconButton size="small" variant="transparent" aria-label="Search" @click="isOpen = true">
    <MagnifyingGlass />
  </IconButton>

  <FocusModal v-model:open="isOpen">
    <FocusModalContent>
      <FocusModalHeader>
        <FocusModalTitle>Search</FocusModalTitle>
      </FocusModalHeader>
      <FocusModalBody class="space-y-3 p-4">
        <Input v-model="query" type="search" :placeholder="placeholder" />
        <div class="max-h-[300px] overflow-auto rounded-md border">
          <button
            v-for="item in results.filter((r) => r.label.toLowerCase().includes(query.toLowerCase()))"
            :key="item.id"
            type="button"
            class="hover:bg-ui-bg-subtle-hover flex w-full flex-col items-start gap-0.5 border-b px-3 py-2 text-left last:border-b-0"
            @click="select(item)"
          >
            <Text size="small" weight="plus">{{ item.label }}</Text>
            <Text v-if="item.description" size="xsmall" class="text-ui-fg-muted">{{ item.description }}</Text>
          </button>
          <div v-if="!results.length" class="px-3 py-6 text-center">
            <Text size="small" class="text-ui-fg-muted">No results found.</Text>
          </div>
        </div>
      </FocusModalBody>
    </FocusModalContent>
  </FocusModal>
</template>
