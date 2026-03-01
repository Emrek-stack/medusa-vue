<script setup lang="ts">
import { DialogClose as RadixDialogClose } from "radix-vue"
import { IconButton } from "@/components/icon-button"
import { Kbd } from "@/components/kbd"
import { XMark } from "@minima-vue/icons"
import { clx } from "@/utils/clx"
</script>

<template>
  <div
    :class="clx(
        'border-ui-border-base flex items-start justify-between gap-x-4 border-b px-6 py-4',
        $attrs.class
    )"
  >
    <div class="flex flex-col gap-y-1">
        <slot />
    </div>
    <div class="flex items-center gap-x-2">
        <Kbd>esc</Kbd>
        <RadixDialogClose as-child>
            <IconButton size="small" type="button" variant="transparent">
                <XMark />
            </IconButton>
        </RadixDialogClose>
    </div>
  </div>
</template>
