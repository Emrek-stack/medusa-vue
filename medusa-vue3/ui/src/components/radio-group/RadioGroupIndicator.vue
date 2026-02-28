<script setup lang="ts">
import { RadioGroupIndicator as RadixRadioGroupIndicator } from "radix-vue"
import { clx } from "@/utils/clx"
</script>

<template>
  <RadixRadioGroupIndicator
    :class="clx('flex items-center justify-center', $attrs.class)"
  >
    <div
      class="bg-ui-bg-base shadow-details-contrast-on-bg-interactive h-1.5 w-1.5 rounded-full"
    />
  </RadixRadioGroupIndicator>
</template>
