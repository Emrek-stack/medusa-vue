<script setup lang="ts">
import { DialogTrigger as RadixDialogTrigger } from "radix-vue"

withDefaults(
  defineProps<{
    asChild?: boolean
  }>(),
  {
    asChild: false,
  }
)
</script>

<template>
  <RadixDialogTrigger :as-child="asChild" v-bind="$attrs">
    <slot />
  </RadixDialogTrigger>
</template>
