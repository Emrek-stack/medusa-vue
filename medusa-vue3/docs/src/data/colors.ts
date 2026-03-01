import { colors } from "../../../ui-preset/src/theme/tokens/colors"

export type ColorEntry = {
  name: string
  code: string
}

export type ColorSection = {
  id: string
  title: string
  description: string
  colors: ColorEntry[]
}

const cssVarToTailwindClass = (name: string) => {
  if (name.startsWith("--bg") || name.startsWith("--button")) {
    return name.replace("-", "bg-ui")
  }

  if (name.startsWith("--fg")) {
    return name.replace("-", "text-ui")
  }

  if (name.startsWith("--border")) {
    return name.replace("-", "border-ui")
  }

  if (name.startsWith("--tag")) {
    if (name.includes("bg")) {
      return name.replace("-", "bg-ui")
    }

    if (name.includes("border")) {
      return name.replace("-", "border-ui")
    }

    if (name.includes("icon") || name.includes("text")) {
      return name.replace("-", "text-ui")
    }
  }

  if (name.startsWith("--contrast") || name.startsWith("--alpha")) {
    return name.replace("-", "bg-ui")
  }

  return name
}

const transformPrefixToTitle = (prefix: string) => {
  switch (prefix) {
    case "bg":
      return "Background"
    case "fg":
      return "Foreground"
    default:
      return prefix.charAt(0).toUpperCase() + prefix.slice(1)
  }
}

const getDescriptionOfSection = (title: string) => {
  switch (title) {
    case "Alpha":
    case "Contrast":
      return "These colors can be used for foreground (using `text-` prefix), background (using `bg-` prefix), and border (using `border-` prefix) elements."
    default:
      return ""
  }
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const sections = new Map<string, ColorSection>()

for (const [tag, value] of Object.entries(colors.light)) {
  const prefixMatch = tag.match(/(--[a-zA-Z]+)/gi)

  if (!prefixMatch) {
    continue
  }

  const title = transformPrefixToTitle(prefixMatch[0].replace("--", ""))

  if (!sections.has(title)) {
    sections.set(title, {
      id: slugify(title),
      title,
      description: getDescriptionOfSection(title),
      colors: [],
    })
  }

  sections.get(title)?.colors.push({
    name: cssVarToTailwindClass(tag),
    code: value,
  })
}

export const colorSections = Array.from(sections.values())
  .sort((left, right) => left.title.localeCompare(right.title))
  .map((section) => ({
    ...section,
    colors: [...section.colors].sort((left, right) => left.name.localeCompare(right.name)),
  }))
