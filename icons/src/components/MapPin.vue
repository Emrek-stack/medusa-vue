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
          d="M11.437 4.814c0 2.319-3.937 6.464-3.937 6.464S3.563 7.134 3.563 4.814c0-2.378 2.035-3.758 3.937-3.758s3.937 1.38 3.937 3.758"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M7.5 6.167a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M13.056 13.945H1.944"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'MapPin',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>