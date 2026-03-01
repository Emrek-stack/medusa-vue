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
          <path d="M9.196 5.649h4.22l-3.84 4.63h4.09M3.647 10.186h3.537L4.02 14h3.368H4.02M1.334 1h5.108L1.716 6.697h4.99" />
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
  name: 'Snooze',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>