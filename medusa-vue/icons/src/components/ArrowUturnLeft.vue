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
          <path d="M1.5 5.056h8.667a3.333 3.333 0 0 1 0 6.666H6.833" />
          <path d="M4.611 8.167 1.5 5.056l3.111-3.112" />
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
  name: 'ArrowUturnLeft',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>