<script setup lang="ts">
import { Photo } from "@minima-vue/icons"
import { cn } from "@/shared/utils/cn"

interface ThumbnailProps {
  src?: string | null
  alt?: string
  size?: "small" | "base"
}

const props = withDefaults(defineProps<ThumbnailProps>(), {
  src: null,
  alt: "",
  size: "base",
})
</script>

<template>
  <div
    :class="cn(
      'bg-ui-bg-component border-ui-border-base flex items-center justify-center overflow-hidden rounded border',
      props.size === 'base' ? 'h-8 w-6' : 'h-5 w-4'
    )"
  >
    <img v-if="src" :src="src" :alt="alt" class="h-full w-full object-cover object-center" />
    <Photo v-else class="text-ui-fg-subtle" />
  </div>
</template>
