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
          d="M1.056 7.5a6.445 6.445 0 1 0 .48-2.444"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m1.171 2.438.363 2.618 2.617-.362M7.5 3.722V7.5l2.889 2"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'History',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>