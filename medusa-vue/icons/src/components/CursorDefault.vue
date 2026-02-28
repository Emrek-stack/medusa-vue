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
          d="m2.588 1.974 10.154 3.71a.478.478 0 0 1-.019.906L8.076 8.076l-1.487 4.647a.478.478 0 0 1-.905.018L1.974 2.588a.478.478 0 0 1 .614-.614"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'CursorDefault',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>