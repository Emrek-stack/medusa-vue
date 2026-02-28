<script setup lang="ts">
import { RadioGroupItem as RadixRadioGroupItem } from "radix-vue"
import { clx } from "@/utils/clx"
import { Label } from "@/components/label"
import { Hint } from "@/components/hint"
import RadioGroupIndicator from "./RadioGroupIndicator.vue"
import { useId } from "vue"

const props = defineProps<{
    value: string
    label: string
    description: string
    disabled?: boolean
    id?: string
}>()

const generatedId = useId()
const inputId = props.id || generatedId
const descriptionId = `${inputId}-description`

</script>

<template>
  <RadixRadioGroupItem
    v-bind="props"
    :id="inputId"
    :aria-describedby="descriptionId"
    :class="clx(
        'shadow-borders-base bg-ui-bg-base focus-visible:shadow-borders-interactive-with-focus transition-fg group flex items-start gap-x-2 rounded-lg p-3 outline-none',
        'hover:enabled:bg-ui-bg-base-hover',
        'data-[state=checked]:shadow-borders-interactive-with-shadow',
        'group-disabled:cursor-not-allowed group-disabled:opacity-50',
        $attrs.class
    )"
  >
     <div class="flex h-5 w-5 items-center justify-center">
        <div
          :class="clx(
            'shadow-borders-base bg-ui-bg-base group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow transition-fg flex h-3.5 w-3.5 items-center justify-center rounded-full',
            'group-hover:group-enabled:group-data-[state=unchecked]:bg-ui-bg-base-hover'
          )"
        >
          <RadioGroupIndicator />
        </div>
      </div>
      <div class="flex flex-col items-start">
        <Label
          :html-for="inputId"
          size="small"
          weight="plus"
          class="group-disabled:text-ui-fg-disabled cursor-pointer group-disabled:cursor-not-allowed"
        >
          {{ label }}
        </Label>
        <Hint
          class="txt-small text-ui-fg-subtle group-disabled:text-ui-fg-disabled text-left"
          :id="descriptionId"
        >
          {{ description }}
        </Hint>
      </div>
  </RadixRadioGroupItem>
</template>
