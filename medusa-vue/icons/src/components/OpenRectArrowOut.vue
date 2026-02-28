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
          d="M8.167 1.944h3.11c.983 0 1.779.796 1.779 1.778v7.556c0 .982-.796 1.777-1.778 1.777H8.167M5.056 4.389l-3.112 3.11 3.112 3.112M1.944 7.5h6.667"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'OpenRectArrowOut',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>