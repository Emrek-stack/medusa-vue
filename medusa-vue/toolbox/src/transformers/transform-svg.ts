import { transform } from "@svgr/core"
import jsx from "@svgr/plugin-jsx"
import prettier from "@svgr/plugin-prettier"
import svgo from "@svgr/plugin-svgo"

import { defaultTemplate, fixedTemplate } from "@/templates"

type TransformArgs = {
  code: string
  componentName: string
  fixed?: boolean
}

export async function transformSvg({
  code,
  componentName,
  fixed = false,
}: TransformArgs) {
  return await transform(
    code,
    {
      typescript: false, // Vue templates don't need TS annotations in the template part usually, or handled differently
      replaceAttrValues: !fixed
        ? {
          "#18181B": "{this.color || 'currentColor'}", // Bind to prop
        }
        : undefined,
      svgProps: {
        // ref: "{ref}", // Vue handles refs differently
        "v-bind": "$attrs"
      },
      expandProps: false, // We use v-bind="$attrs"
      plugins: [svgo, jsx, prettier],
      jsxRuntime: "classic", // We might need to adjust this given we want HTML-like output for Vue template
      // SVGR outputs React JSX. We need to massage it to be Vue template.
      // Or we use a custom template that takes the JSX and treats it as Vue template?
      // Yes, the template we just wrote puts `${jsx}` inside `<template>`.
      // So `${jsx}` needs to be valid Vue template syntax.
      // React JSX is mostly compatible but some attributes like `className`, `strokeWidth` need conversion.
      // SVGR has limited support for Vue directly.
      // We might need to write a custom replacement function or rely on `svgo` plugins to keep attributes standard.
      // And then a post-processing step?

      // Let's try to make SVGR output mostly valid HTML attributes.
      // `jsxRuntime: "preserve"` might help? No, that's for preserving JSX.

      // We can use `svgo` to keep attributes kebab-case?
      // SVGR by default converts to camelCase for React.
      // We need to disable that.

      prettierConfig: {
        semi: false,
        parser: "html", // Parse as HTML for Vue template?
      },
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeTitle: false,
                removeViewBox: false,
              }
            }
          },
          // We want to avoid converting attributes to camelCase
          // SVGR does this transformation AFTER SVGO usually.
          // It seems hard to tell SVGR to NOT camelCase attributes.
          // We might need to post-process the `jsx` string in the template function?
          // Or use a different transformer if possible.
          // But we are editing `transform-svg.ts` which imports `@svgr/core`.

          // Let's rely on post-processing in the template or just simple replace in the code string before returning?
          // `transform` returns the code string.
          // But `transform` uses the template we provided.

          // Let's try to intercept the `jsx` in the template and fix attributes there?
          // The template receives `jsx`.

          // Actually, we can use a custom plugin?
          // Or just string replace on the output of `transform`?
          // `transform` returns the final code.

          // Let's update `transform-svg` to return the code, but we might need to modify `transform` call to NOT use `typescript: true` 
          // and `ref`.
        ],
      },
      template: fixed ? fixedTemplate : defaultTemplate,
    },
    {
      componentName,
    }
  )
}
