<script setup lang="ts">
import { computed, ref } from "vue"
import {
  Badge,
  Button,
  FocusModal,
  FocusModalBody,
  FocusModalContent,
  FocusModalFooter,
  FocusModalHeader,
  FocusModalTitle,
  FocusModalTrigger,
  Heading,
  IconButton,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TablePagination,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  Textarea,
  toast,
} from "@minima-vue/ui"
import { EllipsisHorizontal, Plus, ArrowDownTray } from "@minima-vue/icons"

type OrderStatus = "pending" | "completed" | "returned"

type Order = {
  id: string
  displayId: number
  customer: string
  email: string
  date: string
  total: string
  status: OrderStatus
}

const activeTab = ref("all")
const pageIndex = ref(0)
const pageSize = 6
const createOpen = ref(false)

const orders = ref<Order[]>([
  {
    id: "ord_01",
    displayId: 10234,
    customer: "Olivia Johnson",
    email: "olivia@example.com",
    date: "Mar 05, 2026",
    total: "$239.00",
    status: "completed",
  },
  {
    id: "ord_02",
    displayId: 10233,
    customer: "Liam Carter",
    email: "liam@example.com",
    date: "Mar 05, 2026",
    total: "$149.00",
    status: "pending",
  },
  {
    id: "ord_03",
    displayId: 10232,
    customer: "Sophia Martin",
    email: "sophia@example.com",
    date: "Mar 04, 2026",
    total: "$420.00",
    status: "completed",
  },
  {
    id: "ord_04",
    displayId: 10231,
    customer: "Noah Lee",
    email: "noah@example.com",
    date: "Mar 04, 2026",
    total: "$94.00",
    status: "returned",
  },
  {
    id: "ord_05",
    displayId: 10230,
    customer: "Amelia Green",
    email: "amelia@example.com",
    date: "Mar 03, 2026",
    total: "$316.00",
    status: "pending",
  },
  {
    id: "ord_06",
    displayId: 10229,
    customer: "James Wright",
    email: "james@example.com",
    date: "Mar 03, 2026",
    total: "$267.00",
    status: "completed",
  },
  {
    id: "ord_07",
    displayId: 10228,
    customer: "Mia Brown",
    email: "mia@example.com",
    date: "Mar 02, 2026",
    total: "$510.00",
    status: "completed",
  },
  {
    id: "ord_08",
    displayId: 10227,
    customer: "William Adams",
    email: "william@example.com",
    date: "Mar 02, 2026",
    total: "$83.00",
    status: "returned",
  },
])

const visibleOrders = computed(() => {
  if (activeTab.value === "all") {
    return orders.value
  }

  return orders.value.filter((order) => order.status === activeTab.value)
})

const pageCount = computed(() => Math.ceil(visibleOrders.value.length / pageSize))
const canPreviousPage = computed(() => pageIndex.value > 0)
const canNextPage = computed(() => pageIndex.value < pageCount.value - 1)

const pagedOrders = computed(() => {
  const start = pageIndex.value * pageSize
  return visibleOrders.value.slice(start, start + pageSize)
})

const statusColor = (status: OrderStatus) => {
  if (status === "completed") return "green"
  if (status === "pending") return "orange"
  return "red"
}

const resetPage = () => {
  pageIndex.value = 0
}

const nextPage = () => {
  if (canNextPage.value) {
    pageIndex.value += 1
  }
}

const previousPage = () => {
  if (canPreviousPage.value) {
    pageIndex.value -= 1
  }
}

const createOrder = () => {
  createOpen.value = false
  toast.success("Order created", {
    description: "The draft order has been created successfully.",
  })
}
</script>

<template>
  <section class="space-y-3">
    <div class="dashboard-panel flex items-start justify-between p-4">
      <div>
        <Heading level="h1" class="dashboard-heading">Orders</Heading>
        <Text size="small" leading="compact" class="text-ui-fg-subtle">
          Manage and fulfill incoming orders in one place.
        </Text>
      </div>
      <div class="flex items-center gap-x-2">
        <Button variant="secondary" size="small" @click="toast.info('Export started', { description: 'A CSV file is being generated.' })">
          <ArrowDownTray />
          Export
        </Button>
        <FocusModal v-model:open="createOpen">
          <FocusModalTrigger as-child>
            <Button size="small">
              <Plus />
              Create Order
            </Button>
          </FocusModalTrigger>
          <FocusModalContent>
            <FocusModalHeader>
              <FocusModalTitle>Create Draft Order</FocusModalTitle>
            </FocusModalHeader>
            <FocusModalBody class="p-5">
              <div class="grid gap-4 md:grid-cols-2">
                <label class="flex flex-col gap-y-1">
                  <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Customer Name</Text>
                  <Input placeholder="e.g. Olivia Johnson" />
                </label>
                <label class="flex flex-col gap-y-1">
                  <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Customer Email</Text>
                  <Input type="email" placeholder="olivia@example.com" />
                </label>
                <label class="flex flex-col gap-y-1 md:col-span-2">
                  <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Internal Notes</Text>
                  <Textarea rows="4" placeholder="Add any note for fulfillment team" />
                </label>
              </div>
            </FocusModalBody>
            <FocusModalFooter>
              <Button variant="secondary" @click="createOpen = false">Cancel</Button>
              <Button @click="createOrder">Create</Button>
            </FocusModalFooter>
          </FocusModalContent>
        </FocusModal>
      </div>
    </div>

    <div class="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
      <article class="dashboard-panel p-4">
        <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Gross Sales</Text>
        <Text size="large" leading="compact" weight="plus">$128,390</Text>
        <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">+8.4% from last month</Text>
      </article>
      <article class="dashboard-panel p-4">
        <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Orders</Text>
        <Text size="large" leading="compact" weight="plus">2,481</Text>
        <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">142 need review</Text>
      </article>
      <article class="dashboard-panel p-4">
        <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">AOV</Text>
        <Text size="large" leading="compact" weight="plus">$51.73</Text>
        <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">-0.7% week over week</Text>
      </article>
      <article class="dashboard-panel p-4">
        <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Refund Rate</Text>
        <Text size="large" leading="compact" weight="plus">1.18%</Text>
        <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Healthy benchmark</Text>
      </article>
    </div>

    <div class="dashboard-panel overflow-hidden">
      <div class="border-b border-ui-border-base p-3">
        <Tabs v-model:model-value="activeTab" default-value="all" @update:model-value="resetPage">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="returned">Returned</TabsTrigger>
          </TabsList>

          <TabsContent value="all" class="mt-3 border-0 bg-transparent p-0" />
          <TabsContent value="pending" class="mt-3 border-0 bg-transparent p-0" />
          <TabsContent value="completed" class="mt-3 border-0 bg-transparent p-0" />
          <TabsContent value="returned" class="mt-3 border-0 bg-transparent p-0" />
        </Tabs>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Order</TableHeaderCell>
            <TableHeaderCell>Customer</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell class="text-right">Total</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="order in pagedOrders"
            :key="order.id"
            class="[&_td:last-child]:w-[1%] [&_td:last-child]:whitespace-nowrap"
          >
            <TableCell>#{{ order.displayId }}</TableCell>
            <TableCell>
              <div class="flex flex-col">
                <Text size="small" leading="compact" weight="plus">{{ order.customer }}</Text>
                <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">{{ order.email }}</Text>
              </div>
            </TableCell>
            <TableCell>{{ order.date }}</TableCell>
            <TableCell>
              <Badge size="2xsmall" rounded="full" :color="statusColor(order.status)">
                {{ order.status }}
              </Badge>
            </TableCell>
            <TableCell class="text-right">{{ order.total }}</TableCell>
            <TableCell>
              <IconButton variant="transparent" size="small">
                <EllipsisHorizontal class="text-ui-fg-subtle" />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <TablePagination
        :count="visibleOrders.length"
        :page-size="pageSize"
        :page-index="pageIndex"
        :page-count="pageCount"
        :can-previous-page="canPreviousPage"
        :can-next-page="canNextPage"
        @next-page="nextPage"
        @previous-page="previousPage"
      />
    </div>
  </section>
</template>
