<script setup lang="ts">
import { ref } from "vue"
import {
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Heading,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  toast,
} from "@minima-vue/ui"
import { Funnel } from "@minima-vue/icons"

type Customer = {
  id: string
  name: string
  email: string
  group: string
  orders: number
  ltv: string
}

const drawerOpen = ref(false)

const customers = ref<Customer[]>([
  { id: "cus_01", name: "Olivia Johnson", email: "olivia@example.com", group: "VIP", orders: 19, ltv: "$3,290" },
  { id: "cus_02", name: "Noah Lee", email: "noah@example.com", group: "General", orders: 8, ltv: "$912" },
  { id: "cus_03", name: "Mia Brown", email: "mia@example.com", group: "VIP", orders: 26, ltv: "$4,815" },
  { id: "cus_04", name: "James Wright", email: "james@example.com", group: "Wholesale", orders: 33, ltv: "$8,110" },
])

const applyFilters = () => {
  drawerOpen.value = false
  toast.info("Filters applied", {
    description: "Customer list has been filtered.",
  })
}
</script>

<template>
  <section class="space-y-3">
    <div class="dashboard-panel flex items-start justify-between p-4">
      <div>
        <Heading level="h1" class="dashboard-heading">Customers</Heading>
        <Text size="small" leading="compact" class="text-ui-fg-subtle">Analyze customer behavior and segment your audience.</Text>
      </div>

      <Drawer v-model:open="drawerOpen">
        <DrawerTrigger as-child>
          <Button variant="secondary" size="small">
            <Funnel />
            Filter
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Filter Customers</DrawerTitle>
            <Text size="small" leading="compact" class="text-ui-fg-subtle">Refine customer list by metadata and behavior.</Text>
          </DrawerHeader>
          <DrawerBody>
            <div class="grid gap-4">
              <label class="flex flex-col gap-y-1">
                <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Name or Email</Text>
                <Input placeholder="Search" />
              </label>
              <label class="flex flex-col gap-y-1">
                <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Customer Group</Text>
                <Input placeholder="VIP, General, Wholesale" />
              </label>
              <label class="flex flex-col gap-y-1">
                <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Order Count</Text>
                <Input placeholder="e.g. >= 10" />
              </label>
            </div>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="secondary" @click="drawerOpen = false">Cancel</Button>
            <Button @click="applyFilters">Apply</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>

    <div class="dashboard-panel overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Customer</TableHeaderCell>
            <TableHeaderCell>Group</TableHeaderCell>
            <TableHeaderCell>Orders</TableHeaderCell>
            <TableHeaderCell class="text-right">LTV</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="customer in customers" :key="customer.id">
            <TableCell>
              <div class="flex flex-col">
                <Text size="small" leading="compact" weight="plus">{{ customer.name }}</Text>
                <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">{{ customer.email }}</Text>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                size="2xsmall"
                rounded="full"
                :color="customer.group === 'VIP' ? 'purple' : customer.group === 'Wholesale' ? 'blue' : 'grey'"
              >
                {{ customer.group }}
              </Badge>
            </TableCell>
            <TableCell>{{ customer.orders }}</TableCell>
            <TableCell class="text-right">{{ customer.ltv }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </section>
</template>
