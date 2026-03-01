import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import ts from "typescript"

const docsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const projectRoot = path.resolve(docsRoot, "..")
const uiRoot = path.join(projectRoot, "ui/src")
const componentsRoot = path.join(uiRoot, "components")
const generatedRoot = path.join(docsRoot, "src/generated")
const exampleRegistryPath = path.join(docsRoot, "src/data/example-registry.ts")

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
  let entries
  try {
    entries = await fs.readdir(dirPath, { withFileTypes: true })
  } catch (err) {
    if (err.code === "ENOENT") return []
    throw err
  }
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

const parseCustomExampleKeys = (source) => {
  const blockMatch = source.match(/const customExamples:[\s\S]*?=\s*\{([\s\S]*?)\n\}/)

  if (!blockMatch) {
    return []
  }

  const matches = blockMatch[1].matchAll(/"([^"]+)":\s*\{/g)
  return Array.from(matches, (match) => match[1])
}

const toExampleLabel = (item, exampleName) => {
  const suffix = exampleName.replace(new RegExp(`^${item.slug}-`), "")

  const overrides = {
    [`${item.slug}-dismissable`]: `Dismissible ${item.title}`,
    [`${item.slug}-dismissible`]: `Dismissible ${item.title}`,
    [`${item.slug}-success`]: `Success ${item.title}`,
    [`${item.slug}-warning`]: `Warning ${item.title}`,
    [`${item.slug}-error`]: `Error ${item.title}`,
    [`${item.slug}-info`]: `Info ${item.title}`,
  }

  return overrides[exampleName] ?? toStartCase(suffix)
}

const buildReferenceSpecs = (manifest) =>
  Object.fromEntries(
    manifest.flatMap((item) =>
      item.exports.map((entry) => [
        entry.name,
        {
          displayName: entry.name,
          description: entry.isMain ? fallbackDescription(item) : undefined,
          props: Object.fromEntries(
            entry.props.map((prop) => [
              prop.name,
              {
                required: prop.required,
                description: "",
                defaultValue: prop.default ? { value: prop.default } : undefined,
                tsType: {
                  raw: prop.type,
                  name: prop.type,
                },
              },
            ])
          ),
        },
      ])
    )
  )

const buildManifest = async () => {
  const componentDirs = await fs.readdir(componentsRoot, { withFileTypes: true })
  const items = []
  const exampleRegistrySource = await readFile(exampleRegistryPath)
  const customExampleKeys = parseCustomExampleKeys(exampleRegistrySource)

  for (const directory of componentDirs) {
    if (!directory.isDirectory()) {
      continue
    }

    const slug = directory.name
    const folder = path.join(componentsRoot, slug)
    const indexPath = path.join(folder, "index.ts")
    const indexSource = await readFile(indexPath)

    if (!indexSource) {
      continue
    }

    const exportsList = parseIndexExports(indexSource)

    if (!exportsList.length) {
      continue
    }

    const componentFiles = await walkFiles(folder)
    const storyPath = componentFiles.find((file) => file.endsWith(".stories.ts")) ?? ""
    const storySource = storyPath ? await readFile(storyPath) : ""
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
      customExampleNames: customExampleKeys.filter((exampleName) =>
        exampleName.startsWith(`${slug}-`)
      ),
      hasStories:
        Boolean(storySource) ||
        customExampleKeys.some((exampleName) => exampleName.startsWith(`${slug}-`)),
    })
  }

  return items.sort((left, right) => left.title.localeCompare(right.title))
}

const fallbackDescription = (item) => {
  return `A component for working with ${item.title.toLowerCase()} values in Minima Vue.`
}

const buildFallbackDoc = (item) => {
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
      content: fallbackDescription(item),
    },
    {
      type: "paragraph",
      content: `In this guide, you'll learn how to use the ${item.title} component.`,
    },
  ]
  const storyExamples = item.stories.map((story) => ({
    name: `${item.slug}-${slugify(story.name)}`,
    label: story.label,
  }))
  const customExampleNames = item.customExampleNames ?? []
  const customExamplesList = customExampleNames.map((name) => ({
    name,
    label: toExampleLabel(item, name),
  }))
  const allExamples = []
  const seen = new Set()

  for (const example of [...customExamplesList, ...storyExamples]) {
    if (seen.has(example.name)) {
      continue
    }

    seen.add(example.name)
    allExamples.push(example)
  }

  const demoExample =
    allExamples.find((example) => example.name === `${item.slug}-demo`) ?? allExamples[0] ?? null
  const remainingExamples = allExamples.filter((example) => example.name !== demoExample?.name)

  if (demoExample) {
    blocks.push({
      type: "example",
      name: demoExample.name,
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
      code: `import { ${importNames} } from "@minima-vue/ui"`,
    }
  )

  if (demoExample) {
    blocks.push({
      type: "code",
      lang: "tsx",
      code: `<${item.mainExport}>Here's a message</${item.mainExport}>`,
    })
  }

  blocks.push(
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

  if (remainingExamples.length) {
    blocks.push({
      type: "heading",
      level: 2,
      text: "Examples",
      id: "examples",
    })

    for (const example of remainingExamples) {
      blocks.push(
        {
          type: "heading",
          level: 3,
          text: example.label,
          id: slugify(example.label),
        },
        {
          type: "example",
          name: example.name,
          hideFeedback: example.name.endsWith("dismissable") || example.name.endsWith("dismissible"),
        }
      )
    }
  }

  return {
    slug: item.slug,
    title: item.title,
    blocks,
  }
}

const buildDocs = async (manifest) => {
  const docs = []

  for (const item of manifest) {
    docs.push(buildFallbackDoc(item))
  }

  return { docs, specs: buildReferenceSpecs(manifest) }
}

await fs.mkdir(generatedRoot, { recursive: true })

const manifest = await buildManifest()
const { docs: componentDocs, specs: referenceSpecs } = await buildDocs(manifest)

await fs.writeFile(
  path.join(generatedRoot, "component-manifest.json"),
  JSON.stringify(manifest, null, 2)
)

await fs.writeFile(
  path.join(generatedRoot, "component-docs.json"),
  JSON.stringify(componentDocs, null, 2)
)

await fs.writeFile(
  path.join(generatedRoot, "reference-specs.json"),
  JSON.stringify(referenceSpecs, null, 2)
)
