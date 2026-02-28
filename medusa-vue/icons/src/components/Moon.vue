<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g clip-path="url(#a)">
          <path
            :stroke="color"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M11.056 9.945A5.555 5.555 0 0 1 5.5 4.389c0-1.202.385-2.31 1.033-3.22a6.443 6.443 0 0 0 1.19 12.776c2.997 0 5.509-2.05 6.23-4.822a5.5 5.5 0 0 1-2.897.822"
          />
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
  name: 'Moon',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>