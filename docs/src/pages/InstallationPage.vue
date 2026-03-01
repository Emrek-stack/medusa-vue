<script setup lang="ts">
import { computed } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { Alert } from "@minima-vue/ui"
import CodeExample from "@docs/components/CodeExample.vue"
import DocsCodeBlock from "@docs/components/DocsCodeBlock.vue"
import PageHeader from "@docs/components/PageHeader.vue"
import RightToc from "@docs/components/RightToc.vue"
import { installationDocs } from "@docs/data/content"
import { siteBrand } from "@docs/data/site"

const route = useRoute()
const page = computed(() => installationDocs[route.params.slug as keyof typeof installationDocs])
const isMedusaAdminExtension = computed(() => route.params.slug === "medusa-admin-extension")

const tocItems = computed(() => {
  if (!isMedusaAdminExtension.value) {
    return []
  }

  return [
    { id: "use-minima-vue-in-admin-extensions", title: "Use Minima Vue in Admin Extensions", level: 2 },
    { id: "related-resources", title: "Related Resources", level: 2 },
  ]
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
</script>

<template>
  <div v-if="page && isMedusaAdminExtension" class="docs-page-grid">
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

  <div v-else-if="page" class="space-y-8">
    <PageHeader eyebrow="Installation" :title="page.title" :description="page.description" />
    <Alert variant="info">
      Import <code>@minima-vue/ui/style.css</code> once, then apply the <code>@minima-vue/ui-preset</code>
      Tailwind preset so the CSS variables and utility classes align with component expectations.
    </Alert>
    <CodeExample label="Install Command" :code="page.installCommand" />
    <section class="space-y-6">
      <CodeExample
        v-for="file in page.files"
        :key="file.label"
        :label="file.label"
        :code="file.code"
      />
    </section>
  </div>
</template>
