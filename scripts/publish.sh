#!/bin/bash

# 发布脚本
echo "🚀 开始发布 cell-pro 包..."

# 检查是否登录 NPM
if ! npm whoami; then
    echo "❌ 请先登录 NPM: npm login"
    exit 1
fi

# 检查是否有未提交的更改
if [[ -n $(git status --porcelain) ]]; then
    echo "❌ 有未提交的更改，请先提交或暂存"
    exit 1
fi

# 构建库
echo "📦 构建库..."
npm run build:lib

# 检查构建是否成功
if [ ! -d "dist" ]; then
    echo "❌ 构建失败，dist 目录不存在"
    exit 1
fi

# 检查 dist 目录内容
echo "📁 dist 目录内容:"
ls -la dist/

# 询问版本号
echo "📝 当前版本: $(npm version --json | jq -r '.cell-pro')"
read -p "请输入新版本号 (格式: x.y.z): " new_version

if [[ ! $new_version =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "❌ 版本号格式错误，请使用 x.y.z 格式"
    exit 1
fi

# 更新版本号
echo "🔄 更新版本号到 $new_version..."
npm version $new_version --no-git-tag-version

# 提交版本更新
git add package.json
git commit -m "chore: bump version to $new_version"

# 创建 git 标签
git tag -a "v$new_version" -m "Release v$new_version"

# 推送到远程仓库
echo "📤 推送到远程仓库..."
git push origin main
git push origin "v$new_version"

# 发布到 NPM
echo "📦 发布到 NPM..."
npm publish

if [ $? -eq 0 ]; then
    echo "✅ 发布成功！"
    echo "🌐 包地址: https://www.npmjs.com/package/cell-pro"
else
    echo "❌ 发布失败"
    exit 1
fi
