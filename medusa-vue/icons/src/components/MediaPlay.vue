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
          d="M4.162 2.058 12.6 6.73a.877.877 0 0 1 0 1.54l-8.438 4.672c-.594.33-1.329-.096-1.329-.77V2.828c0-.674.734-1.1 1.33-.77"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'MediaPlay',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>