<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g clip-path="url(#a)">
          <path
            :stroke="color"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12.611 6.833c.33 0 .636.105.889.282v-2.06c0-.98-.796-1.777-1.778-1.777h-2.06a1.556 1.556 0 1 0-2.548 0H5.057c-.983 0-1.778.796-1.778 1.777v2.06a1.556 1.556 0 1 0 0 2.548v2.06c0 .98.795 1.777 1.778 1.777h2.06a1.556 1.556 0 1 1 2.548 0h2.058c.982 0 1.778-.796 1.778-1.778v-2.06a1.556 1.556 0 1 1-.889-2.83"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h15v15H0z" />
          </clipPath>
        </defs>
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Puzzle',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>