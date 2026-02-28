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
          fill-rule="evenodd"
          d="M6.306 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M1.194 7.5a1.194 1.194 0 1 1 2.39 0 1.194 1.194 0 0 1-2.39 0M11.417 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0"
          clip-rule="evenodd"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'EllipsisHorizontal',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>