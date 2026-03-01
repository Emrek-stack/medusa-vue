import { defineComponent } from "vue"

type StoryModule = Record<string, any>

const storyModules = import.meta.glob("../../../ui/src/components/**/*.stories.ts", {
  eager: true,
}) as Record<string, StoryModule>
const rawStoryModules = import.meta.glob("../../../ui/src/components/**/*.stories.ts", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>

const toLabel = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())

const storyBlock = (source: string, name: string) => {
  const match = source.match(new RegExp(`export const ${name}[\\s\\S]*?(?=\\nexport const |$)`))
  return match?.[0]?.trim() ?? ""
}

const buildStoryComponent = (meta: StoryModule, story: StoryModule) => {
  const args = {
    ...(meta.args ?? {}),
    ...(story.args ?? {}),
  }

  let component = null

  if (typeof story.render === "function") {
    component = story.render(args)
  } else if (meta.component) {
    component = defineComponent({
      components: {
        StoryComponent: meta.component,
      },
      setup() {
        return { args }
      },
      template: "<StoryComponent v-bind=\"args\" />",
    })
  }

  const decorators = [...(meta.decorators ?? []), ...(story.decorators ?? [])]

  return decorators.reduce((current, decorator) => {
    if (typeof decorator !== "function" || !current) {
      return current
    }

    return decorator(current)
  }, component)
}

const registry = new Map<
  string,
  Array<{
    name: string
    label: string
    code: string
    component: any
  }>
>()

for (const [filePath, raw] of Object.entries(rawStoryModules)) {
  const slug = filePath.split("/").at(-2)

  if (!slug) {
    continue
  }

  const module = storyModules[filePath] ?? {}
  const meta = module.default ?? {}
  const matches = raw.matchAll(/export const (\w+)\s*:/g)
  const stories = Array.from(matches, (match) => {
    const name = match[1]
    const story = module[name]

    return {
      name,
      label: toLabel(name),
      code: storyBlock(raw, name),
      component: story ? buildStoryComponent(meta, story) : null,
    }
  })

  registry.set(slug, stories)
}

export const getStoriesForComponent = (slug: string) => registry.get(slug) ?? []
