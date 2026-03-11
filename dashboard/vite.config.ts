import { fileURLToPath, URL } from "node:url"
import fs from "node:fs"
import path from "node:path"
import child_process from "node:child_process"
import { env } from "node:process"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import VueRouter from "unplugin-vue-router/vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import VueDevTools from "vite-plugin-vue-devtools"

const baseFolder =
  env.APPDATA !== undefined && env.APPDATA !== ""
    ? `${env.APPDATA}/ASP.NET/https`
    : `${env.HOME}/.aspnet/https`

const certificateName = "dashboard"
const certFilePath = path.join(baseFolder, `${certificateName}.pem`)
const keyFilePath = path.join(baseFolder, `${certificateName}.key`)

if (!fs.existsSync(baseFolder)) {
  fs.mkdirSync(baseFolder, { recursive: true })
}

if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
  if (
    0 !==
    child_process.spawnSync(
      "dotnet",
      [
        "dev-certs",
        "https",
        "--export-path",
        certFilePath,
        "--format",
        "Pem",
        "--no-password",
      ],
      { stdio: "inherit" },
    ).status
  ) {
    throw new Error("Could not create certificate.")
  }
}

const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS
    ? env.ASPNETCORE_URLS.split(";")[0]
    : "https://localhost:6001"

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
    port: parseInt(env.DEV_SERVER_PORT || "3010", 10),
    https: {
      key: fs.readFileSync(keyFilePath),
      cert: fs.readFileSync(certFilePath),
    },
    proxy: {
      "/admin": {
        target,
        changeOrigin: true,
        secure: false,
      },
      "/auth": {
        target,
        changeOrigin: true,
        secure: false,
      },
      "^/api": {
        target,
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
