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
          d="m8.611 10.834 2.222 2.222 2.223-2.222M10.833 13.056v-8M1.944 8.166h5.778M1.944 5.056h5.778M1.944 1.944h8.89"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'BarsArrowDown',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>