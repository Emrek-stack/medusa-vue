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
          d="M1.944 9.722 7.5 4.167l5.556 5.555"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ChevronUpMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>