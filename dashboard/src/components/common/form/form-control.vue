<script setup lang="ts">
interface FormControlProps {
  invalid?: boolean
}

withDefaults(defineProps<FormControlProps>(), {
  invalid: false,
})
</script>

<template>
  <div :aria-invalid="invalid ? 'true' : 'false'">
    <slot />
  </div>
</template>
