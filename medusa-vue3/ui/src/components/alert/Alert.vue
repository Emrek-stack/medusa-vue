<script setup lang="ts">
import { computed, ref } from "vue"
import { clx } from "@/utils/clx"
import {
  CheckCircleSolid,
  ExclamationCircleSolid,
  InformationCircleSolid,
  XCircleSolid,
  XMarkMini,
} from "@medusa-vue/icons"
import { IconButton } from "@/components/icon-button"

export interface AlertProps {
  variant?: "info" | "error" | "success" | "warning"
  dismissible?: boolean
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: "info",
  dismissible: false,
})

const dismissed = ref(false)

const handleDismiss = () => {
  dismissed.value = true
}

const iconComponent = computed(() => {
  switch (props.variant) {
    case "error":
      return XCircleSolid
    case "success":
      return CheckCircleSolid
    case "warning":
      return ExclamationCircleSolid
    case "info":
    default:
      return InformationCircleSolid
  }
})
</script>

<template>
  <div
    v-if="!dismissed"
    v-bind="$attrs"
    :class="clx(
      'bg-ui-bg-subtle txt-compact-small grid items-start gap-x-2 text-pretty rounded-lg border p-3',
      {
        'grid-cols-[20px_1fr]': !dismissible,
        'grid-cols-[20px_1fr_20px]': dismissible,
      },
      $attrs.class as string
    )"
  >
    <component
      :is="iconComponent"
      :class="clx({
        'text-ui-tag-red-icon': variant === 'error',
        'text-ui-tag-green-icon': variant === 'success',
        'text-ui-tag-orange-icon': variant === 'warning',
        'text-ui-tag-neutral-icon': variant === 'info',
      })"
    />
    <div class="w-full">
      <slot />
    </div>
    <IconButton
      v-if="dismissible"
      size="2xsmall"
      variant="transparent"
      type="button"
      @click="handleDismiss"
    >
      <XMarkMini class="text-ui-fg-muted" />
    </IconButton>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
