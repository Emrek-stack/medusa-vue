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
          <path d="M2.833 13.056s3.2-.505 4.041-1.347l6.513-6.513a1.904 1.904 0 1 0-2.693-2.693L4.18 9.016c-.842.841-1.347 4.04-1.347 4.04zM6.833 1.944H1.056M3.278 5.056H1.056" />
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
  name: 'PencilSquare',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>