/*
 * @Author: huirubai
 * @Date: 2025-08-22 13:11:51
 * @Last Modified: huirubai
 * @Last Modified time: Do not edit
 */
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    server: {
        proxy: {
            '/crane': {
                target: 'https://crane-test.yangqianguan.com',
				changeOrigin: true,
            },
        },
    },
    build: {
        cssCodeSplit: true, // 启用CSS代码分割
        lib: {
            entry: {
                'cell-button': resolve(__dirname, 'src/components/cell.vue'),
                'manual-link': resolve(__dirname, 'src/components/manual-link.vue'),
                'copy-button': resolve(__dirname, 'src/components/copy-button.vue'),
                'components': resolve(__dirname, 'src/cell-pro/components.ts'),
                index: resolve(__dirname, 'src/cell-pro/index.ts')
            },
            name: 'cell-pro',
            fileName: (format, entryName) => {
                if (format === 'umd') {
                    return `${entryName}.umd.js`;
                }
                return `${entryName}.js`;
            },
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: ['vue', 'ant-design-vue'],
            output: {
                globals: {
                    vue: 'Vue',
                    'ant-design-vue': 'antd'
                },
                // 确保每个组件单独打包
                manualChunks: (id) => {
                    if (id.includes('cell.vue')) return 'cell-button';
                    if (id.includes('manual-link.vue')) return 'manual-link';
                    if (id.includes('copy-button.vue')) return 'copy-button';
                }
            }
        }
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
});
