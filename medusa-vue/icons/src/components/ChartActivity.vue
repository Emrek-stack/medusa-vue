<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M13.944 7.278h-2.041a.89.89 0 0 0-.837.587l-1.464 4.067a.332.332 0 0 1-.627-.007l-2.95-8.85a.332.332 0 0 0-.627-.007L3.934 7.135a.89.89 0 0 1-.837.587H1.056"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ChartActivity',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>