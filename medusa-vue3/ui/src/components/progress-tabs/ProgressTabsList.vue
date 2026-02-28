<script setup lang="ts">
import { TabsList as RadixTabsList } from "radix-vue"
import { clx } from "@/utils/clx"
</script>

<template>
  <RadixTabsList
    :class="
      clx(
        'flex w-full items-center gap-2 border-b border-ui-border-base pb-2',
        $attrs.class
      )
    "
  >
    <slot />
  </RadixTabsList>
</template>
