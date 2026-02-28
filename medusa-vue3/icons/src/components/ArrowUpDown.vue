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
          d="M7.056 10.611 9.944 13.5l2.89-2.889M9.944 13.5V6.389M2.167 4.389 5.056 1.5l2.888 2.889M5.056 1.5v7.111"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ArrowUpDown',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>