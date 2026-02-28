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
          <path d="m4.167 10.611-3.111-3.11 3.11-3.112M10.833 10.611l3.111-3.11-3.11-3.112M6.167 13.055l2.666-11.11" />
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
  name: 'Code',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>