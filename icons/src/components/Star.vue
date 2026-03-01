<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g clip-path="url(#a)">
          <path
            :stroke="color"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M7.5 1.056 9.491 5.09l4.453.647-3.222 3.142.761 4.434L7.5 11.22l-3.983 2.093.76-4.434-3.221-3.142 4.453-.647z"
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
  name: 'Star',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>