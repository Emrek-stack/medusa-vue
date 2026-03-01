<script setup lang="ts">
import Input from "@/components/input/Input.vue"

defineProps<{
  placeholder?: string
}>()
</script>

<template>
  <div class="w-full max-w-[260px]">
    <Input type="search" :placeholder="placeholder ?? 'Search'" />
  </div>
</template>
