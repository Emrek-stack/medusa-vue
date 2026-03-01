<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="#E11D48" />
        <circle cx="7.5" cy="7.5" r="7.5" fill="url(#a)" fillOpacity="0.2" />
        <circle
          cx="7.5"
          cy="7.5"
          r="7.25"
          :stroke="color"
          strokeOpacity="0.24"
          stroke-width="0.5"
        />
        <path
          fill="#fff"
          d="M10.547 8.25H4.453c-.388 0-.703-.336-.703-.75s.315-.75.703-.75h6.094c.388 0 .703.336.703.75s-.315.75-.703.75"
        />
        <defs>
          <linearGradient
            id="a"
            x1="7.5"
            x2="7.5"
            y1="0"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff" />
            <stop offset="1" stop-color="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
</template>

<script lang="ts">
export default {
  name: 'MinusBadge',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>