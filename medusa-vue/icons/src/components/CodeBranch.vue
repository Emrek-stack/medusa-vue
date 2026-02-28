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
          d="M3.722 4.61v5.779M11.278 4.61v.89c0 .982-.796 1.778-1.778 1.778h-4c-.982 0-1.778.795-1.778 1.777M3.722 4.611a1.778 1.778 0 1 0 0-3.555 1.778 1.778 0 0 0 0 3.555"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M11.278 4.611a1.778 1.778 0 1 0 0-3.555 1.778 1.778 0 0 0 0 3.555M3.722 13.944a1.778 1.778 0 1 0 0-3.555 1.778 1.778 0 0 0 0 3.555"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'CodeBranch',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>