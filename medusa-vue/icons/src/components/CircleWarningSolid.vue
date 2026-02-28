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
          d="M7.5 1.5c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6M6.75 5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0zm.75 6.25a.877.877 0 0 1-.875-.875c0-.482.393-.875.875-.875s.875.393.875.875a.877.877 0 0 1-.875.875"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'CircleWarningSolid',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>