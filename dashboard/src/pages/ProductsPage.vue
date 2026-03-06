<script setup lang="ts">
import { ref } from "vue"
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
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  toast,
} from "@minima-vue/ui"
import { Plus } from "@minima-vue/icons"

type Product = {
  id: string
  title: string
  sku: string
  stock: number
  sales: number
  status: "published" | "draft"
}

const createOpen = ref(false)
const productType = ref("physical")

const products = ref<Product[]>([
  { id: "prod_01", title: "Classic Hoodie", sku: "HOOD-001", stock: 142, sales: 908, status: "published" },
  { id: "prod_02", title: "Canvas Tote Bag", sku: "BAG-201", stock: 69, sales: 433, status: "published" },
  { id: "prod_03", title: "Cloud Tee", sku: "TEE-054", stock: 0, sales: 251, status: "draft" },
  { id: "prod_04", title: "Trail Sneaker", sku: "SNK-010", stock: 29, sales: 199, status: "published" },
])

const createProduct = () => {
  createOpen.value = false
  toast.success("Product created", {
    description: "The product was added and is ready to publish.",
  })
}
</script>

<template>
  <section class="space-y-3">
    <div class="dashboard-panel flex items-start justify-between p-4">
      <div>
        <Heading level="h1" class="dashboard-heading">Tenant Yönetimi</Heading>
        <Text size="small" leading="compact" class="text-ui-fg-subtle">Tenant oluşturma, düzenleme ve durum takibini yapın.</Text>
      </div>
      <FocusModal v-model:open="createOpen">
        <FocusModalTrigger as-child>
          <Button size="small">
            <Plus />
            Create Product
          </Button>
        </FocusModalTrigger>
        <FocusModalContent>
          <FocusModalHeader>
            <FocusModalTitle>Create Product</FocusModalTitle>
          </FocusModalHeader>
          <FocusModalBody class="p-5">
            <div class="grid gap-4 md:grid-cols-2">
              <label class="flex flex-col gap-y-1 md:col-span-2">
                <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Product Title</Text>
                <Input placeholder="Classic Hoodie" />
              </label>
              <label class="flex flex-col gap-y-1">
                <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Handle</Text>
                <Input placeholder="classic-hoodie" />
              </label>
              <label class="flex flex-col gap-y-1">
                <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">Product Type</Text>
                <Select v-model:model-value="productType">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical">Physical</SelectItem>
                    <SelectItem value="digital">Digital</SelectItem>
                    <SelectItem value="service">Service</SelectItem>
                  </SelectContent>
                </Select>
              </label>
            </div>
          </FocusModalBody>
          <FocusModalFooter>
            <Button variant="secondary" @click="createOpen = false">Cancel</Button>
            <Button @click="createProduct">Save Product</Button>
          </FocusModalFooter>
        </FocusModalContent>
      </FocusModal>
    </div>

    <div class="dashboard-panel overflow-hidden">
      <div class="flex items-center justify-between border-b border-ui-border-base px-4 py-3">
        <Text size="small" leading="compact" weight="plus">Tüm Tenantlar</Text>
        <Text size="xsmall" leading="compact" class="text-ui-fg-subtle">{{ products.length }} kayıt</Text>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>SKU</TableHeaderCell>
            <TableHeaderCell>Stock</TableHeaderCell>
            <TableHeaderCell>Sales</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="product in products" :key="product.id">
            <TableCell>
              <Text size="small" leading="compact" weight="plus">{{ product.title }}</Text>
            </TableCell>
            <TableCell>{{ product.sku }}</TableCell>
            <TableCell>{{ product.stock }}</TableCell>
            <TableCell>{{ product.sales }}</TableCell>
            <TableCell>
              <Badge size="2xsmall" rounded="full" :color="product.status === 'published' ? 'green' : 'grey'">
                {{ product.status }}
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </section>
</template>
