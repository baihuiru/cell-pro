import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/index.ts'),
            name: 'CellProComponents',
            fileName: 'cell-pro',
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'style.css'
                    return assetInfo.name || 'asset'
                }
            }
        },
        outDir: 'dist',
        cssCodeSplit: false
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
})
