<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g
          :fill="color"
          fill-rule="evenodd"
          clip-path="url(#a)"
          clip-rule="evenodd"
        >
          <path d="M2.815 4.766a.65.65 0 0 1 .92 0L6.008 7.04a.65.65 0 0 1 0 .92l-2.275 2.275a.65.65 0 0 1-.919 0L.54 7.96a.65.65 0 0 1 0-.92zM7.04.54a.65.65 0 0 1 .92 0l2.274 2.276a.65.65 0 0 1 0 .919L7.96 6.01a.65.65 0 0 1-.919 0L4.765 3.735a.65.65 0 0 1 0-.92zM11.265 4.766a.65.65 0 0 1 .92 0L14.46 7.04a.65.65 0 0 1 0 .92l-2.275 2.275a.65.65 0 0 1-.92 0L8.99 7.96a.65.65 0 0 1 0-.92zM7.04 8.99a.65.65 0 0 1 .92 0l2.274 2.275a.65.65 0 0 1 0 .92L7.96 14.459a.65.65 0 0 1-.919 0l-2.275-2.274a.65.65 0 0 1 0-.92z" />
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
  name: 'ComponentSolid',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>