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
          <path d="M7.722 7.5h-3.11M10.389 3.722H9.5c-.982 0-1.778.796-1.778 1.778v4c0 .982.796 1.778 1.778 1.778h.889" />
          <path d="M10.389 3.722a1.778 1.778 0 1 0 3.555 0 1.778 1.778 0 0 0-3.555 0M10.389 11.278a1.778 1.778 0 1 0 3.556 0 1.778 1.778 0 0 0-3.556 0M1.056 7.5a1.778 1.778 0 1 0 3.555 0 1.778 1.778 0 0 0-3.555 0" />
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
  name: 'Channels',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>