<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g clip-path="url(#a)">
          <circle
            cx="7.5"
            cy="7.5"
            r="6.443"
            :stroke="color"
            stroke-width="1.333"
          />
          <path :fill="color" d="M7.5 11.944a4.444 4.444 0 0 0 0-8.888z" />
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
  name: 'CircleHalfSolid',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>