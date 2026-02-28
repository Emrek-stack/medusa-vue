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
          d="M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89M4.611 7.5h5.778"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'MinusCircle',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>