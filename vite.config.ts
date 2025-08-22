/*
 * @Author: huirubai
 * @Date: 2025-08-22 13:11:51
 * @Last Modified: huirubai
 * @Last Modified time: Do not edit
 */
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        cssInjectedByJsPlugin()
    ],
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
		// 把style.css 内联到js文件中
		cssCodeSplit: false,
        lib: {
            entry: 'src/cell-pro/index.ts',
            name: 'cell-pro',
            fileName: (format) => {
                if (format === 'umd') {
                  return 'cell-pro.umd.js'; // UMD 格式的输出文件名
                }
                return 'index.js'; // ESM 格式的输出文件名
            },
            formats: ['es', 'umd'],
        },
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'), // 手动替换
    },
});
