<script setup lang="ts">
import { ref } from "vue"
import {
  Badge,
  Heading,
  ProgressTabs,
  ProgressTabsContent,
  ProgressTabsList,
  ProgressTabsTrigger,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
} from "@minima-vue/ui"

const tab = ref("stock")

const stockRows = [
  { name: "Classic Hoodie", location: "Warehouse A", available: 142, reserved: 19 },
  { name: "Canvas Tote Bag", location: "Warehouse A", available: 69, reserved: 4 },
  { name: "Cloud Tee", location: "Warehouse B", available: 0, reserved: 0 },
]

const reservations = [
  { id: "res_01", order: "#10231", sku: "SNK-010", qty: 2, state: "active" },
  { id: "res_02", order: "#10228", sku: "TEE-054", qty: 1, state: "pending" },
]

const locations = [
  { id: "loc_01", name: "Warehouse A", country: "United States", fulfillment: "Main" },
  { id: "loc_02", name: "Warehouse B", country: "Germany", fulfillment: "EU" },
]
</script>

<template>
  <section class="space-y-3">
    <div class="dashboard-panel p-4">
      <Heading level="h1" class="dashboard-heading">Rol Yönetimi</Heading>
      <Text size="small" leading="compact" class="text-ui-fg-subtle">Rol kapsamlarını, atamaları ve durumlarını yönetin.</Text>
    </div>

    <div class="dashboard-panel overflow-hidden">
      <ProgressTabs v-model:model-value="tab" default-value="stock">
        <ProgressTabsList class="border-b border-ui-border-base">
          <ProgressTabsTrigger value="stock" status="completed">Stock Overview</ProgressTabsTrigger>
          <ProgressTabsTrigger value="reservations" status="in-progress">Reservations</ProgressTabsTrigger>
          <ProgressTabsTrigger value="locations" status="not-started">Locations</ProgressTabsTrigger>
        </ProgressTabsList>

        <ProgressTabsContent value="stock" class="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Product</TableHeaderCell>
                <TableHeaderCell>Location</TableHeaderCell>
                <TableHeaderCell>Available</TableHeaderCell>
                <TableHeaderCell>Reserved</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="row in stockRows" :key="`${row.name}-${row.location}`">
                <TableCell>{{ row.name }}</TableCell>
                <TableCell>{{ row.location }}</TableCell>
                <TableCell>{{ row.available }}</TableCell>
                <TableCell>{{ row.reserved }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ProgressTabsContent>

        <ProgressTabsContent value="reservations" class="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Reservation</TableHeaderCell>
                <TableHeaderCell>Order</TableHeaderCell>
                <TableHeaderCell>SKU</TableHeaderCell>
                <TableHeaderCell>Qty</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="row in reservations" :key="row.id">
                <TableCell>{{ row.id }}</TableCell>
                <TableCell>{{ row.order }}</TableCell>
                <TableCell>{{ row.sku }}</TableCell>
                <TableCell>{{ row.qty }}</TableCell>
                <TableCell>
                  <Badge size="2xsmall" rounded="full" :color="row.state === 'active' ? 'green' : 'orange'">{{ row.state }}</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ProgressTabsContent>

        <ProgressTabsContent value="locations" class="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Location</TableHeaderCell>
                <TableHeaderCell>Country</TableHeaderCell>
                <TableHeaderCell>Fulfillment Profile</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="row in locations" :key="row.id">
                <TableCell>{{ row.name }}</TableCell>
                <TableCell>{{ row.country }}</TableCell>
                <TableCell>{{ row.fulfillment }}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ProgressTabsContent>
      </ProgressTabs>
    </div>
  </section>
</template>
