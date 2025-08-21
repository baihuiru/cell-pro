# NPM 包发布指南

## 准备工作

### 1. 登录 NPM

```bash
npm login
```

### 2. 检查 NPM 配置

```bash
npm whoami
npm config list
```

### 3. 确保 Git 仓库已配置

```bash
git remote -v
git status
```

## 发布步骤

### 方法 1: 使用发布脚本（推荐）

#### 使用 Node.js 脚本（跨平台）

```bash
npm run publish:script
```

#### 使用 Shell 脚本（macOS/Linux）

```bash
npm run publish:shell
```

### 方法 2: 手动发布

#### 1. 构建库

```bash
npm run build:lib
```

#### 2. 检查构建结果

```bash
ls -la dist/
```

确保以下文件存在：

- `cell-pro.es.js` - ES 模块版本
- `cell-pro.umd.js` - UMD 版本
- `style.css` - 样式文件

#### 3. 更新版本号

```bash
# 补丁版本 (0.0.0 -> 0.0.1)
npm version patch

# 次要版本 (0.0.0 -> 0.1.0)
npm version minor

# 主要版本 (0.0.0 -> 1.0.0)
npm version major

# 自定义版本
npm version 1.0.0
```

#### 4. 提交更改

```bash
git add .
git commit -m "chore: prepare for release v1.0.0"
git tag -a "v1.0.0" -m "Release v1.0.0"
```

#### 5. 推送到远程仓库

```bash
git push origin main
git push origin v1.0.0
```

#### 6. 发布到 NPM

```bash
npm publish
```

## 发布后验证

### 1. 检查 NPM 包页面

访问：https://www.npmjs.com/package/cell-pro

### 2. 测试安装

```bash
# 创建测试目录
mkdir test-install && cd test-install

# 初始化新项目
npm init -y

# 安装刚发布的包
npm install cell-pro

# 检查安装的文件
ls -la node_modules/cell-pro/
```

### 3. 验证导入

```javascript
// test.js
import { ShareButton, HelpLink } from 'cell-pro'
console.log('导入成功！')
```

## 常见问题

### 1. 包名冲突

如果包名已被占用，需要修改 `package.json` 中的 `name` 字段。

### 2. 版本号错误

确保版本号符合语义化版本规范：`x.y.z`

### 3. 构建失败

检查：

- 依赖是否正确安装
- TypeScript 配置是否正确
- Vite 配置是否有误

### 4. 发布权限错误

确保：

- 已登录正确的 NPM 账户
- 有发布权限
- 包名未被占用

## 回滚发布

如果发布出现问题，可以：

### 1. 删除已发布的版本

```bash
npm unpublish cell-pro@1.0.0
```

### 2. 删除 Git 标签

```bash
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0
```

### 3. 重置版本号

```bash
npm version 0.0.0
git add package.json
git commit -m "chore: reset version"
git push origin main
```

## 自动化发布

项目已配置 `prepublishOnly` 脚本，发布前会自动构建库。

## 注意事项

1. **版本号管理**: 每次发布都要更新版本号
2. **Git 标签**: 为每个发布版本创建 Git 标签
3. **文档更新**: 确保 README.md 和文档是最新的
4. **测试**: 发布前在本地测试构建结果
5. **备份**: 发布前备份重要文件

## 联系信息

如有问题，请：

1. 检查本文档
2. 查看项目 Issues
3. 联系项目维护者
