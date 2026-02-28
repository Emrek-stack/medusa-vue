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
          d="m8.833 12.611-2.666 1.333V7.5L1.944 1.944h11.112L8.833 7.5z"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Funnel',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>