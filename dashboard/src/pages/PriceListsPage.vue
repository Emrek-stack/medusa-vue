<script setup lang="ts">
import { Badge, Button, Heading, Input, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, Text, toast } from "@minima-vue/ui"
import { Plus } from "@minima-vue/icons"

const rows = [
  { id: "pl_01", title: "US Wholesale", currency: "USD", products: 128, status: "active" },
  { id: "pl_02", title: "EU B2B", currency: "EUR", products: 76, status: "active" },
  { id: "pl_03", title: "Holiday Test", currency: "USD", products: 22, status: "draft" },
]
</script>

<template>
  <section class="space-y-3">
    <div class="dashboard-panel flex items-start justify-between p-4">
      <div>
        <Heading level="h1" class="dashboard-heading">Price Lists</Heading>
        <Text size="small" leading="compact" class="text-ui-fg-subtle">Configure regional or channel-based pricing strategies.</Text>
      </div>
      <Button size="small" @click="toast.success('Price list created', { description: 'A new draft price list has been created.' })">
        <Plus />
        New Price List
      </Button>
    </div>

    <div class="dashboard-panel p-4">
      <Input placeholder="Search by title" />
    </div>

    <div class="dashboard-panel overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Currency</TableHeaderCell>
            <TableHeaderCell>Products</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="row in rows" :key="row.id">
            <TableCell>{{ row.title }}</TableCell>
            <TableCell>{{ row.currency }}</TableCell>
            <TableCell>{{ row.products }}</TableCell>
            <TableCell>
              <Badge size="2xsmall" rounded="full" :color="row.status === 'active' ? 'green' : 'grey'">{{ row.status }}</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </section>
</template>
