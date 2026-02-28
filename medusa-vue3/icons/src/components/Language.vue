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
          d="M1.5 3.278h7.111M5.056 1.5v1.778M3.278 3.278a5.43 5.43 0 0 0 3.577 4.919"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M6.833 3.278C6.478 8.278 1.5 8.61 1.5 8.61M7.722 13.5l2.667-7.111h.444l2.667 7.11M8.556 11.278h4.111"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Language',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>