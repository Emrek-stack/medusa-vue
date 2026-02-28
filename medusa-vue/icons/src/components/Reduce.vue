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
          d="M5.5 1.944v1.778c0 .982-.796 1.778-1.778 1.778H1.944M13.056 5.5h-1.778A1.777 1.777 0 0 1 9.5 3.722V1.944M9.5 13.056v-1.778c0-.982.796-1.778 1.778-1.778h1.778M1.944 9.5h1.778c.982 0 1.778.796 1.778 1.778v1.778"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Reduce',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>