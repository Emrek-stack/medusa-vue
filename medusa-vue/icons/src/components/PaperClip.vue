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
          d="M9.264 4.32 5.022 8.562a1.333 1.333 0 1 0 1.885 1.886l4.4-4.4a2.666 2.666 0 1 0-3.771-3.772l-4.4 4.4a4 4 0 0 0 5.656 5.657l4.243-4.243"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'PaperClip',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>