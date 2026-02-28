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
          d="M5.5 13.056h4M7.5 1.944v11.111M12.611 3.278l-.667-1.334H3.057l-.667 1.334"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Typography',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>