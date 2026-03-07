<script setup lang="ts">
import { computed } from "vue"
import { Hint } from "@minima-vue/ui"

interface FormErrorMessageProps {
  message?: string
}

const props = defineProps<FormErrorMessageProps>()
const visible = computed(() => Boolean(props.message && props.message !== "undefined"))
</script>

<template>
  <Hint v-if="visible" variant="error">{{ message }}</Hint>
</template>
