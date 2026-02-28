<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <path
          :fill="color"
          d="M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m2.889 7.778H8.167v2.222a.667.667 0 0 1-1.334 0V8.167H4.611a.667.667 0 0 1 0-1.334h2.222V4.611a.667.667 0 0 1 1.334 0v2.222h2.222a.667.667 0 0 1 0 1.334"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'CirclePlus',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>