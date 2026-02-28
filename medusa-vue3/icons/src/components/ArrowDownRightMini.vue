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
          d="M13.056 8.167H3.722a1.777 1.777 0 0 1-1.778-1.778V2.833"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m9.278 4.389 3.778 3.778-3.778 3.778"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ArrowDownRightMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>