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
                shadowRoot: false,
                styles: [],
                prefixCls: 'cell-pro'
            }
        },
        {
            tagName: 'help-link',
            component: HelpLink,
            options: {
                shadowRoot: false,
                styles: [],
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
