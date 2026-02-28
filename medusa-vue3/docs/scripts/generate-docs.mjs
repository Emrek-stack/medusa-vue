import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import ts from "typescript"

const docsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const projectRoot = path.resolve(docsRoot, "..")
const uiRoot = path.join(projectRoot, "ui/src")
const componentsRoot = path.join(uiRoot, "components")
const generatedRoot = path.join(docsRoot, "src/generated")
const referenceRoot = path.resolve(projectRoot, "../reference/medusa-2.13.1/www/apps/ui")
const referencePagesRoot = path.join(referenceRoot, "app/components")
const referenceSpecsRoot = path.join(referenceRoot, "specs/components")

const toStartCase = (value) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase())

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const readFile = async (filePath) => {
  try {
    return await fs.readFile(filePath, "utf8")
  } catch {
    return ""
  }
}

const walkFiles = async (dirPath) => {
  const entries = await fs.readdir(dirPath, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await walkFiles(entryPath)))
      continue
    }

    files.push(entryPath)
  }

  return files
}

const extractScriptSetup = (source) => {
  const match = source.match(/<script setup[^>]*>([\s\S]*?)<\/script>/)
  return match?.[1] ?? ""
}

const getPropertyName = (property, sourceFile) => {
  if (!property.name) {
    return null
  }

  if (
    ts.isIdentifier(property.name) ||
    ts.isStringLiteral(property.name) ||
    ts.isNumericLiteral(property.name)
  ) {
    return property.name.text
  }

  return property.name.getText(sourceFile).replace(/['"]/g, "")
}

const parsePropsFromVue = async (filePath) => {
  const source = await readFile(filePath)
  const setupBlock = extractScriptSetup(source)

  if (!setupBlock) {
    return []
  }

  const sourceFile = ts.createSourceFile(
    filePath,
    setupBlock,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  )

  let propsTypeName = null
  const defaults = new Map()
  const interfaces = new Map()
  const typeAliases = new Map()

  const visit = (node) => {
    if (ts.isInterfaceDeclaration(node)) {
      interfaces.set(node.name.text, node)
    }

    if (ts.isTypeAliasDeclaration(node) && ts.isTypeLiteralNode(node.type)) {
      typeAliases.set(node.name.text, node.type)
    }

    if (ts.isCallExpression(node)) {
      const expressionText = node.expression.getText(sourceFile)

      if (expressionText === "defineProps" && node.typeArguments?.length) {
        propsTypeName = node.typeArguments[0].getText(sourceFile)
      }

      if (
        expressionText === "withDefaults" &&
        node.arguments.length >= 2 &&
        ts.isCallExpression(node.arguments[0])
      ) {
        const definePropsCall = node.arguments[0]

        if (
          definePropsCall.expression.getText(sourceFile) === "defineProps" &&
          definePropsCall.typeArguments?.length
        ) {
          propsTypeName = definePropsCall.typeArguments[0].getText(sourceFile)
        }

        const defaultsArg = node.arguments[1]

        if (ts.isObjectLiteralExpression(defaultsArg)) {
          for (const property of defaultsArg.properties) {
            if (!ts.isPropertyAssignment(property)) {
              continue
            }

            const name = getPropertyName(property, sourceFile)

            if (name) {
              defaults.set(name, property.initializer.getText(sourceFile))
            }
          }
        }
      }
    }

    ts.forEachChild(node, visit)
  }

  visit(sourceFile)

  if (!propsTypeName) {
    return []
  }

  const interfaceNode = interfaces.get(propsTypeName)
  const typeAliasNode = typeAliases.get(propsTypeName)
  const members = interfaceNode?.members ?? typeAliasNode?.members ?? []

  return members
    .filter((member) => ts.isPropertySignature(member))
    .map((member) => {
      const name = getPropertyName(member, sourceFile)

      if (!name) {
        return null
      }

      return {
        name,
        type: member.type?.getText(sourceFile).replace(/\s+/g, " ").trim() ?? "any",
        required: !member.questionToken && !defaults.has(name),
        default: defaults.get(name) ?? null,
      }
    })
    .filter(Boolean)
}

const parseIndexExports = (source) => {
  const matches = source.matchAll(
    /export\s+\{\s*([^}]+)\s*\}\s+from\s+["']\.\/([^"']+)["']/g
  )

  return Array.from(matches)
    .flatMap((match) => {
      const exportsBlock = match[1]
      const file = match[2].endsWith(".vue") ? match[2] : `${match[2]}.vue`

      return exportsBlock
        .split(",")
        .map((entry) => entry.trim())
        .map((entry) => entry.match(/^default\s+as\s+(\w+)$/)?.[1] ?? null)
        .filter(Boolean)
        .map((name) => ({
          name,
          file,
        }))
    })
}

const parseStoryExports = (source) => {
  const matches = source.matchAll(/export const (\w+)\s*:/g)
  return Array.from(matches, (match) => ({
    name: match[1],
    label: toStartCase(match[1]),
  }))
}

const buildManifest = async () => {
  const componentDirs = await fs.readdir(componentsRoot, { withFileTypes: true })
  const items = []

  for (const directory of componentDirs) {
    if (!directory.isDirectory()) {
      continue
    }

    const slug = directory.name
    const folder = path.join(componentsRoot, slug)
    const indexPath = path.join(folder, "index.ts")
    const storyPath = path.join(folder, `${toStartCase(slug).replace(/\s/g, "")}.stories.ts`)
    const indexSource = await readFile(indexPath)

    if (!indexSource) {
      continue
    }

    const exportsList = parseIndexExports(indexSource)

    if (!exportsList.length) {
      continue
    }

    const storySource = await readFile(storyPath)
    const exportsWithProps = []

    for (let index = 0; index < exportsList.length; index += 1) {
      const entry = exportsList[index]
      const filePath = path.join(folder, entry.file)
      const props = await parsePropsFromVue(filePath)

      exportsWithProps.push({
        ...entry,
        isMain: index === 0,
        props,
      })
    }

    items.push({
      slug,
      title: toStartCase(slug),
      mainExport: exportsWithProps[0].name,
      exports: exportsWithProps,
      stories: parseStoryExports(storySource),
      hasStories: Boolean(storySource),
    })
  }

  return items.sort((left, right) => left.title.localeCompare(right.title))
}

const parseExampleTag = (tagSource) => ({
  type: "example",
  name: tagSource.match(/name="([^"]+)"/)?.[1] ?? "",
  hideFeedback: tagSource.includes("hideFeedback"),
  disableCenterAlignPreview: tagSource.includes("disableCenterAlignPreview"),
})

const parseReferenceTag = (tagSource) => {
  const mainComponent = tagSource.match(/mainComponent="([^"]+)"/)?.[1] ?? ""
  const componentsMatch = tagSource.match(/componentsToShow=\{\[([\s\S]*?)\]\}/)
  const componentsToShow = componentsMatch
    ? componentsMatch[1]
        .split(",")
        .map((item) => item.replace(/['"\n\r]/g, "").trim())
        .filter(Boolean)
    : [mainComponent]

  return {
    type: "api-reference",
    mainComponent,
    componentsToShow,
  }
}

const parseReferencePage = async (slug) => {
  const filePath = path.join(referencePagesRoot, slug, "page.mdx")
  const source = await readFile(filePath)

  if (!source) {
    return null
  }

  const metadataTitle =
    source.match(/title:\s*`([^`]+)`/)?.[1] ??
    source.match(/#\s+\{metadata\.title\}/)?.[1] ??
    toStartCase(slug)

  let cleaned = source

  if (cleaned.startsWith("---")) {
    cleaned = cleaned.replace(/^---[\s\S]*?---\n+/, "")
  }

  cleaned = cleaned
    .replace(/^(?:import .*?\n)+/m, "")
    .replace(/export const metadata = \{[\s\S]*?\}\n+/m, "")
    .replace(/# \{metadata\.title\}/g, `# ${metadataTitle}`)
    .trim()

  const lines = cleaned.split(/\r?\n/)
  const blocks = []

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]
    const trimmed = line.trim()

    if (!trimmed || trimmed === "---") {
      continue
    }

    if (trimmed.startsWith("```")) {
      const lang = trimmed.slice(3).trim() || "txt"
      const codeLines = []
      index += 1

      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        codeLines.push(lines[index])
        index += 1
      }

      blocks.push({
        type: "code",
        lang,
        code: codeLines.join("\n"),
      })
      continue
    }

    if (trimmed.startsWith("<ComponentExample")) {
      let tagSource = trimmed

      while (!tagSource.includes("/>") && index < lines.length - 1) {
        index += 1
        tagSource += lines[index].trim()
      }

      blocks.push(parseExampleTag(tagSource))
      continue
    }

    if (trimmed.startsWith("<ComponentReference")) {
      let tagSource = trimmed

      while (!tagSource.includes("/>") && index < lines.length - 1) {
        index += 1
        tagSource += lines[index].trim()
      }

      blocks.push(parseReferenceTag(tagSource))
      continue
    }

    if (/^#{1,3}\s+/.test(trimmed)) {
      const [, hashes, text] = trimmed.match(/^(#{1,3})\s+(.*)$/)
      blocks.push({
        type: "heading",
        level: hashes.length,
        text,
        id: slugify(text),
      })
      continue
    }

    const paragraphLines = [trimmed]

    while (index < lines.length - 1) {
      const nextLine = lines[index + 1].trim()

      if (
        !nextLine ||
        nextLine === "---" ||
        nextLine.startsWith("```") ||
        nextLine.startsWith("<ComponentExample") ||
        nextLine.startsWith("<ComponentReference") ||
        /^#{1,3}\s+/.test(nextLine)
      ) {
        break
      }

      paragraphLines.push(nextLine)
      index += 1
    }

    blocks.push({
      type: "paragraph",
      content: paragraphLines.join(" "),
    })
  }

  return {
    slug,
    title: metadataTitle,
    blocks,
  }
}

const buildReferenceSpecs = async () => {
  const files = (await walkFiles(referenceSpecsRoot)).filter((filePath) =>
    filePath.endsWith(".json")
  )
  const specs = {}

  for (const filePath of files) {
    const source = await readFile(filePath)

    if (!source) {
      continue
    }

    const spec = JSON.parse(source)

    if (spec.displayName) {
      specs[spec.displayName] = spec
    }
  }

  return specs
}

const fallbackDescription = (item, spec) => {
  if (spec?.description?.trim()) {
    return spec.description.trim()
  }

  return `A component for working with ${item.title.toLowerCase()} values in Medusa UI.`
}

const buildFallbackDoc = (item, spec) => {
  const importNames = item.exports.map((entry) => entry.name).join(", ")
  const blocks = [
    {
      type: "heading",
      level: 1,
      text: item.title,
      id: slugify(item.title),
    },
    {
      type: "paragraph",
      content: fallbackDescription(item, spec),
    },
    {
      type: "paragraph",
      content: `In this guide, you'll learn how to use the ${item.title} component.`,
    },
  ]

  if (item.hasStories) {
    blocks.push({
      type: "example",
      name: `${item.slug}-demo`,
    })
  }

  blocks.push(
    {
      type: "heading",
      level: 2,
      text: "Usage",
      id: "usage",
    },
    {
      type: "code",
      lang: "ts",
      code: `import { ${importNames} } from "@medusa-vue/ui"`,
    },
    {
      type: "heading",
      level: 2,
      text: "API Reference",
      id: "api-reference",
    },
    {
      type: "api-reference",
      mainComponent: item.mainExport,
      componentsToShow: item.exports.map((entry) => entry.name),
    }
  )

  return {
    slug: item.slug,
    title: item.title,
    blocks,
  }
}

const buildReferenceDocs = async (manifest) => {
  const docs = []
  const specs = await buildReferenceSpecs()

  for (const item of manifest) {
    const doc = await parseReferencePage(item.slug)

    docs.push(doc ?? buildFallbackDoc(item, specs[item.mainExport]))
  }

  return { docs, specs }
}

await fs.mkdir(generatedRoot, { recursive: true })

const manifest = await buildManifest()
const { docs: referenceDocs, specs: referenceSpecs } = await buildReferenceDocs(manifest)

await fs.writeFile(
  path.join(generatedRoot, "component-manifest.json"),
  JSON.stringify(manifest, null, 2)
)

await fs.writeFile(
  path.join(generatedRoot, "component-docs.json"),
  JSON.stringify(referenceDocs, null, 2)
)

await fs.writeFile(
  path.join(generatedRoot, "reference-specs.json"),
  JSON.stringify(referenceSpecs, null, 2)
)
