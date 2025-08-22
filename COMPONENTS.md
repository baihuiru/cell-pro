# Cell Pro 组件库

Cell Pro 是一个基于 Web Components 的跨框架组件库，可以在 Vue、React、Angular 等任何框架中使用，提供了常用的业务组件。

## 安装

```bash
npm install cell-pro
```

## 使用方法

### 方式一：完整导入（推荐用于开发）

```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/cell-pro/dist/cell-pro.umd.js"></script>
</head>
<body>
    <!-- 基础按钮 -->
    <cell-button color="#1677ff" locale="zh"></cell-button>
    
    <!-- 用户手册链接 -->
    <manual-link 
        url="https://example.com/manual" 
        text="查看手册"
        color="#1677ff">
    </manual-link>
    
    <!-- 复制按钮 -->
    <copy-button 
        content="这是要复制的内容"
        text="复制文本"
        type="primary"
        size="middle">
    </copy-button>
</body>
</html>
```

### 方式二：按需导入（推荐用于生产）

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 只导入需要的组件 -->
    <script type="module">
        import cellPro from 'https://unpkg.com/cell-pro/dist/index.js';
        
        // 只初始化需要的组件
        cellPro.init({
            components: ['cell-button', 'copy-button']
        });
    </script>
</head>
<body>
    <!-- 只使用已初始化的组件 -->
    <cell-button color="#1677ff" locale="zh"></cell-button>
    <copy-button content="复制内容" text="复制"></copy-button>
</body>
</html>
```

### 方式三：在 Vue 项目中使用

```javascript
import cellPro, { CellButton, ManualLink, CopyButton } from 'cell-pro';

// 初始化所有组件
cellPro.init();

// 或者只初始化特定组件
cellPro.init({
    components: ['cell-button', 'copy-button']
});
```

```vue
<template>
    <div>
        <!-- 基础按钮 -->
        <CellButton 
            color="#1677ff" 
            locale="zh"
            @click="handleClick" 
        />
        
        <!-- 用户手册链接 -->
        <ManualLink 
            url="https://example.com/manual"
            text="查看手册"
            color="#1677ff"
            @click="handleManualClick"
        />
        
        <!-- 复制按钮 -->
        <CopyButton 
            content="这是要复制的内容"
            text="复制文本"
            success-text="复制成功"
            type="primary"
            size="middle"
            :show-message="true"
            @copy="handleCopy"
            @success="handleCopySuccess"
            @error="handleCopyError"
        />
    </div>
</template>

<script setup>
import { CellButton, ManualLink, CopyButton } from 'cell-pro';

const handleClick = () => {
    console.log('按钮被点击');
};

const handleManualClick = (event) => {
    console.log('手册链接被点击', event);
};

const handleCopy = (content) => {
    console.log('开始复制:', content);
};

const handleCopySuccess = (content) => {
    console.log('复制成功:', content);
};

const handleCopyError = (error) => {
    console.error('复制失败:', error);
};
</script>
```

## 组件 API

### CellButton (cell-button)

基础按钮组件。

**Props:**
- `color` (string): 主题色，默认 `#1677ff`
- `locale` (string): 语言，默认 `zh`

**Events:**
- `click`: 点击事件

### ManualLink (manual-link)

用户手册链接组件。

**Props:**
- `url` (string, required): 链接地址
- `text` (string): 链接文本，默认 `用户手册`
- `color` (string): 主题色，默认 `#1677ff`
- `locale` (string): 语言，默认 `zh`

**Events:**
- `click`: 点击事件

### CopyButton (copy-button)

复制按钮组件。

**Props:**
- `content` (string, required): 要复制的内容
- `text` (string): 按钮文本，默认 `复制`
- `successText` (string): 成功时的文本，默认 `已复制`
- `type` (string): 按钮类型，可选 `primary | default | dashed | text | link`，默认 `default`
- `size` (string): 按钮大小，可选 `large | middle | small`，默认 `middle`
- `showMessage` (boolean): 是否显示消息提示，默认 `true`
- `color` (string): 主题色，默认 `#1677ff`
- `locale` (string): 语言，默认 `zh`

**Events:**
- `copy`: 开始复制时触发，参数为要复制的内容
- `success`: 复制成功时触发，参数为复制的内容
- `error`: 复制失败时触发，参数为错误信息

## 浏览器兼容性

- Chrome >= 63
- Firefox >= 53
- Safari >= 10
- Edge >= 79

## 按需导入优化

### 1. 组件级别的按需导入

```javascript
import cellPro from 'cell-pro';

// 只初始化需要的组件
cellPro.init({
    components: ['cell-button'] // 只注册按钮组件
});

// 或者逐个注册
cellPro.registerComponent('cell-button');
cellPro.registerComponent('copy-button');
```

### 2. 检查组件注册状态

```javascript
// 检查组件是否已注册
if (!cellPro.isComponentRegistered('copy-button')) {
    cellPro.registerComponent('copy-button');
}
```

### 3. 构建产物分析

构建后的文件结构：
- `index.js` - 主入口文件
- `cell-button-*.js` - 按钮组件代码
- `manual-link-*.js` - 手册链接组件代码  
- `copy-button-*.js` - 复制按钮组件代码

每个组件都是独立的 chunk，支持按需加载。

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 发布
npm publish
```
