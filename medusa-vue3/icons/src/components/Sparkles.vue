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
          stroke-width="1.5"
          d="m3.584 2.926.119.355.355.12.252.083-.25.084-.356.118-.12.357-.084.254-.085-.254-.119-.357-.355-.118-.253-.084.253-.084.355-.119.119-.355.085-.255zM11.585 10.926l.118.355.355.12.252.083-.25.084-.356.118-.12.357-.085.254-.084-.254-.119-.357-.355-.118-.253-.084.253-.084.355-.119.119-.355.085-.255z"
        />
        <path
          :stroke="color"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m4.833 7.262.819 2.07 2.07.819-2.07.818-.819 2.07-.818-2.07-2.07-.818 2.07-.819zM10.167 1.928l.818 2.07 2.07.82-2.07.818-.818 2.07-.819-2.07-2.07-.819L9.348 4z"
        />
      </svg>
</template>

<script lang="ts">
export default {
  name: 'Sparkles',
  props: {
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>