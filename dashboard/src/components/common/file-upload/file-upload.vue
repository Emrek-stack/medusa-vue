<script setup lang="ts">
import { ref } from "vue"
import { ArrowDownTray } from "@minima-vue/icons"
import { Text } from "@minima-vue/ui"

export interface FileType {
  id: string
  url: string
  file: File
}

export interface RejectedFile {
  file: File
  reason: "size" | "format"
}

interface FileUploadProps {
  label: string
  multiple?: boolean
  hint?: string
  hasError?: boolean
  formats: string[]
  maxFileSize?: number
}

const props = withDefaults(defineProps<FileUploadProps>(), {
  multiple: true,
  hasError: false,
  maxFileSize: 1024 * 1024,
})

const emit = defineEmits<{
  (e: "uploaded", files: FileType[], rejectedFiles: RejectedFile[]): void
}>()

const isDragOver = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)
const dropZoneRef = ref<HTMLButtonElement | null>(null)

const openFileSelector = () => inputRef.value?.click()

const handleUploaded = (files: FileList | null) => {
  if (!files) {
    return
  }

  const validFiles: FileType[] = []
  const rejectedFiles: RejectedFile[] = []

  Array.from(files).forEach((file) => {
    if (file.size > props.maxFileSize) {
      rejectedFiles.push({ file, reason: "size" })
      return
    }

    validFiles.push({
      id: Math.random().toString(36).slice(2),
      url: URL.createObjectURL(file),
      file,
    })
  })

  emit("uploaded", validFiles, rejectedFiles)
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  event.stopPropagation()
  isDragOver.value = false
  handleUploaded(event.dataTransfer?.files ?? null)
}

const handleDragEnter = (event: DragEvent) => {
  event.preventDefault()
  event.stopPropagation()
  isDragOver.value = true
}

const handleDragLeave = (event: DragEvent) => {
  event.preventDefault()
  event.stopPropagation()

  if (dropZoneRef.value?.contains(event.relatedTarget as Node)) {
    return
  }

  isDragOver.value = false
}
</script>

<template>
  <div>
    <button
      ref="dropZoneRef"
      type="button"
      class="bg-ui-bg-component border-ui-border-strong transition-fg group flex w-full flex-col items-center gap-y-2 rounded-lg border border-dashed p-8 hover:border-ui-border-interactive focus:border-ui-border-interactive"
      :class="{
        '!border-ui-border-error': hasError,
        '!border-ui-border-interactive': isDragOver,
      }"
      @click="openFileSelector"
      @drop="handleDrop"
      @dragover.prevent
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
    >
      <div class="text-ui-fg-subtle group-disabled:text-ui-fg-disabled flex items-center gap-x-2">
        <ArrowDownTray />
        <Text>{{ label }}</Text>
      </div>
      <Text v-if="hint" size="small" leading="compact" class="text-ui-fg-muted group-disabled:text-ui-fg-disabled">
        {{ hint }}
      </Text>
    </button>

    <input
      ref="inputRef"
      hidden
      type="file"
      :accept="formats.join(',')"
      :multiple="multiple"
      @change="(event) => handleUploaded((event.target as HTMLInputElement).files)"
    />
  </div>
</template>
