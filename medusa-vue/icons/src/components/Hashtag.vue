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
          stroke-width="1.333"
          d="M2.833 5.056h10.223M1.944 9.944h10.223M6.285 1.944 4.2 13.056M10.799 1.944 8.715 13.056"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Hashtag',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>