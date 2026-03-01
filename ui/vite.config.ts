import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            rollupTypes: true,
            tsconfigPath: './tsconfig.json'
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'MedusaVueUI',
            fileName: (format) => `medusa-vue-ui.${format}.js`
        },
        rollupOptions: {
            external: ['vue', '@minima-vue/icons', '@minima-vue/ui-preset'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
