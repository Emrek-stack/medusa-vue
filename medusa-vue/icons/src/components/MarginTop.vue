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
          d="M1.944 1.944h11.112M10.389 9.5v-4a.89.89 0 0 0-.889-.889h-4a.89.89 0 0 0-.889.89v4c0 .49.398.888.889.888h4c.49 0 .889-.398.889-.889"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'MarginTop',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>