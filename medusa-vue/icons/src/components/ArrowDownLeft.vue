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
          d="M1.944 8.167h9.334c.982 0 1.778-.796 1.778-1.778V2.833"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M5.722 4.389 1.944 8.167l3.778 3.778"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ArrowDownLeft',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>