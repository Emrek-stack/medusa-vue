import { computed, defineComponent, ref } from "vue"
import {
  Alert,
  Badge,
  Button,
  Checkbox,
  CommandBar,
  CommandBarBar,
  CommandBarCommand,
  CommandBarSeperator,
  CommandBarValue,
  CodeBlock,
  CodeBlockBody,
  CodeBlockHeader,
  DataTable,
  DataTableCommandBar,
  DataTableFilterMenu,
  DataTablePagination,
  DataTableSearch,
  DataTableSortingMenu,
  DataTableTable,
  DataTableToolbar,
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  FocusModal,
  FocusModalBody,
  FocusModalContent,
  FocusModalFooter,
  FocusModalHeader,
  FocusModalTitle,
  FocusModalTrigger,
  Heading,
  IconButton,
  IconBadge,
  InlineTip,
  Input,
  Label,
  Prompt,
  ProgressAccordion,
  ProgressAccordionContent,
  ProgressAccordionHeader,
  ProgressAccordionItem,
  ProgressTabs,
  ProgressTabsContent,
  ProgressTabsList,
  ProgressTabsTrigger,
  PromptAction,
  PromptCancel,
  PromptContent,
  PromptDescription,
  PromptFooter,
  PromptHeader,
  PromptTitle,
  PromptTrigger,
  StatusBadge,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  toast,
  TooltipProvider,
} from "@medusa-vue/ui"
import {
  BoltSolid,
  BuildingTax,
  CheckCircleMiniSolid,
  ExclamationCircleSolid,
  InformationCircleSolid,
  PlusMini,
  Sun,
  XCircleSolid,
} from "@medusa-vue/icons"
import { getStoriesForComponent } from "@docs/utils/storybook"

type ExampleEntry = {
  component: any
  code: string
  disableCenterAlignPreview?: boolean
  hideFeedback?: boolean
}

const createStoryShowcase = (
  stories: Array<{
    label: string
    component: any
    code: string
  }>
): ExampleEntry => ({
  component: createComponent(
    Object.fromEntries(stories.map((story, index) => [`Story${index}`, story.component])),
    `<div class="grid w-full gap-4 md:grid-cols-2">
      ${stories
      .map(
        (story, index) => `
            <div class="rounded-md border border-ui-border-base bg-ui-bg-base p-4">
              <p class="mb-3 text-xs uppercase tracking-[0.16em] text-ui-fg-muted">${story.label}</p>
              <Story${index} />
            </div>
          `
      )
      .join("")}
    </div>`
  ),
  code: stories.map((story) => story.code).join("\n\n"),
})

const createComponent = (
  components: Record<string, unknown>,
  template: string,
  setup?: () => Record<string, unknown>
) =>
  defineComponent({
    components,
    setup: setup ?? (() => ({})),
    template,
  })

const createCodeBlockExample = (options?: {
  single?: boolean
  hideHeader?: boolean
  hideLineNumbers?: boolean
  hideCopy?: boolean
}) => {
  const snippets = [
    {
      label: "cURL",
      language: "bash",
      code: `curl 'http://localhost:9000/store/products/PRODUCT_ID'\n  -H 'x-publishable-api-key: YOUR_API_KEY'`,
      hideLineNumbers: options?.hideLineNumbers,
      hideCopy: options?.hideCopy,
    },
    {
      label: "Medusa JS SDK",
      language: "ts",
      code: `sdk.store.product.retrieve("PRODUCT_ID")\n  .then(({ product }) => {\n    console.log(product.title)\n  })`,
      hideLineNumbers: options?.hideLineNumbers,
      hideCopy: options?.hideCopy,
    },
  ]

  const activeSnippets = options?.single ? [snippets[0]] : snippets

  return createComponent(
    {
      TooltipProvider,
      CodeBlock,
      CodeBlockHeader,
      CodeBlockBody,
    },
    `<TooltipProvider>
      <div class="w-full max-w-[560px]">
        <CodeBlock :snippets="snippets">
          <CodeBlockHeader v-if="showHeader" />
          <CodeBlockBody />
        </CodeBlock>
      </div>
    </TooltipProvider>`,
    () => ({
      snippets: activeSnippets,
      showHeader: !options?.hideHeader,
    })
  )
}

const createPromptExample = (variant: "danger" | "confirmation" = "danger") =>
  createComponent(
    {
      Button,
      Prompt,
      PromptAction,
      PromptCancel,
      PromptContent,
      PromptDescription,
      PromptFooter,
      PromptHeader,
      PromptTitle,
      PromptTrigger,
    },
    `<Prompt variant="${variant}">
      <PromptTrigger as-child>
        <Button>${variant === "confirmation" ? "Open Confirmation" : "Open"}</Button>
      </PromptTrigger>
      <PromptContent>
        <PromptHeader>
          <PromptTitle>${variant === "confirmation" ? "Confirm Action" : "Delete something"}</PromptTitle>
          <PromptDescription>${variant === "confirmation"
      ? "Are you sure you want to proceed? This action can be undone."
      : "Are you sure? This cannot be undone."
    }</PromptDescription>
        </PromptHeader>
        <PromptFooter>
          <PromptCancel>Cancel</PromptCancel>
          <PromptAction>${variant === "confirmation" ? "Confirm" : "Delete"}</PromptAction>
        </PromptFooter>
      </PromptContent>
    </Prompt>`
  )

const createIconBadgeColorsExample = () =>
  createComponent(
    {
      BuildingTax,
      IconBadge,
    },
    `<div class="flex flex-wrap items-center gap-3">
      <IconBadge color="grey"><BuildingTax /></IconBadge>
      <IconBadge color="green"><BuildingTax /></IconBadge>
      <IconBadge color="red"><BuildingTax /></IconBadge>
      <IconBadge color="blue"><BuildingTax /></IconBadge>
      <IconBadge color="orange"><BuildingTax /></IconBadge>
      <IconBadge color="purple"><BuildingTax /></IconBadge>
    </div>`
  )

const createIconBadgeSizesExample = () =>
  createComponent(
    {
      BuildingTax,
      IconBadge,
    },
    `<div class="flex items-center gap-3">
      <IconBadge size="base"><BuildingTax /></IconBadge>
      <IconBadge size="large"><BuildingTax /></IconBadge>
    </div>`
  )

const createInlineTipExample = (variant: "info" | "warning" | "error" | "success" = "info") =>
  createComponent(
    {
      InlineTip,
    },
    `<InlineTip label="${variant === 'info' ? 'Tip' : variant === 'success' ? 'Success' : variant === 'warning' ? 'Warning' : 'Error'}" variant="${variant}">
      Medusa UI is a package of Vue components to be used in Medusa Admin customizations.
    </InlineTip>`
  )

const createCommandBarExample = () =>
  createComponent(
    {
      Checkbox,
      CommandBar,
      CommandBarBar,
      CommandBarCommand,
      CommandBarSeperator,
      CommandBarValue,
      Label,
      Text,
    },
    `<div class="flex w-full max-w-[420px] flex-col justify-center gap-y-2">
      <div class="flex items-center gap-x-2">
        <Checkbox :checked="selected" @update:checked="onCheckedChange" />
        <Label>Item One</Label>
      </div>
      <div>
        <Text size="small" class="text-ui-fg-muted">
          Check the box to view the command bar
        </Text>
      </div>
      <CommandBar :open="selected">
        <CommandBarBar>
          <CommandBarValue>1 selected</CommandBarValue>
          <CommandBarSeperator />
          <CommandBarCommand label="Delete" shortcut="d" :action="onDelete" />
          <CommandBarSeperator />
          <CommandBarCommand label="Edit" shortcut="e" :action="onEdit" />
        </CommandBarBar>
      </CommandBar>
    </div>`,
    () => {
      const selected = ref(false)

      return {
        selected,
        onCheckedChange: (checked: boolean | "indeterminate") => {
          selected.value = checked === true
        },
        onDelete: () => window.alert("Delete"),
        onEdit: () => window.alert("Edit"),
      }
    }
  )

const createDataTableExample = (mode:
  | "base"
  | "row-click"
  | "custom-cell"
  | "search"
  | "pagination"
  | "filters"
  | "filters-date"
  | "filters-initial"
  | "sorting"
  | "sorting-initial"
  | "commands" = "base") =>
  createComponent(
    {
      Badge,
      Button,
      DataTable,
      DataTableCommandBar,
      DataTableFilterMenu,
      DataTablePagination,
      DataTableSearch,
      DataTableSortingMenu,
      DataTableTable,
      DataTableToolbar,
      Heading,
      Input,
      TableBody,
      TableCell,
      TableHeader,
      TableHeaderCell,
      TableRow,
    },
    `<DataTable class="w-full">
      <DataTableToolbar class="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <Heading level="h3">Products</Heading>
        <div class="flex flex-wrap items-center gap-2">
          ${mode === "search" ? `<DataTableSearch placeholder="Search products" />` : ""}
          ${mode === "filters" || mode === "filters-date" || mode === "filters-initial" ? `<DataTableFilterMenu>${mode === "filters-date" ? "Date Filter" : "Filters"}</DataTableFilterMenu>` : ""}
          ${mode === "sorting" || mode === "sorting-initial" ? `<DataTableSortingMenu>${mode === "sorting-initial" ? "Sorted by Title" : "Sort"}</DataTableSortingMenu>` : ""}
          ${mode === "base" || mode === "pagination" ? `<Button variant="secondary" size="small">Create</Button>` : ""}
        </div>
      </DataTableToolbar>
      <DataTableTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow class="${mode === "row-click" ? "cursor-pointer hover:bg-ui-bg-subtle" : ""}">
            <TableCell>Shirt</TableCell>
            <TableCell>${mode === "custom-cell" ? `<Badge color="green">Active</Badge>` : "Active"}</TableCell>
            <TableCell>$29.00</TableCell>
          </TableRow>
          <TableRow class="${mode === "row-click" ? "cursor-pointer hover:bg-ui-bg-subtle" : ""}">
            <TableCell>Pants</TableCell>
            <TableCell>${mode === "custom-cell" ? `<Badge color="grey">Draft</Badge>` : "Draft"}</TableCell>
            <TableCell>$49.00</TableCell>
          </TableRow>
          <TableRow class="${mode === "row-click" ? "cursor-pointer hover:bg-ui-bg-subtle" : ""}">
            <TableCell>Cap</TableCell>
            <TableCell>${mode === "custom-cell" ? `<Badge color="blue">Published</Badge>` : "Published"}</TableCell>
            <TableCell>$19.00</TableCell>
          </TableRow>
        </TableBody>
      </DataTableTable>
      ${mode === "commands" ? `<DataTableCommandBar />` : ""}
      ${mode === "pagination" ? `<DataTablePagination />` : ""}
    </DataTable>`,
    () => ({})
  )

const createAlertExample = (variant: "info" | "success" | "warning" | "error" = "info", dismissible = false) =>
  createComponent(
    { Alert },
    `<Alert variant="${variant}" :dismissible="${dismissible ? "true" : "false"}">Here's a message</Alert>`
  )

const createTabsExample = (
  mode: "base" | "controlled" | "disabled" | "icons" | "vertical" = "base"
) =>
  createComponent(
    {
      BoltSolid,
      InformationCircleSolid,
      Tabs,
      TabsContent,
      TabsList,
      TabsTrigger,
    },
    `<Tabs ${mode === "controlled" ? 'model-value="2"' : 'default-value="1"'} orientation="${mode === "vertical" ? "vertical" : "horizontal"}">
      <div class="${mode === "vertical" ? "flex gap-4" : "space-y-3"}">
        <TabsList class="${mode === "vertical" ? "flex-col items-stretch" : ""}">
          <TabsTrigger value="1">${mode === "icons" ? "<InformationCircleSolid />" : ""}Tab 1</TabsTrigger>
          <TabsTrigger value="2">${mode === "icons" ? "<BoltSolid />" : ""}Tab 2</TabsTrigger>
          <TabsTrigger value="3" ${mode === "disabled" ? ":disabled=\"true\"" : ""}>Tab 3</TabsTrigger>
        </TabsList>
        <div class="min-w-[260px]">
          <TabsContent value="1">Panel 1</TabsContent>
          <TabsContent value="2">Panel 2</TabsContent>
          <TabsContent value="3">Panel 3</TabsContent>
        </div>
      </div>
    </Tabs>`
  )

const createProgressTabsExample = (
  mode: "base" | "status" | "controlled" | "disabled" = "base"
) =>
  createComponent(
    {
      Button,
      ProgressTabs,
      ProgressTabsContent,
      ProgressTabsList,
      ProgressTabsTrigger,
      Text,
    },
    mode === "controlled"
      ? `<div class="flex w-full flex-col gap-4 px-4">
          <ProgressTabs :model-value="active" @update:model-value="active = $event">
            <div class="border-b border-ui-border-base">
              <ProgressTabsList>
                <ProgressTabsTrigger value="general">General</ProgressTabsTrigger>
                <ProgressTabsTrigger value="shipping">Shipping</ProgressTabsTrigger>
                <ProgressTabsTrigger value="payment">Payment</ProgressTabsTrigger>
              </ProgressTabsList>
            </div>
            <div class="mt-2">
              <ProgressTabsContent value="general">
                <Text size="small">This is the General step.</Text>
              </ProgressTabsContent>
              <ProgressTabsContent value="shipping">
                <Text size="small">This is the Shipping step.</Text>
              </ProgressTabsContent>
              <ProgressTabsContent value="payment">
                <Text size="small">This is the Payment step.</Text>
              </ProgressTabsContent>
            </div>
          </ProgressTabs>
          <div class="mt-4 flex gap-2 self-end">
            <Button variant="secondary" @click="handlePrev" :disabled="currentIndex === 0">Prev</Button>
            <Button @click="handleNext" :disabled="currentIndex === steps.length - 1">Next</Button>
          </div>
        </div>`
      : `<div class="w-full px-4">
          <ProgressTabs default-value="general">
            <div class="border-b border-ui-border-base">
              <ProgressTabsList>
                <ProgressTabsTrigger value="general" status="${mode === "status" ? "completed" : "not-started"}">General</ProgressTabsTrigger>
                <ProgressTabsTrigger value="shipping" status="${mode === "status" ? "in-progress" : "not-started"}" ${mode === "disabled" ? ':disabled="true"' : ""}>Shipping</ProgressTabsTrigger>
                <ProgressTabsTrigger value="payment" status="${mode === "status" ? "not-started" : "not-started"}">Payment</ProgressTabsTrigger>
              </ProgressTabsList>
            </div>
            <div class="mt-2">
              <ProgressTabsContent value="general">
                <Text size="small">${
                  mode === "base"
                    ? "At ACME, we're dedicated to providing you with an exceptional shopping experience. Our wide selection of products caters to your every need, from fashion to electronics and beyond. We take pride in our commitment to quality, customer satisfaction, and timely delivery. Our friendly customer support team is here to assist you with any inquiries or concerns you may have. Thank you for choosing ACME as your trusted online shopping destination."
                    : mode === "status"
                      ? "General step is completed."
                      : "This is the General step."
                }</Text>
              </ProgressTabsContent>
              <ProgressTabsContent value="shipping">
                <Text size="small">${
                  mode === "base"
                    ? "Shipping is a crucial part of our service, designed to ensure your products reach you quickly and securely. Our dedicated team works tirelessly to process orders, carefully package items, and coordinate with reliable carriers to deliver your purchases to your doorstep. We take pride in our efficient shipping process, guaranteeing your satisfaction with every delivery."
                    : mode === "status"
                      ? "Shipping step is in progress."
                      : mode === "disabled"
                        ? "This is the Shipping step (disabled)."
                        : "This is the Shipping step."
                }</Text>
              </ProgressTabsContent>
              <ProgressTabsContent value="payment">
                <Text size="small">${
                  mode === "base"
                    ? "Our payment process is designed to make your shopping experience smooth and secure. We offer a variety of payment options to accommodate your preferences, from credit and debit cards to online payment gateways. Rest assured that your financial information is protected through advanced encryption methods. Shopping with us means you can shop with confidence, knowing your payments are safe and hassle-free."
                    : mode === "status"
                      ? "Payment step has not started."
                      : "This is the Payment step."
                }</Text>
              </ProgressTabsContent>
            </div>
          </ProgressTabs>
        </div>`,
    () => {
      const steps = ["general", "shipping", "payment"]
      const active = ref("general")

      const currentIndex = computed(() => steps.indexOf(active.value))

      const handleNext = () => {
        if (currentIndex.value < steps.length - 1) {
          active.value = steps[currentIndex.value + 1]
        }
      }

      const handlePrev = () => {
        if (currentIndex.value > 0) {
          active.value = steps[currentIndex.value - 1]
        }
      }

      return {
        active,
        currentIndex,
        handleNext,
        handlePrev,
        steps,
      }
    }
  )

const createProgressAccordionExample = (
  mode: "base" | "single" | "multiple" | "status" | "controlled" | "disabled" = "base"
) =>
  createComponent(
    {
      Button,
      ProgressAccordion,
      ProgressAccordionContent,
      ProgressAccordionHeader,
      ProgressAccordionItem,
      Text,
    },
    mode === "controlled"
      ? `<div class="flex w-full flex-col gap-4 px-4">
          <ProgressAccordion type="single" :model-value="open" @update:model-value="open = $event">
            <ProgressAccordionItem value="general">
              <ProgressAccordionHeader>General</ProgressAccordionHeader>
              <ProgressAccordionContent>
                <div class="flex flex-col gap-2 pb-6">
                  <Text size="small">This is the General step.</Text>
                </div>
              </ProgressAccordionContent>
            </ProgressAccordionItem>
            <ProgressAccordionItem value="shipping">
              <ProgressAccordionHeader>Shipping</ProgressAccordionHeader>
              <ProgressAccordionContent>
                <div class="flex flex-col gap-2 pb-6">
                  <Text size="small">This is the Shipping step.</Text>
                </div>
              </ProgressAccordionContent>
            </ProgressAccordionItem>
            <ProgressAccordionItem value="payment">
              <ProgressAccordionHeader>Payment</ProgressAccordionHeader>
              <ProgressAccordionContent>
                <div class="flex flex-col gap-2 pb-6">
                  <Text size="small">This is the Payment step.</Text>
                </div>
              </ProgressAccordionContent>
            </ProgressAccordionItem>
          </ProgressAccordion>
          <div class="mt-4 flex gap-2 self-end">
            <Button variant="secondary" @click="handlePrev" :disabled="currentIndex === 0">Prev</Button>
            <Button @click="handleNext" :disabled="currentIndex === steps.length - 1">Next</Button>
          </div>
        </div>`
      : `<div class="w-full px-4">
          <ProgressAccordion type="${mode === "multiple" ? "multiple" : "single"}" default-value="general">
            <ProgressAccordionItem value="general">
              <ProgressAccordionHeader status="${mode === "status" ? "not-started" : "not-started"}">General</ProgressAccordionHeader>
              <ProgressAccordionContent>
                <div class="pb-6">
                  <Text size="small">${
                    mode === "status"
                      ? "This step has not started yet."
                      : mode === "disabled"
                        ? "This step is enabled."
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, tortor nec commodo ultrices, diam leo porttitor eros, eget ultricies mauris nisl nec nisl. Donec quis magna euismod, lacinia ipsum id, varius velit."
                  }</Text>
                </div>
              </ProgressAccordionContent>
            </ProgressAccordionItem>
            <ProgressAccordionItem value="shipping" ${mode === "disabled" ? ":disabled=\"true\"" : ""}>
              <ProgressAccordionHeader status="${mode === "status" ? "in-progress" : "not-started"}">Shipping</ProgressAccordionHeader>
              <ProgressAccordionContent>
                <div class="pb-6">
                  <Text size="small">${
                    mode === "status"
                      ? "This step is in progress."
                      : mode === "disabled"
                        ? "This step is disabled and cannot be opened."
                        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, tortor nec commodo ultrices, diam leo porttitor eros, eget ultricies mauris nisl nec nisl. Donec quis magna euismod, lacinia ipsum id, varius velit."
                  }</Text>
                </div>
              </ProgressAccordionContent>
            </ProgressAccordionItem>
            ${
              mode === "status"
                ? `<ProgressAccordionItem value="payment">
                    <ProgressAccordionHeader status="completed">Payment</ProgressAccordionHeader>
                    <ProgressAccordionContent>
                      <div class="pb-6">
                        <Text size="small">This step is completed.</Text>
                      </div>
                    </ProgressAccordionContent>
                  </ProgressAccordionItem>`
                : ""
            }
          </ProgressAccordion>
        </div>`,
    () => {
      const steps = ["general", "shipping", "payment"]
      const open = ref("general")
      const currentIndex = computed(() => steps.indexOf(open.value))

      const handleNext = () => {
        if (currentIndex.value < steps.length - 1) {
          open.value = steps[currentIndex.value + 1]
        }
      }

      const handlePrev = () => {
        if (currentIndex.value > 0) {
          open.value = steps[currentIndex.value - 1]
        }
      }

      return {
        open,
        currentIndex,
        steps,
        handleNext,
        handlePrev,
      }
    }
  )

const createFocusModalExample = (
  mode: "demo" | "controlled" | "form" | "nested" = "demo"
) =>
  createComponent(
    {
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
      Label,
      Text,
    },
    // Use native buttons for triggers so DialogTrigger click handling remains reliable in docs previews.
    mode === "controlled"
      ? `<div>
          <Button @click="open = true">Edit Variant</Button>
          <FocusModal :open="open" @update:open="open = $event">
            <FocusModalContent>
              <FocusModalHeader>
                <FocusModalTitle>Edit Variant</FocusModalTitle>
              </FocusModalHeader>
              <FocusModalBody class="flex flex-col items-center py-16">
                <div class="flex w-full max-w-lg flex-col gap-y-8">
                  <div class="flex flex-col gap-y-1">
                    <Heading level="h2" class="text-2xl">Create API key</Heading>
                    <Text class="text-ui-fg-subtle">
                      Create and manage API keys. You can create multiple keys to organize your applications.
                    </Text>
                  </div>
                  <div class="flex flex-col gap-y-2">
                    <Label class="text-ui-fg-subtle">Key name</Label>
                    <Input placeholder="my_app" />
                  </div>
                </div>
              </FocusModalBody>
              <FocusModalFooter>
                <Button @click="open = false">Save</Button>
              </FocusModalFooter>
            </FocusModalContent>
          </FocusModal>
        </div>`
      : mode === "form"
        ? `<div class="flex flex-col items-center gap-2">
            <FocusModal :open="open" @update:open="open = $event">
              <FocusModalTrigger as-child>
                <button type="button" class="shadow-buttons-inverted txt-compact-small-plus text-ui-contrast-fg-primary bg-ui-button-inverted inline-flex w-fit items-center justify-center rounded-md px-3 py-1.5">
                  Create Item
                </button>
              </FocusModalTrigger>
              <FocusModalContent>
                <FocusModalHeader>
                  <FocusModalTitle>Create Item</FocusModalTitle>
                </FocusModalHeader>
                <form class="flex flex-1 flex-col" @submit.prevent="submitted = value; open = false">
                  <FocusModalBody>
                    <div class="p-6">
                      <Label>Name</Label>
                      <Input v-model="value" placeholder="Enter your name" />
                    </div>
                  </FocusModalBody>
                  <FocusModalFooter>
                    <Button type="submit">Submit</Button>
                  </FocusModalFooter>
                </form>
              </FocusModalContent>
            </FocusModal>
            <div v-if="submitted" class="text-ui-fg-subtle">
              Form submitted with name: {{ submitted }}
            </div>
          </div>`
        : mode === "nested"
          ? `<FocusModal>
              <FocusModalTrigger as-child>
                <button type="button" class="shadow-buttons-inverted txt-compact-small-plus text-ui-contrast-fg-primary bg-ui-button-inverted inline-flex w-fit items-center justify-center rounded-md px-3 py-1.5">
                  Open Outer Modal
                </button>
              </FocusModalTrigger>
              <FocusModalContent>
                <FocusModalHeader>
                  <FocusModalTitle>Outer Modal</FocusModalTitle>
                </FocusModalHeader>
                <FocusModalBody class="flex flex-col space-y-2 p-6">
                  <p>This is the outer modal.</p>
                  <FocusModal>
                    <FocusModalTrigger as-child>
                      <button type="button" class="shadow-buttons-neutral txt-compact-small-plus text-ui-fg-base bg-ui-button-neutral inline-flex w-fit items-center justify-center rounded-md px-3 py-1.5">
                        Open Nested Modal
                      </button>
                    </FocusModalTrigger>
                    <FocusModalContent>
                      <FocusModalHeader>
                        <FocusModalTitle>Nested Modal</FocusModalTitle>
                      </FocusModalHeader>
                      <FocusModalBody class="p-6">
                        <p>This is a nested focus modal for additional information.</p>
                      </FocusModalBody>
                    </FocusModalContent>
                  </FocusModal>
                </FocusModalBody>
              </FocusModalContent>
            </FocusModal>`
          : `<FocusModal>
              <FocusModalTrigger as-child>
                <button type="button" class="shadow-buttons-inverted txt-compact-small-plus text-ui-contrast-fg-primary bg-ui-button-inverted inline-flex w-fit items-center justify-center rounded-md px-3 py-1.5">
                  Edit Variant
                </button>
              </FocusModalTrigger>
              <FocusModalContent>
                <FocusModalHeader>
                  <FocusModalTitle>Edit Variant</FocusModalTitle>
                </FocusModalHeader>
                <FocusModalBody class="flex flex-col items-center py-16">
                  <div class="flex w-full max-w-lg flex-col gap-y-8">
                    <div class="flex flex-col gap-y-1">
                      <Heading level="h2" class="text-2xl">Create API key</Heading>
                      <Text class="text-ui-fg-subtle">
                        Create and manage API keys. You can create multiple keys to organize your applications.
                      </Text>
                    </div>
                    <div class="flex flex-col gap-y-2">
                      <Label class="text-ui-fg-subtle">Key name</Label>
                      <Input placeholder="my_app" />
                    </div>
                  </div>
                </FocusModalBody>
                <FocusModalFooter>
                  <Button>Save</Button>
                </FocusModalFooter>
              </FocusModalContent>
            </FocusModal>`,
    () => ({
      open: false,
      value: "",
      submitted: "",
    })
  )

const createToastExample = (
  mode: "demo" | "all-variants" | "dismiss" | "with-action" = "demo"
) =>
  createComponent(
    {
      Button,
      CheckCircleMiniSolid,
      ExclamationCircleSolid,
      InformationCircleSolid,
      XCircleSolid,
    },
    mode === "all-variants"
      ? `<div class="flex flex-wrap gap-2">
          <Button variant="secondary" @click="showInfo">
            <InformationCircleSolid />
            Info
          </Button>
          <Button variant="secondary" @click="showSuccess">
            <CheckCircleMiniSolid />
            Success
          </Button>
          <Button variant="secondary" @click="showError">
            <XCircleSolid />
            Error
          </Button>
          <Button variant="secondary" @click="showWarning">
            <ExclamationCircleSolid />
            Warning
          </Button>
          <Button variant="secondary" @click="showLoading">
            Loading
          </Button>
        </div>`
      : mode === "dismiss"
        ? `<Button @click="showDismissable">
            Show
          </Button>`
        : mode === "with-action"
          ? `<Button @click="showActionToast">
              Show
            </Button>`
          : `<Button @click="showInfoToast">
              Show
            </Button>`,
    () => ({
      showInfoToast: () =>
        toast.info("Info", {
          description: "The quick brown fox jumps over the lazy dog.",
        }),
      showInfo: () =>
        toast.info("Info", {
          description: "This is an info toast.",
        }),
      showSuccess: () =>
        toast.success("Success", {
          description: "This is a success toast.",
        }),
      showError: () =>
        toast.error("Error", {
          description: "This is an error toast.",
        }),
      showWarning: () =>
        toast.warning("Warning", {
          description: "This is a warning toast.",
        }),
      showLoading: () =>
        toast.loading("Loading", {
          description: "This is a loading toast.",
        }),
      showDismissable: () =>
        toast.info("Info", {
          description: "The quick brown fox jumps over the lazy dog.",
          dismissable: true,
        }),
      showActionToast: () =>
        toast.success("Created Product", {
          description: "The product has been created.",
          action: {
            altText: "Undo product creation",
            label: "Undo",
            onClick: () => { },
          },
          duration: 10000,
        }),
    })
  )

const createDrawerExample = (mode: "demo" | "form" = "demo") =>
  createComponent(
    {
      Button,
      Drawer,
      DrawerBody,
      DrawerClose,
      DrawerContent,
      DrawerFooter,
      DrawerHeader,
      DrawerTitle,
      DrawerTrigger,
      Input,
      Label,
      Text,
    },
    mode === "form"
      ? `<div class="flex flex-col items-center gap-2">
          <Drawer :open="open" @update:open="open = $event">
            <DrawerTrigger as-child>
              <button type="button" class="shadow-buttons-inverted txt-compact-small-plus text-ui-contrast-fg-primary bg-ui-button-inverted inline-flex w-fit items-center justify-center rounded-md px-3 py-1.5">
                Open Drawer
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Simple Form</DrawerTitle>
              </DrawerHeader>
              <form class="flex flex-1 flex-col" @submit.prevent="handleSubmit">
                <DrawerBody>
                  <div class="flex flex-col gap-y-2">
                    <Label html-for="drawer-name">Name</Label>
                    <Input id="drawer-name" v-model="name" placeholder="Enter your name" />
                  </div>
                </DrawerBody>
                <DrawerFooter>
                  <DrawerClose as-child>
                    <Button variant="secondary" type="button">Cancel</Button>
                  </DrawerClose>
                  <Button type="submit">Submit</Button>
                </DrawerFooter>
              </form>
            </DrawerContent>
          </Drawer>
          <div v-if="submitted" class="text-ui-fg-muted">Form submitted with name {{ name }}</div>
        </div>`
      : `<Drawer>
          <DrawerTrigger as-child>
            <button type="button" class="shadow-buttons-inverted txt-compact-small-plus text-ui-contrast-fg-primary bg-ui-button-inverted inline-flex w-fit items-center justify-center rounded-md px-3 py-1.5">
              Edit Variant
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit Variant</DrawerTitle>
            </DrawerHeader>
            <DrawerBody class="p-4">
              <Text>This is where you edit the variant's details</Text>
            </DrawerBody>
            <DrawerFooter>
              <DrawerClose as-child>
                <Button variant="secondary">Cancel</Button>
              </DrawerClose>
              <Button>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>`,
    () => {
      const open = ref(false)
      const name = ref("")
      const submitted = ref(false)

      const handleSubmit = () => {
        submitted.value = true
        open.value = false
      }

      return {
        open,
        name,
        submitted,
        handleSubmit,
      }
    }
  )

const customExamples: Record<string, ExampleEntry> = {
  "alert-demo": {
    component: createAlertExample("info"),
    code: `<Alert>Here's a message</Alert>`,
  },
  "alert-success": {
    component: createAlertExample("success"),
    code: `<Alert variant="success">Success message</Alert>`,
  },
  "alert-warning": {
    component: createAlertExample("warning"),
    code: `<Alert variant="warning">Warning message</Alert>`,
  },
  "alert-error": {
    component: createAlertExample("error"),
    code: `<Alert variant="error">Error message</Alert>`,
  },
  "alert-dismissable": {
    component: createAlertExample("info", true),
    code: `<Alert dismissible>Dismiss me</Alert>`,
    hideFeedback: true,
  },
  "button-demo": {
    component: createComponent({ Button }, `<Button>Button</Button>`),
    code: `<Button>Button</Button>`,
  },
  "button-all-variants": {
    component: createComponent(
      { Button },
      `<div class="flex flex-wrap items-center gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="transparent">Transparent</Button>
        <Button variant="danger">Danger</Button>
      </div>`
    ),
    code: `<Button>Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="transparent">Transparent</Button>\n<Button variant="danger">Danger</Button>`,
  },
  "button-all-sizes": {
    component: createComponent(
      { Button },
      `<div class="flex flex-wrap items-center gap-3">
        <Button size="small">Small</Button>
        <Button size="base">Base</Button>
        <Button size="large">Large</Button>
        <Button size="xlarge">XLarge</Button>
      </div>`
    ),
    code: `<Button size="small">Small</Button>\n<Button size="base">Base</Button>\n<Button size="large">Large</Button>\n<Button size="xlarge">XLarge</Button>`,
  },
  "button-loading": {
    component: createComponent(
      { Button },
      `<Button :is-loading="true">Loading</Button>`
    ),
    code: `<Button :is-loading="true">Loading</Button>`,
  },
  "button-with-icon": {
    component: createComponent(
      { Button, PlusMini },
      `<Button><PlusMini />Create</Button>`
    ),
    code: `<Button>\n  <PlusMini />\n  Create\n</Button>`,
  },
  "button-as-link": {
    component: createComponent(
      { Button },
      `<Button as-child>
        <a href="#usage">Jump to usage</a>
      </Button>`
    ),
    code: `<Button as-child>\n  <a href="#usage">Jump to usage</a>\n</Button>`,
  },
  "code-block-demo": {
    component: createCodeBlockExample(),
    code: `<CodeBlock :snippets="snippets">\n  <CodeBlockHeader />\n  <CodeBlockBody />\n</CodeBlock>`,
    disableCenterAlignPreview: true,
  },
  "code-block-single": {
    component: createCodeBlockExample({ single: true }),
    code: `<CodeBlock :snippets="[snippets[0]]">\n  <CodeBlockHeader />\n  <CodeBlockBody />\n</CodeBlock>`,
    disableCenterAlignPreview: true,
  },
  "code-block-no-header": {
    component: createCodeBlockExample({ single: true, hideHeader: true }),
    code: `<CodeBlock :snippets="[snippets[0]]">\n  <CodeBlockBody />\n</CodeBlock>`,
    disableCenterAlignPreview: true,
  },
  "code-block-no-lines": {
    component: createCodeBlockExample({ hideLineNumbers: true }),
    code: `const snippets = [{ label: "cURL", language: "bash", code: "curl ...", hideLineNumbers: true }]\n\n<CodeBlock :snippets="snippets">\n  <CodeBlockHeader />\n  <CodeBlockBody />\n</CodeBlock>`,
    disableCenterAlignPreview: true,
  },
  "code-block-no-copy": {
    component: createCodeBlockExample({ hideCopy: true }),
    code: `const snippets = [{ label: "cURL", language: "bash", code: "curl ...", hideCopy: true }]\n\n<CodeBlock :snippets="snippets">\n  <CodeBlockHeader />\n  <CodeBlockBody />\n</CodeBlock>`,
    disableCenterAlignPreview: true,
    hideFeedback: true,
  },
  "status-badge-demo": {
    component: createComponent(
      { StatusBadge },
      `<StatusBadge color="green">Active</StatusBadge>`
    ),
    code: `<StatusBadge color="green">Active</StatusBadge>`,
  },
  "status-badge-all-colors": {
    component: createComponent(
      { StatusBadge },
      `<div class="flex flex-wrap items-center gap-3">
        <StatusBadge color="grey">Draft</StatusBadge>
        <StatusBadge color="green">Active</StatusBadge>
        <StatusBadge color="red">Canceled</StatusBadge>
        <StatusBadge color="blue">Published</StatusBadge>
        <StatusBadge color="orange">Pending</StatusBadge>
        <StatusBadge color="purple">Scheduled</StatusBadge>
      </div>`
    ),
    code: `<StatusBadge color="grey">Draft</StatusBadge>\n<StatusBadge color="green">Active</StatusBadge>\n<StatusBadge color="red">Canceled</StatusBadge>\n<StatusBadge color="blue">Published</StatusBadge>\n<StatusBadge color="orange">Pending</StatusBadge>\n<StatusBadge color="purple">Scheduled</StatusBadge>`,
  },
  "prompt-demo": {
    component: createPromptExample("danger"),
    code: `<Prompt>\n  <PromptTrigger as-child>\n    <Button>Open</Button>\n  </PromptTrigger>\n  <PromptContent>\n    <PromptHeader>\n      <PromptTitle>Delete something</PromptTitle>\n      <PromptDescription>Are you sure? This cannot be undone.</PromptDescription>\n    </PromptHeader>\n    <PromptFooter>\n      <PromptCancel>Cancel</PromptCancel>\n      <PromptAction>Delete</PromptAction>\n    </PromptFooter>\n  </PromptContent>\n</Prompt>`,
  },
  "prompt-confirmation": {
    component: createPromptExample("confirmation"),
    code: `<Prompt variant="confirmation">\n  <PromptTrigger as-child>\n    <Button>Open Confirmation</Button>\n  </PromptTrigger>\n  <PromptContent>\n    <PromptHeader>\n      <PromptTitle>Confirm Action</PromptTitle>\n      <PromptDescription>Are you sure you want to proceed? This action can be undone.</PromptDescription>\n    </PromptHeader>\n    <PromptFooter>\n      <PromptCancel>Cancel</PromptCancel>\n      <PromptAction>Confirm</PromptAction>\n    </PromptFooter>\n  </PromptContent>\n</Prompt>`,
  },
  "icon-badge-demo": {
    component: createComponent(
      { BuildingTax, IconBadge },
      `<IconBadge><BuildingTax /></IconBadge>`
    ),
    code: `<IconBadge>\n  <BuildingTax />\n</IconBadge>`,
  },
  "icon-button-demo": {
    component: createComponent(
      { IconButton, PlusMini },
      `<IconButton><PlusMini /></IconButton>`
    ),
    code: `<IconButton>\n  <PlusMini />\n</IconButton>`,
  },
  "icon-button-all-variants": {
    component: createComponent(
      { IconButton, PlusMini },
      `<div class="flex gap-2">
        <IconButton variant="primary"><PlusMini /></IconButton>
        <IconButton variant="transparent"><PlusMini /></IconButton>
      </div>`
    ),
    code: `<IconButton variant="primary">\n  <PlusMini />\n</IconButton>\n<IconButton variant="transparent">\n  <PlusMini />\n</IconButton>`,
  },
  "icon-button-all-sizes": {
    component: createComponent(
      { IconButton, PlusMini },
      `<div class="flex items-center gap-2">
        <IconButton size="2xsmall"><PlusMini /></IconButton>
        <IconButton size="xsmall"><PlusMini /></IconButton>
        <IconButton size="small"><PlusMini /></IconButton>
        <IconButton size="base"><PlusMini /></IconButton>
        <IconButton size="large"><PlusMini /></IconButton>
        <IconButton size="xlarge"><PlusMini /></IconButton>
      </div>`
    ),
    code: `<IconButton size="2xsmall"><PlusMini /></IconButton>\n<IconButton size="xsmall"><PlusMini /></IconButton>\n<IconButton size="small"><PlusMini /></IconButton>\n<IconButton size="base"><PlusMini /></IconButton>\n<IconButton size="large"><PlusMini /></IconButton>\n<IconButton size="xlarge"><PlusMini /></IconButton>`,
  },
  "icon-button-loading": {
    component: createComponent(
      { IconButton, PlusMini },
      `<IconButton is-loading class="relative"><PlusMini /></IconButton>`
    ),
    code: `<IconButton is-loading class="relative">\n  <PlusMini />\n</IconButton>`,
  },
  "icon-button-disabled": {
    component: createComponent(
      { IconButton, PlusMini },
      `<IconButton :disabled="true"><PlusMini /></IconButton>`
    ),
    code: `<IconButton :disabled="true">\n  <PlusMini />\n</IconButton>`,
    hideFeedback: true,
  },
  "icon-badge-all-colors": {
    component: createIconBadgeColorsExample(),
    code: `<IconBadge color="grey"><BuildingTax /></IconBadge>\n<IconBadge color="green"><BuildingTax /></IconBadge>\n<IconBadge color="red"><BuildingTax /></IconBadge>\n<IconBadge color="blue"><BuildingTax /></IconBadge>\n<IconBadge color="orange"><BuildingTax /></IconBadge>\n<IconBadge color="purple"><BuildingTax /></IconBadge>`,
  },
  "icon-badge-all-sizes": {
    component: createIconBadgeSizesExample(),
    code: `<IconBadge size="base"><BuildingTax /></IconBadge>\n<IconBadge size="large"><BuildingTax /></IconBadge>`,
  },
  "inline-tip-demo": {
    component: createInlineTipExample("info"),
    code: `<InlineTip label="Tip">\n  Medusa UI is a package of Vue components to be used in Medusa Admin customizations.\n</InlineTip>`,
  },
  "inline-tip-success": {
    component: createInlineTipExample("success"),
    code: `<InlineTip label="Success" variant="success">\n  Medusa UI is a package of Vue components to be used in Medusa Admin customizations.\n</InlineTip>`,
  },
  "inline-tip-warning": {
    component: createInlineTipExample("warning"),
    code: `<InlineTip label="Warning" variant="warning">\n  Medusa UI is a package of Vue components to be used in Medusa Admin customizations.\n</InlineTip>`,
  },
  "inline-tip-error": {
    component: createInlineTipExample("error"),
    code: `<InlineTip label="Error" variant="error">\n  Medusa UI is a package of Vue components to be used in Medusa Admin customizations.\n</InlineTip>`,
    hideFeedback: true,
  },
  "command-bar-demo": {
    component: createCommandBarExample(),
    code: `<script setup lang="ts">
import { ref } from "vue"

const selected = ref(false)
</script>

<template>
  <div class="flex flex-col justify-center gap-y-2">
    <div class="flex items-center gap-x-2">
      <Checkbox :checked="selected" @update:checked="selected = $event === true" />
      <Label>Item One</Label>
    </div>
    <Text size="small" class="text-ui-fg-muted">
      Check the box to view the command bar
    </Text>
    <CommandBar :open="selected">
      <CommandBarBar>
        <CommandBarValue>1 selected</CommandBarValue>
        <CommandBarSeperator />
        <CommandBarCommand label="Delete" shortcut="d" :action="() => window.alert('Delete')" />
        <CommandBarSeperator />
        <CommandBarCommand label="Edit" shortcut="e" :action="() => window.alert('Edit')" />
      </CommandBarBar>
    </CommandBar>
  </div>
</template>`,
    hideFeedback: true,
  },
  "icon-color": {
    component: createComponent(
      { Sun },
      `<div class="flex items-center justify-center">
        <Sun color="#2563eb" />
      </div>`
    ),
    code: `<Sun color="#2563eb" />`,
    hideFeedback: true,
  },
  "icon-color-classes": {
    component: createComponent(
      { Sun },
      `<div class="flex items-center justify-center">
        <Sun class="text-ui-fg-interactive" />
      </div>`
    ),
    code: `<Sun class="text-ui-fg-interactive" />`,
    hideFeedback: true,
  },
  "data-table-demo": {
    component: createDataTableExample("base"),
    code: `<DataTable>\n  <DataTableToolbar>\n    <Heading level="h3">Products</Heading>\n  </DataTableToolbar>\n  <DataTableTable><!-- rows --></DataTableTable>\n</DataTable>`,
    disableCenterAlignPreview: true,
  },
  "data-table-row-click": {
    component: createDataTableExample("row-click"),
    code: `const onRowClick = (row) => console.log(row)\n\n<DataTable><!-- clickable rows --></DataTable>`,
    disableCenterAlignPreview: true,
  },
  "data-table-custom-cell": {
    component: createDataTableExample("custom-cell"),
    code: `<TableCell><Badge color="green">Active</Badge></TableCell>`,
    disableCenterAlignPreview: true,
  },
  "data-table-search": {
    component: createDataTableExample("search"),
    code: `<DataTableSearch placeholder="Search products" />`,
    disableCenterAlignPreview: true,
  },
  "data-table-pagination": {
    component: createDataTableExample("pagination"),
    code: `<DataTablePagination />`,
    disableCenterAlignPreview: true,
  },
  "data-table-filters": {
    component: createDataTableExample("filters"),
    code: `<DataTableFilterMenu>Filters</DataTableFilterMenu>`,
    disableCenterAlignPreview: true,
  },
  "data-table-filters-date": {
    component: createDataTableExample("filters-date"),
    code: `<DataTableFilterMenu>Date Filter</DataTableFilterMenu>`,
    disableCenterAlignPreview: true,
  },
  "data-table-filters-initial": {
    component: createDataTableExample("filters-initial"),
    code: `<DataTableFilterMenu>Filters</DataTableFilterMenu>`,
    disableCenterAlignPreview: true,
  },
  "data-table-sorting": {
    component: createDataTableExample("sorting"),
    code: `<DataTableSortingMenu>Sort</DataTableSortingMenu>`,
    disableCenterAlignPreview: true,
  },
  "data-table-sorting-initial": {
    component: createDataTableExample("sorting-initial"),
    code: `<DataTableSortingMenu>Sorted by Title</DataTableSortingMenu>`,
    disableCenterAlignPreview: true,
  },
  "data-table-commands": {
    component: createDataTableExample("commands"),
    code: `<DataTableCommandBar />`,
    disableCenterAlignPreview: true,
  },
  "focus-modal-demo": {
    component: createFocusModalExample("demo"),
    code: `<FocusModal>\n  <FocusModalTrigger as-child>\n    <Button>Edit Variant</Button>\n  </FocusModalTrigger>\n  <FocusModalContent>\n    <FocusModalHeader>\n      <FocusModalTitle>Edit Variant</FocusModalTitle>\n    </FocusModalHeader>\n    <FocusModalBody><!-- content --></FocusModalBody>\n    <FocusModalFooter>\n      <Button>Save</Button>\n    </FocusModalFooter>\n  </FocusModalContent>\n</FocusModal>`,
  },
  "focus-modal-controlled": {
    component: createFocusModalExample("controlled"),
    code: `const open = ref(false)\n\n<Button @click="open = true">Edit Variant</Button>\n<FocusModal :open="open" @update:open="open = $event">...</FocusModal>`,
  },
  "focus-modal-form": {
    component: createFocusModalExample("form"),
    code: `<form @submit.prevent="open = false">...</form>`,
  },
  "focus-modal-nested": {
    component: createFocusModalExample("nested"),
    code: `<FocusModal>\n  <FocusModalTrigger as-child>\n    <Button>Open Outer Modal</Button>\n  </FocusModalTrigger>\n  <FocusModalContent>...</FocusModalContent>\n</FocusModal>`,
    hideFeedback: true,
  },
  "drawer-demo": {
    component: createDrawerExample("demo"),
    code: `<Drawer>\n  <DrawerTrigger as-child>\n    <Button>Edit Variant</Button>\n  </DrawerTrigger>\n  <DrawerContent>\n    <DrawerHeader>\n      <DrawerTitle>Edit Variant</DrawerTitle>\n    </DrawerHeader>\n    <DrawerBody class="p-4">\n      <Text>This is where you edit the variant's details</Text>\n    </DrawerBody>\n    <DrawerFooter>\n      <DrawerClose as-child>\n        <Button variant="secondary">Cancel</Button>\n      </DrawerClose>\n      <Button>Save</Button>\n    </DrawerFooter>\n  </DrawerContent>\n</Drawer>`,
  },
  "drawer-form": {
    component: createDrawerExample("form"),
    code: `const open = ref(false)\nconst name = ref('')\nconst submitted = ref(false)\n\n<Drawer :open="open" @update:open="open = $event">...</Drawer>`,
    hideFeedback: true,
  },
  "toaster-demo": {
    component: createToastExample("demo"),
    code: `<Button\n  @click=\"() =>\n    toast.info('Info', {\n      description: 'The quick brown fox jumps over the lazy dog.',\n    })\"\n>\n  Show\n</Button>`,
  },
  "toaster-all-variants": {
    component: createToastExample("all-variants"),
    code: `<Button variant="secondary" @click="() => toast.info('Info', { description: 'This is an info toast.' })">Info</Button>\n<Button variant="secondary" @click="() => toast.success('Success', { description: 'This is a success toast.' })">Success</Button>\n<Button variant="secondary" @click="() => toast.error('Error', { description: 'This is an error toast.' })">Error</Button>\n<Button variant="secondary" @click="() => toast.warning('Warning', { description: 'This is a warning toast.' })">Warning</Button>\n<Button variant="secondary" @click="() => toast.loading('Loading', { description: 'This is a loading toast.' })">Loading</Button>`,
  },
  "toaster-dismiss": {
    component: createToastExample("dismiss"),
    code: `<Button\n  @click=\"() =>\n    toast.info('Info', {\n      description: 'The quick brown fox jumps over the lazy dog.',\n      dismissable: true,\n    })\"\n>\n  Show\n</Button>`,
  },
  "toaster-with-action": {
    component: createToastExample("with-action"),
    code: `<Button\n  @click=\"() =>\n    toast.success('Created Product', {\n      description: 'The product has been created.',\n      action: {\n        altText: 'Undo product creation',\n        onClick: () => {},\n        label: 'Undo',\n      },\n      duration: 10000,\n    })\"\n>\n  Show\n</Button>`,
    hideFeedback: true,
  },
  "tabs-demo": {
    component: createTabsExample("base"),
    code: `<Tabs default-value="1"><TabsList>...</TabsList></Tabs>`,
  },
  "tabs-controlled": {
    component: createTabsExample("controlled"),
    code: `<Tabs model-value="2"><TabsList>...</TabsList></Tabs>`,
  },
  "tabs-disabled": {
    component: createTabsExample("disabled"),
    code: `<TabsTrigger value="3" :disabled="true">Tab 3</TabsTrigger>`,
  },
  "tabs-icons": {
    component: createTabsExample("icons"),
    code: `<TabsTrigger value="1"><InformationCircleSolid />Tab 1</TabsTrigger>`,
  },
  "tabs-vertical": {
    component: createTabsExample("vertical"),
    code: `<Tabs orientation="vertical"><TabsList class="flex-col">...</TabsList></Tabs>`,
    hideFeedback: true,
  },
  "progress-tabs-demo": {
    component: createProgressTabsExample("base"),
    code: `<ProgressTabs default-value="general"><ProgressTabsList>...</ProgressTabsList></ProgressTabs>`,
  },
  "progress-tabs-status": {
    component: createProgressTabsExample("status"),
    code: `<ProgressTabsTrigger value="general" status="completed">General</ProgressTabsTrigger>`,
  },
  "progress-tabs-controlled": {
    component: createProgressTabsExample("controlled"),
    code: `<ProgressTabs model-value="shipping">...</ProgressTabs>`,
  },
  "progress-tabs-disabled": {
    component: createProgressTabsExample("disabled"),
    code: `<ProgressTabsTrigger value="payment" :disabled="true">Payment</ProgressTabsTrigger>`,
    hideFeedback: true,
  },
  "progress-accordion-demo": {
    component: createProgressAccordionExample("base"),
    code: `<ProgressAccordion type="single"><ProgressAccordionItem value="general">...</ProgressAccordionItem></ProgressAccordion>`,
  },
  "progress-accordion-single": {
    component: createProgressAccordionExample("single"),
    code: `<ProgressAccordion type="single">...</ProgressAccordion>`,
  },
  "progress-accordion-multiple": {
    component: createProgressAccordionExample("multiple"),
    code: `<ProgressAccordion type="multiple">...</ProgressAccordion>`,
  },
  "progress-accordion-status": {
    component: createProgressAccordionExample("status"),
    code: `<ProgressAccordionHeader status="completed">General</ProgressAccordionHeader>`,
  },
  "progress-accordion-controlled": {
    component: createProgressAccordionExample("controlled"),
    code: `<ProgressAccordion :model-value="['general']">...</ProgressAccordion>`,
  },
  "progress-accordion-disabled": {
    component: createProgressAccordionExample("disabled"),
    code: `<ProgressAccordionItem value="payment" :disabled="true">...</ProgressAccordionItem>`,
    hideFeedback: true,
  },
}

const defaultStoryNames = ["Default", "Primary", "Information", "WithImage", "Grey", "Base"]
const sizeStoryNames = [
  "TwoXSmall",
  "XXSmall",
  "XSmall",
  "Small",
  "Base",
  "Large",
  "XLarge",
]
const colorStoryNames = ["Grey", "Green", "Red", "Blue", "Orange", "Purple"]
const variantStoryNames = ["Primary", "Secondary", "Transparent", "Danger", "Default", "Squared", "Rounded"]

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "")

const resolveGenericStory = (slug: string, exampleName: string): ExampleEntry | null => {
  const stories = getStoriesForComponent(slug)

  if (!stories.length) {
    return null
  }

  const suffix = normalize(exampleName.replace(new RegExp(`^${slug}-?`), ""))

  if (suffix.includes("allcolors") || suffix === "colors") {
    const matchedStories = stories.filter((entry) => colorStoryNames.includes(entry.name))

    if (matchedStories.length) {
      return createStoryShowcase(matchedStories)
    }
  }

  if (suffix.includes("allsizes") || suffix === "sizes") {
    const matchedStories = stories.filter((entry) => sizeStoryNames.includes(entry.name))

    if (matchedStories.length) {
      return createStoryShowcase(matchedStories)
    }
  }

  if (suffix.includes("allrounded")) {
    const matchedStories = stories.filter((entry) => ["Default", "Rounded"].includes(entry.name))

    if (matchedStories.length) {
      return createStoryShowcase(matchedStories)
    }
  }

  if (suffix.includes("allvariants") || suffix === "variants") {
    const matchedStories = stories.filter((entry) => variantStoryNames.includes(entry.name))

    if (matchedStories.length || stories.length) {
      return createStoryShowcase(
        matchedStories.length ? matchedStories : stories.slice(0, Math.min(4, stories.length))
      )
    }
  }

  let story =
    stories.find((entry) => normalize(entry.name) === suffix) ??
    stories.find((entry) => normalize(entry.label) === suffix)

  if (!story && suffix === "demo") {
    story =
      stories.find((entry) => defaultStoryNames.includes(entry.name)) ??
      stories[0]
  }

  if (!story && suffix.includes("disabled")) {
    story = stories.find((entry) => normalize(entry.name).includes("disabled"))
  }

  if (!story && suffix.includes("loading")) {
    story = stories.find((entry) => normalize(entry.name).includes("loading"))
  }

  if (!story && suffix.includes("warning")) {
    story = stories.find((entry) => normalize(entry.name).includes("warning"))
  }

  if (!story && suffix.includes("error")) {
    story = stories.find((entry) => normalize(entry.name).includes("error"))
  }

  if (!story && suffix.includes("success")) {
    story = stories.find((entry) => normalize(entry.name).includes("success"))
  }

  if (!story && suffix.includes("small")) {
    story = stories.find((entry) => normalize(entry.name).includes("small"))
  }

  if (!story && suffix.includes("large")) {
    story = stories.find((entry) => normalize(entry.name).includes("large"))
  }

  if (!story && suffix.includes("rounded")) {
    story = stories.find((entry) => normalize(entry.name).includes("rounded"))
  }

  if (!story) {
    story = stories[0]
  }

  return story
    ? {
      component: story.component,
      code: story.code,
    }
    : null
}

export const resolveExample = (slug: string, exampleName: string): ExampleEntry | null => {
  if (customExamples[exampleName]) {
    return customExamples[exampleName]
  }

  return resolveGenericStory(slug, exampleName)
}
