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
          d="M7.5 1.5c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6m2.853 4.45-3.003 4a.75.75 0 0 1-.546.298l-.054.002a.75.75 0 0 1-.53-.219l-1.503-1.5A.75.75 0 1 1 5.779 7.47l.892.89 2.484-3.31a.75.75 0 1 1 1.199.901z"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'CircleCheckSolid',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>