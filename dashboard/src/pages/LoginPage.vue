<script setup lang="ts">
import { computed, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { Alert, Button, Heading, Hint, Input, Text } from "@minima-vue/ui"
import { AvatarBox } from "@/components/common/logo-box"

const route = useRoute()
const router = useRouter()

const form = reactive({
  email: "",
  password: "",
})

const isSubmitting = ref(false)
const validationError = ref<string | null>(null)
const serverError = ref<string | null>(null)

const nextPath = computed(() => {
  const raw = route.query.next
  if (typeof raw !== "string") {
    return "/dashboard"
  }

  if (!raw.startsWith("/")) {
    return "/dashboard"
  }

  return raw
})

const validate = () => {
  const email = form.email.trim()
  const password = form.password
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/

  if (!emailRegex.test(email)) {
    return "Please enter a valid email address."
  }

  if (!password.length) {
    return "Please enter your password."
  }

  return null
}

const onSubmit = async () => {
  validationError.value = null
  serverError.value = null

  const error = validate()

  if (error) {
    validationError.value = error
    return
  }

  isSubmitting.value = true

  try {
    await router.replace(nextPath.value)
  } catch (error) {
    serverError.value = "An unexpected error occurred. Please try again."
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-ui-bg-subtle flex min-h-dvh w-dvw items-center justify-center">
    <div class="m-4 flex w-full max-w-[280px] flex-col items-center">
      <AvatarBox />

      <div class="mb-4 flex flex-col items-center">
        <Heading>Welcome to Medusa</Heading>
        <Text size="small" class="text-ui-fg-subtle text-center">
          Sign in to access the account area
        </Text>
      </div>

      <div class="flex w-full flex-col gap-y-3">
        <form class="flex w-full flex-col gap-y-6" @submit.prevent="onSubmit">
          <div class="flex flex-col gap-y-1">
            <Input
              v-model="form.email"
              class="bg-ui-bg-field-component"
              autocomplete="email"
              placeholder="Email"
            />
            <Input
              v-model="form.password"
              type="password"
              class="bg-ui-bg-field-component"
              autocomplete="current-password"
              placeholder="Password"
            />
          </div>

          <div v-if="validationError" class="text-center">
            <Hint class="inline-flex" variant="error">
              {{ validationError }}
            </Hint>
          </div>

          <Alert
            v-if="serverError"
            class="bg-ui-bg-base items-center p-2"
            dismissible
            variant="error"
          >
            {{ serverError }}
          </Alert>

          <Button class="w-full" type="submit" :is-loading="isSubmitting">
            Continue with Email
          </Button>
        </form>
      </div>

      <span class="text-ui-fg-muted txt-small my-6">
        Forgot password? -
        <RouterLink
          to="/reset-password"
          class="text-ui-fg-interactive transition-fg hover:text-ui-fg-interactive-hover focus-visible:text-ui-fg-interactive-hover font-medium outline-none"
        >
          Reset
        </RouterLink>
      </span>
    </div>
  </div>
</template>
