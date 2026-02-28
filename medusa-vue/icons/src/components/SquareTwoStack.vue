<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <g
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          clip-path="url(#a)"
        >
          <path d="M12.386 4.5H7.614c-.753 0-1.364.773-1.364 1.727v6.046c0 .954.61 1.727 1.364 1.727h4.772c.754 0 1.364-.773 1.364-1.727V6.227c0-.954-.61-1.727-1.364-1.727" />
          <path d="M8.633 2.025C8.42 1.421 7.943 1 7.386 1H2.614C1.86 1 1.25 1.773 1.25 2.727v6.046c0 .954.61 1.727 1.364 1.727h1.039" />
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
  name: 'SquareTwoStack',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>