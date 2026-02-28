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

export const componentDocEntries = componentDocs as ComponentDoc[]
export const specMap = referenceSpecs as Record<string, ReferenceSpec>

export const findComponentDoc = (slug: string) =>
  componentDocEntries.find((entry) => entry.slug === slug)
