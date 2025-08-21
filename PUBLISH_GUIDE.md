# NPM 包发布指南

## 📦 当前版本信息

- **包名**: `cell-pro`
- **当前版本**: `v1.0.2`
- **最新发布**: ✅ 已发布到 npm
- **GitHub 分支**: `dev`

## 🚀 新特性

### defineCustomElement API 重构

v1.0.2 版本引入了重大改进：

- **代码简化**: 使用 Vue 3 `defineCustomElement` API 重构 Web Components
- **性能提升**: 减少 84% 的代码量，提升渲染性能
- **跨框架支持**: 增强的 React、Angular、原生 HTML 支持
- **新增示例**: 完整的跨框架使用示例和文档

### 新增文件

- `examples/README.md` - 跨框架使用指南
- `examples/react-usage.html` - React 集成示例
- `examples/vue-usage.vue` - Vue 3 集成示例

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
# 补丁版本 (1.0.2 -> 1.0.3)
npm version patch

# 次要版本 (1.0.2 -> 1.1.0)
npm version minor

# 主要版本 (1.0.2 -> 2.0.0)
npm version major

# 自定义版本
npm version 1.0.3
```

#### 4. 提交更改

```bash
git add .
git commit -m "chore: prepare for release v1.0.3"
git tag -a "v1.0.3" -m "Release v1.0.3"
```

#### 5. 推送到远程仓库

```bash
git push origin dev
git push origin v1.0.3
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
npm install cell-pro@latest

# 检查安装的文件
ls -la node_modules/cell-pro/
```

### 3. 验证导入

```javascript
// test.js
import { ShareButton, HelpLink, registerWebComponents } from 'cell-pro'
console.log('导入成功！')

// 测试 Web Components
registerWebComponents()
console.log('Web Components 注册成功！')
```

### 4. 测试跨框架功能

```bash
# 测试 React 示例
cd examples
open react-usage.html

# 测试 Vue 示例
# 在 Vue 项目中导入 vue-usage.vue
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

### 5. Web Components 不工作

检查：

- 是否正确调用了 `registerWebComponents()`
- 浏览器是否支持 Web Components
- 是否需要 polyfill

## 回滚发布

如果发布出现问题，可以：

### 1. 删除已发布的版本

```bash
npm unpublish cell-pro@1.0.3
```

### 2. 删除 Git 标签

```bash
git tag -d v1.0.3
git push origin :refs/tags/v1.0.3
```

### 3. 重置版本号

```bash
npm version 1.0.2
git add package.json
git commit -m "chore: reset version to 1.0.2"
git push origin dev
```

## 自动化发布

项目已配置 `prepublishOnly` 脚本，发布前会自动构建库。

## 版本发布策略

### 补丁版本 (patch)
- Bug 修复
- 文档更新
- 性能优化

### 次要版本 (minor)
- 新功能添加
- 向后兼容的 API 变更
- 新组件或工具

### 主要版本 (major)
- 破坏性变更
- 重大重构
- 架构调整

## 注意事项

1. **版本号管理**: 每次发布都要更新版本号
2. **Git 标签**: 为每个发布版本创建 Git 标签
3. **文档更新**: 确保 README.md 和示例文档是最新的
4. **测试**: 发布前在本地测试构建结果和跨框架功能
5. **备份**: 发布前备份重要文件
6. **示例验证**: 确保所有示例文件都能正常工作

## 联系信息

如有问题，请：

1. 检查本文档
2. 查看项目 Issues
3. 联系项目维护者

## 更新日志

### v1.0.2 (当前版本)
- ✨ 重构为使用 Vue 3 defineCustomElement API
- 🚀 添加跨框架组件示例
- 📚 完善使用文档和指南
- 🎯 提升性能和可维护性

### v1.0.1
- 🎉 初始版本发布
- 🌐 基础 Web Components 支持
- 📦 Vue 3 组件库
