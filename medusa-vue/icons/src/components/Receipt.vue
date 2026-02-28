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
          <path d="M13.944 1.944H1.056M12.611 4.611v9.333l-2.444-1.333L7.5 13.944l-2.667-1.333-2.444 1.333V4.611M4.611 9.5h3.111M4.611 6.833h3.111M9.944 9.5h.445M9.944 6.833h.445" />
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
  name: 'Receipt',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>