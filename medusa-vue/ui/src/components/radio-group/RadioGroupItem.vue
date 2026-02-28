<script setup lang="ts">
import { RadioGroupItem as RadixRadioGroupItem } from "radix-vue"
import { clx } from "@/utils/clx"
import RadioGroupIndicator from "./RadioGroupIndicator.vue"

const props = defineProps<{
    value: string
    disabled?: boolean
    id?: string
}>()

</script>

<template>
  <RadixRadioGroupItem
    v-bind="props"
    :class="clx(
        'group relative flex h-5 w-5 items-center justify-center outline-none',
        $attrs.class
    )"
  >
    <div
        :class="clx(
          'shadow-borders-base bg-ui-bg-base transition-fg flex h-[14px] w-[14px] items-center justify-center rounded-full',
          'group-hover:group-enabled:group-data-[state=unchecked]:bg-ui-bg-base-hover',
          'group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow',
          'group-focus-visible:!shadow-borders-interactive-with-focus',
          'group-disabled:cursor-not-allowed group-disabled:opacity-50'
        )"
    >
      <RadioGroupIndicator />
    </div>
  </RadixRadioGroupItem>
</template>
