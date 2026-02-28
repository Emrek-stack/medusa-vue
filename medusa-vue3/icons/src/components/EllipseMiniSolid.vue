<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <circle cx="7.5" cy="7.5" r="2" :fill="color" />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'EllipseMiniSolid',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>