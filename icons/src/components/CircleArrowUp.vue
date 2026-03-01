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
          d="M5.278 6.834 7.5 4.61l2.222 2.223M7.5 4.611v5.778"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'CircleArrowUp',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>