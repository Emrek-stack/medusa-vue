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
          d="m13.556 1.444-7.25 7.25M13.675 1.927 9.983 13.414a.478.478 0 0 1-.869.094L6.306 8.694 1.492 5.886a.478.478 0 0 1 .094-.869l11.487-3.692c.371-.12.721.231.602.602"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'PaperPlane',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>