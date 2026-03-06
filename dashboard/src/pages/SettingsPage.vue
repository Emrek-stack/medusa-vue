<script setup lang="ts">
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import { Button, Heading, Input, Switch, Text, Textarea, toast } from "@minima-vue/ui"

const route = useRoute()

const labels: Record<string, string> = {
  general: "Genel",
  tenants: "Tenantlar",
  roles: "Roller",
  permissions: "İzinler",
  "api-keys": "API Keys",
  integrations: "Entegrasyonlar",
  updates: "Güncellemeler",
  profile: "Profil",
  preferences: "Tercihler",
}

const section = computed(() => {
  const params = route.params as Record<string, string | string[] | undefined>
  const value = params.section
  return Array.isArray(value) ? value[0] : value
})

const title = computed(() => (section.value ? labels[section.value] || "Settings" : "Settings"))

const emailNotifications = ref(true)
const slackNotifications = ref(false)
const autoArchive = ref(true)

const save = () => {
  toast.success("Settings updated", {
    description: `${title.value} settings have been saved.`,
  })
}
</script>

<template>
  <section class="space-y-3">
    <div class="dashboard-panel p-4">
      <Heading level="h1" class="dashboard-heading">{{ title }}</Heading>
      <Text size="small" leading="compact" class="text-ui-fg-subtle">
        {{ title }} alanı için sistem ayarlarını yönetin.
      </Text>
    </div>

    <div class="dashboard-panel p-4">
      <div class="grid gap-4 md:grid-cols-2">
        <label class="flex flex-col gap-y-1 md:col-span-2">
          <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Display Name</Text>
          <Input :placeholder="`${title} configuration`" />
        </label>
        <label class="flex flex-col gap-y-1">
          <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Support Email</Text>
          <Input type="email" placeholder="support@example.com" />
        </label>
        <label class="flex flex-col gap-y-1">
          <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Webhook Endpoint</Text>
          <Input placeholder="https://api.example.com/webhooks" />
        </label>
        <label class="flex flex-col gap-y-1 md:col-span-2">
          <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Description</Text>
          <Textarea rows="4" placeholder="Optional description for this configuration" />
        </label>
      </div>
    </div>

    <div class="dashboard-panel p-4">
      <Heading level="h3" class="mb-3">Automation</Heading>
      <div class="grid gap-3">
        <div class="flex items-center justify-between rounded-md border border-ui-border-base p-3">
          <div>
            <Text size="small" weight="plus" leading="compact">Email Notifications</Text>
            <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Receive updates for workflow events.</Text>
          </div>
          <Switch v-model:checked="emailNotifications" />
        </div>
        <div class="flex items-center justify-between rounded-md border border-ui-border-base p-3">
          <div>
            <Text size="small" weight="plus" leading="compact">Slack Notifications</Text>
            <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Push alerts to your workspace channel.</Text>
          </div>
          <Switch v-model:checked="slackNotifications" />
        </div>
        <div class="flex items-center justify-between rounded-md border border-ui-border-base p-3">
          <div>
            <Text size="small" weight="plus" leading="compact">Auto Archive</Text>
            <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Archive completed entries after 30 days.</Text>
          </div>
          <Switch v-model:checked="autoArchive" />
        </div>
      </div>

      <div class="mt-4 flex justify-end">
        <Button @click="save">Save Changes</Button>
      </div>
    </div>
  </section>
</template>
