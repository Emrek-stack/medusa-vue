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
          d="M8.167 1.944h3.11c.983 0 1.779.796 1.779 1.778v7.556c0 .982-.796 1.778-1.778 1.778H8.167"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M5.5 10.611 8.611 7.5 5.5 4.389M8.611 7.5H1.944"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ArrowRightOnRectangle',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>