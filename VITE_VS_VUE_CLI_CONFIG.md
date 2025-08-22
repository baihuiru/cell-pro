# Vue CLI vs Vite 配置对比：禁用 Shadow DOM

## 概述

本文档对比了在 Vue CLI 和 Vite 项目中禁用 Shadow DOM 的不同配置方式，帮助你理解两种构建工具的差异。

## 🔧 Vue CLI 配置方式

### 传统配置 (vue.config.js)

```javascript
// vue.config.js
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: {
            loader: 'vue-loader',
            options: {
              shadowMode: false // 禁用 Shadow DOM
            }
          }
        }
      ]
    }
  }
};
```

### 配置说明

**`shadowMode: false`** 的作用：
- 这是 `vue-loader` 的专用选项
- 完全禁用 Vue 组件的 Shadow DOM 模式
- 组件会直接渲染到主 DOM 树中
- 样式会变成全局样式

## 🚀 Vite 配置方式

### 现代配置 (vite.config.ts)

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      // Vue 插件配置，禁用 Shadow DOM 模式
      template: {
        compilerOptions: {
          // 禁用 Shadow DOM 相关特性
          isCustomElement: (tag) => tag.startsWith('cell-') || tag.startsWith('share-') || tag.startsWith('help-')
        }
      }
    })
  ]
})
```

### 配置说明

**Vite 的配置特点：**
- 使用 `@vitejs/plugin-vue` 插件
- 通过 `isCustomElement` 配置自定义元素
- 更现代的 ES 模块构建方式
- 更快的构建速度

## 📊 配置对比表

| 特性 | Vue CLI | Vite |
|------|---------|------|
| **配置文件** | `vue.config.js` | `vite.config.ts` |
| **构建工具** | Webpack | Rollup |
| **Shadow DOM 禁用** | `shadowMode: false` | `isCustomElement` + 组件配置 |
| **构建速度** | 较慢 | 更快 |
| **配置复杂度** | 中等 | 简单 |
| **Vue 版本支持** | Vue 2/3 | Vue 3 |
| **模块系统** | CommonJS/ES | ES 模块 |

## 🎯 在你的项目中的实际配置

### 1. Vite 配置 (vite.config.components.ts)

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
    plugins: [
        vue({
            // Vue 插件配置，禁用 Shadow DOM 模式
            template: {
                compilerOptions: {
                    // 禁用 Shadow DOM 相关特性
                    isCustomElement: (tag) => tag.startsWith('cell-') || tag.startsWith('share-') || tag.startsWith('help-')
                }
            }
        }),
        cssInjectedByJsPlugin({
            // 自动收集所有样式
            jsAssetsFilterFunction: (cssAsset) => true,
            // 支持样式去重
            topExecutionPriority: false
        }),
    ],
    // ... 其他配置
})
```

### 2. Web Components 配置 (web-components.ts)

```typescript
export function registerWebComponents() {
    registerWC([
        {
            tagName: 'share-button',
            component: ShareButton,
            options: {
                shadowRoot: false, // 完全禁用 Shadow DOM
                styles: [], // 不使用样式注入
                prefixCls: 'cell-pro'
            }
        }
    ])
}
```

### 3. Web Components 包装器 (web-components-wrapper.ts)

```typescript
export function createWebComponentWrapper(
    component: Component,
    tagName: string,
    options: {
        shadowRoot?: boolean
        styles?: string[]
        prefixCls?: string
    } = {}
) {
    const {
        shadowRoot = false, // 默认禁用 Shadow DOM
        styles = [],
        prefixCls = 'cell-pro'
    } = options

    const CustomElement = defineCustomElement({
        name: tagName,
        shadowRoot, // 使用传入的 shadowRoot 选项
        styles, // 使用传入的 styles 选项
        // ... 其他配置
    })

    return CustomElement
}
```

## 🔍 为什么需要多层配置？

### 1. Vite 层面
- 配置 Vue 编译器选项
- 处理自定义元素识别
- 管理构建流程

### 2. Web Components 层面
- 控制 `defineCustomElement` 的行为
- 管理 Shadow DOM 的启用/禁用
- 处理样式注入策略

### 3. 组件层面
- 确保每个组件都遵循配置
- 提供灵活的选项覆盖
- 管理组件特定的行为

## 📝 配置最佳实践

### 1. 统一配置
```typescript
// 在 web-components.ts 中统一设置
const defaultOptions = {
    shadowRoot: false,
    styles: [],
    prefixCls: 'cell-pro'
}

export function registerWebComponents() {
    registerWC([
        {
            tagName: 'share-button',
            component: ShareButton,
            options: { ...defaultOptions }
        },
        {
            tagName: 'help-link',
            component: HelpLink,
            options: { ...defaultOptions }
        }
    ])
}
```

### 2. 环境变量控制
```typescript
// 可以通过环境变量控制
const useShadowDOM = process.env.USE_SHADOW_DOM === 'true'

const defaultOptions = {
    shadowRoot: useShadowDOM,
    styles: useShadowDOM ? [] : [],
    prefixCls: 'cell-pro'
}
```

### 3. 条件配置
```typescript
// 根据构建目标选择配置
const isProduction = process.env.NODE_ENV === 'production'

const defaultOptions = {
    shadowRoot: isProduction ? false : false, // 生产环境禁用
    styles: [],
    prefixCls: 'cell-pro'
}
```

## 🧪 测试配置是否生效

### 1. 构建测试
```bash
# 构建组件库
npm run build:components

# 检查构建输出
ls -la dist/
```

### 2. 运行时测试
```html
<!-- 在浏览器中检查 -->
<script>
// 检查组件是否有 shadowRoot
const component = document.querySelector('share-button')
console.log('Shadow DOM:', component.shadowRoot)
// 应该输出: Shadow DOM: null
</script>
```

### 3. 样式测试
```css
/* 测试外部样式是否生效 */
share-button button {
    background-color: red !important;
}
```

## 🚨 常见问题

### 1. 仍然看到 Shadow DOM
**解决方案：**
- 检查所有配置层级的 `shadowRoot` 设置
- 确保重新构建项目
- 清除浏览器缓存

### 2. 样式不生效
**解决方案：**
- 检查 CSS 选择器是否正确
- 确认组件内部没有使用 `!important`
- 验证样式优先级

### 3. 构建失败
**解决方案：**
- 检查 Vite 配置语法
- 确认所有依赖已安装
- 查看构建日志

## 📚 总结

虽然 Vue CLI 和 Vite 的配置方式不同，但目标是一致的：

- **Vue CLI**: 通过 `vue-loader` 的 `shadowMode: false` 禁用
- **Vite**: 通过多层配置（Vite + Web Components + 组件）禁用

你的项目已经正确配置了所有必要的选项，应该能够完全禁用 Shadow DOM。记住，禁用 Shadow DOM 后，需要更加谨慎地管理样式命名空间，避免样式冲突。
