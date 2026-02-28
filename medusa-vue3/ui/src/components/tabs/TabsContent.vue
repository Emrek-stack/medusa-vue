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
        'mt-3 rounded-lg border border-ui-border-base bg-ui-bg-base p-4 outline-none',
        $attrs.class
      )
    "
  >
    <slot />
  </RadixTabsContent>
</template>
