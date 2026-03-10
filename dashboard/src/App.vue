<script setup lang="ts">
import { computed, onErrorCaptured, onUnmounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { Toaster, TooltipProvider } from "@minima-vue/ui"
import MainLayout from "@/layout/MainLayout.vue"
import ErrorBoundary from "@/components/utilities/error-boundary/error-boundary.vue"

const route = useRoute()
const router = useRouter()
const runtimeError = ref<unknown>(null)

const useMainLayout = computed(() => route.path !== "/login")

watch(
  () => route.fullPath,
  () => {
    runtimeError.value = null
  }
)

onErrorCaptured((error) => {
  runtimeError.value = error
  return false
})

const stopRouterErrorHandler = router.onError((error) => {
  runtimeError.value = error
})

onUnmounted(() => {
  stopRouterErrorHandler()
})
</script>

<template>
  <TooltipProvider>
    <Toaster position="top-right" />
    <ErrorBoundary v-if="runtimeError" :error="runtimeError" />
    <RouterView v-else v-slot="{ Component }">
      <MainLayout v-if="useMainLayout">
        <component :is="Component" />
      </MainLayout>
      <component :is="Component" v-else />
    </RouterView>
  </TooltipProvider>
</template>
