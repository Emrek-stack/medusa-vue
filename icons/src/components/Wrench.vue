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
          d="M9.944 13.944v-2.35a5.55 5.55 0 0 0 3.112-4.983A5.55 5.55 0 0 0 9.5 1.432v4.512a.89.89 0 0 1-.889.889H6.39a.89.89 0 0 1-.889-.889V1.432a5.55 5.55 0 0 0-3.556 5.179 5.55 5.55 0 0 0 3.112 4.983v2.35"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Wrench',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>