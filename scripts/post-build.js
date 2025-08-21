#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔄 重命名构建文件...');

const distDir = path.join(__dirname, '..', 'dist');

try {
    // 重命名 ES 模块文件
    if (fs.existsSync(path.join(distDir, 'cell-pro.js'))) {
        fs.renameSync(
            path.join(distDir, 'cell-pro.js'),
            path.join(distDir, 'cell-pro.es.js')
        );
        console.log('✅ 重命名 cell-pro.js -> cell-pro.es.js');
    }

    // 重命名 UMD 文件
    if (fs.existsSync(path.join(distDir, 'cell-pro.umd.cjs'))) {
        fs.renameSync(
            path.join(distDir, 'cell-pro.umd.cjs'),
            path.join(distDir, 'cell-pro.umd.js')
        );
        console.log('✅ 重命名 cell-pro.umd.cjs -> cell-pro.umd.js');
    }

    console.log('🎉 文件重命名完成！');
} catch (error) {
    console.error('❌ 重命名文件时出错:', error.message);
    process.exit(1);
}
