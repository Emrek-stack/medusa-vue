import componentDocs from "@docs/generated/component-docs.json"
import referenceSpecs from "@docs/generated/reference-specs.json"

export type DocBlock =
  | {
      type: "heading"
      level: number
      text: string
      id: string
    }
  | {
      type: "paragraph"
      content: string
    }
  | {
      type: "code"
      lang: string
      code: string
    }
  | {
      type: "example"
      name: string
      hideFeedback?: boolean
      disableCenterAlignPreview?: boolean
    }
  | {
      type: "api-reference"
      mainComponent: string
      componentsToShow: string[]
    }
  | {
      type: "list"
      ordered?: boolean
      items: string[]
    }
  | {
      type: "divider"
    }

export type ComponentDoc = {
  slug: string
  title: string
  blocks: DocBlock[]
}

export type ReferenceSpec = {
  description?: string
  displayName: string
  props?: Record<
    string,
    {
      required?: boolean
      description?: string
      defaultValue?: { value?: string }
      tsType?: { raw?: string; name?: string }
    }
  >
}

const focusModalOverride: ComponentDoc = {
  slug: "focus-modal",
  title: "Focus Modal",
  blocks: [
    {
      type: "heading",
      level: 1,
      text: "Focus Modal",
      id: "focus-modal",
    },
    {
      type: "paragraph",
      content: "A component for rendering a modal dialog shown over the main content.",
    },
    {
      type: "paragraph",
      content: "In this guide, you'll learn how to use the Focus Modal component.",
    },
    {
      type: "example",
      name: "focus-modal-demo",
    },
    {
      type: "heading",
      level: 2,
      text: "Usage",
      id: "usage",
    },
    {
      type: "code",
      lang: "tsx",
      code: `import { FocusModal } from "@medusajs/ui"`,
    },
    {
      type: "code",
      lang: "tsx",
      code: `<FocusModal>
  <FocusModal.Trigger>Trigger</FocusModal.Trigger>
  <FocusModal.Content>
    <FocusModal.Header>Title</FocusModal.Header>
    <FocusModal.Body>Content</FocusModal.Body>
  </FocusModal.Content>
</FocusModal>`,
    },
    {
      type: "heading",
      level: 2,
      text: "API Reference",
      id: "api-reference",
    },
    {
      type: "api-reference",
      mainComponent: "FocusModal",
      componentsToShow: [
        "FocusModal",
        "FocusModalTrigger",
        "FocusModalContent",
        "FocusModalHeader",
        "FocusModalBody",
        "FocusModalFooter",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Examples",
      id: "examples",
    },
    {
      type: "heading",
      level: 3,
      text: "Control Focus Modal Open State",
      id: "control-focus-modal-open-state",
    },
    {
      type: "example",
      name: "focus-modal-controlled",
    },
    {
      type: "heading",
      level: 3,
      text: "Using Form in Focus Modal",
      id: "using-form-in-focus-modal",
    },
    {
      type: "example",
      name: "focus-modal-form",
    },
    {
      type: "heading",
      level: 3,
      text: "Nested Focus Modals",
      id: "nested-focus-modals",
    },
    {
      type: "paragraph",
      content:
        "A focus modal can open another focus modal. These focus modals will be stacked on top of each other. You can nest as many focus modals as you want.",
    },
    {
      type: "example",
      name: "focus-modal-nested",
      hideFeedback: true,
    },
  ],
}

const iconButtonOverride: ComponentDoc = {
  slug: "icon-button",
  title: "Icon Button",
  blocks: [
    {
      type: "heading",
      level: 1,
      text: "Icon Button",
      id: "icon-button",
    },
    {
      type: "paragraph",
      content: "A component that displays an icon in a button.",
    },
    {
      type: "paragraph",
      content: "In this guide, you'll learn how to use the Icon Button component.",
    },
    {
      type: "example",
      name: "icon-button-demo",
    },
    {
      type: "heading",
      level: 2,
      text: "Usage",
      id: "usage",
    },
    {
      type: "code",
      lang: "tsx",
      code: `import { IconButton } from "@medusajs/ui"
import { Plus } from "@medusajs/icons"`,
    },
    {
      type: "code",
      lang: "tsx",
      code: `<IconButton>
  <Plus />
</IconButton>`,
    },
    {
      type: "heading",
      level: 2,
      text: "API Reference",
      id: "api-reference",
    },
    {
      type: "api-reference",
      mainComponent: "IconButton",
      componentsToShow: ["IconButton"],
    },
    {
      type: "heading",
      level: 2,
      text: "Examples",
      id: "examples",
    },
    {
      type: "heading",
      level: 3,
      text: "Icon Button Variants",
      id: "icon-button-variants",
    },
    {
      type: "example",
      name: "icon-button-all-variants",
    },
    {
      type: "heading",
      level: 3,
      text: "Icon Button Sizes",
      id: "icon-button-sizes",
    },
    {
      type: "example",
      name: "icon-button-all-sizes",
    },
    {
      type: "heading",
      level: 3,
      text: "Icon Button Loading State",
      id: "icon-button-loading-state",
    },
    {
      type: "example",
      name: "icon-button-loading",
    },
    {
      type: "heading",
      level: 3,
      text: "Disabled Icon Button",
      id: "disabled-icon-button",
    },
    {
      type: "example",
      name: "icon-button-disabled",
      hideFeedback: true,
    },
  ],
}

const progressTabsOverride: ComponentDoc = {
  slug: "progress-tabs",
  title: "Progress Tabs",
  blocks: [
    {
      type: "heading",
      level: 1,
      text: "Progress Tabs",
      id: "progress-tabs",
    },
    {
      type: "paragraph",
      content:
        "A component that renders tabbed content, specifically designed for implementing multi-step tasks.",
    },
    {
      type: "paragraph",
      content: "In this guide, you'll learn how to use the Progress Tabs component.",
    },
    {
      type: "example",
      name: "progress-tabs-demo",
    },
    {
      type: "heading",
      level: 2,
      text: "Usage",
      id: "usage",
    },
    {
      type: "code",
      lang: "tsx",
      code: `import { ProgressTabs } from "@medusajs/ui"`,
    },
    {
      type: "code",
      lang: "tsx",
      code: `<ProgressTabs defaultValue="general">
  <ProgressTabs.List>
    <ProgressTabs.Trigger value="general">
      General
    </ProgressTabs.Trigger>
    <ProgressTabs.Trigger value="shipping">
      Shipping
    </ProgressTabs.Trigger>
    <ProgressTabs.Trigger value="payment">
      Payment
    </ProgressTabs.Trigger>
  </ProgressTabs.List>
  <ProgressTabs.Content value="general">
    {/* Content */}
  </ProgressTabs.Content>
  <ProgressTabs.Content value="shipping">
    {/* Content */}
  </ProgressTabs.Content>
  <ProgressTabs.Content value="payment">
    {/* Content */}
  </ProgressTabs.Content>
</ProgressTabs>`,
    },
    {
      type: "heading",
      level: 2,
      text: "API Reference",
      id: "api-reference",
    },
    {
      type: "api-reference",
      mainComponent: "ProgressTabs",
      componentsToShow: ["ProgressTabs", "ProgressTabsTrigger"],
    },
    {
      type: "heading",
      level: 2,
      text: "Examples",
      id: "examples",
    },
    {
      type: "heading",
      level: 3,
      text: "Set Status Indicator",
      id: "set-status-indicator",
    },
    {
      type: "example",
      name: "progress-tabs-status",
    },
    {
      type: "heading",
      level: 3,
      text: "Controlled Active Tab",
      id: "controlled-active-tab",
    },
    {
      type: "example",
      name: "progress-tabs-controlled",
    },
    {
      type: "heading",
      level: 3,
      text: "Disabled Tab",
      id: "disabled-tab",
    },
    {
      type: "example",
      name: "progress-tabs-disabled",
      hideFeedback: true,
    },
  ],
}

const toastOverride: ComponentDoc = {
  slug: "toast",
  title: "Toaster and Toast Messages",
  blocks: [
    {
      type: "heading",
      level: 1,
      text: "Toaster and Toast Messages",
      id: "toaster-and-toast-messages",
    },
    {
      type: "paragraph",
      content:
        "A component and utility for displaying brief messages to users, typically used for notifications or alerts. Toast messages appear momentarily on top of the application UI.",
    },
    {
      type: "paragraph",
      content: "You can display multiple toast messages at once, and they will be stacked neatly.",
    },
    {
      type: "paragraph",
      content: "In this guide, you'll learn how to use the Toaster component.",
    },
    {
      type: "example",
      name: "toaster-demo",
    },
    {
      type: "heading",
      level: 2,
      text: "Usage",
      id: "usage",
    },
    {
      type: "paragraph",
      content: "First, import the `toast` utility and `Toaster` component from `@medusajs/ui`:",
    },
    {
      type: "code",
      lang: "tsx",
      code: `import { Toaster, toast } from "@medusajs/ui"`,
    },
    {
      type: "paragraph",
      content:
        "Then, add the `Toaster` component somewhere in your tree hierarchy. For example, in your main application layout:",
    },
    {
      type: "code",
      lang: "tsx",
      code: `export default function AppLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`,
    },
    {
      type: "paragraph",
      content: "Finally, use the `toast` utility in your components to display a toast message:",
    },
    {
      type: "code",
      lang: "tsx",
      code: `export default function MyComponent() {
  return (
    <Button 
      onClick={() => 
        toast.info("Toast title", {
          description: "Toast body",
        })
      }
    >
      Trigger
    </Button>
  )
}`,
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      level: 2,
      text: "API Reference",
      id: "api-reference",
    },
    {
      type: "heading",
      level: 3,
      text: "Toast Utility Functions",
      id: "toast-utility-functions",
    },
    {
      type: "paragraph",
      content: "The `toast` utility has the following functions to display different variants of toast messages:",
    },
    {
      type: "list",
      items: [
        "`info`: Display a toast message with an informational style.",
        "`error`: Display a toast message with an error style.",
        "`success`: Display a toast message with a success style.",
        "`warning`: Display a toast message with a warning style.",
        "`loading`: Display a toast message with a loading style.",
      ],
    },
    {
      type: "paragraph",
      content: "Each of these functions accept two parameters:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "A string indicating the title of the toast.",
        "An object of [Toast component props](#toast-props).",
      ],
    },
    {
      type: "heading",
      level: 3,
      text: "Toast Props",
      id: "toast-props",
    },
    {
      type: "api-reference",
      mainComponent: "Toast",
      componentsToShow: ["Toast"],
    },
    {
      type: "heading",
      level: 3,
      text: "Toaster Props",
      id: "toaster-props",
    },
    {
      type: "api-reference",
      mainComponent: "Toaster",
      componentsToShow: ["Toaster"],
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      level: 2,
      text: "Examples",
      id: "examples",
    },
    {
      type: "heading",
      level: 3,
      text: "Toast Variants",
      id: "toast-variants",
    },
    {
      type: "paragraph",
      content:
        "The following example assumes you already have the `Toaster` component in [your application's tree](#usage).",
    },
    {
      type: "example",
      name: "toaster-all-variants",
    },
    {
      type: "heading",
      level: 3,
      text: "Dismissable Toast",
      id: "dismissable-toast",
    },
    {
      type: "paragraph",
      content:
        "The following example assumes you already have the `Toaster` component in [your application's tree](#usage).",
    },
    {
      type: "example",
      name: "toaster-dismiss",
    },
    {
      type: "heading",
      level: 3,
      text: "Toast with Action",
      id: "toast-with-action",
    },
    {
      type: "paragraph",
      content:
        "The following example assumes you already have the `Toaster` component in [your application's tree](#usage).",
    },
    {
      type: "example",
      name: "toaster-with-action",
      hideFeedback: true,
    },
  ],
}

const docOverrides: Record<string, ComponentDoc> = {
  "focus-modal": focusModalOverride,
  "icon-button": iconButtonOverride,
  "progress-tabs": progressTabsOverride,
  toast: toastOverride,
}

export const componentDocEntries = (componentDocs as ComponentDoc[]).map(
  (entry) => docOverrides[entry.slug] ?? entry
)
export const specMap = referenceSpecs as Record<string, ReferenceSpec>

export const findComponentDoc = (slug: string) =>
  componentDocEntries.find((entry) => entry.slug === slug)
