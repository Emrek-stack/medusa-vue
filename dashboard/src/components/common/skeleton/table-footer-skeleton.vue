<script setup lang="ts">
import Skeleton from "./skeleton.vue"

interface TableFooterSkeletonProps {
  layout?: "fill" | "fit"
}

withDefaults(defineProps<TableFooterSkeletonProps>(), {
  layout: "fit",
})
</script>

<template>
  <div class="flex items-center justify-between p-4" :class="{ 'border-t': layout === 'fill' }">
    <Skeleton class-name="h-7 w-[138px]" />
    <div class="flex items-center gap-x-2">
      <Skeleton class-name="h-7 w-24" />
      <Skeleton class-name="h-7 w-11" />
      <Skeleton class-name="h-7 w-11" />
    </div>
  </div>
</template>
