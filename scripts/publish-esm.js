#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 开始发布 cell-pro 包...');

// 检查是否登录 NPM
try {
    execSync('npm whoami', { stdio: 'pipe' });
} catch (error) {
    console.log('❌ 请先登录 NPM: npm login');
    process.exit(1);
}

// 检查是否有未提交的更改
try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    if (gitStatus.trim()) {
        console.log('❌ 有未提交的更改，请先提交或暂存');
        process.exit(1);
    }
} catch (error) {
    console.log('❌ Git 状态检查失败');
    process.exit(1);
}

// 构建库
console.log('📦 构建库...');
try {
    execSync('npm run build:lib', { stdio: 'inherit' });
} catch (error) {
    console.log('❌ 构建失败');
    process.exit(1);
}

// 检查构建是否成功
if (!fs.existsSync('dist')) {
    console.log('❌ 构建失败，dist 目录不存在');
    process.exit(1);
}

// 检查 dist 目录内容
console.log('📁 dist 目录内容:');
try {
    execSync('ls -la dist/', { stdio: 'inherit' });
} catch (error) {
    // Windows 兼容
    try {
        execSync('dir dist', { stdio: 'inherit' });
    } catch (e) {
        console.log('无法列出 dist 目录内容');
    }
}

// 获取当前版本
let currentVersion;
try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    currentVersion = packageJson.version;
} catch (error) {
    console.log('❌ 无法读取 package.json');
    process.exit(1);
}

console.log(`📝 当前版本: ${currentVersion}`);

// 询问版本号
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('请输入新版本号 (格式: x.y.z): ', (newVersion) => {
    rl.close();

    // 验证版本号格式
    if (!/^\d+\.\d+\.\d+$/.test(newVersion)) {
        console.log('❌ 版本号格式错误，请使用 x.y.z 格式');
        process.exit(1);
    }

    // 更新版本号
    console.log(`🔄 更新版本号到 ${newVersion}...`);
    try {
        execSync(`npm version ${newVersion} --no-git-tag-version`, { stdio: 'inherit' });
    } catch (error) {
        console.log('❌ 版本号更新失败');
        process.exit(1);
    }

    // 提交版本更新
    try {
        execSync('git add package.json', { stdio: 'inherit' });
        execSync(`git commit -m "chore: bump version to ${newVersion}"`, { stdio: 'inherit' });
    } catch (error) {
        console.log('❌ Git 提交失败');
        process.exit(1);
    }

    // 创建 git 标签
    try {
        execSync(`git tag -a "v${newVersion}" -m "Release v${newVersion}"`, { stdio: 'inherit' });
    } catch (error) {
        console.log('❌ Git 标签创建失败');
        process.exit(1);
    }

    // 推送到远程仓库
    console.log('📤 推送到远程仓库...');
    try {
        execSync('git push origin main', { stdio: 'inherit' });
        execSync(`git push origin "v${newVersion}"`, { stdio: 'inherit' });
    } catch (error) {
        console.log('❌ Git 推送失败');
        process.exit(1);
    }

    // 发布到 NPM
    console.log('📦 发布到 NPM...');
    try {
        execSync('npm publish', { stdio: 'inherit' });
        console.log('✅ 发布成功！');
        console.log('🌐 包地址: https://www.npmjs.com/package/cell-pro');
    } catch (error) {
        console.log('❌ 发布失败');
        process.exit(1);
    }
});
