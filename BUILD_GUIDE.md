# Cell-Pro 构建指南

## 自动化构建和版本管理

### 新增功能：`build:auto` 命令

我们新增了一个自动化构建和版本管理脚本，可以一键完成：
1. 构建组件库
2. 自动递增版本号
3. 提交更改到Git
4. 创建Git标签
5. 推送到远程仓库

### 使用方法

#### 1. 自动化构建（推荐）
```bash
npm run build:auto
```

这个命令会：
- 检查Git状态（确保没有未提交的更改）
- 构建组件库
- 自动将patch版本号+1（如：1.0.3 → 1.0.4）
- 自动提交所有更改
- 创建版本标签
- 推送到远程仓库

#### 2. 传统构建方式
```bash
npm run build:lib
```

这个命令只构建组件库，不涉及版本管理。

### 注意事项

#### 使用 `build:auto` 前请确保：
1. **没有未提交的更改** - 脚本会自动检查
2. **已登录NPM** - 如需发布到NPM
3. **有推送权限** - 推送到远程仓库

#### 如果检测到未提交的更改：
```bash
# 先提交或暂存更改
git add .
git commit -m "feat: prepare for build"

# 然后运行自动化构建
npm run build:auto
```

### 版本号规则

- **Patch版本**：每次构建自动+1（如：1.0.3 → 1.0.4）
- **Minor版本**：需要手动修改（如：1.0.4 → 1.1.0）
- **Major版本**：需要手动修改（如：1.1.0 → 2.0.0）

### 发布到NPM

构建完成后，如需发布到NPM：
```bash
npm publish
```

### 脚本位置

- 自动化构建脚本：`scripts/auto-build-version.cjs`
- 传统构建脚本：`scripts/post-build.cjs`
- 发布脚本：`scripts/publish.cjs` 或 `scripts/publish-simple.cjs`

### 工作流程建议

1. **开发阶段**：使用 `npm run dev` 进行开发
2. **构建阶段**：使用 `npm run build:auto` 自动构建和版本管理
3. **发布阶段**：使用 `npm publish` 发布到NPM

这样可以让版本管理更加规范和自动化！

