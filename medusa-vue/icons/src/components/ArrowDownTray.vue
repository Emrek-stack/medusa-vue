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
          d="M13.056 9.944v1.334c0 .982-.796 1.778-1.778 1.778H3.722a1.777 1.777 0 0 1-1.778-1.778V9.944M4.389 5.5 7.5 8.611 10.611 5.5M7.5 8.611V1.944"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ArrowDownTray',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>