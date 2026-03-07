<script setup lang="ts" generic="TData extends { metadata?: Record<string, unknown> | null }">
import { computed } from "vue"
import { ArrowUpRightOnBox } from "@minima-vue/icons"
import { Badge, Container, Heading, IconButton } from "@minima-vue/ui"
import { RouterLink } from "vue-router"

interface MetadataSectionProps {
  data: TData
  href?: string
}

const props = withDefaults(defineProps<MetadataSectionProps>(), {
  href: "metadata/edit",
})

const count = computed(() => Object.keys(props.data?.metadata || {}).length)
</script>

<template>
  <Container class="flex items-center justify-between">
    <div class="flex items-center gap-x-3">
      <Heading level="h2">Metadata</Heading>
      <Badge size="2xsmall" rounded="full">{{ count }}</Badge>
    </div>
    <IconButton size="small" variant="transparent" class="text-ui-fg-muted hover:text-ui-fg-subtle" as-child>
      <RouterLink :to="href">
        <ArrowUpRightOnBox />
      </RouterLink>
    </IconButton>
  </Container>
</template>
