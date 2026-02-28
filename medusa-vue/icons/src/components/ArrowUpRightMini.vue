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
          d="m12.167 2.833-9.334 9.334M6.824 2.833h5.343v5.342"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ArrowUpRightMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>