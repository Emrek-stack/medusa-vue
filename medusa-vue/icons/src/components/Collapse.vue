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
          d="m10 12 2-2 2 2M14 3l-2 2-2-2M1 12h6M1 3h6M1 7.5h6"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Collapse',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>