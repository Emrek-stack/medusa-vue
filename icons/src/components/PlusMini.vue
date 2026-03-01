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
          d="M7.5 2.5v10M2.5 7.5h10"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'PlusMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>