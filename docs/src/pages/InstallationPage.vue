<script setup lang="ts">
import { computed } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { Alert } from "@minima-vue/ui"
import DocsCodeBlock from "@docs/components/DocsCodeBlock.vue"
import RightToc from "@docs/components/RightToc.vue"
import { installationDocs } from "@docs/data/content"
import { siteBrand } from "@docs/data/site"

const route = useRoute()
const page = computed(() => installationDocs[route.params.slug as keyof typeof installationDocs])
const isMedusaAdminExtension = computed(() => route.params.slug === "medusa-admin-extension")
const isStandaloneProject = computed(() => route.params.slug === "standalone-project")

const tocItems = computed(() => {
  if (isMedusaAdminExtension.value) {
    return [
      { id: "use-minima-vue-in-admin-extensions", title: "Use Minima Vue in Admin Extensions", level: 2 },
      { id: "related-resources", title: "Related Resources", level: 2 },
    ]
  }

  if (isStandaloneProject.value) {
    return [
      { id: "minima-vue-compatibility", title: "Minima Vue Compatibility", level: 2 },
      { id: "step-1-install-minima-vue-ui", title: "Step 1: Install Minima Vue UI", level: 2 },
      { id: "step-2-install-ui-preset", title: "Step 2: Install UI Preset", level: 2 },
      { id: "step-3-configure-tailwind-css", title: "Step 3: Configure Tailwind CSS", level: 2 },
      { id: "tailwind-css-v3-configurations", title: "Tailwind CSS v3 Configurations", level: 3 },
      { id: "tailwind-css-v4-configurations", title: "Tailwind CSS v4 Configurations", level: 3 },
      { id: "step-4-use-minima-vue-in-standalone-projects", title: "Step 4: Use Minima Vue", level: 2 },
      { id: "update-ui-packages-in-standalone-projects", title: "Update UI Packages", level: 2 },
    ]
  }

  return []
})

const medusaAdminExampleCode = `import { defineRouteConfig } from "@medusajs/admin-sdk"
import { ChatBubbleLeftRight } from "@medusajs/icons"
import { Container, Heading } from "@medusajs/ui"

const CustomPage = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">This is my custom route</Heading>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Custom Route",
  icon: ChatBubbleLeftRight,
})

export default CustomPage`

const standaloneInstallUiCode = `npm install @minima-vue/ui @minima-vue/icons`

const standaloneInstallPresetCode = `npm install -D @minima-vue/ui-preset`

const standaloneTailwindV3Code = `import type { Config } from "tailwindcss"
import preset from "@minima-vue/ui-preset"

export default {
  presets: [preset as Config],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,vue}",
    "./node_modules/@minima-vue/ui/dist/**/*.{js,mjs}",
  ],
} satisfies Config`

const standaloneTailwindMonorepoCode = `const path = require("path")

const uiPath = path.resolve(
  require.resolve("@minima-vue/ui"),
  "../..",
  "**/*.{js,mjs}"
)

module.exports = {
  presets: [require("@minima-vue/ui-preset")],
  content: [
    "./apps/**/*.{ts,tsx,vue}",
    uiPath,
  ],
}`

const standaloneTailwindV4Code = `@import "tailwindcss";
@source "../node_modules/@minima-vue/ui";
@config "@minima-vue/ui-preset";`

const standaloneButtonCode = `import { Button } from "@minima-vue/ui"

export function ButtonDemo() {
  return <Button>Button</Button>
}`

const standalonePackageJsonCode = `{
  "dependencies": {
    "@minima-vue/ui": "^1.0.0",
    "@minima-vue/icons": "^1.0.0"
  },
  "devDependencies": {
    "@minima-vue/ui-preset": "^1.0.0"
  }
}`
</script>

<template>
  <div v-if="page && isStandaloneProject" class="docs-page-grid">
    <article class="min-w-0">
      <nav class="docs-breadcrumb">
        <span>Documentation</span>
        <span>›</span>
        <span>{{ siteBrand.name }}</span>
        <span>›</span>
        <span>Installation</span>
      </nav>

      <div class="docs-flow">
        <h1 class="docs-page-title">
          Install {{ siteBrand.name }} in Standalone Projects
        </h1>

        <p class="txt-large text-ui-fg-base">
          In this guide, you'll learn how to install and use {{ siteBrand.name }} in a standalone project.
        </p>

        <Alert variant="info" class="max-w-[780px]">
          The icons package is installed independently from UI. Learn how to use it in the
          <RouterLink to="/icons/overview" class="underline decoration-ui-fg-muted underline-offset-4">
            Icons guide
          </RouterLink>.
        </Alert>

        <hr class="border-ui-border-base" />

        <h2 id="minima-vue-compatibility" class="docs-section-title">
          Minima Vue Compatibility
        </h2>

        <p class="max-w-[780px]">
          To use {{ siteBrand.name }} in your standalone project, you must have:
        </p>

        <ul class="max-w-[780px]">
          <li>Vue 3.4+ installed (works with Vite and modern Vue toolchains).</li>
          <li>
            Tailwind CSS installed. {{ siteBrand.name }} components are styled with Tailwind utilities and preset tokens.
          </li>
        </ul>

        <hr class="border-ui-border-base" />

        <h2 id="step-1-install-minima-vue-ui" class="docs-section-title">
          Step 1: Install Minima Vue UI
        </h2>

        <p class="max-w-[780px]">
          In your standalone project, install the UI and icons packages with the following command:
        </p>

        <DocsCodeBlock
          label="Terminal"
          lang="bash"
          :code="standaloneInstallUiCode"
          class="max-w-[780px]"
        />

        <hr class="border-ui-border-base" />

        <h2 id="step-2-install-ui-preset" class="docs-section-title">
          Step 2: Install UI Preset
        </h2>

        <p class="max-w-[780px]">
          {{ siteBrand.name }} customizes Tailwind utility layers and tokens, so you must also install the preset package.
        </p>

        <DocsCodeBlock
          label="Terminal"
          lang="bash"
          :code="standaloneInstallPresetCode"
          class="max-w-[780px]"
        />

        <hr class="border-ui-border-base" />

        <h2 id="step-3-configure-tailwind-css" class="docs-section-title">
          Step 3: Configure Tailwind CSS
        </h2>

        <p class="max-w-[780px]">
          Configure Tailwind to use the preset and include the UI package in content sources.
        </p>

        <h3 id="tailwind-css-v3-configurations" class="docs-subsection-title">
          Tailwind CSS v3 Configurations
        </h3>

        <p class="max-w-[780px]">
          In Tailwind CSS v3, add the following settings to your <code>tailwind.config.js</code> or
          <code>tailwind.config.ts</code> file.
        </p>

        <ol class="max-w-[780px]">
          <li>Add the UI preset to the <code>presets</code> array.</li>
          <li>Ensure the <code>content</code> field includes the UI package path.</li>
        </ol>

        <DocsCodeBlock
          label="tailwind.config.ts"
          lang="ts"
          :code="standaloneTailwindV3Code"
          class="max-w-[780px]"
        />

        <p class="max-w-[780px]">
          If your project is in a monorepo, resolve the UI path from the workspace root:
        </p>

        <DocsCodeBlock
          label="tailwind.config.js"
          lang="js"
          :code="standaloneTailwindMonorepoCode"
          class="max-w-[780px]"
        />

        <h3 id="tailwind-css-v4-configurations" class="docs-subsection-title">
          Tailwind CSS v4 Configurations
        </h3>

        <p class="max-w-[780px]">
          In your CSS entry file, include <code>@source</code> and <code>@config</code> directives:
        </p>

        <DocsCodeBlock
          label="src/styles.css"
          lang="css"
          :code="standaloneTailwindV4Code"
          class="max-w-[780px]"
        />

        <hr class="border-ui-border-base" />

        <h2 id="step-4-use-minima-vue-in-standalone-projects" class="docs-section-title">
          Step 4: Use Minima Vue in Standalone Projects
        </h2>

        <p class="max-w-[780px]">
          You can now start building your application with {{ siteBrand.name }} components.
        </p>

        <DocsCodeBlock
          label="ButtonDemo.tsx"
          lang="tsx"
          :code="standaloneButtonCode"
          class="max-w-[780px]"
        />

        <p class="max-w-[780px]">
          Refer to each component's docs to learn about props and usage details.
        </p>

        <hr class="border-ui-border-base" />

        <h2 id="update-ui-packages-in-standalone-projects" class="docs-section-title">
          Update UI Packages in Standalone Projects
        </h2>

        <p class="max-w-[780px]">
          To update UI packages, bump versions in <code>package.json</code> and reinstall dependencies.
        </p>

        <DocsCodeBlock
          label="package.json"
          lang="json"
          :code="standalonePackageJsonCode"
          class="max-w-[780px]"
        />
      </div>
    </article>

    <RightToc :items="tocItems" />
  </div>

  <div v-else-if="page && isMedusaAdminExtension" class="docs-page-grid">
    <article class="min-w-0">
      <nav class="docs-breadcrumb">
        <span>Documentation</span>
        <span>›</span>
        <span>{{ siteBrand.name }}</span>
        <span>›</span>
        <span>Installation</span>
      </nav>

      <div class="docs-flow">
        <h1 class="docs-page-title">
          Install {{ siteBrand.name }} for Admin Extensions
        </h1>

        <p class="txt-large text-ui-fg-base">
          In this guide, you'll learn how to use {{ siteBrand.name }} for building admin extensions.
        </p>

        <h2 id="use-minima-vue-in-admin-extensions" class="docs-section-title">
          Use Minima Vue in Admin Extensions
        </h2>

        <p class="max-w-[780px]">
          The <code>@medusajs/ui</code> and <code>@medusajs/icons</code> packages are already
          installed as dependencies of the <code>@medusajs/admin-sdk</code> package in your
          admin project. They're installed by default in compatible plugins as well.
        </p>

        <p class="max-w-[780px]">
          So, you can import the packages and use them in your admin extensions without
          any additional installation steps.
        </p>

        <p class="max-w-[780px]">
          For example, to use the UI and icon packages in a UI route:
        </p>

        <DocsCodeBlock
          label="src/admin/routes/custom/page.tsx"
          lang="tsx"
          :code="medusaAdminExampleCode"
          class="max-w-[780px]"
        />

        <p class="max-w-[780px]">
          In this example, you use the
          <RouterLink to="/components/container" class="underline decoration-ui-fg-muted underline-offset-4">
            Container
          </RouterLink>
          and
          <RouterLink to="/components/heading" class="underline decoration-ui-fg-muted underline-offset-4">
            Heading
          </RouterLink>
          components in the UI route. You also use the <code>ChatBubbleLeftRight</code> icon from the
          <RouterLink to="/icons/overview" class="underline decoration-ui-fg-muted underline-offset-4">
            Icons package
          </RouterLink>
          for the UI route's sidebar item.
        </p>

        <hr class="border-ui-border-base" />

        <h2 id="related-resources" class="docs-section-title">
          Related Resources
        </h2>

        <p class="max-w-[780px]">
          If you're building admin extensions with {{ siteBrand.name }}, check out the following documentation
          guides:
        </p>

        <ul class="max-w-[780px]">
          <li>
            <a
              href="https://docs.medusajs.com/learn/fundamentals/admin/widgets"
              target="_blank"
              rel="noreferrer"
              class="underline decoration-ui-fg-muted underline-offset-4"
            >
              Widgets
            </a>
            : Insert custom components into existing admin pages.
          </li>
          <li>
            <a
              href="https://docs.medusajs.com/learn/fundamentals/admin/ui-routes"
              target="_blank"
              rel="noreferrer"
              class="underline decoration-ui-fg-muted underline-offset-4"
            >
              UI Routes
            </a>
            : Add new pages to the admin interface.
          </li>
          <li>
            <a
              href="https://docs.medusajs.com/resources/admin-components"
              target="_blank"
              rel="noreferrer"
              class="underline decoration-ui-fg-muted underline-offset-4"
            >
              Components & Layouts
            </a>
            : Use {{ siteBrand.name }} to implement common admin components and layouts for a consistent
            design in your customizations.
          </li>
        </ul>
      </div>
    </article>

    <RightToc :items="tocItems" />
  </div>

  <div v-else-if="page" class="docs-flow">
    <h1 class="docs-page-title">{{ page.title }}</h1>
    <p>{{ page.description }}</p>
  </div>
</template>
