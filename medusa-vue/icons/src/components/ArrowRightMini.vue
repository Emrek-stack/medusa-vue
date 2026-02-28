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
          d="M13.056 7.5H1.944M9.278 3.722 13.056 7.5l-3.778 3.778"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ArrowRightMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>