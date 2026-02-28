export const defaultTemplate = (
  { jsx, componentName }: { jsx: any; componentName: string },
  { tpl }: { tpl: any }
) => {
  return tpl`
<template>
  ${jsx}
</template>

<script lang="ts">
export default {
  name: "${componentName}",
  props: {
    color: {
      type: String,
      default: "currentColor"
    }
  }
}
</script>
  `
}

export const fixedTemplate = (
  { jsx, componentName }: { jsx: any; componentName: string },
  { tpl }: { tpl: any }
) => {
  return tpl`
<template>
  ${jsx}
</template>

<script lang="ts">
export default {
  name: "${componentName}"
}
</script>
  `
}
