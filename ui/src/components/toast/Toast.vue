<script setup lang="ts">
import { ToastRoot, ToastClose } from "radix-vue"
import { IconButton } from "@/components/icon-button"
import { CheckCircleSolid, ExclamationCircleSolid, InformationCircleSolid, XCircleSolid, Spinner, XMark } from "@minima-vue/icons"
import { clx } from "@/utils/clx"
import { computed, type PropType } from "vue"
import type { ToastVariant, ToastAction } from "@/types"

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  variant: {
    type: String as PropType<ToastVariant>,
    default: "info",
  },
  title: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  description: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
  action: {
    type: Object as PropType<ToastAction | undefined>,
    default: undefined,
  },
  icon: {
    type: null as unknown as PropType<unknown>,
    default: undefined,
  },
  dismissable: {
    type: Boolean,
    default: true,
  },
  duration: {
    type: Number,
    default: 5000,
  },
  open: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  onOpenChange: {
    type: Function as PropType<((open: boolean) => void) | undefined>,
    default: undefined,
  },
})

const emit = defineEmits<{
    (e: 'update:open', value: boolean): void
}>()

const rootProps = computed(() => ({
  ...(props.open !== undefined ? { open: props.open } : {}),
  duration: props.duration,
}))

const Icon = computed(() => {
    if (props.icon) return props.icon
    switch (props.variant) {
        case "success": return CheckCircleSolid
        case "warning": return ExclamationCircleSolid
        case "error": return XCircleSolid
        case "loading": return Spinner
        case "info": return InformationCircleSolid
        default: return null
    }
})

const iconClass = computed(() => {
     switch (props.variant) {
        case "success": return "text-ui-tag-green-icon"
        case "warning": return "text-ui-tag-orange-icon"
        case "error": return "text-ui-tag-red-icon"
        case "loading": return "text-ui-tag-blue-icon animate-spin"
        case "info": return "text-ui-fg-base"
        default: return ""
    }
})

const handleOpenChange = (open: boolean) => {
  emit("update:open", open)
  props.onOpenChange?.(open)
}

</script>

<template>
  <ToastRoot
    v-bind="rootProps"
    @update:open="handleOpenChange"
    class="shadow-elevation-flyout bg-ui-bg-component flex w-fit min-w-[360px] max-w-[440px] gap-x-3 overflow-hidden rounded-lg p-3 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-right-full data-[state=closed]:slide-out-to-right-full transition-transform"
  >
    <div
        :class="clx('grid flex-1 items-center gap-x-2', {
            'grid-cols-[20px_1fr]': !!Icon,
            'grid-cols-1': !Icon,
            'items-start': !!description,
        })"
    >
        <span v-if="Icon" class="flex size-5 items-center justify-center" aria-hidden>
             <component :is="Icon" :class="iconClass" />
        </span>
        <div class="flex flex-col gap-y-3">
             <div class="flex flex-col">
                <span v-if="title" class="txt-compact-small-plus text-ui-fg-base">
                    {{ title }}
                </span>
                <span v-if="description" class="txt-small text-ui-fg-subtle text-pretty">
                    {{ description }}
                </span>
             </div>
             <button
                v-if="action"
                type="button"
                :class="clx(
                    'txt-compact-small-plus text-ui-fg-base bg-ui-bg-base flex h-7 w-fit items-center rounded-[4px] px-2 transition-colors',
                    'focus-visible:shadow-borders-focus',
                    'hover:text-ui-fg-subtle',
                    'disabled:text-ui-fg-disabled',
                    {
                        'text-ui-fg-error': action.variant === 'destructive',
                    }
                )"
                @click="action.onClick"
             >
                {{ action.label }}
             </button>
        </div>
    </div>
    <ToastClose v-if="dismissable" as-child>
         <IconButton
            size="2xsmall"
            variant="transparent"
            type="button"
          >
            <XMark />
          </IconButton>
    </ToastClose>
  </ToastRoot>
</template>
