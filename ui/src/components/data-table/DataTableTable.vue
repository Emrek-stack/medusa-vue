<script setup lang="ts">
import { Table } from "@/components/table"
</script>

<template>
  <div class="overflow-x-auto">
    <Table>
      <slot />
    </Table>
  </div>
</template>
