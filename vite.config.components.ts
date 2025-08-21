import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        cssInjectedByJsPlugin(), // CSS 内联插件
    ],
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
        cssCodeSplit: false, // 不分割 CSS，确保样式内联
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    optimizeDeps: {
        include: ['ant-design-vue', '@ant-design/icons-vue']
    },
    css: {
        preprocessorOptions: {
            css: {
                additionalData: `@import "ant-design-vue/dist/reset.css";`
            }
        }
    }
})
