<script setup lang="ts">
import { computed } from "vue"
import Skeleton from "./skeleton.vue"

interface SingleColumnPageSkeletonProps {
  sections?: number
  showJSON?: boolean
  showMetadata?: boolean
}

const props = withDefaults(defineProps<SingleColumnPageSkeletonProps>(), {
  sections: 2,
  showJSON: false,
  showMetadata: false,
})

const sections = computed(() => Array.from({ length: props.sections }, (_, i) => i))
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <Skeleton
      v-for="section in sections"
      :key="section"
      :class-name="section === 0 ? 'h-full max-h-[219px] w-full rounded-lg' : 'h-full max-h-[460px] w-full rounded-lg'"
    />
    <Skeleton v-if="showMetadata" class-name="h-[60px] w-full rounded-lg" />
    <Skeleton v-if="showJSON" class-name="h-[60px] w-full rounded-lg" />
  </div>
</template>
