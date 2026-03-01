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
          d="M13.056 5.944h-4v-4M9.056 5.944l4-4M5.944 13.056v-4h-4M5.944 9.056l-4 4"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ArrowsReduceDiagonal',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>