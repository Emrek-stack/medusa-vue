<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <path fill="url(#a)" d="M14.25 12H.75V3h13.5l-2.834 4.5z" />
        <defs>
          <linearGradient
            id="a"
            x1="15.15"
            x2={-1.275}
            y1="3.626"
            y2="13.751"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#ED7598" />
            <stop offset="0.456" stop-color="#F75650" />
            <stop offset="1" stop-color="#FFA661" />
          </linearGradient>
        </defs>
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Klaviyo',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>