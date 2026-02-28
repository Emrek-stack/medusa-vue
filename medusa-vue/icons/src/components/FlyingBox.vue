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
          d="M7.5 1.5v5.333M11.278 4.167H3.722c-.982 0-1.778.796-1.778 1.777v5.334c0 .982.796 1.777 1.778 1.777h7.556c.982 0 1.778-.795 1.778-1.777V5.944c0-.981-.796-1.777-1.778-1.777"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m2.167 5.086 1.288-2.598c.3-.605.917-.988 1.593-.988h4.904c.676 0 1.293.383 1.593.988l1.288 2.599M4.167 10.833h1.777"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'FlyingBox',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>