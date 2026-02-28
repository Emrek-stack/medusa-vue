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
          d="m11.25 3.75-7.5 7.5M3.75 3.75l7.5 7.5"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'XMarkMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>