<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <path
          :fill="color"
          d="M11.278 1.278H3.722a2.444 2.444 0 0 0-2.444 2.444v7.556a2.444 2.444 0 0 0 2.444 2.444h7.556a2.444 2.444 0 0 0 2.444-2.444V3.722a2.444 2.444 0 0 0-2.444-2.444"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'MediaStopSolid',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>