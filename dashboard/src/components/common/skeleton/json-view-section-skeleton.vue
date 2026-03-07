<script setup lang="ts">
import { Container } from "@minima-vue/ui"
import HeadingSkeleton from "./heading-skeleton.vue"
import IconButtonSkeleton from "./icon-button-skeleton.vue"
import Skeleton from "./skeleton.vue"
</script>

<template>
  <Container class="divide-y p-0" aria-hidden>
    <div class="flex items-center justify-between px-6 py-4" aria-hidden>
      <div class="flex items-center gap-x-4" aria-hidden>
        <HeadingSkeleton level="h2" :characters="16" />
        <Skeleton class-name="h-5 w-12 rounded-md" />
      </div>
      <IconButtonSkeleton />
    </div>
  </Container>
</template>
