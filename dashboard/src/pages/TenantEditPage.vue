<script setup lang="ts">
import { computed, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Heading,
  Input,
  Switch,
  Text,
  Textarea,
  toast,
} from "@minima-vue/ui"
import { tenantSeed } from "@/data/tenants"
import TenantsPage from "@/pages/TenantsPage.vue"

const route = useRoute()
const router = useRouter()
const open = ref(true)

const tenantId = computed(() => {
  const params = route.params as Record<string, string | string[] | undefined>
  const value = params.id
  return String(Array.isArray(value) ? value[0] : value || "")
})
const tenant = computed(() => tenantSeed.find((entry) => entry.id === tenantId.value))

const form = reactive({
  name: tenant.value?.name ?? "",
  slug: tenant.value?.slug ?? "",
  domain: tenant.value?.domain ?? "",
  ownerEmail: tenant.value?.owner_email ?? "",
  plan: tenant.value?.plan ?? "starter",
  region: tenant.value?.region ?? "eu",
  status: tenant.value?.status ?? "active",
  notes: "",
})

const features = reactive({
  billing: true,
  notifications: true,
  analytics: tenant.value?.plan === "enterprise",
})

const isSubmitting = ref(false)

const close = async () => {
  await router.push({
    path: "/tenants",
    query: route.query,
  })
}

const onSave = async () => {
  isSubmitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 300))

  toast.success("Tenant updated", {
    description: `${form.name || "Tenant"} was saved successfully.`,
  })

  isSubmitting.value = false
}

const goBack = async () => {
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

    <Drawer :open="open" @update:open="onOpenChange">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle as-child>
            <Heading>Edit Tenant</Heading>
          </DrawerTitle>
          <DrawerDescription class="sr-only">
            Update tenant details and workspace settings.
          </DrawerDescription>
        </DrawerHeader>

        <DrawerBody class="overflow-y-auto">
          <div v-if="!tenant" class="flex items-center justify-between rounded-md border border-ui-border-base p-3">
            <Text size="small">The requested tenant does not exist in mock data.</Text>
            <Button variant="secondary" @click="goBack">Back to Tenants</Button>
          </div>

          <template v-else>
            <div class="space-y-6">
              <div>
                <Text size="small" leading="compact" class="text-ui-fg-subtle">
                  {{ `Update ${tenant.name} workspace settings.` }}
                </Text>
              </div>

              <div>
                <Text size="small" weight="plus" class="mb-3">General</Text>
                <div class="grid gap-4">
                  <label class="flex flex-col gap-y-1">
                    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Tenant Name</Text>
                    <Input v-model="form.name" />
                  </label>

                  <label class="flex flex-col gap-y-1">
                    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Slug</Text>
                    <Input v-model="form.slug" />
                  </label>

                  <label class="flex flex-col gap-y-1">
                    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Domain</Text>
                    <Input v-model="form.domain" />
                  </label>

                  <label class="flex flex-col gap-y-1">
                    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Owner Email</Text>
                    <Input v-model="form.ownerEmail" type="email" />
                  </label>

                  <label class="flex flex-col gap-y-1">
                    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Plan</Text>
                    <Input v-model="form.plan" />
                  </label>

                  <label class="flex flex-col gap-y-1">
                    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Region</Text>
                    <Input v-model="form.region" />
                  </label>

                  <label class="flex flex-col gap-y-1">
                    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Status</Text>
                    <Input v-model="form.status" />
                  </label>

                  <label class="flex flex-col gap-y-1">
                    <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Internal Notes</Text>
                    <Textarea v-model="form.notes" rows="4" placeholder="Optional notes for this tenant." />
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
          </template>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="secondary" @click="goBack">Back</Button>
          <Button :disabled="isSubmitting || !tenant" @click="onSave">Save Changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </section>
</template>
