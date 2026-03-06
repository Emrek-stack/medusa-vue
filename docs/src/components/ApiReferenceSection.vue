<script setup lang="ts">
import FeedbackRow from "@docs/components/FeedbackRow.vue"
import ReferencePropsTable from "@docs/components/ReferencePropsTable.vue"
import RichText from "@docs/components/RichText.vue"
import { specMap, type ReferenceSpec } from "@docs/data/component-docs"

const props = defineProps<{
  componentsToShow: string[]
}>()

const fallbackSpecMap: Record<string, ReferenceSpec> = {
  FocusModal: {
    displayName: "FocusModal",
    description:
      "This component is based on the [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) primitives.",
    props: {
      defaultOpen: {
        description: "Whether the modal is opened by default.",
        required: false,
        tsType: {
          name: "boolean",
        },
      },
      open: {
        description: "Whether the modal is opened.",
        required: false,
        tsType: {
          name: "boolean",
        },
      },
      onOpenChange: {
        description: "A function to handle when the modal is opened or closed.",
        required: false,
        tsType: {
          raw: "(open: boolean) => void",
          name: "signature",
        },
      },
    },
  },
  FocusModalTrigger: {
    displayName: "FocusModal.Trigger",
    description:
      "This component is used to create the trigger button that opens the modal. It accepts props from the Radix UI Dialog Trigger component.",
  },
  FocusModalContent: {
    displayName: "FocusModal.Content",
    description:
      "This component wraps the content of the modal. It accepts props from the Radix UI Dialog Content component.",
  },
  FocusModalHeader: {
    displayName: "FocusModal.Header",
    description:
      "This component is used to wrap the header content of the modal. This component is based on the div element and supports all of its props.",
  },
  FocusModalTitle: {
    displayName: "FocusModal.Title",
    description:
      "This component adds an accessible title to the modal. It accepts props from the Radix UI Dialog Title component.",
  },
  FocusModalBody: {
    displayName: "FocusModal.Body",
    description:
      "This component is used to wrap the body content of the modal. This component is based on the div element and supports all of its props.",
  },
  FocusModalFooter: {
    displayName: "FocusModal.Footer",
    description:
      "This component is used to wrap the footer content of the modal. This component is based on the div element and supports all of its props.",
  },
  Heading: {
    displayName: "Heading",
    description:
      "This component is based on the heading element (`h1`, `h2`, etc...) depending on the specified level and supports all of its props.",
    props: {
      level: {
        description: "The heading level which specifies which heading element is used.",
        required: false,
        defaultValue: {
          value: "\"h1\"",
        },
        tsType: {
          raw: "\"h1\" | \"h2\" | \"h3\"",
          name: "union",
        },
      },
    },
  },
  ProgressTabs: {
    displayName: "ProgressTabs",
    description:
      "This component is based on the [Radix UI Tabs](https://radix-ui.com/primitives/docs/components/tabs) primitves.",
    props: {
      activationMode: {
        description: "Whether a tab is activated automatically or manually.",
        required: false,
        tsType: {
          raw: "\"manual\" | \"automatic\"",
          name: "union",
        },
      },
      defaultValue: {
        description: "The value of the tab to select by default, if uncontrolled",
        required: false,
        tsType: {
          name: "string",
        },
      },
      dir: {
        description: "The direction of navigation between toolbar items.",
        required: false,
        tsType: {
          name: "Direction",
        },
      },
      onValueChange: {
        description: "A function called when a new tab is selected",
        required: false,
        tsType: {
          raw: "(value: string) => void",
          name: "signature",
        },
      },
      orientation: {
        description:
          "The orientation the tabs are layed out. Mainly so arrow navigation is done accordingly (left & right vs. up & down)",
        required: false,
        tsType: {
          raw: "\"horizontal\" | \"vertical\"",
          name: "union",
        },
      },
      value: {
        description: "The value for the selected tab, if controlled",
        required: false,
        tsType: {
          name: "string",
        },
      },
    },
  },
  ProgressTabsTrigger: {
    displayName: "ProgressTabs.Trigger",
    props: {
      status: {
        description: "",
        required: false,
        defaultValue: {
          value: "\"not-started\"",
        },
        tsType: {
          raw: "\"not-started\" | \"in-progress\" | \"completed\"",
          name: "union",
        },
      },
    },
  },
}

const hasProps = (spec?: ReferenceSpec) =>
  !!spec?.props && Object.keys(spec.props).length > 0

const getSpec = (name: string): ReferenceSpec | undefined => {
  const baseSpec = specMap[name]
  const fallbackSpec = fallbackSpecMap[name]

  if (!baseSpec) {
    return fallbackSpec
  }

  if (!fallbackSpec) {
    return baseSpec
  }

  return {
    ...fallbackSpec,
    ...baseSpec,
    description: baseSpec.description || fallbackSpec.description,
    props: hasProps(baseSpec) ? baseSpec.props : fallbackSpec.props,
  }
}

const formatComponentName = (name: string) => {
  const fallbackName = fallbackSpecMap[name]?.displayName

  if (fallbackName) {
    return fallbackName
  }

  if (name.startsWith("FocusModal") && name !== "FocusModal") {
    return name.replace(/^FocusModal/, "FocusModal.")
  }

  if (name.startsWith("ProgressTabs") && name !== "ProgressTabs") {
    return name.replace(/^ProgressTabs/, "ProgressTabs.")
  }

  return name
}
</script>

<template>
  <section id="api-reference" class="space-y-8">
    <div
      v-for="componentName in props.componentsToShow"
      :key="componentName"
      class="space-y-5"
    >
      <h3
        v-if="props.componentsToShow.length > 1"
        :id="formatComponentName(componentName).toLowerCase().replace(/[^a-z0-9]+/g, '-')"
        class="docs-subsection-title"
      >
        {{ formatComponentName(componentName) }}
      </h3>
      <RichText
        v-if="getSpec(componentName)?.description"
        :content="getSpec(componentName)?.description || ''"
      />
      <ReferencePropsTable
        v-if="hasProps(getSpec(componentName))"
        :props-map="getSpec(componentName)?.props || {}"
      />
      <FeedbackRow
        v-if="hasProps(getSpec(componentName))"
        question="Was this helpful?"
      />
    </div>
  </section>
</template>
