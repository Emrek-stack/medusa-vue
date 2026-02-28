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
          d="M6.389 9.5a1.112 1.112 0 0 1 2.222 0M1.134 8.857l1.01-5.492A1.778 1.778 0 0 1 4.68 2.133M13.866 8.857l-1.01-5.492a1.778 1.778 0 0 0-2.536-1.232"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M3.722 12.167a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334M11.278 12.167a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Glasses',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>