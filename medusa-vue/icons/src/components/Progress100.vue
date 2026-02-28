<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g clip-path="url(#a)">
          <circle cx="7.5" cy="7.5" r="6.36" :stroke="color" stroke-width="1.5" />
          <path
            :fill="color"
            d="M11.61 7.5a4.11 4.11 0 1 1-8.22 0 4.11 4.11 0 0 1 8.22 0m-5.754 0a1.644 1.644 0 1 0 3.288 0 1.644 1.644 0 0 0-3.288 0"
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
  name: 'Progress100',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>