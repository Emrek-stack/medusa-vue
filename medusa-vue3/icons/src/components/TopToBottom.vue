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
          <path d="m9.5 9.722-2 2 2 2M1.056 7.5h4M1.056 11.722h4M1.056 3.278h4" />
          <path d="M7.5 11.722h2.222a4.223 4.223 0 0 0 0-8.444H8.167" />
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
  name: 'TopToBottom',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>