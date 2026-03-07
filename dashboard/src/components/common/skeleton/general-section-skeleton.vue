<script setup lang="ts">
import { computed } from "vue"
import { Container } from "@minima-vue/ui"
import HeadingSkeleton from "./heading-skeleton.vue"
import IconButtonSkeleton from "./icon-button-skeleton.vue"
import TextSkeleton from "./text-skeleton.vue"

interface GeneralSectionSkeletonProps {
  rowCount?: number
}

const props = withDefaults(defineProps<GeneralSectionSkeletonProps>(), {
  rowCount: 0,
})

const rows = computed(() => Array.from({ length: props.rowCount }, (_, i) => i))
</script>

<template>
  <Container class="divide-y p-0" aria-hidden>
    <div class="flex items-center justify-between px-6 py-4">
      <HeadingSkeleton :characters="16" />
      <IconButtonSkeleton />
    </div>

    <div v-for="row in rows" :key="row" class="grid grid-cols-2 items-center px-6 py-4">
      <TextSkeleton size="small" leading="compact" :characters="12" />
      <TextSkeleton size="small" leading="compact" :characters="24" />
    </div>
  </Container>
</template>
