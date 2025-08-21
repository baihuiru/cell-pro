import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        cssInjectedByJsPlugin({
            // 确保样式被正确注入
            topExecutionPriority: false,
            // 支持样式去重
            jsAssetsFilterFunction: (cssAsset) => true
        }),
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
        // 确保 CSS 被正确处理
        modules: false,
        preprocessorOptions: {
            css: {
                // 移除这个配置，因为样式已经在 index.ts 中导入了
                // additionalData: `@import "ant-design-vue/dist/reset.css";`
            }
        }
    }
})
