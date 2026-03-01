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
          d="M1.5 7.5h12M1.5 2.833h12M1.5 12.167h12"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'BarsThree',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>