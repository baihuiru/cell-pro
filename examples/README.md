# 跨框架组件使用指南

本项目使用 Vue 3 的 `defineCustomElement` API 将 Vue 组件转换为标准的 Web Components，实现跨框架组件复用。

## 什么是 defineCustomElement？

`defineCustomElement` 是 Vue 3 提供的一个 API，它能够：

1. **自动转换** - 将 Vue 组件自动转换为标准的 Web Components
2. **保持响应式** - 保持 Vue 3 的响应式特性
3. **自动生命周期管理** - 自动处理组件的挂载和卸载
4. **属性绑定** - 自动处理 HTML 属性和 Vue props 的绑定
5. **事件处理** - 自动处理 Vue 事件和 DOM 事件的转换

## 优势对比

### 传统手动实现 vs defineCustomElement

| 特性 | 传统手动实现 | defineCustomElement |
|------|-------------|-------------------|
| 代码复杂度 | 高（需要手动管理生命周期） | 低（自动处理） |
| 维护成本 | 高 | 低 |
| 响应式支持 | 需要手动实现 | 原生支持 |
| 属性绑定 | 需要手动转换 | 自动转换 |
| 事件处理 | 需要手动绑定 | 自动绑定 |
| 性能 | 一般 | 更好 |

## 使用方法

### 1. 在 Vue 3 项目中使用

```vue
<template>
  <div>
    <!-- 直接使用 Web Component -->
    <share-button
      url="https://example.com"
      title="示例页面"
      description="这是一个跨框架组件"
      button-text="分享"
      variant="primary"
      @share="handleShare"
      @copy="handleCopy"
    />
  </div>
</template>

<script setup>
import { registerWebComponents } from 'cell-pro'

// 注册 Web Components
registerWebComponents()

const handleShare = (event) => {
  console.log('分享事件:', event.detail)
}

const handleCopy = (event) => {
  console.log('复制事件:', event.detail)
}
</script>
```

### 2. 在 React 项目中使用

```jsx
import React, { useState } from 'react'
import { registerWebComponents } from 'cell-pro'

// 注册 Web Components
registerWebComponents()

function App() {
  const [url, setUrl] = useState('https://example.com')
  
  const handleShare = (event) => {
    console.log('分享事件:', event.detail)
  }
  
  return (
    <div>
      <input 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
      />
      
      {/* 使用 Web Component */}
      <share-button
        url={url}
        title="React 页面"
        button-text="分享"
        onShare={handleShare}
      />
    </div>
  )
}
```

### 3. 在原生 HTML 中使用

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module">
    import { registerWebComponents } from 'cell-pro'
    registerWebComponents()
  </script>
</head>
<body>
  <!-- 直接使用自定义元素 -->
  <share-button
    url="https://example.com"
    title="原生 HTML 页面"
    button-text="分享"
  ></share-button>
  
  <help-link
    text="帮助文档"
    href="https://docs.example.com"
    icon-type="question"
  ></help-link>
</body>
</html>
```

### 4. 在 Angular 项目中使用

```typescript
// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { registerWebComponents } from 'cell-pro'

// 注册 Web Components
registerWebComponents()

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 允许使用自定义元素
})
export class AppModule { }
```

```html
<!-- app.component.html -->
<div>
  <share-button
    [attr.url]="shareUrl"
    [attr.title]="shareTitle"
    button-text="分享"
    (share)="onShare($event)"
  ></share-button>
</div>
```

## 属性绑定规则

### Vue 属性到 HTML 属性的转换

- `buttonText` → `button-text` (kebab-case)
- `iconType` → `icon-type`
- `tooltipPosition` → `tooltip-position`

### 事件绑定

- Vue: `@share="handleShare"`
- React: `onShare={handleShare}`
- HTML: `onshare="handleShare(event)"`

## 样式隔离

Web Components 使用 Shadow DOM 实现样式隔离，这意味着：

1. **样式不会泄露** - 组件样式不会影响外部页面
2. **外部样式不会影响组件** - 页面样式不会影响组件外观
3. **完全封装** - 组件内部结构对外不可见

## 浏览器兼容性

Web Components 在现代浏览器中有很好的支持：

- Chrome 67+
- Firefox 63+
- Safari 10.1+
- Edge 79+

对于旧版浏览器，可以使用 polyfill：

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.8.0/webcomponents-loader.js"></script>
```

## 性能优化

1. **按需加载** - 只注册需要的组件
2. **延迟注册** - 在需要时才注册组件
3. **缓存组件** - 避免重复注册

```typescript
// 按需注册
export function registerShareButton() {
  if (!customElements.get('share-button')) {
    customElements.define('share-button', ShareButtonElement)
  }
}

export function registerHelpLink() {
  if (!customElements.get('help-link')) {
    customElements.define('help-link', HelpLinkElement)
  }
}
```

## 最佳实践

1. **统一命名规范** - 使用 kebab-case 命名自定义元素
2. **提供类型定义** - 为 TypeScript 项目提供完整的类型支持
3. **文档化属性** - 清晰说明每个属性的用途和类型
4. **事件标准化** - 使用标准的 DOM 事件命名
5. **错误处理** - 提供友好的错误信息和回退方案

## 故障排除

### 常见问题

1. **组件不显示**
   - 检查是否正确调用了 `registerWebComponents()`
   - 确认浏览器支持 Web Components

2. **属性不生效**
   - 检查属性名是否正确（使用 kebab-case）
   - 确认组件是否支持该属性

3. **事件不触发**
   - 检查事件名是否正确
   - 确认事件监听器是否正确绑定

4. **样式问题**
   - 检查 Shadow DOM 是否正常工作
   - 确认组件样式是否正确加载

通过使用 `defineCustomElement`，你可以轻松创建跨框架的组件库，让 Vue 组件在任何框架中都能正常使用！
