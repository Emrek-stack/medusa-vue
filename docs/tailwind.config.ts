import type { Config } from "tailwindcss"
import preset from "@medusa-vue/ui-preset"

const docsSpacing = {
  "docs_0.125": "2px",
  "docs_0.25": "4px",
  "docs_0.5": "8px",
  "docs_0.75": "12px",
  docs_1: "16px",
  "docs_1.5": "24px",
  docs_2: "32px",
  "docs_2.5": "40px",
  docs_3: "48px",
  docs_4: "64px",
  docs_5: "80px",
  docs_6: "96px",
  docs_7: "112px",
  docs_8: "128px",
} as const

const docsRadius = {
  "docs_xxs": "2px",
  "docs_xs": "4px",
  "docs_sm": "6px",
  "docs_DEFAULT": "8px",
  "docs_md": "8px",
  "docs_lg": "12px",
  "docs_xl": "16px",
} as const

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
      lineHeight: {
        DEFAULT: "24px",
      },
      spacing: {
        ...docsSpacing,
      },
      borderRadius: {
        ...docsRadius,
      },
      width: {
        toc: "221px",
        "sidebar-xs": "calc(100% - 20px)",
      },
      maxWidth: {
        "sidebar-xs": "calc(100% - 20px)",
        "sidebar-sm": "300px",
        "sidebar-md": "300px",
        "sidebar-lg": "221px",
        "sidebar-xl": "221px",
        "sidebar-xxl": "221px",
        "sidebar-xxxl": "221px",
        "inner-content-xs": "100%",
        "inner-content-sm": "100%",
        "inner-content-md": "100%",
        "inner-content-lg": "550px",
        "inner-content-xl": "640px",
        "inner-content-xxl": "640px",
        "inner-content-xxxl": "640px",
      },
      boxShadow: {
        spotlight: "0 18px 40px rgba(24, 24, 27, 0.12)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(24,24,27,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.04) 1px, transparent 1px)",
        "border-dotted":
          "linear-gradient(90deg,var(--border-strong) 1px,transparent 1px)",
      },
    },
  },
}

export default config
