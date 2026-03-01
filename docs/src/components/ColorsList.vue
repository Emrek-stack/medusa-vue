<script setup lang="ts">
import { ref } from "vue"
import { Tooltip } from "@minima-vue/ui"
import RichText from "@docs/components/RichText.vue"
import { colorSections, type ColorEntry } from "@docs/data/colors"

const copiedName = ref<string | null>(null)

const copyClassName = async (name: string) => {
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

const tooltipLabel = (color: ColorEntry) =>
  copiedName.value === color.name ? "Copied" : color.name
</script>

<template>
  <div>
    <section
      v-for="(section, index) in colorSections"
      :key="section.title"
      class="mb-16"
    >
      <h2 :id="section.id" class="docs-section-title">
        {{ section.title }}
      </h2>

      <RichText
        v-if="section.description"
        :content="section.description"
      />

      <div class="mb-8 grid grid-cols-1 gap-4 gap-y-10 xs:grid-cols-2 sm:grid-cols-3">
        <Tooltip
          v-for="color in section.colors"
          :key="color.name"
          :content="tooltipLabel(color)"
          :open="copiedName === color.name ? true : undefined"
        >
          <button
            type="button"
            class="flex w-fit flex-row items-center gap-x-2 text-left"
            @click="copyClassName(color.name)"
          >
            <div class="h-[48px] w-[48px] rounded-lg border border-ui-border-base p-1">
              <div
                class="h-full w-full rounded-[4px]"
                :style="{ background: color.code }"
              />
            </div>
            <div class="flex flex-col items-start">
              <p class="txt-compact-xsmall-plus text-ui-fg-base">
                {{ color.name }}
              </p>
              <p class="txt-compact-xsmall text-ui-fg-subtle">
                {{ color.code }}
              </p>
            </div>
          </button>
        </Tooltip>
      </div>

      <hr
        v-if="index !== colorSections.length - 1"
        class="border-ui-border-base"
      >
    </section>
  </div>
</template>
