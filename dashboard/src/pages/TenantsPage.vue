<script setup lang="ts">
import { computed, ref } from "vue"
import { RouterLink, useRoute, useRouter } from "vue-router"
import { toast } from "@minima-vue/ui"
import { PencilSquare, Trash } from "@minima-vue/icons"
import { ActionMenu, type ActionGroup } from "@/components/common/action-menu"
import { DataTable, DataTableStatusCell } from "@/components/data-table"
import type { FilterDefinition } from "@/components/filtering"
import { tenantSeed, type TenantPlan, type TenantRecord, type TenantStatus } from "@/data/tenants"

const route = useRoute()
const router = useRouter()

const tenants = ref<TenantRecord[]>([...tenantSeed])

const columns = [
  { id: "name", header: "Tenant", accessor: "name", enableSorting: true, sortKey: "name" },
  { id: "plan", header: "Plan", accessor: "plan", enableSorting: true, sortKey: "plan" },
  { id: "region", header: "Region", accessor: "region", enableSorting: true, sortKey: "region" },
  { id: "users", header: "Users", accessor: "users", enableSorting: true, sortKey: "users" },
  { id: "mrr", header: "MRR", accessor: "mrr", enableSorting: true, sortKey: "mrr", class: "text-right" },
  { id: "status", header: "Status", accessor: "status", enableSorting: true, sortKey: "status" },
  { id: "created_at", header: "Created", accessor: "created_at", enableSorting: true, sortKey: "created_at" },
  { id: "actions", header: "", accessor: (row: Record<string, unknown>) => row, class: "w-[1%] whitespace-nowrap" },
]

const filters: FilterDefinition[] = [
  {
    id: "status",
    label: "Status",
    type: "select",
    multiple: true,
    options: [
      { label: "Active", value: "active" },
      { label: "Invited", value: "invited" },
      { label: "Suspended", value: "suspended" },
      { label: "Archived", value: "archived" },
    ],
  },
  {
    id: "plan",
    label: "Plan",
    type: "select",
    multiple: true,
    options: [
      { label: "Starter", value: "starter" },
      { label: "Growth", value: "growth" },
      { label: "Enterprise", value: "enterprise" },
    ],
  },
  {
    id: "region",
    label: "Region",
    type: "select",
    multiple: true,
    options: [
      { label: "EU", value: "eu" },
      { label: "US", value: "us" },
      { label: "ME", value: "me" },
    ],
  },
]

const createTenant = async () => {
  await router.push({
    path: "/tenants/create",
    query: route.query,
  })
}

const tableActions = computed(() => [
  {
    label: "Export",
    onClick: () => {
      toast.info("Export started", {
        description: "Tenant export is being generated.",
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
    label: "Create Tenant",
    onClick: () => {
      void createTenant()
    },
  },
])

const statusColor = (status: TenantStatus) => {
  if (status === "active") return "green"
  if (status === "invited") return "blue"
  if (status === "suspended") return "orange"
  return "grey"
}

const planLabel = (plan: TenantPlan) => {
  if (plan === "enterprise") return "Enterprise"
  if (plan === "growth") return "Growth"
  return "Starter"
}

const regionLabel = (region: TenantRecord["region"]) => {
  if (region === "eu") return "EU"
  if (region === "us") return "US"
  return "ME"
}

const mrrLabel = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)

const deleteTenant = (tenant: TenantRecord) => {
  tenants.value = tenants.value.filter((entry) => entry.id !== tenant.id)
  toast.success("Tenant deleted", {
    description: `${tenant.name} was removed from the tenant list.`,
  })
}

const tenantActions = (tenant: TenantRecord): ActionGroup[] => [
  {
    actions: [
      {
        label: "Edit",
        icon: PencilSquare,
        to: `/tenants/${tenant.id}/edit`,
      },
    ],
  },
  {
    actions: [
      {
        label: "Delete",
        icon: Trash,
        onClick: () => deleteTenant(tenant),
      },
    ],
  },
]
</script>

<template>
  <section>
    <div class="dashboard-panel overflow-hidden">
      <DataTable
        :data="tenants"
        :columns="columns"
        :filters="filters"
        :actions="tableActions"
        heading="Tenants"
        sub-heading="Manage tenant organizations, plans, and account status."
        :get-row-id="(row) => String(row.id)"
        :enable-pagination="true"
        :enable-search="true"
        :enable-filter-menu="true"
        :page-size="10"
      >
        <template #cell-name="{ row }">
          <div class="flex flex-col">
            <RouterLink :to="`/tenants/${(row as TenantRecord).id}`" class="txt-compact-small-plus hover:text-ui-fg-subtle transition-fg">
              {{ (row as TenantRecord).name }}
            </RouterLink>
            <span class="txt-compact-xsmall text-ui-fg-subtle">
              {{ (row as TenantRecord).domain }}
            </span>
          </div>
        </template>

        <template #cell-plan="{ value }">
          {{ planLabel(value as TenantPlan) }}
        </template>

        <template #cell-region="{ value }">
          {{ regionLabel(value as TenantRecord["region"]) }}
        </template>

        <template #cell-mrr="{ value }">
          <div class="text-right">{{ mrrLabel(value as number) }}</div>
        </template>

        <template #cell-status="{ value }">
          <DataTableStatusCell :color="statusColor(value as TenantStatus)">
            {{ value }}
          </DataTableStatusCell>
        </template>

        <template #cell-actions="{ row }">
          <ActionMenu :groups="tenantActions(row as TenantRecord)" />
        </template>
      </DataTable>
    </div>
  </section>
</template>
