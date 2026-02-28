import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "node:path"

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "vue",
        replacement: "vue/dist/vue.esm-bundler.js",
      },
      {
        find: "@docs",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: /^@medusa-vue\/ui$/,
        replacement: path.resolve(__dirname, "../ui/src/index.ts"),
      },
      {
        find: "@medusa-vue/ui/style.css",
        replacement: path.resolve(__dirname, "../ui/src/style.css"),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "../ui/src"),
      },
    ],
  },
  server: {
    port: 3005,
  },
})
