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
          d="M11.278 1.056H3.722c-.982 0-1.778.796-1.778 1.777v9.334c0 .982.796 1.778 1.778 1.778h7.556c.982 0 1.778-.796 1.778-1.778V2.833c0-.981-.796-1.777-1.778-1.777M6.389 3.278H8.61"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Tablet',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>