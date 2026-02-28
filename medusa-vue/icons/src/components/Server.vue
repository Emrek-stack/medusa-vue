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
          <path d="M12.611 8.167H2.39c-.736 0-1.333.597-1.333 1.333v1.778c0 .736.597 1.333 1.333 1.333H12.61c.736 0 1.333-.597 1.333-1.333V9.5c0-.736-.597-1.333-1.333-1.333" />
          <path d="m1.136 9.046 1.96-5.886a1.78 1.78 0 0 1 1.687-1.216h5.436c.766 0 1.446.49 1.687 1.216l1.96 5.886M3.278 10.389h2.444" />
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
  name: 'Server',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>