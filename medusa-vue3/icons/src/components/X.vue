<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <path
          fill="#000"
          fill-rule="evenodd"
          d="M.75 1.172h4.43l3.15 4.396 3.81-4.396h1.688L9.094 6.634l5.156 7.194H9.82L6.67 9.432l-3.81 4.396H1.171l4.734-5.462zm9.72 11.39L3.214 2.438H4.53l7.256 10.125z"
          clip-rule="evenodd"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'X',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>