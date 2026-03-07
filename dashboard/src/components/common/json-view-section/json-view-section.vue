<script setup lang="ts">
import { computed } from "vue"
import { ArrowUpRightOnBox, SquareTwoStack } from "@minima-vue/icons"
import { Badge, Container, Drawer, DrawerBody, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger, Heading, IconButton, Kbd, Text, toast } from "@minima-vue/ui"

interface JsonViewSectionProps {
  data: Record<string, unknown>
  title?: string
}

const props = withDefaults(defineProps<JsonViewSectionProps>(), {
  title: "JSON",
})

const numberOfKeys = computed(() => Object.keys(props.data || {}).length)
const pretty = computed(() => JSON.stringify(props.data, null, 2))

const copy = async () => {
  await navigator.clipboard.writeText(pretty.value)
  toast.success("JSON copied")
}
</script>

<template>
  <Container class="flex items-center justify-between px-6 py-4">
    <div class="flex items-center gap-x-4">
      <Heading level="h2">{{ title }}</Heading>
      <Badge size="2xsmall" rounded="full">{{ numberOfKeys }} keys</Badge>
    </div>

    <Drawer>
      <DrawerTrigger as-child>
        <IconButton size="small" variant="transparent" class="text-ui-fg-muted hover:text-ui-fg-subtle">
          <ArrowUpRightOnBox />
        </IconButton>
      </DrawerTrigger>

      <DrawerContent class="bg-ui-contrast-bg-base text-ui-code-fg-subtle overflow-hidden max-w-[900px]">
        <DrawerHeader class="bg-ui-code-bg-base flex items-center justify-between px-6 py-4">
          <DrawerTitle as-child>
            <Heading class="text-ui-contrast-fg-primary">JSON Viewer</Heading>
          </DrawerTitle>
          <DrawerDescription class="sr-only">Raw JSON view</DrawerDescription>
          <div class="flex items-center gap-x-2">
            <Kbd class="bg-ui-contrast-bg-subtle border-ui-contrast-border-base text-ui-contrast-fg-secondary">esc</Kbd>
            <IconButton size="small" variant="transparent" @click="copy">
              <SquareTwoStack />
            </IconButton>
          </div>
        </DrawerHeader>

        <DrawerBody class="p-3">
          <div class="bg-ui-contrast-bg-subtle rounded-lg p-3">
            <Text as="pre" class="font-mono text-xs whitespace-pre-wrap break-all">{{ pretty }}</Text>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </Container>
</template>
