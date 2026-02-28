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
            d="M7.5 3.39a4.11 4.11 0 0 1 3.325 1.694L8.83 6.534a1.64 1.64 0 0 0-1.33-.678z"
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
  name: 'Progress15',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>