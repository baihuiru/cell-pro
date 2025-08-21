# @yqg/permission 项目分析文档

## 项目概述

**项目名称**: @yqg/permission  
**项目类型**: Vue 3 权限申请弹窗组件库  
**技术栈**: Vue 3 + TypeScript + Vite + Ant Design Vue + Web Components  
**主要功能**: 为业务方提供申请权限的弹窗组件，支持跨框架使用  

## 核心设计理念

### 1. 跨框架兼容性
- 使用 **Web Components** 技术实现真正的跨框架兼容
- 支持 Vue、React、Angular 等任何支持 Web Components 的框架
- 通过 `customElements.define` 注册自定义 HTML 标签

### 2. 样式完全隔离
- 所有组件使用 `yqg-permission` 前缀
- CSS 内联到 JS 中，避免外部样式污染
- 不使用 Shadow DOM，确保样式正常应用

### 3. 依赖完全打包
- 所有依赖（Vue、Ant Design Vue、样式等）打包进最终组件
- 形成完全自包含的 Web Component
- 不依赖外部运行时环境

## 技术架构

### 1. 核心技术栈
```
Vue 3 (Composition API)
├── TypeScript
├── Vite (构建工具)
├── Ant Design Vue 4.x (UI组件库)
├── Web Components (跨框架支持)
└── CSS-in-JS (样式内联)
```

### 2. 架构层次
```
Web Component (yqg-permission)
├── Vue 3 组件树
│   ├── 主组件 (yqg-permission.vue)
│   ├── 申请弹窗 (apply-modal.vue)
│   ├── 权限项 (permission-item.vue)
│   ├── 分类选择器 (category-selector.vue)
│   └── 成功弹窗 (success-modal.vue)
├── Ant Design Vue 组件
├── 业务逻辑 Hooks
├── 样式系统
└── 国际化系统
```

## 关键实现细节

### 1. Web Component 注册
```typescript
// src/yqg-permission/index.ts
import { defineAsyncComponent, defineCustomElement } from 'vue';

const YqgPermissionApply = defineAsyncComponent(() => 
    import('../components/yqg-permission.vue')
);

const defineElement = (tagName: string): void => {
    customElements.define(
        tagName,
        defineCustomElement(YqgPermissionApply, {
            shadowRoot: false,  // 不使用 Shadow DOM
            styles: [],         // 不注入样式
        }),
    );
};
```

### 2. 样式隔离策略
```typescript
// 1. 前缀隔离
<ConfigProvider prefixCls="yqg-permission">
    <!-- 所有 Ant Design 组件使用 yqg-permission 前缀 -->
</ConfigProvider>

// 2. CSS 内联
// vite.config.ts
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
    plugins: [cssInjectedByJsPlugin()],
    build: {
        cssCodeSplit: false, // 不分割 CSS
    }
});

// 3. Message 组件前缀
message.config({ prefixCls: 'yqg-permission-message' });
```

### 3. 组件状态管理
```typescript
// 使用 Vue 3 Composition API
const STATUS_MAP = {
    DEFAULT: 'DEFAULT',   // 可申请
    PENDING: 'PENDING',   // 审批中
    NO: 'NO',             // 不可申请
} as const;

// 状态判断逻辑
export default function useStatus(
    tree: PermissionListType, 
    curApproving: Ref<PermissionType | undefined>
): StatusResult {
    // 递归获取所有叶子节点
    const getLeafNodes = (nodes: PermissionListType): PermissionListType => {
        let leafNodes: PermissionListType = [];
        nodes.forEach((node) => {
            if (node.children && node.children.length > 0) {
                leafNodes = leafNodes.concat(getLeafNodes(node.children));
            } else {
                leafNodes.push(node);
            }
        });
        return leafNodes;
    };
    
    // 状态判断逻辑...
}
```

### 4. 权限树结构
```typescript
declare type PermissionType = {
    name: string;                    // 权限名称
    roleId: number;                  // 角色ID
    desc: string;                    // 权限描述
    businessCode: string;            // 业务代码
    feature: string;                 // 权限特征码
    validTime?: string;              // 有效时间
    operationType: string;           // 操作类型
    securityLevel: LevelType;        // 安全级别
    businessApplyType: StatusType;   // 申请状态
    children?: PermissionListType;   // 子权限
    // ... 其他属性
};
```

## 代码结构分析

### 1. 目录结构
```
src/
├── yqg-permission/          # 主入口
│   └── index.ts            # Web Component 注册
├── components/              # 组件目录
│   ├── yqg-permission.vue  # 主组件
│   ├── apply-modal.vue     # 申请弹窗
│   ├── permission-item.vue # 权限项
│   ├── category-selector.vue # 分类选择器
│   ├── approval-steps.vue  # 审批流程
│   └── success-modal.vue   # 成功弹窗
├── hooks/                   # 业务逻辑 Hooks
│   ├── useStatus.ts        # 状态管理
│   ├── useCategory.ts      # 分类管理
│   ├── useDefaultTime.ts   # 默认时间
│   ├── useDragable.ts      # 拖拽功能
│   ├── useFormat.ts        # 格式化工具
│   └── useAttributesCache.ts # 属性缓存
├── i18n/                    # 国际化
│   ├── index.ts            # 语言配置
│   ├── zh-CH.ts            # 中文
│   ├── en-US.ts            # 英文
│   └── in-ID.ts            # 印尼语
├── axios/                   # HTTP 请求
├── utils/                   # 工具函数
├── style/                   # 样式文件
└── typings/                 # 类型定义
```

### 2. 核心组件分析

#### 主组件 (yqg-permission.vue)
- 支持多种展示类型：default、floatButton、text、custom
- 根据权限状态显示不同内容
- 集成拖拽功能和主题配置

#### 申请弹窗 (apply-modal.vue)
- 树形权限选择器
- 表单验证和提交
- 分类选择器集成
- 审批流程预览

#### 权限项 (permission-item.vue)
- 权限信息展示
- 安全级别标签
- 状态标识
- 时间选择器

### 3. Hooks 设计模式
```typescript
// 状态管理 Hook
export default function useStatus(
    tree: PermissionListType, 
    curApproving: Ref<PermissionType | undefined>
): StatusResult {
    // 返回状态结果对象
    return {
        imageUrl: string;
        status: string;
        tips?: string;
        url?: string;
    };
}

// 拖拽功能 Hook
export default function useDraggable(
    props: { top: any }, 
    showModal: () => void
) {
    // 拖拽状态管理
    const isDragging = ref(false);
    const startX = ref(0);
    const startY = ref(0);
    
    // 拖拽事件处理
    const onMouseDown = (e: MouseEvent) => { /* ... */ };
    const onMouseMove = (e: MouseEvent) => { /* ... */ };
    const onMouseUp = (e: MouseEvent) => { /* ... */ };
    
    return { currentTop, dragElement, onMouseDown, onMouseMove, onMouseUp };
}
```

## 构建配置

### 1. Vite 配置
```typescript
// vite.config.ts
export default defineConfig({
    plugins: [
        vue(),
        cssInjectedByJsPlugin(), // CSS 内联
        alioss({ cdnDir: `cdn/yqg-permission/${pkg.version}/` }),
    ],
    build: {
        lib: {
            entry: 'src/yqg-permission/index.ts',
            name: 'yqg-permission',
            formats: ['es', 'umd'], // 支持 ES 模块和 UMD
        },
        cssCodeSplit: false, // 不分割 CSS
    },
});
```

### 2. 依赖管理
```json
{
    "devDependencies": {
        "ant-design-vue": "4.x",        // UI 组件库
        "vue": "^3.5.12",               // Vue 3
        "typescript": "~5.5.4",         // TypeScript
        "vite": "^5.4.9",               // 构建工具
        "vite-plugin-css-injected-by-js": "^3.5.2" // CSS 内联插件
    }
}
```

## 使用方式

### 1. NPM 包引入
```javascript
// 1. 安装依赖
npm install @yqg/permission

// 2. 注册组件
import yqgPermission from '@yqg/permission';
yqgPermission.start();

// 3. 使用组件
<yqg-permission
    workNumber="05184"
    businessCode="PPDL"
    permissions={['permissionCode1', 'permissionCode2']}
    color="#1677ff"
    locale="zh-CN"
    onSuccess={() => console.log('成功')}
/>
```

### 2. CDN 引入
```html
<script src="https://static-ali.yangqianguan.com/cdn/yqg-permission/1.3.10/yqg-permission.umd.js" />
```

## 关键特性

### 1. 多语言支持
- 支持中文、英文、印尼语等
- 使用 i18n 系统管理文本
- 支持动态语言切换

### 2. 主题定制
- 支持自定义主题色
- 通过 ConfigProvider 配置
- 与 Ant Design 主题系统集成

### 3. 权限状态管理
- 自动判断权限申请状态
- 支持审批流程预览
- 智能权限树解析

### 4. 拖拽功能
- 浮动按钮支持拖拽
- 限制拖拽范围在屏幕内
- 拖拽时隐藏提示信息

## 扩展性设计

### 1. 自定义标签名
```typescript
yqgPermission.start({ tagName: 'my-permission' });
```

### 2. 自定义组件类型
```vue
<yqg-permission type="custom">
    <div>自定义按钮内容</div>
</yqg-permission>
```

### 3. 插槽系统
```vue
<yqg-permission>
    <template #custom>
        <div>自定义内容</div>
    </template>
</yqg-permission>
```

## 最佳实践

### 1. 样式隔离
- 始终使用 `yqg-permission` 前缀
- 避免全局样式污染
- 使用 CSS 深度选择器覆盖内部样式

### 2. 性能优化
- 使用 `defineAsyncComponent` 懒加载组件
- 合理使用 `watch` 和 `computed`
- 避免不必要的重渲染

### 3. 错误处理
- 添加环境检测
- 提供友好的错误提示
- 支持降级处理

## 注意事项

### 1. 浏览器兼容性
- 仅支持支持 `customElements.define` 的浏览器
- 不支持 IE 等老旧浏览器

### 2. 样式冲突
- 确保宿主项目没有全局的 Ant Design 样式覆盖
- 注意 CSS 优先级问题

### 3. 依赖管理
- 当前所有依赖都打包进组件
- 包体积相对较大
- 建议后续优化为外部依赖

## 总结

这个项目是一个设计优秀的跨框架组件库，通过以下技术手段实现了真正的跨框架兼容：

1. **Web Components 技术**：提供框架无关的组件封装
2. **样式前缀隔离**：避免样式冲突
3. **依赖完全打包**：形成自包含的组件
4. **模块化设计**：清晰的代码结构和职责分离

这种架构模式非常适合需要跨框架复用的组件库开发，值得在其他项目中借鉴和应用。
