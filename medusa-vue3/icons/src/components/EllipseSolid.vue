<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g clip-path="url(#a)">
          <path :fill="color" d="M7.5 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
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
  name: 'EllipseSolid',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>