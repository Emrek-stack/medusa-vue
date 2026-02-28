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
          d="M1.944 12.611h11.112M1.944 9.5h11.112M9.056 6.389h4M9.056 3.278h4M6.568 6.833 4.548 1.5h-.555L1.976 6.833M2.48 5.5h3.583"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'DropCap',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>