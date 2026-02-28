import manifest from "@docs/generated/component-manifest.json"

export type NavItem = {
  title: string
  to: string
}

export type SidebarItem =
  | {
      type: "link"
      title: string
      to: string
    }
  | {
      type: "separator"
    }
  | {
      type: "category"
      title: string
      initialOpen?: boolean
      items: NavItem[]
    }

export const componentManifest = manifest as Array<{
  slug: string
  title: string
  mainExport: string
  hasStories: boolean
  stories: Array<{ name: string; label: string }>
  exports: Array<{
    name: string
    file: string
    isMain: boolean
    props: Array<{
      name: string
      type: string
      required: boolean
      default: string | null
    }>
  }>
}>

export const navigationItems: SidebarItem[] = [
  {
    type: "link",
    title: "Introduction",
    to: "/",
  },
  {
    type: "separator",
  },
  {
    type: "category",
    title: "Installation",
    initialOpen: true,
    items: [
      { title: "Medusa Admin Extension", to: "/installation/medusa-admin-extension" },
      { title: "Standalone Project", to: "/installation/standalone-project" },
    ],
  },
  {
    type: "link",
    title: "Icons",
    to: "/icons/overview",
  },
  {
    type: "link",
    title: "Colors",
    to: "/colors/overview",
  },
  {
    type: "separator",
  },
  {
    type: "category",
    title: "Components",
    initialOpen: true,
    items: [
      { title: "Alert", to: "/components/alert" },
      { title: "Avatar", to: "/components/avatar" },
      { title: "Badge", to: "/components/badge" },
      { title: "Button", to: "/components/button" },
      { title: "Calendar", to: "/components/calendar" },
      { title: "Checkbox", to: "/components/checkbox" },
      { title: "Code Block", to: "/components/code-block" },
      { title: "Command", to: "/components/command" },
      { title: "Command Bar", to: "/components/command-bar" },
      { title: "Container", to: "/components/container" },
      { title: "Copy", to: "/components/copy" },
      { title: "Currency Input", to: "/components/currency-input" },
      { title: "Data Table", to: "/components/data-table" },
      { title: "Date Picker", to: "/components/date-picker" },
      { title: "Date Segment", to: "/components/date-segment" },
      { title: "Drawer", to: "/components/drawer" },
      { title: "Dropdown Menu", to: "/components/dropdown-menu" },
      { title: "Focus Modal", to: "/components/focus-modal" },
      { title: "Heading", to: "/components/heading" },
      { title: "Hint", to: "/components/hint" },
      { title: "Icon Badge", to: "/components/icon-badge" },
      { title: "Icon Button", to: "/components/icon-button" },
      { title: "Inline Tip", to: "/components/inline-tip" },
      { title: "Input", to: "/components/input" },
      { title: "Kbd", to: "/components/kbd" },
      { title: "Label", to: "/components/label" },
      { title: "Progress Accordion", to: "/components/progress-accordion" },
      { title: "Progress Tabs", to: "/components/progress-tabs" },
      { title: "Prompt", to: "/components/prompt" },
      { title: "Radio Group", to: "/components/radio-group" },
      { title: "Select", to: "/components/select" },
      { title: "Status Badge", to: "/components/status-badge" },
      { title: "Switch", to: "/components/switch" },
      { title: "Table", to: "/components/table" },
      { title: "Tabs", to: "/components/tabs" },
      { title: "Text", to: "/components/text" },
      { title: "Textarea", to: "/components/textarea" },
      { title: "Toast", to: "/components/toast" },
      { title: "Tooltip", to: "/components/tooltip" },
    ],
  },
  {
    type: "category",
    title: "Hooks",
    initialOpen: true,
    items: [
      { title: "usePrompt", to: "/hooks/use-prompt" },
      { title: "useToggleState", to: "/hooks/use-toggle-state" },
    ],
  },
  {
    type: "category",
    title: "Utils",
    initialOpen: true,
    items: [{ title: "clx", to: "/utils/clx" }],
  },
]

export const findComponent = (slug: string) =>
  componentManifest.find((entry) => entry.slug === slug)
