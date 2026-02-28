<template>
  <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        
        v-bind="$attrs"
      >
        <path fill="#3B82F6" d="M0 0h20v20H0z" />
        <path fill="url(#a)" fillOpacity={0.2} d="M0 0h20v20H0z" />
        <path
          fill="#fff"
          d="M15.25 13.724H11.5a.563.563 0 0 0 0 1.125h3.75a.563.563 0 0 0 0-1.125M10.453 12.974c-.387-.31-.64-.78-.64-1.312 0-.93.757-1.688 1.687-1.688h3.218l1.112-1.083a.562.562 0 0 0-.311-.96l-3.465-.503-1.55-3.14c-.189-.384-.82-.384-1.008 0l-1.55 3.14-3.465.503a.562.562 0 0 0-.311.959l2.507 2.443-.592 3.451a.563.563 0 0 0 .816.593l2.99-1.572c.099-.332.297-.62.562-.83"
        />
        <path
          fill="#fff"
          d="M11.5 12.224h3.75a.563.563 0 0 0 0-1.125H11.5a.563.563 0 0 0 0 1.125"
        />
        <defs>
          <linearGradient
            id="a"
            x1={10}
            x2={10}
            y1={0}
            y2={20}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset={1} stopColor="#fff" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

<script lang="ts">
export default {
  name: 'Wish lists'
}
</script>