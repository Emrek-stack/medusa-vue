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
          d="M7.5 14.167v-3.958M7.5.834v3.958M10.208 7.5a2.708 2.708 0 1 0-5.416 0 2.708 2.708 0 0 0 5.416 0"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'CodeCommit',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>