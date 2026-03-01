<script setup lang="ts">
import { TabsList as RadixTabsList } from "radix-vue"
import { clx } from "@/utils/clx"
</script>

<template>
  <RadixTabsList
    :class="
      clx(
        'inline-flex items-center gap-1 rounded-lg border border-ui-border-base bg-ui-bg-subtle p-1',
        $attrs.class
      )
    "
  >
    <slot />
  </RadixTabsList>
</template>
