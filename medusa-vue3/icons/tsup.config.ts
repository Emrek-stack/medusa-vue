import { defineConfig } from "tsup"
import vue from "esbuild-plugin-vue"

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    format: ["cjs", "esm"],
    dts: false,
    clean: true,
    clean: true,
    external: ["vue"],
    esbuildPlugins: [vue({
        isProduction: true
    })],
    define: {
        '__VUE_OPTIONS_API__': 'true',
        '__VUE_PROD_DEVTOOLS__': 'false'
    }
})
