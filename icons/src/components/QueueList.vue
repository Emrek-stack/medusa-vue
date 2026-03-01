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
          d="M12.167 1.944H2.833a.89.89 0 0 0-.889.89v3.11c0 .491.398.89.89.89h9.333c.49 0 .889-.399.889-.89v-3.11a.89.89 0 0 0-.89-.89M1.944 9.944h11.112M1.944 13.056h11.112"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'QueueList',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>