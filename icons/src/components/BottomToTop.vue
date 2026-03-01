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
          <path d="m5.5 5.278 2-2-2-2M13.944 7.5h-4M13.944 3.278h-4M13.944 11.722h-4" />
          <path d="M7.5 3.278H5.278a4.223 4.223 0 0 0 0 8.444h1.555" />
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
  name: 'BottomToTop',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>