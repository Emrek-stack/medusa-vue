<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"

interface ProtectedRouteProps {
  isAuthenticated?: boolean
  redirectTo?: string
}

const props = withDefaults(defineProps<ProtectedRouteProps>(), {
  isAuthenticated: true,
  redirectTo: "/login",
})

const route = useRoute()
const canRender = computed(() => props.isAuthenticated)
</script>

<template>
  <slot v-if="canRender" />
  <RouterLink v-else :to="`${redirectTo}?next=${encodeURIComponent(route.fullPath)}`" class="hidden" />
</template>
