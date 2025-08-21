// 测试构建的包
const fs = require('fs');
const path = require('path');

console.log('🧪 测试构建的包...');

const distDir = path.join(__dirname, 'dist');

// 检查必需文件是否存在
const requiredFiles = [
    'cell-pro.es.js',
    'cell-pro.umd.js',
    'style.css'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log(`✅ ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
    } else {
        console.log(`❌ ${file} 不存在`);
        allFilesExist = false;
    }
});

// 检查文件内容
if (allFilesExist) {
    console.log('\n📄 检查文件内容...');

    // 检查 ES 模块文件
    const esContent = fs.readFileSync(path.join(distDir, 'cell-pro.es.js'), 'utf8');
    if (esContent.includes('export')) {
        console.log('✅ ES 模块文件包含 export 语句');
    } else {
        console.log('❌ ES 模块文件格式不正确');
    }

    // 检查 UMD 文件
    const umdContent = fs.readFileSync(path.join(distDir, 'cell-pro.umd.js'), 'utf8');
    if (umdContent.includes('CellProComponents')) {
        console.log('✅ UMD 文件包含正确的库名');
    } else {
        console.log('❌ UMD 文件格式不正确');
    }

    // 检查 CSS 文件
    const cssContent = fs.readFileSync(path.join(distDir, 'style.css'), 'utf8');
    if (cssContent.length > 0) {
        console.log('✅ CSS 文件不为空');
    } else {
        console.log('❌ CSS 文件为空');
    }
}

console.log('\n🎉 测试完成！');
