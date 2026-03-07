<script setup lang="ts">
import { ref } from "vue"
import { Tooltip, toast } from "@minima-vue/ui"

interface DisplayIdProps {
  id: string
}

defineProps<DisplayIdProps>()
const open = ref(false)

const copy = async (id: string) => {
  await navigator.clipboard.writeText(id)
  toast.success("ID copied to clipboard")
}
</script>

<template>
  <Tooltip :content="id" :open="open" @update:open="(value) => (open = value)">
    <span class="cursor-pointer" @click="copy(id)">#{{ id.slice(-7) }}</span>
  </Tooltip>
</template>
