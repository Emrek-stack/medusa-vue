<script setup lang="ts">
import { computed, ref } from "vue"
import { Button, Heading, Text } from "@minima-vue/ui"
import { PencilSquare, Trash, MagnifyingGlass, BellAlert } from "@minima-vue/icons"

import ActionMenu from "@/components/common/action-menu/action-menu.vue"
import BadgeListSummary from "@/components/common/badge-list-summary/badge-list-summary.vue"
import ChipGroup from "@/components/common/chip-group/chip-group.vue"
import Chip from "@/components/common/chip-group/chip.vue"
import DateRangeDisplay from "@/components/common/date-range-display/date-range-display.vue"
import DisplayId from "@/components/common/display-id/display-id.vue"
import { NoRecords, NoResults } from "@/components/common/empty-table-content/empty-table-content"
import FilePreview from "@/components/common/file-preview/file-preview.vue"
import FileUpload from "@/components/common/file-upload/file-upload.vue"
import IconAvatar from "@/components/common/icon-avatar/icon-avatar.vue"
import JsonViewSection from "@/components/common/json-view-section/json-view-section.vue"
import ListSummary from "@/components/common/list-summary/list-summary.vue"
import Listicle from "@/components/common/listicle/listicle.vue"
import LogoBox from "@/components/common/logo-box/logo-box.vue"
import MetadataSection from "@/components/common/metadata-section/metadata-section.vue"
import ProgressBar from "@/components/common/progress-bar/progress-bar.vue"
import SectionRow from "@/components/common/section/section-row.vue"
import SegmentedControl from "@/components/common/segmented-control/segmented-control.vue"
import SidebarLink from "@/components/common/sidebar-link/sidebar-link.vue"
import { Skeleton, TableSkeleton } from "@/components/common/skeleton"
import SortableList from "@/components/common/sortable-list/sortable-list.vue"
import SortableTree from "@/components/common/sortable-tree/sortable-tree.vue"
import SwitchBox from "@/components/common/switch-box/switch-box.vue"
import IncludesTaxTooltip from "@/components/common/tax-badge/tax-badge.vue"
import Thumbnail from "@/components/common/thumbnail/thumbnail.vue"
import UserLink from "@/components/common/user-link/user-link.vue"

import Search from "@/components/search/search.vue"
import LocalizedTablePagination from "@/components/localization/localized-table-pagination/localized-table-pagination.vue"

import PercentageInput from "@/components/inputs/percentage-input/percentage-input.vue"
import CountrySelect from "@/components/inputs/country-select/country-select.vue"
import ProvinceSelect from "@/components/inputs/province-select/province-select.vue"
import ChipInput from "@/components/inputs/chip-input/chip-input.vue"
import Combobox from "@/components/inputs/combobox/combobox.vue"
import HandleInput from "@/components/inputs/handle-input/handle-input.vue"

import AddressForm from "@/components/forms/address-form/address-form.vue"
import EmailForm from "@/components/forms/email-form/email-form.vue"
import MetadataForm from "@/components/forms/metadata-form/metadata-form.vue"

import DataGrid from "@/components/data-grid/data-grid.vue"
import { DataTable, DataTableStatusCell } from "@/components/data-table"
import type { FilterDefinition } from "@/components/filtering"

type DemoRow = {
  id: string
  title: string
  sku: string
  stock: number
  status: "published" | "draft" | "rejected"
}

const searchOpen = ref(false)
const selectedSegment = ref("overview")
const chips = ref(["draft", "published", "featured"])
const switchValue = ref(true)
const handle = ref("my-product")
const percentage = ref<number | null>(15)
const country = ref("tr")
const province = ref("34")
const chipValues = ref(["summer", "campaign"])
const combo = ref("alpha")
const email = ref("demo@minima-vue.dev")
const address = ref({
  first_name: "Emre",
  last_name: "Demir",
  company: "Minima Vue",
  address_1: "Maslak",
  city: "Istanbul",
  postal_code: "34000",
  province: "Istanbul",
  country_code: "TR",
  phone: "+90 555 000 00 00",
})
const metadata = ref<Record<string, string>>({
  environment: "staging",
  owner: "frontend",
})

const files = ref<{ id: string; filename: string; url: string }[]>([])

const dataRows = ref<DemoRow[]>([
  { id: "prod_1", title: "Classic Hoodie", sku: "hood-001", stock: 80, status: "published" },
  { id: "prod_2", title: "Logo Tee", sku: "tee-010", stock: 0, status: "draft" },
  { id: "prod_3", title: "Urban Jacket", sku: "jacket-022", stock: 12, status: "rejected" },
])

const tableColumns = [
  { id: "title", header: "Title", accessor: "title", enableSorting: true, sortKey: "title" },
  { id: "sku", header: "SKU", accessor: "sku", enableSorting: true, sortKey: "sku" },
  { id: "stock", header: "Stock", accessor: "stock", enableSorting: true, sortKey: "stock" },
  { id: "status", header: "Status", accessor: "status", enableSorting: true, sortKey: "status" },
]

const tableFilters: FilterDefinition[] = [
  {
    id: "status",
    label: "Status",
    type: "select",
    multiple: true,
    options: [
      { label: "Draft", value: "draft" },
      { label: "Published", value: "published" },
      { label: "Rejected", value: "rejected" },
    ],
  },
]

const gridColumns = [
  { key: "title", title: "Title" },
  { key: "status", title: "Status" },
  { key: "stock", title: "Stock" },
]

const gridRows = computed(() =>
  dataRows.value.map((row) => ({
    id: row.id,
    title: row.title,
    status: row.status,
    stock: row.stock,
  }))
)

const sortableItems = ref([
  { id: "i_1", label: "First item" },
  { id: "i_2", label: "Second item" },
  { id: "i_3", label: "Third item" },
])

const treeItems = ref([
  {
    id: "node_1",
    name: "Catalog",
    children: [
      { id: "node_1_1", name: "T-Shirts", children: [] },
      { id: "node_1_2", name: "Hoodies", children: [] },
    ],
  },
  {
    id: "node_2",
    name: "Accessories",
    children: [{ id: "node_2_1", name: "Bags", children: [] }],
  },
])

const countries = [
  { code: "tr", name: "Turkey" },
  { code: "us", name: "United States" },
]

const provinces = [
  { code: "34", name: "Istanbul" },
  { code: "06", name: "Ankara" },
]

const comboOptions = [
  { value: "alpha", label: "Alpha" },
  { value: "beta", label: "Beta" },
  { value: "gamma", label: "Gamma" },
]

const searchResults = [
  { id: "s_1", label: "Products", description: "Open product list" },
  { id: "s_2", label: "Customers", description: "Open customer list" },
  { id: "s_3", label: "Orders", description: "Open order list" },
]

const actions = [
  {
    actions: [
      { label: "Edit", icon: PencilSquare, onClick: () => console.log("edit") },
      { label: "Delete", icon: Trash, onClick: () => console.log("delete") },
    ],
  },
]

const removeChip = (index: number) => {
  chips.value = chips.value.filter((_, i) => i !== index)
}

const clearChips = () => {
  chips.value = []
}

const onUploaded = (uploaded: { id: string; url: string; file: File }[]) => {
  files.value = uploaded.map((item) => ({
    id: item.id,
    filename: item.file.name,
    url: item.url,
  }))
}

const statusColor = (status: DemoRow["status"]) => {
  if (status === "published") return "green"
  if (status === "rejected") return "red"
  return "grey"
}
</script>

<template>
  <section class="space-y-4">
    <div class="dashboard-panel flex items-center justify-between p-4">
      <div>
        <Heading level="h1" class="dashboard-heading">Components Demo</Heading>
        <Text size="small" class="text-ui-fg-subtle">`dashboard/src/components` altındaki örnek kullanımlar</Text>
      </div>
      <div class="flex items-center gap-2">
        <Search v-model:open="searchOpen" :results="searchResults" />
        <Button size="small" variant="secondary" @click="searchOpen = true">
          <MagnifyingGlass />
          Open Search
        </Button>
      </div>
    </div>

    <div class="dashboard-panel p-4 space-y-4">
      <SegmentedControl
        :value="selectedSegment"
        :options="[
          { value: 'overview', label: 'Overview' },
          { value: 'inputs', label: 'Inputs' },
          { value: 'tables', label: 'Tables' },
        ]"
        @update:value="(value) => (selectedSegment = value)"
      />

      <div class="grid gap-4 lg:grid-cols-2">
        <article class="rounded-lg border p-4 space-y-3">
          <Heading level="h3">Common</Heading>
          <div class="flex flex-wrap items-center gap-2">
            <ActionMenu :groups="actions" />
            <BadgeListSummary :list="['draft', 'published', 'rejected', 'archived']" />
            <DisplayId id="prod_123456789" />
            <IncludesTaxTooltip :includes-tax="true" />
          </div>

          <ChipGroup :on-remove="removeChip" :on-clear-all="clearChips">
            <Chip v-for="(chip, index) in chips" :key="chip" :index="index">{{ chip }}</Chip>
          </ChipGroup>

          <DateRangeDisplay starts-at="2026-03-01" ends-at="2026-03-18" :show-time="false" />

          <div class="grid grid-cols-2 gap-3">
            <Thumbnail src="https://picsum.photos/40/60" alt="thumb" />
            <UserLink id="usr_1" first_name="Emre" last_name="Demir" email="emre@example.com" />
          </div>

          <div class="flex items-center gap-2">
            <IconAvatar><BellAlert /></IconAvatar>
            <LogoBox :checked="true" />
          </div>

          <ListSummary :list="['Catalog', 'Campaign', 'Price', 'Tax']" />
          <Listicle label-key="Billing" description-key="Payment and settlement configuration">
            <BellAlert />
          </Listicle>
          <SidebarLink to="/settings/store" label-key="Store" description-key="Manage storefront setup" :icon="BellAlert" />
        </article>

        <article class="rounded-lg border p-4 space-y-3">
          <Heading level="h3">Upload / JSON / Metadata</Heading>
          <FileUpload label="Upload files" :formats="['.png', '.jpg', '.pdf']" hint="Drop or click" @uploaded="onUploaded" />
          <FilePreview
            v-for="file in files"
            :key="file.id"
            :filename="file.filename"
            :url="file.url"
          />

          <JsonViewSection :data="{ env: 'demo', components: files.length, segment: selectedSegment }" />
          <MetadataSection :data="{ metadata }" href="/settings/store" />

          <div class="h-2 w-full overflow-hidden rounded bg-ui-bg-subtle">
            <ProgressBar :duration="2" />
          </div>

          <SectionRow title="Owner" value="Frontend Team" />
        </article>
      </div>
    </div>

    <div class="dashboard-panel p-4 space-y-4">
      <Heading level="h3">Inputs & Forms</Heading>
      <div class="grid gap-3 md:grid-cols-2">
        <HandleInput v-model="handle" />
        <PercentageInput v-model="percentage" />
        <CountrySelect v-model="country" :countries="countries" />
        <ProvinceSelect v-model="province" :provinces="provinces" />
        <ChipInput v-model="chipValues" class="md:col-span-2" />
        <Combobox v-model="combo" :options="comboOptions" class="md:col-span-2" />
        <SwitchBox v-model="switchValue" label="Notifications" description="Enable event notifications" class="md:col-span-2" />
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <AddressForm v-model="address" />
        <div class="space-y-3">
          <EmailForm v-model="email" />
          <MetadataForm v-model="metadata" />
        </div>
      </div>
    </div>

    <div class="dashboard-panel p-4 space-y-4">
      <Heading level="h3">Tables & Grid</Heading>
      <DataGrid :columns="gridColumns" :rows="gridRows" />

      <DataTable
        :data="dataRows"
        :columns="tableColumns"
        :filters="tableFilters"
        heading="Demo Products"
        :enable-pagination="true"
        :page-size="5"
      >
        <template #cell-status="{ value }">
          <DataTableStatusCell :color="statusColor(value as DemoRow['status'])">
            {{ value }}
          </DataTableStatusCell>
        </template>
      </DataTable>

      <LocalizedTablePagination
        :count="12"
        :page-size="5"
        :page-index="0"
        :page-count="3"
        :can-previous-page="false"
        :can-next-page="true"
      />
    </div>

    <div class="dashboard-panel p-4 space-y-4">
      <Heading level="h3">States / Sortables</Heading>
      <div class="grid gap-4 lg:grid-cols-2">
        <div class="space-y-3">
          <NoResults title="No search result" message="Try another keyword" />
          <NoRecords title="No rows" message="Create your first row" />
          <Skeleton class-name="h-12 w-full" />
          <TableSkeleton :row-count="4" />
        </div>

        <div class="space-y-3">
          <SortableList :items="sortableItems" @change="(items) => (sortableItems = items)">
            <template #item="{ item }">
              <Text size="small">{{ item.label }}</Text>
            </template>
          </SortableList>

          <SortableTree :items="treeItems" :enable-drag="false">
            <template #value="{ item }">
              {{ item.name }}
            </template>
          </SortableTree>
        </div>
      </div>
    </div>
  </section>
</template>
