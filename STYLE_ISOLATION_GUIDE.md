# Cell Pro 样式隔离指南

## 概述

Cell Pro 采用了严格的样式隔离策略，参考了 `@yqg/permission` 项目的设计理念，通过以下方式实现样式隔离：

1. **CSS 内联**：所有样式打包进 JS，避免外部样式文件依赖
2. **样式前缀隔离**：所有组件使用 `cell-pro` 前缀
3. **ConfigProvider 包装**：Ant Design 组件使用统一的前缀配置

## 核心组件

### StyleProvider

`StyleProvider` 是样式隔离的核心组件，它为所有子组件提供 `cell-pro` 前缀的样式隔离。

```vue
<template>
  <StyleProvider>
    <!-- 所有子组件都会使用 cell-pro 前缀 -->
    <ShareButton text="复制链接" />
    <HelpLink text="帮助" />
  </StyleProvider>
</template>

<script setup>
import { StyleProvider, ShareButton, HelpLink } from 'cell-pro'
</script>
```

### 自定义前缀

可以自定义样式前缀：

```vue
<template>
  <StyleProvider prefix-cls="my-custom-prefix">
    <!-- 使用自定义前缀 -->
  </StyleProvider>
</template>
```

## 样式隔离原理

### 1. Ant Design Vue 前缀配置

```typescript
// StyleProvider.vue
<ConfigProvider :prefix-cls="prefixCls">
  <slot />
</ConfigProvider>
```

所有 Ant Design 组件会自动使用配置的前缀，例如：
- `.ant-btn` → `.cell-pro-btn`
- `.ant-message` → `.cell-pro-message`
- `.ant-modal` → `.cell-pro-modal`

### 2. 自定义组件样式前缀

所有自定义组件的 CSS 类都使用 `cell-pro` 前缀：

```css
.cell-pro-share-button-container { /* ... */ }
.cell-pro-help-link { /* ... */ }
.cell-pro-tooltip { /* ... */ }
```

### 3. CSS 内联实现

通过 `vite-plugin-css-injected-by-js` 插件，所有样式都会打包进 JS：

```typescript
// vite.config.components.ts
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: false, // 不分割 CSS
  }
})
```

## 使用方法

### 1. 自动样式隔离

所有 Cell Pro 组件都自动使用样式隔离：

```vue
<template>
  <!-- 自动使用 cell-pro 前缀 -->
  <ShareButton text="复制链接" />
  <HelpLink text="帮助文档" />
</template>
```

### 2. 手动样式隔离

对于自定义的 Ant Design 组件：

```vue
<template>
  <StyleProvider>
    <a-button type="primary">按钮</a-button>
    <a-input placeholder="输入框" />
    <a-select placeholder="选择器">
      <a-select-option value="1">选项1</a-select-option>
    </a-select>
  </StyleProvider>
</template>
```

### 3. 嵌套使用

可以嵌套多个 StyleProvider：

```vue
<template>
  <StyleProvider prefix-cls="outer">
    <div>外层组件</div>
    
    <StyleProvider prefix-cls="inner">
      <div>内层组件</div>
    </StyleProvider>
  </StyleProvider>
</template>
```

## 样式覆盖

### 1. 使用深度选择器

```css
/* 覆盖组件内部样式 */
:deep(.cell-pro .ant-btn) {
  background-color: #custom-color;
}
```

### 2. 使用 CSS 变量

```css
/* 通过 CSS 变量自定义样式 */
.cell-pro {
  --ant-primary-color: #custom-primary;
  --ant-border-radius-base: 8px;
}
```

### 3. 使用工具类

Cell Pro 提供了一些工具类：

```html
<div class="cell-pro-hidden">隐藏内容</div>
<div class="cell-pro-visible">显示内容</div>
<div class="cell-pro-mobile-hidden">移动端隐藏</div>
<div class="cell-pro-desktop-hidden">桌面端隐藏</div>
```

## 最佳实践

### 1. 始终使用 StyleProvider

```vue
<!-- 推荐 -->
<StyleProvider>
  <YourComponent />
</StyleProvider>

<!-- 不推荐 -->
<YourComponent />
```

### 2. 使用语义化的前缀

```css
/* 推荐 */
.cell-pro-user-profile { /* ... */ }
.cell-pro-navigation-menu { /* ... */ }

/* 不推荐 */
.cell-pro-up { /* ... */ }
.cell-pro-nav { /* ... */ }
```

### 3. 避免全局样式污染

```css
/* 不推荐 - 可能影响其他组件 */
.ant-btn {
  background-color: red;
}

/* 推荐 - 使用前缀隔离 */
.cell-pro .ant-btn {
  background-color: red;
}
```

### 4. 合理使用 CSS 变量

```css
/* 定义主题变量 */
.cell-pro {
  --cell-pro-primary-color: #1890ff;
  --cell-pro-border-radius: 6px;
  --cell-pro-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* 使用变量 */
.cell-pro-custom-button {
  background-color: var(--cell-pro-primary-color);
  border-radius: var(--cell-pro-border-radius);
  box-shadow: var(--cell-pro-shadow);
}
```

## 故障排除

### 1. 样式不生效

检查是否正确使用了 `StyleProvider`：

```vue
<template>
  <StyleProvider>
    <!-- 确保组件在 StyleProvider 内部 -->
    <YourComponent />
  </StyleProvider>
</template>
```

### 2. 样式冲突

确保没有全局的样式覆盖：

```css
/* 避免这样做 */
.ant-btn {
  /* 全局覆盖 */
}

/* 应该这样做 */
.cell-pro .ant-btn {
  /* 局部覆盖 */
}
```

### 3. 构建后样式丢失

检查 Vite 配置是否正确：

```typescript
// vite.config.components.ts
export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: false, // 确保这个配置存在
  }
})
```

## 总结

Cell Pro 的样式隔离策略确保了：

1. **完全隔离**：组件样式不会与外部样式冲突
2. **易于维护**：统一的前缀命名规范
3. **灵活配置**：支持自定义前缀和主题
4. **性能优化**：CSS 内联减少 HTTP 请求
5. **跨框架兼容**：Web Components 支持

通过遵循这些指南，你可以构建出样式完全隔离、易于维护的组件库。
