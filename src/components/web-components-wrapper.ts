/*
 * @Author: huirubai
 * @Date: 2025-08-21 17:28:42
 * @Last Modified: huirubai
 * @Last Modified time: Do not edit
 */
import { defineCustomElement, h } from 'vue'
import type { Component } from 'vue'

// Web Components 包装器，确保完全禁用 Shadow DOM
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
        prefixCls = 'cell-pro'
    } = options

    // 创建自定义元素类
    // class CustomElement extends HTMLElement {
    //     private _component: any = null

    //     constructor() {
    //         super()
    //         // 确保不使用 Shadow DOM
    //         this.attachShadow = () => null as any
    //     }

    //     connectedCallback() {
    //         // 创建组件实例
    //         this._component = h(component, {
    //             ...this.getAttributeNames().reduce((attrs, name) => {
    //                 attrs[name] = this.getAttribute(name)
    //                 return attrs
    //             }, {} as Record<string, any>),
    //             prefixCls: this.getAttribute('prefix-cls') || prefixCls
    //         })

    //         // 直接渲染到 Light DOM
    //         this.appendChild(this._component.el || document.createElement('div'))
    //     }

    //     disconnectedCallback() {
    //         if (this._component) {
    //             this._component = null
    //         }
    //     }

    //     // 重写 shadowRoot 属性，确保返回 null
    //     get shadowRoot() {
    //         return null
    //     }
    // }

    // 定义自定义元素
    // customElements.define(tagName, CustomElement)
    customElements.define(
        tagName,
        defineCustomElement({
            component,
            shadowRoot: false,
            styles: [],
        }),
    );
    // return CustomElement
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

    createWebComponentWrapper(component, tagName, options)
    // return CustomElement
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
