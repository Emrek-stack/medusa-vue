<script setup lang="ts">
import LogoBox from "./logo-box.vue"

interface AvatarBoxProps {
  checked?: boolean
}

withDefaults(defineProps<AvatarBoxProps>(), {
  checked: false,
})
</script>

<template>
  <LogoBox :checked="checked" />
</template>
