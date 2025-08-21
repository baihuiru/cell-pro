# Cell Pro 组件库

## 项目简介

Cell Pro 是一个基于 Vue 3 + TypeScript 的现代化组件库，提供了可复用的 UI 组件，支持 Vue 组件和 Web Components 两种使用方式。组件库采用 Ant Design Vue 作为基础 UI 框架，确保组件的美观性和一致性。

## 项目特性

- 🚀 **Vue 3 + TypeScript** - 基于最新的 Vue 3 和 TypeScript 技术栈
- 🎨 **Ant Design Vue** - 使用成熟的 UI 设计系统
- 🌐 **Web Components** - 支持原生 HTML 使用
- 📱 **响应式设计** - 支持多种屏幕尺寸
- 🎯 **类型安全** - 完整的 TypeScript 类型定义
- 📦 **模块化** - 支持按需引入和全量引入

## 组件列表

### 1. ShareButton 复制按钮组件

一个功能完整的复制按钮组件，支持复制文本到剪贴板，包含加载状态、成功/错误提示等功能。

#### 特性

- 支持多种按钮样式（primary、ghost、dashed、link、text、default）
- 支持多种尺寸（large、middle、small）
- 自动处理复制失败的回退方案
- 内置加载状态和消息提示
- 支持自定义复制文本和按钮文本

#### Props

```typescript
interface Props {
  text?: string // 要复制的文本，默认为当前页面URL
  buttonText?: string // 按钮显示文本，默认为"复制"
  variant?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
  size?: 'large' | 'middle' | 'small'
  disabled?: boolean // 是否禁用
}
```

#### Events

```typescript
interface Emits {
  copy: [text: string] // 复制成功事件
  error: [error: Error] // 复制失败事件
}
```

### 2. HelpLink 帮助链接组件

一个灵活的帮助链接组件，支持多种图标类型、样式变体和交互方式。

#### 特性

- 支持多种图标类型（book、question、info、external）
- 支持多种样式变体（primary、secondary、outline、text）
- 支持多种尺寸（small、medium、large）
- 内置 tooltip 提示功能
- 支持外部链接和内部链接
- 可配置的链接行为（新窗口打开、当前窗口等）

#### Props

```typescript
interface Props {
  text?: string // 链接文本，默认为"帮助"
  href?: string // 链接地址
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string // 链接关系属性
  iconType?: 'book' | 'question' | 'info' | 'external'
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean // 是否禁用
  tooltip?: string // 提示文本
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
}
```

#### Events

```typescript
interface Emits {
  click: [event: Event] // 点击事件
  help: [data: { text: string; href?: string }] // 帮助事件
}
```

## 项目结构

```
cell-pro/
├── src/
│   ├── components/
│   │   ├── ShareButton.vue          # 复制按钮组件
│   │   ├── HelpLink.vue             # 帮助链接组件
│   │   ├── web-components.ts        # Web Components 实现
│   │   ├── examples/
│   │   │   └── UsageExamples.vue    # 使用示例
│   │   └── index.ts                 # 组件导出入口
│   ├── App.vue                      # 主应用
│   └── main.ts                      # 应用入口
├── vite.config.components.ts         # 组件库构建配置
├── package.json                      # 项目配置
└── tsconfig.json                     # TypeScript 配置
```

## 开发环境搭建

### 环境要求

- Node.js >= 18.0.0
- pnpm (推荐) 或 npm

### 安装依赖

```bash
# 使用 pnpm
pnpm install

# 或使用 npm
npm install
```

### 开发命令

```bash
# 启动开发服务器
pnpm dev

# 构建应用
pnpm build

# 构建组件库
pnpm build:components

# 类型检查
pnpm type-check

# 代码格式化
pnpm format

# 代码检查
pnpm lint
```

## 打包配置

### 组件库构建配置

项目使用 `vite.config.components.ts` 专门配置组件库的构建：

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'CellProComponents',
      fileName: 'cell-pro-components',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    outDir: 'dist/components',
  },
})
```

### 构建输出

构建完成后会在 `dist/components` 目录生成以下文件：

- `cell-pro-components.es.js` - ES 模块格式
- `cell-pro-components.umd.js` - UMD 格式
- `cell-pro-components.es.js.map` - 源码映射文件
- `cell-pro-components.umd.js.map` - 源码映射文件

## 发布为 NPM 包

### 1. 准备 package.json

在发布前需要修改 `package.json` 文件：

```json
{
  "name": "@your-scope/cell-pro-components",
  "version": "1.0.0",
  "description": "A modern Vue 3 component library with Web Components support",
  "main": "dist/components/cell-pro-components.umd.js",
  "module": "dist/components/cell-pro-components.es.js",
  "types": "dist/components/index.d.ts",
  "files": ["dist/components", "src/components"],
  "keywords": ["vue", "vue3", "components", "web-components", "typescript"],
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/cell-pro.git"
  },
  "peerDependencies": {
    "vue": "^3.5.0",
    "ant-design-vue": "^4.0.0"
  },
  "devDependencies": {
    // ... 开发依赖
  }
}
```

### 2. 生成类型声明文件

确保 TypeScript 配置正确，构建时生成类型声明文件：

```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "./dist/components",
    "emitDeclarationOnly": false
  }
}
```

### 3. 构建组件库

```bash
# 构建组件库
pnpm build:components

# 检查构建结果
ls -la dist/components/
```

### 4. 发布到 NPM

```bash
# 登录 NPM (首次发布需要)
npm login

# 发布包
npm publish

# 如果是 scoped 包
npm publish --access public
```

### 5. 版本管理

```bash
# 更新版本号
npm version patch  # 补丁版本 1.0.0 -> 1.0.1
npm version minor  # 次要版本 1.0.0 -> 1.1.0
npm version major  # 主要版本 1.0.0 -> 2.0.0

# 发布新版本
npm publish
```

## 在其他项目中使用

### 1. 安装依赖

```bash
# 使用 npm
npm install @your-scope/cell-pro-components

# 使用 pnpm
pnpm add @your-scope/cell-pro-components

# 使用 yarn
yarn add @your-scope/cell-pro-components
```

### 2. Vue 组件使用方式

#### 全局注册

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import CellProComponents from '@your-scope/cell-pro-components'

const app = createApp(App)
app.use(CellProComponents)
app.mount('#app')
```

#### 按需引入

```vue
<template>
  <div>
    <ShareButton button-text="复制链接" text="https://example.com" @copy="handleCopy" />

    <HelpLink text="用户手册" href="/docs/manual" icon-type="book" variant="primary" />
  </div>
</template>

<script setup lang="ts">
import { ShareButton, HelpLink } from '@your-scope/cell-pro-components'

const handleCopy = (text: string) => {
  console.log('复制成功:', text)
}
</script>
```

### 3. Web Components 使用方式

#### 注册 Web Components

```typescript
// main.ts
import { registerWebComponents } from '@your-scope/cell-pro-components'

// 注册 Web Components
registerWebComponents()
```

#### 在 HTML 中使用

```html
<!DOCTYPE html>
<html>
  <head>
    <title>使用示例</title>
    <script type="module">
      import { registerWebComponents } from '@your-scope/cell-pro-components'
      registerWebComponents()
    </script>
  </head>
  <body>
    <!-- 复制按钮 -->
    <share-button button-text="复制页面" variant="primary" size="middle"></share-button>

    <!-- 帮助链接 -->
    <help-link
      text="用户手册"
      href="/docs/manual"
      icon-type="book"
      variant="primary"
      tooltip="查看用户手册"
    ></help-link>
  </body>
</html>
```

### 4. 事件监听

#### Vue 组件事件

```vue
<template>
  <ShareButton button-text="复制文本" text="要复制的文本" @copy="handleCopy" @error="handleError" />
</template>

<script setup lang="ts">
const handleCopy = (text: string) => {
  console.log('复制成功:', text)
}

const handleError = (error: Error) => {
  console.error('复制失败:', error.message)
}
</script>
```

#### Web Components 事件

```javascript
// 获取元素
const shareButton = document.querySelector('share-button')

// 监听事件
shareButton.addEventListener('copy', (event) => {
  console.log('复制成功:', event.detail)
})

shareButton.addEventListener('error', (event) => {
  console.error('复制失败:', event.detail)
})
```

### 5. 样式自定义

组件支持通过 CSS 变量自定义样式：

```css
:root {
  --help-link-bg: #007bff;
  --help-link-color: white;
  --help-link-hover-bg: #0056b3;
  --help-link-outline-color: #007bff;
  --help-link-text-color: #007bff;
}
```

## 开发指南

### 添加新组件

1. 在 `src/components/` 目录下创建新的 `.vue` 文件
2. 在 `src/components/index.ts` 中导出新组件
3. 在 `src/components/web-components.ts` 中创建对应的 Web Component
4. 在 `src/components/examples/UsageExamples.vue` 中添加使用示例

### 组件开发规范

- 使用 Vue 3 Composition API
- 提供完整的 TypeScript 类型定义
- 支持多种样式变体和尺寸
- 提供合理的事件和插槽
- 确保组件的可访问性
- 编写完整的文档和示例

### 测试

```bash
# 运行类型检查
pnpm type-check

# 运行代码检查
pnpm lint

# 构建测试
pnpm build:components
```

## 常见问题

### Q: 组件样式不生效？

A: 确保已经正确引入了 Ant Design Vue 的样式文件，或者检查 CSS 变量是否正确设置。

### Q: Web Components 不工作？

A: 确保在 HTML 中调用了 `registerWebComponents()` 函数，并且浏览器支持 Web Components。

### Q: TypeScript 类型错误？

A: 确保项目使用 TypeScript 4.5+ 版本，并且正确配置了 tsconfig.json。

### Q: 构建失败？

A: 检查 Node.js 版本是否 >= 18.0.0，确保所有依赖都已正确安装。

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个组件库！

### 贡献步骤

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 更新日志

### v1.0.0

- 初始版本发布
- 支持 ShareButton 和 HelpLink 组件
- 支持 Vue 组件和 Web Components 两种使用方式
- 完整的 TypeScript 类型支持
