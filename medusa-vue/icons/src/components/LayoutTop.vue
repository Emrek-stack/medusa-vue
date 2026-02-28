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
          <path d="M2.833 13.25h9.334c.982 0 1.777-.824 1.777-1.84V3.59c0-1.016-.796-1.84-1.777-1.84H2.833c-.981 0-1.777.824-1.777 1.84v7.82c0 1.016.796 1.84 1.777 1.84M3.722 4.611h7.556" />
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
  name: 'LayoutTop',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>