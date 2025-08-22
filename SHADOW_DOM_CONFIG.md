# Shadow DOM 配置说明

## 概述

本文档详细说明了如何在你的 Vue Web Components 项目中完全禁用 Shadow DOM，以及相关的配置和测试方法。

## 什么是 Shadow DOM？

Shadow DOM 是 Web Components 的核心特性，它提供了一个封装的 DOM 子树，与主文档的 DOM 树分离。当你看到 `#shadow-root (open)` 时，说明组件使用了 Shadow DOM。

### Shadow DOM 的特点

**优点：**
- 样式封装，防止 CSS 污染
- DOM 封装，保护组件内部结构
- 符合 Web Components 标准

**缺点：**
- 外部样式难以穿透
- 外部 JavaScript 难以操作内部元素
- 调试相对困难

## 禁用 Shadow DOM 的配置

### 1. Web Components 配置

在 `src/components/web-components.ts` 中：

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
        },
        {
            tagName: 'help-link',
            component: HelpLink,
            options: {
                shadowRoot: false, // 完全禁用 Shadow DOM
                styles: [], // 不使用样式注入
                prefixCls: 'cell-pro'
            }
        }
    ])
}
```

### 2. Web Components 包装器配置

在 `src/components/web-components-wrapper.ts` 中：

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

### 3. Vite 配置

在 `vite.config.components.ts` 中：

```typescript
export default defineConfig({
    plugins: [
        vue(),
        cssInjectedByJsPlugin({
            // 自动收集所有样式
            jsAssetsFilterFunction: (cssAsset) => true,
            // 支持样式去重
            topExecutionPriority: false
        }),
    ],
    build: {
        // ... 其他配置
        cssCodeSplit: false, // 不分割 CSS，确保样式内联
        assetsInlineLimit: 0, // 不内联小文件，让 cssInjectedByJsPlugin 处理
    }
})
```

## 测试 Shadow DOM 是否被禁用

### 1. 使用测试页面

运行 `examples/test-no-shadow-dom.html` 页面，它会自动检测：

- 组件是否正确注册
- Shadow DOM 是否被禁用
- 外部样式是否能影响组件内部

### 2. 手动检查

1. 打开浏览器开发者工具
2. 右键点击组件，选择"检查元素"
3. 在 Elements 面板中查看组件结构
4. **如果看到 `#shadow-root (open)`，说明 Shadow DOM 没有被禁用**
5. **如果没有看到 shadow-root，说明 Shadow DOM 被成功禁用**

### 3. 样式测试

在浏览器控制台中执行以下 CSS 来测试样式是否生效：

```css
/* 测试 ShareButton 组件 */
share-button button {
    background-color: red !important;
    color: white !important;
}

/* 测试 HelpLink 组件 */
help-link a {
    color: purple !important;
    font-weight: bold !important;
}
```

如果 Shadow DOM 被禁用，外部样式应该能影响组件内部。如果使用了 Shadow DOM，外部样式将无法穿透。

## 禁用 Shadow DOM 的影响

### 1. 样式影响

**禁用前（使用 Shadow DOM）：**
- 外部样式无法影响组件内部
- 组件样式不会泄漏到外部
- 需要使用 CSS 变量或 `::part()` 来定制样式

**禁用后（不使用 Shadow DOM）：**
- 外部样式可以直接影响组件内部
- 组件样式可能影响外部元素
- 样式定制更加灵活

### 2. DOM 操作影响

**禁用前（使用 Shadow DOM）：**
- 外部 JavaScript 无法直接选择组件内部元素
- 需要通过 `element.shadowRoot` 来访问内部元素

**禁用后（不使用 Shadow DOM）：**
- 外部 JavaScript 可以直接选择组件内部元素
- 使用 `document.querySelector()` 即可访问

### 3. 调试影响

**禁用前（使用 Shadow DOM）：**
- 调试相对困难
- 需要展开 shadow-root 节点

**禁用后（不使用 Shadow DOM）：**
- 调试更加直观
- 所有元素都在同一个 DOM 树中

## 最佳实践建议

### 1. 样式管理

由于禁用了 Shadow DOM，建议：

- 使用 CSS Modules 或 BEM 命名规范
- 为组件添加唯一的前缀类名
- 避免使用过于通用的 CSS 选择器

### 2. 组件设计

- 暴露必要的 CSS 变量供外部定制
- 使用 `part` 属性标记可定制的元素
- 提供清晰的样式定制文档

### 3. 测试策略

- 定期测试外部样式是否正常生效
- 验证组件在不同环境下的表现
- 确保样式不会意外影响其他组件

## 故障排除

### 1. 仍然看到 Shadow DOM

检查以下配置：

1. 确保 `web-components.ts` 中设置了 `shadowRoot: false`
2. 确保 `web-components-wrapper.ts` 中正确传递了选项
3. 重新构建项目
4. 清除浏览器缓存

### 2. 样式不生效

可能的原因：

1. CSS 选择器不正确
2. 组件内部使用了 `!important`
3. 样式优先级问题
4. 构建配置问题

### 3. 组件渲染异常

检查：

1. Vue 组件是否正确导出
2. Web Components 是否正确注册
3. 浏览器控制台是否有错误信息

## 总结

通过以上配置，你的 Vue Web Components 将完全禁用 Shadow DOM，提供更灵活的样式定制能力。这种配置特别适合：

- 需要高度定制化的组件库
- 与现有 CSS 框架集成的场景
- 需要外部 JavaScript 操作的组件
- 调试友好的开发环境

记住，禁用 Shadow DOM 意味着失去了样式封装的保护，因此需要更加谨慎地管理样式和命名空间。
