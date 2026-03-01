<script setup lang="ts">
import { ToastProvider, ToastViewport } from "radix-vue"
import { useToast } from "@/composables/use-toast"
import { Toast } from "."
import { ToasterPosition } from "@/types"
import { clx } from "@/utils/clx"
import { computed } from "vue"

const { toasts } = useToast()

interface ToasterProps {
    position?: ToasterPosition
    duration?: number
}

const props = withDefaults(defineProps<ToasterProps>(), {
  position: "bottom-right",
  duration: 5000,
})

const viewportClasses = computed(() =>
  clx(
    "fixed z-[2147483647] m-0 flex w-full max-w-[100vw] list-none gap-2 p-4 outline-none sm:max-w-[420px]",
    {
      "top-0 left-0 flex-col items-start": props.position === "top-left",
      "top-0 left-1/2 -translate-x-1/2 flex-col items-center": props.position === "top-center",
      "top-0 right-0 flex-col items-end": props.position === "top-right",
      "bottom-0 left-0 flex-col-reverse items-start": props.position === "bottom-left",
      "bottom-0 left-1/2 -translate-x-1/2 flex-col-reverse items-center": props.position === "bottom-center",
      "bottom-0 right-0 flex-col-reverse items-end": props.position === "bottom-right",
    }
  )
)

</script>

<template>
  <ToastProvider :duration="props.duration">
    <Toast 
        v-for="toast in toasts" 
        :key="toast.id" 
        v-bind="toast"
        :duration="toast.duration ?? props.duration"
    />
    <ToastViewport 
        :class="clx(viewportClasses, $attrs.class)" 
    />
  </ToastProvider>
</template>
