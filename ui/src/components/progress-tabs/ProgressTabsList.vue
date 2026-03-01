<script setup lang="ts">
import { TabsList as RadixTabsList } from "radix-vue"
import { clx } from "@/utils/clx"
</script>

<template>
  <RadixTabsList
    :class="
      clx(
        'flex items-center',
        $attrs.class
      )
    "
  >
    <slot />
  </RadixTabsList>
</template>
