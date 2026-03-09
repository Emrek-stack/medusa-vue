import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import VueRouter from "unplugin-vue-router/vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import VueDevTools from "vite-plugin-vue-devtools"
import { fileURLToPath, URL } from "node:url"

const backendUrl = process.env.VITE_MEDUSA_BACKEND_URL || "http://localhost:9000"

export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: "src/routes/pages",
      dts: "src/typed-router.d.ts",
    }),
    vue(),
    AutoImport({
      imports: [
        {
          vue: ["ref", "computed", "reactive", "onMounted"],
          "vue-router": ["useRoute", "useRouter"],
          pinia: ["defineStore"],
          "@vueuse/core": ["useDark", "useToggle", "useStorage"],
        },
      ],
      dts: "src/auto-imports.d.ts",
      vueTemplate: true,
    }),
    Components({
      dirs: ["src/components/nav", "src/components/topbar", "src/components/layout"],
      dts: "src/components.d.ts",
    }),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ["vue-router/auto", "vue-router/auto-routes", "vue-router/auto-resolver"],
  },
  server: {
    port: 3010,
    proxy: {
      "/admin": {
        target: backendUrl,
        changeOrigin: true,
      },
      "/auth": {
        target: backendUrl,
        changeOrigin: true,
      },
    },
  },
})
