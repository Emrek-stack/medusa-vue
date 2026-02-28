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
          d="m3.056 12.611 5.187-5.188a1.777 1.777 0 0 1 2.514 0l3.187 3.188"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M2.833 12.611h9.334c.982 0 1.777-.796 1.777-1.777V4.167c0-.982-.796-1.778-1.777-1.778H2.833c-.982 0-1.777.796-1.777 1.778v6.667c0 .981.795 1.777 1.777 1.777"
        />
        <path
          :fill="color"
          d="M4.611 7.056a1.111 1.111 0 1 0 0-2.222 1.111 1.111 0 0 0 0 2.222"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Photo',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>