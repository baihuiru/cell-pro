import { defineCustomElement, h } from 'vue'
import type { Component } from 'vue'

// Web Components 包装器，确保 Ant Design 组件正确渲染
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
        shadowRoot = false,
        styles = [],
        prefixCls = 'cell-pro'
    } = options

    // 创建自定义元素
    const CustomElement = defineCustomElement({
        name: tagName,
        shadowRoot,
        styles,
        // 使用 render 函数确保组件正确渲染
        render() {
            // 传递所有属性和插槽
            return h(component, {
                ...this.$attrs,
                // 确保样式前缀正确传递
                prefixCls: this.prefixCls || prefixCls
            }, this.$slots)
        },
        // 定义组件属性
        props: {
            prefixCls: {
                type: String,
                default: prefixCls
            }
        }
    })

    return CustomElement
}

// 注册 Web Components 的辅助函数
export function registerWebComponent(
    tagName: string,
    component: Component,
    options?: Parameters<typeof createWebComponentWrapper>[2]
) {
    if (typeof customElements === 'undefined') {
        console.warn('Web Components not supported in this environment')
        return
    }

    if (customElements.get(tagName)) {
        console.warn(`Web Component ${tagName} is already registered`)
        return
    }

    const CustomElement = createWebComponentWrapper(component, tagName, options)
    customElements.define(tagName, CustomElement)
    
    return CustomElement
}

// 批量注册多个 Web Components
export function registerWebComponents(components: Array<{
    tagName: string
    component: Component
    options?: Parameters<typeof createWebComponentWrapper>[2]
}>) {
    components.forEach(({ tagName, component, options }) => {
        registerWebComponent(tagName, component, options)
    })
}
