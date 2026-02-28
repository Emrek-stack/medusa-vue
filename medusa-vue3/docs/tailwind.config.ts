import type { Config } from "tailwindcss"
import preset from "@medusa-vue/ui-preset"

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
      fontSize: {
        h1: ["24px", { lineHeight: "125%", fontWeight: "500" }],
        h2: ["18px", { lineHeight: "160%", fontWeight: "500" }],
        h3: ["16px", { lineHeight: "160%", fontWeight: "500" }],
        h4: ["14px", { lineHeight: "160%", fontWeight: "500" }],
        "compact-x-large-plus": [
          "18px",
          { lineHeight: "20px", fontWeight: "500" },
        ],
        "compact-x-large": [
          "18px",
          { lineHeight: "20px", fontWeight: "400" },
        ],
        "compact-large-plus": [
          "16px",
          { lineHeight: "20px", fontWeight: "500" },
        ],
        "compact-large": ["16px", { lineHeight: "20px", fontWeight: "400" }],
        "compact-medium-plus": [
          "14px",
          { lineHeight: "20px", fontWeight: "500" },
        ],
        "compact-medium": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "compact-small-plus": [
          "13px",
          { lineHeight: "20px", fontWeight: "500" },
        ],
        "compact-small": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "compact-x-small-plus": [
          "12px",
          { lineHeight: "20px", fontWeight: "500" },
        ],
        "compact-x-small": ["12px", { lineHeight: "20px", fontWeight: "400" }],
        "x-large-plus": ["18px", { lineHeight: "150%", fontWeight: "500" }],
        "x-large": ["18px", { lineHeight: "150%", fontWeight: "400" }],
        "large-plus": ["16px", { lineHeight: "150%", fontWeight: "500" }],
        large: ["16px", { lineHeight: "150%", fontWeight: "400" }],
        "medium-plus": ["14px", { lineHeight: "160%", fontWeight: "500" }],
        medium: ["14px", { lineHeight: "160%", fontWeight: "400" }],
        small: ["13px", { lineHeight: "150%", fontWeight: "400" }],
        "small-plus": ["13px", { lineHeight: "150%", fontWeight: "500" }],
        "x-small": ["12px", { lineHeight: "150%", fontWeight: "400" }],
        "x-small-plus": ["12px", { lineHeight: "150%", fontWeight: "500" }],
        "code-label": ["12px", { lineHeight: "15px", fontWeight: "500" }],
        "code-body": ["12px", { lineHeight: "150%", fontWeight: "400" }],
      },
      lineHeight: {
        DEFAULT: "24px",
      },
      boxShadow: {
        spotlight: "0 18px 40px rgba(24, 24, 27, 0.12)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(24,24,27,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.04) 1px, transparent 1px)",
      },
    },
  },
}

export default config
