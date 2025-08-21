import { defineCustomElement } from 'vue'
import ShareButton from './ShareButton.vue'
import HelpLink from './HelpLink.vue'

// 创建支持样式的 Web Components
function createStyledCustomElement(component: any) {
    return defineCustomElement({
        ...component,
        shadowRoot: false,  // 不使用 Shadow DOM
        styles: [],         // 不注入样式
    })
}

// 使用 defineCustomElement 将 Vue 组件转换为 Web Components
const ShareButtonElement = createStyledCustomElement(ShareButton)
const HelpLinkElement = createStyledCustomElement(HelpLink)

// 注册 Web Components
export function registerWebComponents() {
    if (!customElements.get('share-button')) {
        customElements.define('share-button', ShareButtonElement)
    }

    if (!customElements.get('help-link')) {
        customElements.define('help-link', HelpLinkElement)
    }
}

// 导出组件类型
export { ShareButton, HelpLink }
export type { ShareButtonElement, HelpLinkElement }
