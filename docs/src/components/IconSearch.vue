<script setup lang="ts">
import { computed, ref } from "vue"
import { Container, Input, Text, Tooltip } from "@minima-vue/ui"
import * as Icons from "@minima-vue/icons"

const query = ref("")
const copiedName = ref<string | null>(null)

const iconEntries = Object.entries(Icons)
  .filter(([name]) => name !== "default")
  .sort(([left], [right]) => left.localeCompare(right))

const escapeStringRegexp = (value: string) =>
  value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")

const results = computed(() => {
  const cleanQuery = escapeStringRegexp(query.value.trim().replace(/\s/g, " "))

  if (!cleanQuery) {
    return iconEntries
  }

  const pattern = new RegExp(`\\b${cleanQuery}`, "i")
  return iconEntries.filter(([name]) => pattern.test(name))
})

const copyIconName = async (name: string) => {
  try {
    await navigator.clipboard.writeText(name)
  } catch {
    const input = document.createElement("input")
    input.value = name
    document.body.appendChild(input)
    input.select()
    document.execCommand("copy")
    document.body.removeChild(input)
  }

  copiedName.value = name

  window.setTimeout(() => {
    if (copiedName.value === name) {
      copiedName.value = null
    }
  }, 1200)
}
</script>

<template>
  <div class="mt-8 flex flex-col gap-y-2">
    <Input v-model="query" type="search" />
    <Container>
      <div
        v-if="results.length === 0"
        class="flex min-h-[300px] items-center justify-center text-ui-fg-muted"
      >
        <Text>
          No results found for
          <Text as="span" weight="plus" class="ml-1">{{ query }}</Text>
        </Text>
      </div>

      <div
        v-else
        class="grid w-full grid-cols-4 gap-8 md:grid-cols-6 lg:grid-cols-8"
      >
        <div
          v-for="[name, component] in results"
          :key="name"
          class="flex h-full w-full items-center justify-center"
        >
          <Tooltip :content="copiedName === name ? 'Copied' : name" :open="copiedName === name ? true : undefined">
            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-ui-border-base"
              @click="copyIconName(name)"
            >
              <span class="sr-only">Icon named {{ name }}</span>
              <div class="flex h-8 w-8 items-center justify-center rounded-[4px] bg-ui-bg-component text-ui-fg-base">
                <component :is="component" />
              </div>
            </button>
          </Tooltip>
        </div>
      </div>
    </Container>
  </div>
</template>
