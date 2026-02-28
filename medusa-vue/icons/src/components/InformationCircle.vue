<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g :stroke="color" stroke-width="1.5" clip-path="url(#a)">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m6.829 6.784.037-.018a.671.671 0 0 1 .95.763l-.633 2.537a.67.67 0 0 0 .951.763l.037-.018M7.5 4.1h.007v.007H7.5z"
          />
          <circle cx="7.5" cy="7.5" r="6.36" />
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
  name: 'InformationCircle',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>