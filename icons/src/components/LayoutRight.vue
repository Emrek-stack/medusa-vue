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
          d="M2.833 13.056h9.334c.982 0 1.777-.796 1.777-1.778V3.722c0-.982-.796-1.777-1.777-1.777H2.833c-.981 0-1.777.795-1.777 1.777v7.556c0 .982.796 1.778 1.777 1.778M11.278 4.611v5.778"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'LayoutRight',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>