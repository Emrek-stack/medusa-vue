<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M8.05 13v-.55a5.5 5.5 0 0 0-5.5-5.5H2M2 2h.55C8.321 2 13 6.679 13 12.45V13m-9.9-.55a.55.55 0 1 1-1.1 0 .55.55 0 0 1 1.1 0"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Rss',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>