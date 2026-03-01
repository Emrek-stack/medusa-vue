<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g clip-path="url(#a)">
          <path
            :fill="color"
            d="M.75 10.833V3.722a2.527 2.527 0 0 1 2.527-2.528H4.9c.696 0 1.358.287 1.833.789l.093.102 1.131 1.332h3.766a2.527 2.527 0 0 1 2.527 2.527v4.89a2.53 2.53 0 0 1-2.527 2.528H3.277A2.53 2.53 0 0 1 .75 10.833"
          />
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
  name: 'Folder',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>