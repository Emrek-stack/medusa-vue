import { inject, provide, toRef, type Ref } from "vue"

export type PromptVariant = "danger" | "confirmation"

const promptVariantKey = "medusa-vue-prompt-variant"

export const providePromptVariant = (variant: Ref<PromptVariant>) => {
  provide(promptVariantKey, variant)
}

export const usePromptVariant = () =>
  inject<Ref<PromptVariant>>(promptVariantKey, toRef({ value: "danger" as PromptVariant }, "value"))
