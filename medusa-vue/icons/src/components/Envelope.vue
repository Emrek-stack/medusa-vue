<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          clip-path="url(#a)"
        >
          <path d="M1.056 4.611 7.07 7.93a.89.89 0 0 0 .858 0l6.015-3.318" />
          <path d="M2.833 12.611h9.334c.982 0 1.777-.796 1.777-1.778V4.167c0-.982-.796-1.778-1.777-1.778H2.833c-.981 0-1.777.796-1.777 1.778v6.666c0 .982.796 1.778 1.777 1.778" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h15v15H0z" />
          </clipPath>
        </defs>
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Envelope',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>