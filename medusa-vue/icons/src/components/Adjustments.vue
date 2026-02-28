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
          <path d="M12.611 7.5h.889M1.5 7.5h8.444M7.722 3.278H13.5M1.5 3.278h3.556M7.722 11.722H13.5M1.5 11.722h3.556M9.944 5.722v3.556M5.056 1.5v3.556M5.056 9.944V13.5" />
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
  name: 'Adjustments',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>