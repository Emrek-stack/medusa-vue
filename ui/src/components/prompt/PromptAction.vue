<script setup lang="ts">
import { computed } from "vue"
import { AlertDialogAction as RadixAlertDialogAction } from "radix-vue"
import Button from "@/components/button/Button.vue"
import { usePromptVariant } from "./context"

defineProps<{
  asChild?: boolean
}>()

const promptVariant = usePromptVariant()
const buttonVariant = computed(() =>
  promptVariant.value === "danger" ? "danger" : "primary"
)
</script>

<template>
  <RadixAlertDialogAction :as-child="asChild ?? false">
    <slot v-if="asChild" />
    <Button v-else size="small" :variant="buttonVariant">
      <slot />
    </Button>
  </RadixAlertDialogAction>
</template>
