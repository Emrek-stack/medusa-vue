import type { Meta, StoryObj } from '@storybook/vue3'
import Table from './Table.vue'
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'
import TableHeaderCell from './TableHeaderCell.vue'
import TableBody from './TableBody.vue'
import TableCell from './TableCell.vue'
import TablePagination from './TablePagination.vue'
import { ref, computed } from 'vue'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Table>

// Mock data generation
const firstNames = ["Charles", "Cooper", "Johnny", "Elvis", "John", "Jane", "Joe", "Jack", "Jill", "Jenny"]
const lastNames = ["Brown", "Smith", "Johnson", "Williams", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"]
const currencies = ["USD", "EUR", "GBP", "JPY"]

const getRandom = (arr: any) => arr[Math.floor(Math.random() * arr.length)]

const makeData = (count: any) => {
  return Array.from({ length: count }, (_, _i) => ({
    id: `order_${Math.floor(Math.random() * 100000)}`,
    displayId: Math.floor(Math.random() * 100000),
    customer: `${getRandom(firstNames)} ${getRandom(lastNames)}`,
    email: `${Math.floor(Math.random() * 100000)}@gmail.com`,
    amount: Math.floor(Math.random() * 1000),
    currency: getRandom(currencies),
  }))
}

const fakeData = makeData(10)

export const Default: Story = {
  render: (args) => ({
    components: {
      Table,
      TableHeader,
      TableRow,
      TableHeaderCell,
      TableBody,
      TableCell
    },
    setup() {
      return { args, fakeData }
    },
    template: `
      <div class="flex w-[80vw] items-center justify-center">
        <Table v-bind="args">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>#</TableHeaderCell>
              <TableHeaderCell>Customer</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell class="text-right">Amount</TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="order in fakeData" :key="order.id" class="[&_td:last-child]:w-[1%] [&_td:last-child]:whitespace-nowrap">
              <TableCell>{{ order.displayId }}</TableCell>
              <TableCell>{{ order.customer }}</TableCell>
              <TableCell>{{ order.email }}</TableCell>
              <TableCell class="text-right">{{ order.amount }}</TableCell>
              <TableCell class="text-ui-fg-muted">{{ order.currency }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `,
  }),
}

export const Paginated: Story = {
  render: (args) => ({
    components: {
      Table,
      TableHeader,
      TableRow,
      TableHeaderCell,
      TableBody,
      TableCell,
      TablePagination
    },
    setup() {
      const pageSize = 5
      const count = 50
      const pageIndex = ref(0)

      const pageCount = Math.ceil(count / pageSize)
      const canNextPage = computed(() => pageIndex.value < pageCount - 1)
      const canPreviousPage = computed(() => pageIndex.value > 0)

      const orders = computed(() => makeData(pageSize)) // Just generate random data for current page simulation

      const nextPage = () => { if (canNextPage.value) pageIndex.value++ }
      const previousPage = () => { if (canPreviousPage.value) pageIndex.value-- }

      return {
        args,
        orders,
        pageIndex,
        pageSize,
        count,
        pageCount,
        canNextPage,
        canPreviousPage,
        nextPage,
        previousPage
      }
    },
    template: `
      <div class="flex w-[80vw] flex-col items-center justify-center">
        <Table v-bind="args">
          <TableHeader>
            <TableRow>
               <TableHeaderCell>#</TableHeaderCell>
              <TableHeaderCell>Customer</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell class="text-right">Amount</TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="order in orders" :key="order.id" class="[&_td:last-child]:w-[1%] [&_td:last-child]:whitespace-nowrap">
              <TableCell>{{ order.displayId }}</TableCell>
              <TableCell>{{ order.customer }}</TableCell>
              <TableCell>{{ order.email }}</TableCell>
              <TableCell class="text-right">{{ order.amount }}</TableCell>
              <TableCell class="text-ui-fg-muted">{{ order.currency }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <TablePagination
            :page-count="pageCount"
            :can-next-page="canNextPage"
            :can-previous-page="canPreviousPage"
            :count="count"
            :page-size="pageSize"
            :page-index="pageIndex"
            @next-page="nextPage"
            @previous-page="previousPage"
        />
      </div>
    `,
  }),
}
