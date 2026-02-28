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
          d="M8.167 3.722 11.944 7.5l-3.777 3.778M3.944 3.722 7.722 7.5l-3.778 3.778"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ChevronDoubleRightMiniSolid',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>