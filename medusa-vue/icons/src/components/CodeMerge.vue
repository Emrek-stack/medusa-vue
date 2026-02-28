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
          d="M3.722 5.056v8.889M9.278 10.611a5.555 5.555 0 0 1-5.556-5.555M3.722 5.056a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M11.278 12.61a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'CodeMerge',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>