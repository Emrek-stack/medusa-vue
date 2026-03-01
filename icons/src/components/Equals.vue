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
          d="M1.944 5.5h11.112M1.944 9.5h11.112"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Equals',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>