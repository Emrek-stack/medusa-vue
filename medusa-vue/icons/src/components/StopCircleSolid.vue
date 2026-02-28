<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <path
          :fill="color"
          fill-rule="evenodd"
          d="M7.5.389c3.92 0 7.111 3.19 7.111 7.111s-3.19 7.111-7.111 7.111S.388 11.421.388 7.5 3.578.389 7.5.389M5.678 4.5c-.65 0-1.178.528-1.178 1.179V9.32c0 .651.528 1.179 1.178 1.179h3.643c.65 0 1.179-.528 1.179-1.179V5.68c0-.651-.528-1.179-1.179-1.179z"
          clip-rule="evenodd"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'StopCircleSolid',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>