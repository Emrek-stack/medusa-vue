<script setup lang="ts">
import { ref, computed } from "vue"
import { Eye, EyeSlash, MagnifyingGlassMini } from "@minima-vue/icons"
import { cva } from "class-variance-authority"
import { clx } from "@/utils/clx"



const inputVariants = cva(
  clx(
    inputBaseStyles,
    "[&::--webkit-search-cancel-button]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
  ),
  {
    variants: {
      size: {
        base: "txt-compact-small h-8 px-2 py-1.5",
        small: "txt-compact-small h-7 px-2 py-1",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
)



const props = withDefaults(defineProps<InputProps>(), {
  size: "base",
  type: "text",
  modelValue: ""
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: Event): void
}>()

const typeState = ref(props.type)

const isPassword = computed(() => props.type === "password")
const isSearch = computed(() => props.type === "search")

const togglePassword = () => {
    typeState.value = typeState.value === "password" ? "text" : "password"
}

const inputClass = computed(() => {
    return clx(
        inputVariants({ size: props.size }),
        {
          "pl-8": isSearch.value && props.size === "base",
          "pr-8": isPassword.value && props.size === "base",
          "pl-7": isSearch.value && props.size === "small",
          "pr-7": isPassword.value && props.size === "small",
        }
    )
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

</script>

<script lang="ts">

const inputBaseStyles = clx(
  "caret-ui-fg-base bg-ui-bg-field hover:bg-ui-bg-field-hover shadow-borders-base placeholder-ui-fg-muted text-ui-fg-base transition-fg relative w-full appearance-none rounded-md outline-none",
  "focus-visible:shadow-borders-interactive-with-active",
  "disabled:text-ui-fg-disabled disabled:!bg-ui-bg-disabled disabled:placeholder-ui-fg-disabled disabled:cursor-not-allowed",
  "aria-[invalid=true]:!shadow-borders-error  invalid:!shadow-borders-error"
)

export { inputBaseStyles }
export interface InputProps {
  size?: "base" | "small"
  type?: string
  modelValue?: string | number
  disabled?: boolean
  placeholder?: string
}
</script>

<template>
  <div class="relative">
    <input
      :type="isPassword ? typeState : type"
      :class="clx(inputClass, $attrs.class)"
      :value="modelValue"
      @input="handleInput"
      v-bind="$attrs"
    />
    <div
      v-if="isSearch"
      :class="clx(
        'text-ui-fg-muted pointer-events-none absolute bottom-0 left-0 flex items-center justify-center',
        {
          'h-8 w-8': size === 'base',
          'h-7 w-7': size === 'small',
        }
      )"
      role="img"
    >
      <MagnifyingGlassMini />
    </div>
    <div
      v-if="isPassword"
      :class="clx(
        'absolute bottom-0 right-0 flex items-center justify-center border-l',
        {
          'h-8 w-8': size === 'base',
          'h-7 w-7': size === 'small',
        }
      )"
    >
      <button
        class="text-ui-fg-muted hover:text-ui-fg-base focus-visible:text-ui-fg-base focus-visible:shadow-borders-interactive-w-focus active:text-ui-fg-base h-fit w-fit rounded-sm outline-none transition-all"
        type="button"
        @click="togglePassword"
      >
        <span class="sr-only">
          {{ typeState === "password" ? "Show password" : "Hide password" }}
        </span>
        <component :is="typeState === 'password' ? Eye : EyeSlash" />
      </button>
    </div>
  </div>
</template>
