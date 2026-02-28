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
          d="M7.5 1.056v12.889M4.611 13.944h5.778M7.5 5.056H2.952a.9.9 0 0 1-.594-.229L1.123 3.716a.89.89 0 0 1 0-1.322l1.235-1.11a.9.9 0 0 1 .594-.23H7.5M9.718 9.056h2.325c.22 0 .431-.081.595-.229l1.234-1.111a.89.89 0 0 0 0-1.322l-1.234-1.11a.9.9 0 0 0-.595-.23H9.718"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Directions',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>