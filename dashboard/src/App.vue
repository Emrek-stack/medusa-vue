<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { Toaster, TooltipProvider } from "@minima-vue/ui"
import MainLayout from "@/layout/MainLayout.vue"

const route = useRoute()

const useMainLayout = computed(() => route.path !== "/login")
</script>

<template>
  <TooltipProvider>
    <Toaster position="top-right" />
    <RouterView v-slot="{ Component }">
      <MainLayout v-if="useMainLayout">
        <component :is="Component" />
      </MainLayout>
      <component :is="Component" v-else />
    </RouterView>
  </TooltipProvider>
</template>
