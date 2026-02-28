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
          d="M13.266 4.324 9.787.844a1.55 1.55 0 0 0-1.1-.455H3.723a2.446 2.446 0 0 0-2.444 2.444v9.334a2.446 2.446 0 0 0 2.444 2.444h7.556a2.446 2.446 0 0 0 2.444-2.444V5.424c0-.416-.162-.807-.456-1.1m-8.655.51H6.39a.667.667 0 0 1 0 1.333H4.61a.667.667 0 0 1 0-1.334M10.39 11.5H4.61a.667.667 0 0 1 0-1.333h5.778a.667.667 0 0 1 0 1.333m0-2.667H4.61a.667.667 0 0 1 0-1.333h5.778a.667.667 0 0 1 0 1.333m1.94-3.555H9.721a.89.89 0 0 1-.889-.89V1.793l.012-.004 3.486 3.485z"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'DocumentTextSolid',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>