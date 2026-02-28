<script setup lang="ts">
import IconGallery from "@docs/components/IconGallery.vue"
import PageHeader from "@docs/components/PageHeader.vue"
</script>

<template>
  <div class="space-y-8">
    <PageHeader
      eyebrow="Foundations"
      title="Icon Library"
      description="The icon gallery is rendered directly from the local @medusa-vue/icons workspace package so you can inspect the generated Vue components exactly as they are consumed by the UI package."
    />
    <IconGallery />
  </div>
</template>
