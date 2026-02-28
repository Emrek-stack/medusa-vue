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
          <path d="M1.356 8.507c-.4-.607-.4-1.406 0-2.014.905-1.371 2.9-3.66 6.144-3.66s5.24 2.288 6.144 3.66c.4.608.4 1.407 0 2.014-.905 1.371-2.9 3.66-6.144 3.66S2.26 9.88 1.356 8.507" />
          <path d="M7.5 9.945a2.444 2.444 0 1 0 0-4.889 2.444 2.444 0 0 0 0 4.889" />
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
  name: 'EyeMini',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>