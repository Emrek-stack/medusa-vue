<script setup lang="ts">
import { TabsContent as RadixTabsContent } from "radix-vue"
import { clx } from "@/utils/clx"

defineProps<{
  value: string
}>()
</script>

<template>
  <RadixTabsContent
    :value="value"
    :class="
      clx(
        'outline-none',
        $attrs.class
      )
    "
  >
    <slot />
  </RadixTabsContent>
</template>
