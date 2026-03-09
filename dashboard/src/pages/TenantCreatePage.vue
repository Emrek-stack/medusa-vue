<script setup lang="ts">
import { reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import {
  Button,
  FocusModal,
  FocusModalBody,
  FocusModalContent,
  FocusModalFooter,
  FocusModalHeader,
  FocusModalTitle,
  Input,
  Switch,
  Text,
  Textarea,
  toast,
} from "@minima-vue/ui"
import TenantsPage from "@/pages/TenantsPage.vue"

const route = useRoute()
const router = useRouter()
const open = ref(true)

const form = reactive({
  name: "",
  slug: "",
  domain: "",
  ownerEmail: "",
  plan: "starter",
  region: "eu",
  notes: "",
})

const features = reactive({
  billing: true,
  notifications: true,
  analytics: false,
})

const isSubmitting = ref(false)

const close = async () => {
  await router.push({
    path: "/tenants",
    query: route.query,
  })
}

const onCreate = async () => {
  isSubmitting.value = true

  await new Promise((resolve) => setTimeout(resolve, 350))

  toast.success("Tenant created", {
    description: `${form.name || "New tenant"} has been added.`,
  })

  isSubmitting.value = false
  await close()
}

const onCancel = async () => {
  await close()
}

const onOpenChange = async (nextOpen: boolean) => {
  open.value = nextOpen

  if (!nextOpen) {
    await close()
  }
}
</script>

<template>
  <section>
    <TenantsPage />

    <FocusModal :open="open" @update:open="onOpenChange">
      <FocusModalContent>
        <FocusModalHeader>
          <div class="ml-auto">
            <FocusModalTitle>Create Tenant</FocusModalTitle>
          </div>
        </FocusModalHeader>

        <FocusModalBody class="overflow-y-auto p-5">
          <div class="space-y-6">
            <div>
              <Text size="small" leading="compact" class="text-ui-fg-subtle">
                Configure tenant details and initial access settings.
              </Text>
            </div>

            <div>
              <Text size="small" weight="plus" class="mb-3">General</Text>
              <div class="grid gap-4 md:grid-cols-2">
                <label class="flex flex-col gap-y-1 md:col-span-2">
                  <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Tenant Name</Text>
                  <Input v-model="form.name" placeholder="Northwind Labs" />
                </label>

                <label class="flex flex-col gap-y-1">
                  <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Slug</Text>
                  <Input v-model="form.slug" placeholder="northwind-labs" />
                </label>

                <label class="flex flex-col gap-y-1">
                  <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Domain</Text>
                  <Input v-model="form.domain" placeholder="northwind.example.com" />
                </label>

                <label class="flex flex-col gap-y-1">
                  <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Owner Email</Text>
                  <Input v-model="form.ownerEmail" type="email" placeholder="owner@northwind.example.com" />
                </label>

                <label class="flex flex-col gap-y-1">
                  <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Plan</Text>
                  <Input v-model="form.plan" placeholder="starter | growth | enterprise" />
                </label>

                <label class="flex flex-col gap-y-1">
                  <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Region</Text>
                  <Input v-model="form.region" placeholder="eu | us | me" />
                </label>

                <label class="flex flex-col gap-y-1 md:col-span-2">
                  <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Internal Notes</Text>
                  <Textarea v-model="form.notes" rows="4" placeholder="Optional onboarding notes." />
                </label>
              </div>
            </div>

            <div>
              <Text size="small" weight="plus" class="mb-3">Feature Flags</Text>
              <div class="grid gap-3">
                <div class="flex items-center justify-between rounded-md border border-ui-border-base p-3">
                  <div>
                    <Text size="small" weight="plus" leading="compact">Billing Module</Text>
                    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Enable invoice and subscription features.</Text>
                  </div>
                  <Switch v-model:checked="features.billing" />
                </div>
                <div class="flex items-center justify-between rounded-md border border-ui-border-base p-3">
                  <div>
                    <Text size="small" weight="plus" leading="compact">Notifications</Text>
                    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Allow system and audit notifications.</Text>
                  </div>
                  <Switch v-model:checked="features.notifications" />
                </div>
                <div class="flex items-center justify-between rounded-md border border-ui-border-base p-3">
                  <div>
                    <Text size="small" weight="plus" leading="compact">Analytics</Text>
                    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Enable advanced reporting dashboard.</Text>
                  </div>
                  <Switch v-model:checked="features.analytics" />
                </div>
              </div>
            </div>
          </div>
        </FocusModalBody>

        <FocusModalFooter>
          <Button variant="secondary" @click="onCancel">Cancel</Button>
          <Button :disabled="isSubmitting" @click="onCreate">Create Tenant</Button>
        </FocusModalFooter>
      </FocusModalContent>
    </FocusModal>
  </section>
</template>
