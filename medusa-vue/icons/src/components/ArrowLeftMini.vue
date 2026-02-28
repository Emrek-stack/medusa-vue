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
          d="M1.944 7.5h11.112M5.722 11.278 1.944 7.5l3.778-3.778"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ArrowLeftMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>