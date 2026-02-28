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
          d="M5.75 11.75 10 7.5 5.75 3.25"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ChevronRightMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>