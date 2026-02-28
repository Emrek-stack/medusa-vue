<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g clip-path="url(#a)">
          <g clip-path="url(#b)">
            <path
              :stroke="color"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M13.056 5.278 7.5 10.833 1.944 5.278"
            />
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h15v15H0z" />
          </clipPath>
          <clipPath id="b">
            <path fill="#fff" d="M-.5-.5h16v16h-16z" />
          </clipPath>
        </defs>
      </svg>
</template>

<script lang="ts">
export default {
  name: 'ChevronDownMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>