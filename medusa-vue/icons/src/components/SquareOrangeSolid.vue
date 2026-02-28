<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <rect width="8" height="8" x="3.5" y="3.5" fill="#F97316" rx="2" />
        <rect
          width="7.5"
          height="7.5"
          x="3.75"
          y="3.75"
          :stroke="color"
          strokeOpacity="0.24"
          stroke-width="0.5"
          rx="1.75"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'SquareOrangeSolid',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>