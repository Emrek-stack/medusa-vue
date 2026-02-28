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
          d="M7.5 13.056V1.944M11.278 9.278 7.5 13.056 3.722 9.278"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ArrowDownMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>