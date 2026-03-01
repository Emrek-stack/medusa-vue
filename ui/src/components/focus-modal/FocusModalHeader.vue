<script setup lang="ts">
import { DialogClose as RadixDialogClose } from "radix-vue"
import { IconButton } from "@/components/icon-button"
import { Kbd } from "@/components/kbd"
import { XMark } from "@medusa-vue/icons"
import { clx } from "@/utils/clx"
</script>

<template>
  <div
    :class="clx(
        'border-ui-border-base flex items-center justify-between gap-x-4 border-b px-4 py-2',
        $attrs.class
    )"
  >
    <div class="flex items-center gap-x-2">
        <RadixDialogClose as-child>
            <IconButton size="small" type="button" variant="transparent">
                <XMark />
            </IconButton>
        </RadixDialogClose>
        <Kbd>esc</Kbd>
    </div>
    <slot />
  </div>
</template>
