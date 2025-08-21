import { createApp, h } from 'vue'
import ShareButton from './ShareButton.vue'
import HelpLink from './HelpLink.vue'

// 定义Web Components的基类
class VueWebComponent extends HTMLElement {
    protected app: any
    protected component: any
    protected props: Record<string, any> = {}

    constructor(component: any) {
        super()
        this.component = component
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }

    disconnectedCallback() {
        if (this.app) {
            this.app.unmount()
        }
    }

    protected render() {
        const container = document.createElement('div')
        this.shadowRoot!.appendChild(container)

        this.app = createApp({
            render: () => h(this.component, this.props)
        })

        this.app.mount(container)
    }

    protected setProps(props: Record<string, any>) {
        this.props = props
        if (this.app) {
            this.render()
        }
    }
}

// 分享按钮Web Component
class ShareButtonElement extends VueWebComponent {
    static get observedAttributes() {
        return ['url', 'title', 'description', 'button-text', 'variant', 'size', 'disabled']
    }

    constructor() {
        super(ShareButton)
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (oldValue !== newValue) {
            const props: Record<string, any> = {}

            // 转换属性名（kebab-case 到 camelCase）
            const propMap: Record<string, string> = {
                'button-text': 'buttonText',
                'url': 'url',
                'title': 'title',
                'description': 'description',
                'variant': 'variant',
                'size': 'size',
                'disabled': 'disabled'
            }

            if (propMap[name]) {
                const propName = propMap[name]
                if (name === 'disabled') {
                    props[propName] = newValue !== null
                } else {
                    props[propName] = newValue
                }

                this.setProps(props)
            }
        }
    }

    connectedCallback() {
        super.connectedCallback()

        // 添加事件监听器
        this.addEventListener('share', (e: any) => {
            this.dispatchEvent(new CustomEvent('share', {
                detail: e.detail,
                bubbles: true,
                composed: true
            }))
        })

        this.addEventListener('copy', (e: any) => {
            this.dispatchEvent(new CustomEvent('copy', {
                detail: e.detail,
                bubbles: true,
                composed: true
            }))
        })

        this.addEventListener('error', (e: any) => {
            this.dispatchEvent(new CustomEvent('error', {
                detail: e.detail,
                bubbles: true,
                composed: true
            }))
        })
    }
}

// 帮助链接Web Component
class HelpLinkElement extends VueWebComponent {
    static get observedAttributes() {
        return ['text', 'href', 'target', 'rel', 'icon-type', 'variant', 'size', 'disabled', 'tooltip', 'tooltip-position']
    }

    constructor() {
        super(HelpLink)
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (oldValue !== newValue) {
            const props: Record<string, any> = {}

            // 转换属性名（kebab-case 到 camelCase）
            const propMap: Record<string, string> = {
                'text': 'text',
                'href': 'href',
                'target': 'target',
                'rel': 'rel',
                'icon-type': 'iconType',
                'variant': 'variant',
                'size': 'size',
                'disabled': 'disabled',
                'tooltip': 'tooltip',
                'tooltip-position': 'tooltipPosition'
            }

            if (propMap[name]) {
                const propName = propMap[name]
                if (name === 'disabled') {
                    props[propName] = newValue !== null
                } else {
                    props[propName] = newValue
                }

                this.setProps(props)
            }
        }
    }

    connectedCallback() {
        super.connectedCallback()

        // 添加事件监听器
        this.addEventListener('click', (e: any) => {
            this.dispatchEvent(new CustomEvent('click', {
                detail: e.detail,
                bubbles: true,
                composed: true
            }))
        })

        this.addEventListener('help', (e: any) => {
            this.dispatchEvent(new CustomEvent('help', {
                detail: e.detail,
                bubbles: true,
                composed: true
            }))
        })
    }
}

// 注册Web Components
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
