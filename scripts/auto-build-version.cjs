#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始自动化构建和版本管理...');

// 检查Git状态
try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    if (gitStatus.trim()) {
        console.log('⚠️  检测到未提交的更改，请先提交或暂存');
        console.log('建议执行: git add . && git commit -m "feat: prepare for build"');
        process.exit(1);
    }
} catch (error) {
    console.log('❌ Git 状态检查失败');
    process.exit(1);
}

// 构建库
console.log('📦 构建库...');
try {
    execSync('npm run build:components', { stdio: 'inherit' });
} catch (error) {
    console.log('❌ 构建失败');
    process.exit(1);
}

// 检查构建是否成功
if (!fs.existsSync('dist')) {
    console.log('❌ 构建失败，dist 目录不存在');
    process.exit(1);
}

console.log('✅ 构建成功！');

// 读取当前版本
let packageJson;
try {
    packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
} catch (error) {
    console.log('❌ 无法读取 package.json');
    process.exit(1);
}

const currentVersion = packageJson.version;
console.log(`📝 当前版本: ${currentVersion}`);

// 自动计算新版本号 (patch版本递增)
const versionParts = currentVersion.split('.');
const newPatch = parseInt(versionParts[2]) + 1;
const newVersion = `${versionParts[0]}.${versionParts[1]}.${newPatch}`;

console.log(`🔄 自动更新版本号到 ${newVersion}...`);

// 更新版本号
try {
    execSync(`npm version ${newVersion} --no-git-tag-version`, { stdio: 'inherit' });
} catch (error) {
    console.log('❌ 版本号更新失败');
    process.exit(1);
}

// 添加所有更改到Git
console.log('📝 添加更改到Git...');
try {
    execSync('git add .', { stdio: 'inherit' });
} catch (error) {
    console.log('❌ Git add 失败');
    process.exit(1);
}

// 提交更改
console.log('💾 提交更改...');
try {
    execSync(`git commit -m "build: release v${newVersion} - auto version bump and build"`, { stdio: 'inherit' });
} catch (error) {
    console.log('❌ Git commit 失败');
    process.exit(1);
}

// 创建Git标签
console.log('🏷️  创建Git标签...');
try {
    execSync(`git tag -a "v${newVersion}" -m "Release v${newVersion}"`, { stdio: 'inherit' });
} catch (error) {
    console.log('❌ Git标签创建失败');
    process.exit(1);
}

// 推送到远程仓库
console.log('📤 推送到远程仓库...');
try {
    execSync('git push origin HEAD', { stdio: 'inherit' });
    execSync(`git push origin "v${newVersion}"`, { stdio: 'inherit' });
} catch (error) {
    console.log('❌ Git推送失败');
    process.exit(1);
}

console.log('🎉 自动化构建和版本管理完成！');
console.log(`📦 新版本: ${newVersion}`);
console.log('💡 如需发布到NPM，请运行: npm publish');
console.log('🌐 包地址: https://www.npmjs.com/package/cell-pro');

