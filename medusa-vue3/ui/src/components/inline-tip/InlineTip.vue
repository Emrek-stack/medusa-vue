<script setup lang="ts">
import { computed } from "vue"
import Tooltip from "@/components/tooltip/Tooltip.vue"
import {
  CheckCircleMiniSolid,
  ExclamationCircleSolid,
  InformationCircleSolid,
  XCircleSolid,
} from "@medusa-vue/icons"
import { clx } from "@/utils/clx"

interface InlineTipProps {
  label: string
  variant?: "info" | "warning" | "error" | "success"
}

const props = withDefaults(defineProps<InlineTipProps>(), {
  variant: "info",
})

const iconMap = {
  info: InformationCircleSolid,
  warning: ExclamationCircleSolid,
  error: XCircleSolid,
  success: CheckCircleMiniSolid,
}

const toneClasses = {
  info: "text-ui-fg-subtle",
  warning: "text-ui-tag-orange-icon",
  error: "text-ui-tag-red-icon",
  success: "text-ui-tag-green-icon",
}

const icon = computed(() => iconMap[props.variant])
const tone = computed(() => toneClasses[props.variant])
</script>

<template>
  <Tooltip :content="label" as-child>
    <span
      :class="
        clx(
          'inline-flex items-center gap-1 rounded-md outline-none',
          tone,
          $attrs.class
        )
      "
    >
      <slot />
      <component :is="icon" class="h-4 w-4" />
    </span>
  </Tooltip>
</template>
