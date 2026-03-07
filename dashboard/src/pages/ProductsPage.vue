<script setup lang="ts">
import { ref } from "vue"
import { toast } from "@minima-vue/ui"
import { DataTable, DataTableStatusCell } from "@/components/data-table"
import type { FilterDefinition } from "@/components/filtering"

type Product = {
  id: string
  title: string
  sku: string
  stock: number
  sales: number
  status: "draft" | "proposed" | "published" | "rejected"
}

const products = ref<Product[]>([
  { id: "prod_01", title: "Classic Hoodie", sku: "HOOD-001", stock: 142, sales: 908, status: "published" },
  { id: "prod_02", title: "Canvas Tote Bag", sku: "BAG-201", stock: 69, sales: 433, status: "proposed" },
  { id: "prod_03", title: "Cloud Tee", sku: "TEE-054", stock: 0, sales: 251, status: "draft" },
  { id: "prod_04", title: "Trail Sneaker", sku: "SNK-010", stock: 29, sales: 199, status: "rejected" },
])

const columns = [
  { id: "title", header: "Title", accessor: "title", enableSorting: true, sortKey: "title" },
  { id: "sku", header: "SKU", accessor: "sku", enableSorting: true, sortKey: "sku" },
  { id: "stock", header: "Stock", accessor: "stock", enableSorting: true, sortKey: "stock" },
  { id: "sales", header: "Variants", accessor: "sales", enableSorting: true, sortKey: "sales" },
  { id: "status", header: "Status", accessor: "status", enableSorting: true, sortKey: "status" },
]

const filters: FilterDefinition[] = [
  {
    id: "status",
    label: "Status",
    type: "select",
    multiple: true,
    options: [
      { label: "Draft", value: "draft" },
      { label: "Proposed", value: "proposed" },
      { label: "Published", value: "published" },
      { label: "Rejected", value: "rejected" },
    ],
  },
]

const tableActions = [
  {
    label: "Export",
    onClick: () => {
      toast.info("Export started", {
        description: "Product export is being generated.",
      })
    },
  },
  {
    label: "Import",
    onClick: () => {
      toast.info("Import page is not configured yet.")
    },
  },
  {
    label: "Create Product",
    onClick: () => {
      toast.info("Create product flow is not configured yet.")
    },
  },
]

const statusColor = (status: Product["status"]) => {
  if (status === "published") {
    return "green"
  }

  if (status === "proposed") {
    return "orange"
  }

  if (status === "rejected") {
    return "red"
  }

  return "grey"
}
</script>

<template>
  <section>
    <div class="dashboard-panel overflow-hidden">
      <DataTable
        :data="products"
        :columns="columns"
        :filters="filters"
        :actions="tableActions"
        heading="Products"
        :get-row-id="(row) => String(row.id)"
        :enable-pagination="true"
        :enable-search="true"
        :enable-filter-menu="true"
        :page-size="5"
      >
        <template #cell-title="{ value }">
          <span class="txt-compact-small-plus">{{ value }}</span>
        </template>
        <template #cell-status="{ value }">
          <DataTableStatusCell :color="statusColor(value as Product['status'])">
            {{ value }}
          </DataTableStatusCell>
        </template>
      </DataTable>
    </div>
  </section>
</template>
