<script setup lang="ts">
import { ToastProvider, ToastViewport } from "radix-vue"
import { useToast } from "@/composables/use-toast"
import { Toast } from "./"
import { ToasterPosition } from "@/types"
import { clx } from "@/utils/clx"

const { toasts } = useToast()

interface ToasterProps {
    position?: ToasterPosition
    duration?: number
}

withDefaults(defineProps<ToasterProps>(), {
    position: "bottom-right",
    duration: 5000
})

const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-center': 'top-0 left-1/2 -translate-x-1/2',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-0 right-0',
}

</script>

<template>
  <ToastProvider :duration="duration">
    <Toast 
        v-for="toast in toasts" 
        :key="toast.id" 
        v-bind="toast"
    />
    <ToastViewport 
        :class="clx(
            'fixed z-[2147483647] m-0 flex w-full max-w-[100vw] gap-2 p-6 outline-none',
            'flex-col items-end', // Default to bottom-right column stack
            positionClasses[position],
            $attrs.class
        )" 
    />
  </ToastProvider>
</template>
