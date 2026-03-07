<script setup lang="ts">
interface FormFieldProps {
  name?: string
}

defineProps<FormFieldProps>()
</script>

<template>
  <slot :name="name" />
</template>
