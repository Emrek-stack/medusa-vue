<script setup lang="ts">
import {
  Badge,
  Button,
  Heading,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  toast,
} from "@minima-vue/ui"
import { RocketLaunch, Sparkles } from "@minima-vue/icons"

const campaigns = [
  { id: "cmp_01", title: "Spring Sale", type: "Percentage", redemptions: 421, status: "active" },
  { id: "cmp_02", title: "New User Bundle", type: "Fixed", redemptions: 188, status: "active" },
  { id: "cmp_03", title: "Back to School", type: "Free Shipping", redemptions: 74, status: "draft" },
]
</script>

<template>
  <section class="space-y-3">
    <div class="dashboard-panel flex items-start justify-between p-4">
      <div>
        <Heading level="h1" class="dashboard-heading">Promotions</Heading>
        <Text size="small" leading="compact" class="text-ui-fg-subtle">Run campaign experiments and track conversion impact.</Text>
      </div>
      <div class="flex items-center gap-x-2">
        <Button variant="secondary" size="small" @click="toast.info('Preview generated', { description: 'Campaign impact report is ready.' })">
          <Sparkles />
          Preview Impact
        </Button>
        <Button size="small" @click="toast.success('Campaign launched', { description: 'Promotion has been activated.' })">
          <RocketLaunch />
          Launch Campaign
        </Button>
      </div>
    </div>

    <div class="grid gap-2 md:grid-cols-3">
      <article class="dashboard-panel p-4">
        <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Active Campaigns</Text>
        <Text size="large" leading="compact" weight="plus">12</Text>
      </article>
      <article class="dashboard-panel p-4">
        <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Coupon Redemptions</Text>
        <Text size="large" leading="compact" weight="plus">6,281</Text>
      </article>
      <article class="dashboard-panel p-4">
        <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Attributed Revenue</Text>
        <Text size="large" leading="compact" weight="plus">$86,400</Text>
      </article>
    </div>

    <div class="dashboard-panel overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Campaign</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Redemptions</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="campaign in campaigns" :key="campaign.id">
            <TableCell>
              <Text size="small" weight="plus" leading="compact">{{ campaign.title }}</Text>
            </TableCell>
            <TableCell>{{ campaign.type }}</TableCell>
            <TableCell>{{ campaign.redemptions }}</TableCell>
            <TableCell>
              <Badge size="2xsmall" rounded="full" :color="campaign.status === 'active' ? 'green' : 'grey'">
                {{ campaign.status }}
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </section>
</template>
