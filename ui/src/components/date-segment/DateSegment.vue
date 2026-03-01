<script setup lang="ts">
import { DateFieldInput } from "radix-vue"
import type { DateFieldInputProps } from "radix-vue"
import { clx } from "@/utils/clx"

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  part: DateFieldInputProps["part"]
  value?: string
}>()
</script>

<template>
  <DateFieldInput
    :part="part"
    :class="
      clx(
        'box-content truncate rounded-sm px-0.5 py-0.5 text-left tabular-nums outline-none placeholder:text-ui-fg-muted',
        'focus-visible:bg-ui-bg-interactive focus-visible:text-ui-fg-on-color',
        {
          'text-ui-fg-muted uppercase': !value,
        },
        $attrs.class
      )
    "
  >
    {{ value }}
  </DateFieldInput>
</template>
