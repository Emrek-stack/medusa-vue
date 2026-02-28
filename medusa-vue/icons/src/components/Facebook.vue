<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="none"
        
        v-bind="$attrs"
      >
        <path
          fill="url(#a)"
          fill-rule="evenodd"
          d="M.75 7.5c0 3.341 2.43 6.109 5.636 6.682l.04-.032-.006-.001v-4.76H4.733V7.5H6.42V6.016c0-1.688 1.08-2.633 2.633-2.633.472 0 1.012.068 1.484.135V5.24H9.66c-.81 0-1.012.405-1.012.945V7.5h1.788l-.303 1.89H8.648v4.759l-.062.01.028.023c3.206-.573 5.636-3.34 5.636-6.682 0-3.712-3.037-6.75-6.75-6.75S.75 3.788.75 7.5"
          clip-rule="evenodd"
        />
        <defs>
          <linearGradient
            id="a"
            x1="7.5"
            x2="7.5"
            y1="13.78"
            y2="0.748"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0062E0" />
            <stop offset="1" stop-color="#19AFFF" />
          </linearGradient>
        </defs>
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Facebook',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>