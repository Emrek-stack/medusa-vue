<script setup lang="ts">
import { computed, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { ExclamationCircle } from "@minima-vue/icons"
import { Text } from "@minima-vue/ui"
import { isFetchError } from "@/shared/utils/is-fetch-error"

interface ErrorBoundaryProps {
  error?: unknown
  code?: number | null
}

const props = defineProps<ErrorBoundaryProps>()

const route = useRoute()
const router = useRouter()

const resolvedCode = computed<number | null>(() => {
  if (typeof props.code === "number") {
    return props.code
  }

  if (isFetchError(props.error)) {
    return props.error.status ?? null
  }

  return null
})

watch(
  () => props.error,
  (error) => {
    if (import.meta.env.DEV && error) {
      console.error(error)
    }
  },
  { immediate: true }
)

watch(
  () => resolvedCode.value,
  (code) => {
    if (code === 401 && route.path !== "/login") {
      void router.replace({
        path: "/login",
        query: { next: route.fullPath },
      })
    }
  },
  { immediate: true }
)

const title = computed(() => {
  switch (resolvedCode.value) {
    case 400:
      return "400 - Bad request"
    case 404:
      return "404 - There is no page at this address"
    case 500:
      return "500 - Internal server error"
    default:
      return "An error occurred"
  }
})

const message = computed(() => {
  switch (resolvedCode.value) {
    case 400:
      return "The request could not be understood by the server due to malformed syntax."
    case 404:
      return "Check the URL and try again, or use the search bar to find what you are looking for."
    case 500:
      return "An unexpected error occurred on the server. Please try again later."
    default:
      return "An unexpected error occurred while rendering this page."
  }
})

const shouldRender = computed(() => resolvedCode.value !== 401)
</script>

<template>
  <div
    v-if="shouldRender"
    class="flex size-full min-h-[calc(100vh-57px-24px)] items-center justify-center"
  >
    <div class="flex flex-col gap-y-6">
      <div class="text-ui-fg-subtle flex flex-col items-center gap-y-3">
        <ExclamationCircle />
        <div class="flex flex-col items-center justify-center gap-y-1">
          <Text size="small" leading="compact" weight="plus">
            {{ title }}
          </Text>
          <Text
            size="small"
            class="text-ui-fg-muted text-balance text-center"
          >
            {{ message }}
          </Text>
        </div>
      </div>
    </div>
  </div>
</template>
