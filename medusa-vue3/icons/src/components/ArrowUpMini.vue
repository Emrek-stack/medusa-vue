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
          d="M7.5 1.944v11.112M3.722 5.722 7.5 1.944l3.778 3.778"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ArrowUpMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>