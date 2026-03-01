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
          d="m3.036 7.679 2.857 3.571 6.071-7.5"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'CheckMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>