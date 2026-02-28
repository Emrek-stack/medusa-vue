import { ref, readonly } from "vue"

export interface UseToggleStateOptions {
    initial?: boolean
}

export interface UseToggleStateReturn {
    state: Readonly<import("vue").Ref<boolean>>
    open: () => void
    close: () => void
    toggle: () => void
}

export function useToggleState(initial: boolean = false) {
    const state = ref(initial)

    const close = () => {
        state.value = false
    }

    const open = () => {
        state.value = true
    }

    const toggle = () => {
        state.value = !state.value
    }

    return {
        state: readonly(state),
        open,
        close,
        toggle,
    }
}
