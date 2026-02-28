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
          <path d="m7.907 1.599 5.629 2.897a.754.754 0 0 1 0 1.34L7.907 8.736a.89.89 0 0 1-.814 0L1.464 5.837a.754.754 0 0 1 0-1.34l5.629-2.898a.89.89 0 0 1 .814 0" />
          <path d="M13.944 5.167a9.94 9.94 0 0 0 0 4.472M3.278 9.056v2.889c0 .98 1.89 1.777 4.222 1.777s4.222-.796 4.222-1.777v-2.89" />
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
  name: 'AcademicCap',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>