import type { Config } from "tailwindcss"
import preset from "@minima-vue/ui-preset"

const config: Config = {
  presets: [preset as Config],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,vue}",
    "../ui/src/**/*.{ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: [
          "Inter",
          "BlinkMacSystemFont",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        monospace: [
          "Roboto Mono",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      maxWidth: {
        "layout-shell": "1600px",
      },
    },
  },
}

export default config
