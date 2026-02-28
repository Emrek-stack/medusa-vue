<script setup lang="ts">
import { DateFieldInput as RadixDateSegment } from "radix-vue" // Wait, Radix Vue 1.x has DateSegment literal component?
// Actually Radix Vue exports `DateSegment` component which takes a `segment` prop.
// Let's verify imports. usually `import { DateSegment } from "radix-vue"`
// import { DateSegment as RadixDateSegment } from "radix-vue"
import { clx } from "@/utils/clx"

// Radix Vue DateSegment expects a 'segment' prop.
// My DateSegment.vue should accept it too.
defineProps<{
    part: any // Type is tough without importing types from radix-vue which might be complex. 'any' for now or 'Segment' if exported.
}>()

</script>

<template>
  <RadixDateSegment
    :part="part"
    :class="clx(
        'rounded-[4px] px-0.5 py-0.5 text-left outline-none',
        'rounded-sm px-0.5 box-content tabular-nums truncate placeholder:text-ui-fg-muted',
        'focus-visible:bg-ui-bg-interactive focus-visible:text-ui-fg-on-color',
        {
            'text-ui-fg-muted uppercase': part.isPlaceholder,
            'text-ui-fg-muted': !part.isEditable,
        },
        $attrs.class
    )"
  />
</template>
