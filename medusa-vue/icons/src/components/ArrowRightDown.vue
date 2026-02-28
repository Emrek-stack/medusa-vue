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
          d="M8.167 13.056V3.723c0-.983-.796-1.778-1.778-1.778H2.833"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m4.389 9.278 3.778 3.778 3.778-3.778"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ArrowRightDown',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>