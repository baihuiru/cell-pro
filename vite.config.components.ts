import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        cssInjectedByJsPlugin({
            // 自动收集所有样式
            jsAssetsFilterFunction: (cssAsset) => true,
            // 支持样式去重
            topExecutionPriority: false
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
                    // 处理样式文件，确保被正确收集
                    if (assetInfo.name === 'style.css') return 'style.css'
                    return assetInfo.name || 'asset'
                }
            }
        },
        outDir: 'dist',
        cssCodeSplit: false, // 不分割 CSS，确保样式内联
        // 确保样式被正确处理
        assetsInlineLimit: 0, // 不内联小文件，让 cssInjectedByJsPlugin 处理
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
        // 启用 CSS 预处理
        preprocessorOptions: {
            css: {
                // 移除这个配置，让 Vite 自动处理
            }
        }
    }
})
