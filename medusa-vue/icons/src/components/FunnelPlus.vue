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
          d="M11.278 7.722v4.445M8.833 7.5l4.223-5.556H1.944L6.167 7.5v6.444l2.666-1.333v-.467M13.5 9.944H9.056"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'FunnelPlus',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>