import ShareButton from './ShareButton.vue'
import HelpLink from './HelpLink.vue'
import { registerWebComponents as registerWC } from './web-components-wrapper'

// 注册 Web Components
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

// 导出组件类型
export { ShareButton, HelpLink }

// 导出 Web Components 类型
export type ShareButtonElement = HTMLElement
export type HelpLinkElement = HTMLElement
