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
          d="M6.833 11.278 3.056 7.5l3.777-3.778M11.056 11.278 7.278 7.5l3.778-3.778"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ChevronDoubleLeft',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>