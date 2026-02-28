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
          d="m13.182 8.94-4.243 4.242M12.303 3.818l-8.485 8.485"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Resize',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>