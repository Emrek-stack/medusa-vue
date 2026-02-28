import { ref, computed } from "vue"
import type { ToastAction, ToastVariant } from "@/types"

const TOAST_LIMIT = 5

// Radix Toast has duration prop. We just need to manage the list.

export interface Toast extends ToastProps {
    id: string
    title?: string
    description?: string
    action?: ToastAction
}

export interface ToastProps {
    id?: string
    variant?: ToastVariant
    title?: string
    description?: string
    action?: ToastAction
    icon?: any // component
    dismissable?: boolean
    duration?: number
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

const toasts = ref<Toast[]>([])

let count = 0

function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER
    return count.toString()
}

function addToast(props: ToastProps) {
    const id = genId()

    const update = (props: ToastProps) => {
        const index = toasts.value.findIndex((t) => t.id === id)
        if (index !== -1) {
            toasts.value[index] = { ...toasts.value[index], ...props }
        }
    }

    const dismiss = () => {
        // We set open to false to trigger exit animation, then remove?
        // Or Radix handles removal?
        // If we manage list, we remove.
        // Radix Toast emits 'update:open' false when duration ends or dismissed.
        // We should listen to that.
        update({ open: false })
    }

    const toast: Toast = {
        ...props,
        id,
        open: true,
        onOpenChange: (open: boolean) => {
            if (!open) {
                dismiss()
                // Remove after delay or immediately?
                // Radix Toast usually handles removal from DOM if unmounted.
                // We might want to keep it in state for exit animation?
                setTimeout(() => {
                    toasts.value = toasts.value.filter((t) => t.id !== id)
                }, 200) // Small delay for animation?
            }
        },
    }

    toasts.value = [toast, ...toasts.value].slice(0, TOAST_LIMIT)

    return {
        id,
        dismiss,
        update,
    }
}

function dismiss(id?: string) {
    if (!id) {
        toasts.value.forEach((t) => {
            t.open = false
        })
    } else {
        const index = toasts.value.findIndex((t) => t.id === id)
        if (index !== -1) {
            toasts.value[index].open = false
        }
    }
}

function useToast() {
    return {
        toasts: computed(() => toasts.value),
        toast: addToast,
        dismiss,
    }
}

export { useToast }
