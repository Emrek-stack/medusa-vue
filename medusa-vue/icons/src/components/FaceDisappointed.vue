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
          d="M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M10.167 10.16A3.76 3.76 0 0 0 7.5 9.057c-1.04 0-1.983.422-2.667 1.105M6.153 6.61c-.112.107-.492.442-1.091.498a1.86 1.86 0 0 1-1.118-.254M8.847 6.61c.112.107.492.442 1.091.498.566.053.982-.174 1.118-.254"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'FaceDisappointed',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>