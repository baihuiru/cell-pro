# Cell Pro

一个支持按需引入的Vue 3组件库。

## 安装

```bash
npm install cell-pro
# 或
yarn add cell-pro
# 或
pnpm add cell-pro
```

## 使用方法

### 完整引入

```typescript
import { createApp } from 'vue';
import CellPro from 'cell-pro';
import 'cell-pro/dist/style.css';

const app = createApp(App);
app.use(CellPro);
app.mount('#app');
```

### 按需引入（推荐）

#### 方式1：引入单个组件
```typescript
import { CellButton } from 'cell-pro/cell-button';
import { ManualLink } from 'cell-pro/manual-link';
import { CopyButton } from 'cell-pro/copy-button';
```

#### 方式2：引入多个组件
```typescript
import { CellButton, ManualLink, CopyButton } from 'cell-pro/components';
```

#### 方式3：引入所有组件
```typescript
import CellPro from 'cell-pro';
```

### 在Vue组件中使用

```vue
<template>
  <div>
    <CellButton />
    <ManualLink />
    <CopyButton />
  </div>
</template>

<script setup lang="ts">
import { CellButton, ManualLink, CopyButton } from 'cell-pro/components';
</script>
```

## 按需引入的优势

1. **Tree Shaking支持**：只打包使用到的组件
2. **代码分割**：每个组件独立打包，支持懒加载
3. **体积优化**：显著减少最终打包体积
4. **按需加载**：支持运行时动态加载组件

## 构建配置

本组件库使用Vite构建，支持：
- ES Module (ESM)
- Universal Module Definition (UMD)
- CSS代码分割
- 外部依赖处理

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 预览构建结果
pnpm preview
```

## 许可证

MIT
