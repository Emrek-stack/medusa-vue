<script setup lang="ts">
import { Copy } from "@/components/copy"
import { clx } from "@/utils/clx"

interface CommandCopyProps {
    content: string
    asChild?: boolean
}

defineProps<CommandCopyProps>()

</script>

<template>
  <Copy
    :content="content"
    :as-child="asChild"
    :class="clx('!text-ui-contrast-fg-secondary ml-auto', $attrs.class)"
  >
    <slot />
  </Copy>
</template>
