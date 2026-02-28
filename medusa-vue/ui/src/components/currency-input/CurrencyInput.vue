<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { useCurrencyInput, CurrencyInputOptions } from "vue-currency-input"
import { Text } from "@/components/text"
import { clx } from "@/utils/clx"
import { cva } from "class-variance-authority"

const currencyInputVariants = cva(
  clx(
    "flex items-center gap-x-1",
    "bg-ui-bg-field hover:bg-ui-bg-field-hover shadow-buttons-neutral placeholder-ui-fg-muted text-ui-fg-base transition-fg relative w-full rounded-md",
    "focus-within:shadow-borders-interactive-with-active"
  ),
  {
    variants: {
      size: {
        base: "txt-compact-medium h-8",
        small: "txt-compact-small h-7",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
)

interface CurrencyInputProps {
    modelValue: number | null
    symbol: string
    code: string
    size?: "base" | "small"
    disabled?: boolean
    placeholder?: string
    // react-currency-input-field mapping
    decimalsLimit?: number
    allowNegativeValue?: boolean
    min?: number
    max?: number
    step?: number
}

const props = withDefaults(defineProps<CurrencyInputProps>(), {
    size: "base",
    decimalsLimit: 2,
    allowNegativeValue: true
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: number | null): void
}>()

const options = computed<CurrencyInputOptions>(() => ({
    currency: props.code,
    currencyDisplay: "hidden" as any, // We show symbol/code manually
    hideCurrencySymbolOnFocus: false,
    hideGroupingSeparatorOnFocus: false,
    precision: props.decimalsLimit,
    valueRange: {
        min: props.min,
        max: props.max
    },
    useGrouping: true,
    accountingSign: false
}))

const { inputRef, numberValue, setValue } = useCurrencyInput(options.value)

watch(numberValue, (val) => {
    emit('update:modelValue', val)
})

watch(() => props.modelValue, (val) => {
    setValue(val)
})

const invalid = ref(false)

const handleInvalid = () => {
    // Custom validation logic if needed
    invalid.value = true
}

</script>

<template>
  <div
    :class="clx(
        'w-full cursor-text justify-between overflow-hidden',
        currencyInputVariants({ size }),
        {
            'text-ui-fg-disabled !bg-ui-bg-disabled !shadow-buttons-neutral !placeholder-ui-fg-disabled cursor-not-allowed': disabled,
            '!shadow-borders-error invalid:!shadow-borders-error': invalid // logic for invalid prop from parent?
        },
        $attrs.class
    )"
    @click="inputRef?.focus()"
  >
    <span
        :class="clx('w-fit min-w-[32px] border-r px-2', {
            'py-[9px]': size === 'base',
            'py-[5px]': size === 'small',
        })"
        role="presentation"
    >
        <Text
            size="small"
            leading="compact"
            :class="clx(
                'text-ui-fg-muted pointer-events-none select-none uppercase',
                {
                    'text-ui-fg-disabled': disabled,
                }
            )"
        >
            {{ code }}
        </Text>
    </span>
    
    <input
        ref="inputRef"
        :placeholder="placeholder"
        :disabled="disabled"
        class="h-full min-w-0 flex-1 appearance-none bg-transparent text-right outline-none disabled:cursor-not-allowed"
        @invalid="handleInvalid"
        type="text"
    />
    
    <span
        :class="clx(
            'flex w-fit min-w-[32px] items-center justify-center border-l px-2 text-right',
            {
                'py-[9px]': size === 'base',
                'py-[5px]': size === 'small',
            }
        )"
        role="presentation"
    >
        <Text
            size="small"
            leading="compact"
            :class="clx('text-ui-fg-muted pointer-events-none select-none', {
                'text-ui-fg-disabled': disabled,
            })"
        >
            {{ symbol }}
        </Text>
    </span>
  </div>
</template>
